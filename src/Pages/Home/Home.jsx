import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Loading from "../../Components/Loading/Loading";
import Card from "../../Components/Card/Card";
import HomeSlider from "../../Components/HomeSlider/HomeSlider";
import CategoriesSlider from "../../Components/CategoriesSlider/CategoriesSlider";
import { cartContext } from "../../Context/Cart.context";
import { Helmet } from "react-helmet";
import { motion, useScroll } from "motion/react";

export default function Home() {
  let [data, setData] = useState(null);
  let { GetItemFromWishList } = useContext(cartContext);
  async function getProducts() {
    let options = {
      url: `https://ecommerce.routemisr.com/api/v1/products`,
      method: "GET",
    };
    let { data } = await axios.request(options);
    setData(data.data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    GetItemFromWishList();
  }, []);

  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        style={{
          scaleX: scrollYProgress,
          height: "6px",
          backgroundColor: "#3498db",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          transformOrigin: "0%",
          zIndex: 1000,
          borderRadius:"8px"
        }}
      />

      <Helmet>
        <title>Home Page</title>
      </Helmet>

      <HomeSlider />
      <div className="cat py-9 pb-14">
        <CategoriesSlider />
      </div>


      <h1 className="text-3xl font-bold pb-8 dark:text-white ">
        RECOMMENDED{" "}
        <span className="text-primary-600">
          For You <i className="fa-solid fa-heart"></i>
        </span>
      </h1>


      {data === null ? (
        <Loading />
      ) : (
        <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 ">
          {data.map((product) => {
            return <Card key={product.id} productInfo={product} />;
          })}
        </div>
      )}
    </>
  );
}

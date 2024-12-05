import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../../Components/Loading/Loading";
import Card from "../../Components/Card/Card";
import { Helmet } from "react-helmet";
import { motion, useScroll } from "motion/react";

export default function Allproducts() {
  let [data, setData] = useState(null);

  async function getALLProducts() {
    let options = {
      url: `https://ecommerce.routemisr.com/api/v1/products`,
      method: "GET",
    };
    let { data } = await axios.request(options);
    setData(data.data);
  }

  useEffect(() => {
    getALLProducts();
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
          borderRadius: "8px",
        }}
      />

      <Helmet>
        <title>All Products Page</title>
      </Helmet>

      <h1 className="text-3xl mt-4 font-bold pb-8  text-primary-500 ">
        All Products{" "}
        <span className="text-primary-600">
          {" "}
          <i className="fa-solid fa-heart"></i>
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

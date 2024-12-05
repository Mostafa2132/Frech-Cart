import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "../../Components/Card/Card";
import Loading from "../../Components/Loading/Loading";
import { motion } from "motion/react";
import { useScroll } from "motion/react";

export default function CategoryDetails() {
  let [category, Setcategory] = useState(null);

  let { id } = useParams();

  async function GetSingleCategory() {
    let options = {
      url: `https://ecommerce.routemisr.com/api/v1/products?category[in]=${id}`,
      method: "GET",
    };
    let { data } = await axios.request(options);
    console.log(data);
    Setcategory(data.data);
  }

  useEffect(() => {
    GetSingleCategory();
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
      {category ? (
        <div className="grid py-8 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {category.length > 0 ? (
            category.map((product) => (
              <Card key={product.id} productInfo={product} />
            ))
          ) : (
            <div className="col-span-full text-center">
              <p className="text-center flex mb-4 items-center  gap-4 justify-center font-semibold text-primary-400 text-3xl ">
                No items are currently available for this category
                <i className="fa-solid fa-face-frown"></i>
              </p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/home" className="btn mt-6">
                  Go to Home Page
                </Link>
              </motion.button>
            </div>
          )}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

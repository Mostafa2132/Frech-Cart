import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";
import { Helmet } from "react-helmet";
import { motion, useScroll } from "motion/react";

export default function Category() {
  let [category, setCategory] = useState(null);

  async function GetAllCategories() {
    let options = {
      url: `https://ecommerce.routemisr.com/api/v1/categories`,
      method: "GET",
    };

    let { data } = await axios.request(options);
    console.log(data);
    setCategory(data.data);
  }

  useEffect(() => {
    GetAllCategories();
  }, []);

  const { scrollYProgress } = useScroll();

  return (
    <>
      <Helmet>
        <title>Category Page</title>
      </Helmet>

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

      <div className="brand gap-4 py-8 grid md:grid-cols-4 lg:grid-cols-6">
        {category ? (
          category.map((item) => {
            return (
              <>
                <Link
                  to={`/categorydetails/${item._id}`}
                  key={item._id}
                  className="brandItem cursor-pointer border border-slate-500 p-4 rounded-lg"
                >
                  <img
                    className="w-full rounded-lg h-60 object-cover"
                    src={item.image}
                    alt=""
                  />
                  <h1 className="text-center font-semibold text-primary-700 ">
                    {item.name}
                  </h1>
                </Link>
              </>
            );
          })
        ) : (
          <>
            <div className="col-span-full">
              <Loading />
            </div>
          </>
        )}
      </div>
    </>
  );
}

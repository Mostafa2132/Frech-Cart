import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../../Components/Loading/Loading";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion, useScroll } from "motion/react";

export default function Brands() {
  let [brands, setBrands] = useState(null);

  async function GetAllBrands() {
    try {
      let options = {
        url: `https://ecommerce.routemisr.com/api/v1/brands`,
        method: `GET`,
      };
      let { data } = await axios.request(options);
      console.log(data);

      setBrands(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    GetAllBrands();
  }, []);

  const { scrollYProgress } = useScroll();

  return (
    <>
      <Helmet>
        <title>Brands Page</title>
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

      {brands ? (
        <div className="brand gap-4 py-8 grid md:grid-cols-4 lg:grid-cols-6">
          {brands.map((brand) => {
            return (
              <>
                <Link
                  to={`/branddetails/${brand._id}`}
                  key={brand._id}
                  className="brandItem cursor-pointer border border-slate-500 p-4 rounded-lg"
                >
                  <img className="w-full rounded-lg" src={brand.image} alt="" />
                  <h1 className="text-center font-semibold text-primary-700 ">
                    {brand.name}
                  </h1>
                </Link>
              </>
            );
          })}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

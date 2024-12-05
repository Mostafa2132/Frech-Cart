import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "../../Components/Card/Card";
import Loading from "../../Components/Loading/Loading";
import { motion } from "motion/react";
import { Helmet } from "react-helmet";

export default function BrandDetails() {
  let [branddetails, setBranddetails] = useState(null);

  let { id } = useParams();

  async function GetSingleBrands() {
    try {
      let options = {
        url: `https://ecommerce.routemisr.com/api/v1/products?brand=${id}`,
        method: `GET`,
      };
      let { data } = await axios.request(options);
      console.log(data);

      setBranddetails(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    GetSingleBrands();
  }, []);

  return (
    <>
      <Helmet>
        <title>Branddetails Page</title>
      </Helmet>
      {branddetails ? (
        <div className="grid py-8 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {branddetails.length > 0 ? (
            branddetails.map((product) => (
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

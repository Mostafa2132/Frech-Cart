import { Link } from "react-router-dom";
import NotfoundImg from "../../assets/imgs/error.svg";

import { motion } from "motion/react";
import { Helmet } from "react-helmet";
export default function Notfound() {
  return (
    <>
      <Helmet>
        <title>Not found Page</title>
      </Helmet>
      <div className="error flex flex-col items-center justify-center h-[70vh]">
        <img src={NotfoundImg} className="h-3/4 object-cover" alt="" />

        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Link to="/home" className="btn mt-4">
            Go to Home Page
          </Link>
        </motion.button>
      </div>
    </>
  );
}

import { useContext, useEffect } from "react";
import { cartContext } from "../../Context/Cart.context";
import Loading from "../../Components/Loading/Loading";
import CartItem from "../../Components/CartItem/CartItem";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Helmet } from "react-helmet";
import { useScroll } from "motion/react";

export default function Cart() {
  let { GetProductFormCart, cartData, RemoveAll } = useContext(cartContext);

  useEffect(() => {
    GetProductFormCart();
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
        <title>Cart Page</title>
      </Helmet>

      {cartData === null ? (
        <Loading />
      ) : (
        <>
          <section className="py-4  ">
            <div className="flex  flex-wrap items-center justify-between ">
              <h1 className="text-2xl font-semibold text-primary-500">
                {" "}
                <i className="fa-brands text-3xl fa-opencart"></i>{" "}
                <span className="mx-3">|</span> Shopping Cart{" "}
              </h1>
              <h3 className="text-xl font-semibold text-black dark:text-white">
                <i className="fa-solid  fa-sack-dollar text-primary-400"></i>{" "}
                Total Price :{" "}
                <span className="mx-3 text-primary-400">
                  {cartData.data.totalCartPrice}
                </span>{" "}
                L.E
              </h3>
            </div>
            <div className=" p-5 mt-5 ">
              {cartData.numOfCartItems === 0 ? (
                <section className=" h-[50vh] flex flex-col items-center justify-center">
                  <h1 className="text-primary-600 font-bold mb-4">
                    {" "}
                    Start adding items to your cart to see them here{" "}
                    <i className="fa-solid fa-cart-arrow-down"></i>
                  </h1>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link to="/home" className="btn mt-6">
                      Go to Home Page
                    </Link>
                  </motion.button>
                </section>
              ) : (
                cartData.data.products.map((product) => {
                  return <CartItem key={product._id} productInfo={product} />;
                })
              )}
            </div>

            <button
              onClick={RemoveAll}
              className="btn block ms-auto me-5  bg-red-600 hover:bg-red-800 text-white"
            >
              Clear Cart <i className="fa-solid ms-2 fa-trash-can"></i>
            </button>
            <div className="text-right  mt-4 me-4 block">
              <Link to="/chekout" className="btn  ms-auto mt-2">
                {" "}
                To Check Out <i className="fa-solid fa-forward"></i>
              </Link>
            </div>
          </section>
        </>
      )}
    </>
  );
}

//

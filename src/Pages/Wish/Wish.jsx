import { useContext, useEffect } from "react";
import { cartContext } from "../../Context/Cart.context";
import Loading from "../../Components/Loading/Loading";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import WishCardItem from "../../Components/wishCardItem/wishCardItem";
import { Helmet } from "react-helmet";

import { useScroll } from "motion/react";

export default function Wish() {
  let { wishCart, GetItemFromWishList } = useContext(cartContext);

  console.log(wishCart);

  useEffect(() => {
    GetItemFromWishList();
  }, []);

  const { scrollYProgress } = useScroll();

  return (
    <>
      <Helmet>
        <title> Wish List Page</title>
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

      {wishCart === null ? (
        <Loading />
      ) : (
        <section>
          <section className="py-4  ">
            <div className="flex  flex-wrap items-center justify-between ">
              <h1 className="text-2xl font-semibold text-primary-500">
                {" "}
                <span className="mx-3">|</span> My Wish List{" "}
                <i className="ms-4 fa-regular fa-heart"></i>{" "}
              </h1>
            </div>
            <div className=" p-5 mt-5 ">
              {wishCart.count === 0 ? (
                <section className=" h-[50vh] flex flex-col items-center justify-center">
                  <h1 className="text-primary-600 font-bold mb-4">
                    {" "}
                    Start adding items to your wish list to bought it letter{" "}
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
                <>
                  <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 ">
                    {wishCart.data.map((product) => {
                      return (
                        <WishCardItem key={product.id} productInfo={product} />
                      );
                    })}
                  </div>
                </>
              )}
            </div>
          </section>
        </section>
      )}
    </>
  );
}

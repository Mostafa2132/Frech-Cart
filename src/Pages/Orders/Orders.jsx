import { jwtDecode } from "jwt-decode";
import { useContext, useEffect, useState } from "react";
import { userContext } from "../../Context/User.context";
import axios from "axios";
import Loading from "../../Components/Loading/Loading";
import { Helmet } from "react-helmet";
import { motion, useScroll } from "motion/react";

export default function Orders() {
  let { token } = useContext(userContext);

  let [orders, setOrders] = useState(null);

  let { id } = jwtDecode(token);

  async function GetOrders() {
    let options = {
      url: `https://ecommerce.routemisr.com/api/v1/orders/user/${id}`,
      method: "GET",
    };
    let { data } = await axios.request(options);
    console.log(data);
    setOrders(data);
  }

  useEffect(() => {
    GetOrders();
  }, []);

  const { scrollYProgress } = useScroll();

  return (
    <>
      <Helmet>
        <title>Ordars Page</title>
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

      <section className="py-5  min-h-[60vh]  space-y-4">
        {orders ? (
          orders.map((order) => {
            return (
              <>
                <div
                  key={order.id}
                  className="order border shadow-md border-slate-600 p-4 rounded-lg"
                >
                  <div className="head flex items-center justify-between">
                    <div className="left">
                      <h1 className="font-semibold text-slate-400">
                        Order id ( {order.paymentMethodType} order)
                      </h1>
                      <span className="text-lg text-primary-400">
                        #{order.id}
                      </span>
                    </div>
                    <div className="right flex flex-wrap gap-4 justify-end">
                      {order.isDelivered ? (
                        <span className="btn bg-green-600 ms-2 hover:bg-green-700">
                          {" "}
                          Delivered
                        </span>
                      ) : (
                        <span className="btn bg-red-600 ms-2 hover:bg-red-700">
                          Not Delivered
                        </span>
                      )}
                      {order.isPaid ? (
                        <span className="btn bg-green-600 ms-2 hover:bg-green-700">
                          {" "}
                          Paid
                        </span>
                      ) : (
                        <span className="btn bg-red-600 ms-2 hover:bg-red-700">
                          Not Paid
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="items grid gap-4 mt-4 md:grid-cols-4 lg:grid-cols-5">
                    {order.cartItems.map((item) => (
                      <div
                        key={item._id}
                        className="border  border-slate-400 rounded-lg p-3 "
                      >
                        <img src={item.product.imageCover} alt="" />
                        <h1 className="text-primary-500 text-2xl my-4 font-semibold line-clamp-1">
                          {item.product.title}
                        </h1>
                        <h2 className="text-lg ">
                          <span className="bg-slate-500 p-2 rounded-full text-white">
                            {item.price}L.E
                          </span>
                        </h2>
                      </div>
                    ))}
                  </div>
                  <div className="ms-auto flex items-center justify-end text-right mt-4 cursor-pointer">
                    <h1 className="text-2xl font-bold dark:text-white">
                      Total cart Price :
                    </h1>
                    <span className="p-2 btn px-5  ms-2 ">
                      {order.totalOrderPrice} L.E
                    </span>
                  </div>
                </div>
              </>
            );
          })
        ) : (
          <Loading />
        )}
      </section>
    </>
  );
}

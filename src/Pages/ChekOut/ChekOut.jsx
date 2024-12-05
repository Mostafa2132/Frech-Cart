import { useContext, useState } from "react";
import { cartContext } from "../../Context/Cart.context";
import { userContext } from "../../Context/User.context";
import axios from "axios";
import { useFormik } from "formik";
import toast from "react-hot-toast";

import img from "../../assets/imgs/undraw_order_ride_re_372k.svg";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion, useScroll } from "motion/react";

export default function ChekOut() {
  let { cartData } = useContext(cartContext);
  let { token } = useContext(userContext);

  let navigate = useNavigate();

  let [payment, setPayment] = useState(null);

  async function CashOrder(values) {
    let toastID = toast.loading(" Preparing The  Order", {
      style: {
        background: "#155E75",
        color: "#fff",
      },
    });
    try {
      let options = {
        url: `https://ecommerce.routemisr.com/api/v1/orders/${cartData.cartId}`,
        method: `POST`,
        headers: {
          token,
        },
        data: values,
      };
      let { data } = await axios.request(options);
      console.log(data);
      if (data.status === "success") {
        toast.success("Order created successfully", {
          position: "top-right",
          style: {
            background: "green",
            color: "#fff",
          },
        });
        setTimeout(() => {
          navigate("/allorders");
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    } finally {
      toast.dismiss(toastID);
    }
  }

  async function OnlineOrder(values) {
    let toastID = toast.loading(" Preparing The  Order", {
      style: {
        background: "#155E75",
        color: "#fff",
      },
    });
    try {
      let options = {
        url: `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartData.cartId}?url=${location.origin}`,
        method: `POST`,
        headers: {
          token,
        },
        data: values,
      };
      let { data } = await axios.request(options);
      console.log(data);
      if (data.status === "success") {
        toast.success("Going to Stripe to paiy", {
          position: "top-right",
          style: {
            background: "green",
            color: "#fff",
          },
        });

        setTimeout(() => {
          location.href = data.session.url;
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    } finally {
      toast.dismiss(toastID);
    }
  }
  let formik = useFormik({
    initialValues: {
      shippingAddress: {
        details: "",
        phone: "",
        city: "",
      },
    },
    onSubmit: (values) => {
      if (payment === "cash") CashOrder(values);
      else OnlineOrder(values);
    },
  });

  const { scrollYProgress } = useScroll();

  return (
    <>
      <Helmet>
        <title>Check out Page</title>
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

      <section className=" my-5  grid md:grid-cols-12  rounded-lg bg-gray-200 dark:bg-black/30 p-5 py-8">
        <div className="p1 col-span-6">
          <h1 className="text-3xl font-semibold text-black dark:text-white mb-4">
            Enter Your Information{" "}
            <i className="fa-solid text-primary-400 fa-truck"></i>
          </h1>
          <form onSubmit={formik.handleSubmit} className="space-y-5">
            <div className=" city space-y-3">
              <input
                name="shippingAddress.city"
                onChange={formik.handleChange}
                value={formik.values.shippingAddress.city}
                type="text"
                placeholder="Enter Your City"
                className="py-3 px-4 border bg-gray-100 block w-full border-gray-200 rounded-lg text-sm  dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              />
            </div>

            <div className=" phone">
              <input
                type="tel"
                name="shippingAddress.phone"
                className=" py-3 px-4  block w-full rounded-lg bg-gray-100 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="Enter Phone Number"
                value={formik.values.shippingAddress.phone}
                onChange={formik.handleChange}
              />
            </div>

            <div className=" space-y-3 details ">
              <textarea
                name="shippingAddress.details"
                onChange={formik.handleChange}
                value={formik.values.shippingAddress.details}
                className="py-3 px-4 block w-full border bg-gray-100 border-slate-200 rounded-lg text-sm  dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                rows="3"
                placeholder="Enter Your Details"
              ></textarea>
            </div>

            <button
              onClick={() => {
                setPayment("cash");
              }}
              type="submit"
              className="btn me-2 bg-green-500 hover:bg-green-600"
            >
              Cash Order
            </button>
            <button
              onClick={() => {
                setPayment("online");
              }}
              type="submit"
              className="btn  "
            >
              Online Order
            </button>
          </form>
        </div>
        <div className="p2 col-span-6">
          <img className="w-[90%] mx-auto " src={img} alt="" />
        </div>
      </section>
    </>
  );
}

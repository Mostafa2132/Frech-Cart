import { useFormik } from "formik";
import loginImg from "../../assets/imgs/loginImg.svg";
import * as Yup from "yup";
import axios from "axios";
import {  useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../../Context/User.context";
import { Helmet } from "react-helmet";

export default function Login() {

  let {setToken} = useContext(userContext)
  let [isAreadyExists, setAreadyExists] = useState(null);

  let Navigate = useNavigate();

  let validation = Yup.object({
    email: Yup.string()
      .required("Email input required")
      .email("Email not valid"),
    password: Yup.string()
      .required("Password input required")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        "Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"
      ),
  });

  async function sendRegesterData(values) {
    let toastId = toast.loading("Waiting ......", {
      style: {
        background: "#164e63",
        color: "#fff",
      },
    });
    try {
      let options = {
        url: `https://ecommerce.routemisr.com/api/v1/auth/signin`,
        method: "POST",
        data: values,
      };
      let { data } = await axios.request(options);
      console.log(data);
      if (data.message === "success") {
        setToken(data.token)
       
        localStorage.setItem("token", data.token)
        localStorage.setItem("userName", data.user.name)
        localStorage.setItem("userEmail", data.user.email)
     
       
      
        toast.success("Loged in  successfully", {
          position: "top-right",
          style: {
            background: "#099c09",
            color: "#fff",
          },
        });
        setTimeout(() => {
          Navigate("/home");
        }, 2200);
      }
    } catch (error) {
      setAreadyExists(error.response.data.message);
      toast.error(error.response.data.message);
    } finally {
      toast.dismiss(toastId);
    }
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validation,
    onSubmit: sendRegesterData,
  });

  return (
    <>

<Helmet>
        
        <title>Login Page</title>
       
      </Helmet>


      <div className="parent sm:ms-12 grid md:grid-cols-2 ">
        <form className="pt-8" onSubmit={formik.handleSubmit}>
          <h1 className="text-3xl text-primary-500 font-semibold mb-6 ">
            <i className="fa-solid fa-circle-user"></i> Log in Now :
          </h1>
          <div className="max-w-sm space-y-3">
            <div className="relative">
              <input
                type="email"
                name="email"
                className="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="Enter Your Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.email && formik.touched.email ? (
                <p className="text-red-600 mt-1 font-semibold">
                  *{formik.errors.email}
                </p>
              ) : (
                ""
              )}

              <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                <svg
                  className="shrink-0 size-4 text-gray-500 dark:text-neutral-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
            </div>

            <div className="relative">
              <input
                type="password"
                name="password"
                className="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="Enter password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.password && formik.touched.password ? (
                <p className="text-red-600 mt-1 font-semibold">
                  *{formik.errors.password}
                </p>
              ) : (
                ""
              )}
              {isAreadyExists ? (
                <p className="text-red-600 mt-1 font-semibold">
                  *{isAreadyExists}
                </p>
              ) : (
                " "
              )}
              <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                <svg
                  className="shrink-0 size-4 text-gray-500 dark:text-neutral-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z"></path>
                  <circle cx="16.5" cy="7.5" r=".5"></circle>
                </svg>
              </div>
            </div>
          </div>

          {/* forget pASS */}
          <div className="forget mt-2">
            <Link to="/forget" 
             className=" text-primary-300 hover:underline transition-all duration-500">
              Do You Forget Your Password ?
            </Link>
          </div>
                
          <button className="btn  px-12 mt-4 tracking-[2px]" type="submit">
            Log in
          </button>
        </form>
        <div className="img mt-8  ">
          <img
            className="md:w[10%]  md:object-contain sm:object-contain sm:w[30%] "
            src={loginImg}
            alt=""
          />
        </div>
      </div>
    </>
  );
}

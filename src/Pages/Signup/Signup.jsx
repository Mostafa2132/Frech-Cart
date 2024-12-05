import { useFormik } from "formik";
import signUpImg from "../../assets/imgs/sign.svg";
import * as Yup from "yup";
import axios from "axios";
import {  useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
export default function Signup() {
  let [isAreadyExists, setAreadyExists] = useState(null);

  let Navigate =   useNavigate()

  let validation = Yup.object({
    name: Yup.string()
      .required("Name input required")
      .min(3, "name must be at least 3 characters")
      .max(17, "name must be at least 17 characters"),
    email: Yup.string()
      .required("Email input required")
      .email("Email not valid"),
    password: Yup.string()
      .required("Password input required")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        "Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"
      ),
    rePassword: Yup.string()
      .required("Repassword input required")
      .oneOf([Yup.ref("password")], "Repassword must be the same"),
    phone: Yup.string()
      .required("Phone number input required")
      .matches(
        /^(010|011|012|015)[0-9]{8}$/,
        "Enter a valid Egyptian phone number"
      ),
  });

  async function sendRegesterData(values) {

    let toastId =  toast.loading("Waiting ......",{
      style: {
            
        background:"#164e63",
       color: '#fff',
     },
    })

  
    try {
      let options = {
        url: `https://ecommerce.routemisr.com/api/v1/auth/signup`,
        method: "POST",
        data: values,
      };
      let { data } = await axios.request(options);
      if(data.message === "success"){ 
        toast.success("Account created successfully",{
           position: "top-right",
           style: {
             background:"#099c09",
            color: '#fff',
          },
        });
        setTimeout(()=>{
          Navigate("/login")
        },2200)
      }
    } catch (error) {
      setAreadyExists(error.response.data.message);
      toast.error(error.response.data.message)
    
      
    } finally {
      toast.dismiss(toastId)
    }
  }



  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    validationSchema: validation,
    onSubmit: sendRegesterData,
  });

  return (
    <>


<Helmet>
        
        <title> Sign Up Page</title>
       
      </Helmet>
    
       <div className="parent  grid md:grid-cols-2 ">
        <form className="pt-8" onSubmit={formik.handleSubmit}>
          <h1 className="text-3xl text-primary-500 font-semibold mb-6 ">
            {" "}
            <i className="fa-solid fa-circle-user"></i> Regsiter Now :
          </h1>
          <div className="max-w-sm space-y-3">
            <div className="relative">
              <input
                name="name"
                type="text"
                className="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="Enter name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.name && formik.touched.name ? (
                <p className="text-red-600 mt-1 font-semibold">
                  *{formik.errors.name}
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
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
            </div>

            <div className="relative email">
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

            <div className="relative">
              <input
                type="password"
                name="rePassword"
                className="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="Enter Your Repassword"
                value={formik.values.rePassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.rePassword && formik.touched.rePassword ? (
                <p className="text-red-600 mt-1 font-semibold">
                  *{formik.errors.rePassword}
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
                  <rect
                    x="3"
                    y="11"
                    width="18"
                    height="11"
                    rx="2"
                    ry="2"
                  ></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
            </div>

            <div className="relative">
              <input
                type="tel"
                name="phone"
                className="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="Enter Phone Number"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.phone && formik.touched.phone ? (
                <p className="text-red-600 mt-1 font-semibold">
                  *{formik.errors.phone}
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
                  <path d="M22 16.92a16 16 0 0 1-9.14-9.14m0-3.78V5a2 2 0 0 1 2-2h3"></path>
                  <path d="M22 22l-5.5-5.5"></path>
                  <path d="M6.29 17.29a6 6 0 0 0 8.48 0l2.83-2.83a1.06 1.06 0 0 0 0-1.5l-1.54-1.54a1.06 1.06 0 0 0-1.5 0l-1.42 1.42a1.06 1.06 0 0 1-1.5 0L8.47 9.88a1.06 1.06 0 0 1 0-1.5l1.42-1.42a1.06 1.06 0 0 0 0-1.5L8.37 3.21a1.06 1.06 0 0 0-1.5 0L4.04 6.04a6 6 0 0 0 0 8.48Z"></path>
                </svg>
              </div>
            </div>
          </div>

          <button className="btn px-12 mt-4 tracking-[2px]" type="submit">
            Sign Up
          </button>
        </form>
        <div className="img mt-12  ">
          <img
            className="md:w[10%]  md:object-contain sm:object-contain sm:w[30%] "
            src={signUpImg}
            alt=""
          />
        </div>
      </div>
     
    </>
  );
}

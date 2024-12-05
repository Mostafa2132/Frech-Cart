import { useFormik } from "formik";
import { useContext } from "react";

import * as Yup from "yup";
import { userContext } from "../../Context/User.context";

import axios from "axios";
import toast from "react-hot-toast";

export default function ForgetPass() {
//   let [isAreadyExists, setAreadyExists] = useState(null);

let {token} = useContext(userContext)
//   let Navigate =   useNavigate()

  let validation = Yup.object({

    currentPassword: Yup.string()
      .required("Current Password input required")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        "Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"
      ),
    password: Yup.string() 
      .required("Password input required")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        "Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"
      ),
    rePassword: Yup.string()
      .required("Repassword input required")
      .oneOf([Yup.ref("password")], "Repassword must be the same"),

  });

 

async function changePassword(values){
    toast.loading("wating for ......")
try {
    let options ={
        url:`https://ecommerce.routemisr.com/api/v1/users/changeMyPassword`,
        method: "PUT",
        headers:{
            token
        },
        data:values

    }
    let {data} = await axios.request(options)
    console.log(data);
} catch (error) {
    console.log(error);
    
}
    
}

  const formik = useFormik({
    initialValues: {
      currentPassword: "",
      password: "",
      rePassword: "",
     
    },
    validationSchema: validation,
    onSubmit:changePassword ,
  });

  return (
    <>
      <div className="parent grid md:grid-cols-2 ">
        <form onSubmit={formik.handleSubmit}>
          <h1 className="text-3xl text-primary-500 font-semibold mb-6 ">
            {" "}
            <i className="fa-solid fa-circle-user"></i> change it  Now :
          </h1>
          <div className="max-w-sm space-y-3">

            <div className="relative">
              <input
                type="password"
                name="currentPassword"
                className="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="Enter your current Password "
                value={formik.values.currentPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.currentPassword && formik.touched.currentPassword ? (
                <p className="text-red-600 mt-1 font-semibold">
                  *{formik.errors.currentPassword}
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
                name="password"
                className="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="Enter Your password"
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

       
          </div>

          <button className="btn mt-4" type="submit">
          Submit
          </button>
        </form>
        {/* <div className="img  ">
          <img
            className="md:w[10%]  md:object-contain sm:object-contain sm:w[30%] "
            src={signUpImg}
            alt=""
          />
        </div> */}
      </div>
    </>
  );
}
import { createContext, useContext } from "react";
import { userContext } from "./User.context";
import axios from "axios";

export let authContext = createContext(null);

// eslint-disable-next-line react/prop-types
export default function AutherProvider({ childern }) {

   let {token} = useContext(userContext)

      async  function ChangePassword({currentPassword,password,rePassword}){
            let options = {
                url:`https://ecommerce.routemisr.com/api/v1/users/changeMyPassword`,
                method: 'PUT',
                headers:{
                    token
                },
                data:{
                     currentPassword,
                     password,
                     rePassword,
                },
            }

            let {data} = await axios.request(options)
            console.log(data);
            
        }


        // async function ForgetPass({ email }) {
        //     let options = {
        //       url: `https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,
        //       method: "POST",
        //       data: {
        //         email,
        //       },
        //     };
        //     let { data } = await axios.request(options);
        //     console.log(data);
        //     if (data.statusMsg === "success") {
        //       toast.success(data.message);
        //     }
        //   }
          



  return (
    <>
      <authContext.Provider value={{ChangePassword}}>
             {childern}
        </authContext.Provider>
    </>
  );
}

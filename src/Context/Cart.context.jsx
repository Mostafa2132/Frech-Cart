import { createContext, useContext, useState } from "react";
import { userContext } from "./User.context";
import axios from "axios";
import toast from "react-hot-toast";

export const cartContext = createContext(null);

// eslint-disable-next-line react/prop-types
export default function CartProvider({ children }) {
  let { token } = useContext(userContext);
  let [cartData, setCartData] = useState(null);
  let [wishCart,setWishCart] = useState(null);

  async function AddProductToCart({ productId }) {
    let toastId = toast.loading("waiting ......", {
      position: "top-center",
      style: {
        background: "#164e63",
        color: "#fff",
      },
    });
    try {
      const options = {
        url: `https://ecommerce.routemisr.com/api/v1/cart`,
        method: "POST",
        headers: {
          token,
        },
        data: {
          productId,
        },
      };
      let { data } = await axios.request(options);
      console.log(data);
      if (data.status === "success") {
        toast.success(data.message, {
          position: "top-right",
          style: {
            background: "#099c09",
            color: "#fff",
          },
        });
        GetProductFormCart();
      }
    } catch (error) {
      console.log(error);
    } finally {
      toast.dismiss(toastId);
    }
  }

  async function GetProductFormCart() {
    try {
      let options = {
        url: `https://ecommerce.routemisr.com/api/v1/cart`,
        method: "GET",
        headers: {
          token,
        },
      };
      let { data } = await axios.request(options);
      console.log(data);
      if (data.status === "success") {
        setCartData(data);
        // AddProductToCart();
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function RemoveItemFromCart({ id }) {
    let toastId = toast.loading("Removing ....", {
      style: {
        border: "1px solid #713200",
        padding: "10px",
        color: "#000",
        backgroundColor: "#ff0000",
      },
    });
    try {
      let options = {
        url: `https://ecommerce.routemisr.com/api/v1/cart/${id}`,
        method: "DELETE",
        headers: {
          token,
        },
      };
      let { data } = await axios.request(options);
      console.log(data);
      setCartData(data);
      if (data.status === "success") {
        toast.success("Product Deleted successfully", {
          position: "top-right",
          style: {
            background: "#099c09",
            color: "#fff",
          },
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      toast.dismiss(toastId);
    }
  }

  async function RemoveAll() {
    let toastId = toast.loading("ClearIng ....", {
      style: {
        border: "1px solid #713200",
        padding: "10px",
        color: "#000",
        backgroundColor: "red",
      },
    });
    try {
      let options = {
        url: `https://ecommerce.routemisr.com/api/v1/cart`,
        method: "DELETE",
        headers: {
          token,
        },
      };
      let { data } = await axios.request(options);
      console.log(data);
      if (data.message === "success") {
        setCartData(null);
        GetProductFormCart();
        toast.success("Product Deleted successfully", {
          position: "top-right",
          style: {
            background: "#099c09",
            color: "#fff",
          },
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      toast.dismiss(toastId);
    }
  }

  async function UpdataCart({ proId, count }) {
    try {
      let options = {
        url: `https://ecommerce.routemisr.com/api/v1/cart/${proId}`,
        method: "PUT",
        headers: {
          token,
        },
        data: {
          count,
        },
      };
      let { data } = await axios.request(options);
      console.log(data);
      if (data.status === "success") {
        setCartData(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  // wish list

  async function AddItemToWishList({ productId }) {
    let toastId = toast.loading(" Adding to Wish List ....", {
      style: {
        border: "1px solid #713200",
        padding: "10px",
        color: "#fff",
        backgroundColor: "#164e63",
      },
    });
    try {
      let options = {
        url: `https://ecommerce.routemisr.com/api/v1/wishlist`,
        method: "POST",
        headers: {
          token,
        },
        data: {
          productId,
        },
      };
      let { data } = await axios.request(options);
      console.log(data);
      if(data.status === "success"){
        GetItemFromWishList()
        toast.success(data.message, {
          style: {
            border: "1px solid #713200",
            padding: "10px",
            color: "#fff",
            backgroundColor: "#088a08",
          },
          position:"top-right"
      })
      
    } 
  }catch (error) {
      console.log(error);
    }finally{
      toast.dismiss(toastId)
    }
  }
  async function GetItemFromWishList(){
    try {
      let options = {
        url:`https://ecommerce.routemisr.com/api/v1/wishlist`,
        method: "GET",
        headers:{
          token
        }
      }
      let {data} = await axios.request(options)
      console.log(data);
      if(data.status === "success"){
        setWishCart(data)
      } 
    } catch (error) {
      console.log(error); 
    }
  }
  async function RemoveItemFromWishList({itemId}){
    let toastId = toast.loading("Removeing item...",{
      style: {
        border: "1px solid #713200",
        padding: "10px",
        color: "#fff",
        backgroundColor: "red",
      },
    });

    try {
      let options = {
        url:`https://ecommerce.routemisr.com/api/v1/wishlist/${itemId}`,
        method: "DELETE",
        headers:{
          token
        }
      }
      let {data} = await axios.request(options)
      console.log(data);
      if(data.status === "success"){
        toast.success(data.message,{
          position:"top-right",
          style:{
            background:"#088a08",
            color:"#fff",
          }
        });
        
        GetItemFromWishList()
      }
    } catch (error) {
      console.log(error);
    }finally{
      toast.dismiss(toastId)
    }

  }

  

  return (
    <>
      <cartContext.Provider
        value={{
          AddProductToCart,
          GetProductFormCart,
          cartData,
          RemoveItemFromCart,
          RemoveAll,
          UpdataCart,
          AddItemToWishList,
          GetItemFromWishList,
          wishCart,
          RemoveItemFromWishList
        }}
      >
        {children}
      </cartContext.Provider>
    </>
  );
}

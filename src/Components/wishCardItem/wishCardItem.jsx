/* eslint-disable react/prop-types */
import { useContext } from "react";
import { cartContext } from "../../Context/Cart.context";

export default function WishCardItem({productInfo}) {
    let {  AddProductToCart ,RemoveItemFromWishList } = useContext(cartContext);
    let {id,title,category,description,price,ratingsAverage,imageCover} = productInfo
    console.log(productInfo);
    
  return (
    <>
    
      <div className="flex group flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
        <div className="img relative">
          <img
            className="w-full rounded-t-xl"
            src={imageCover}
            alt="Card Image"
          />
          <div
          
        
          className="layer opacity-0 group-hover:opacity-100 transition-all duration-700 absolute flex items-center justify-center gap-4 inset-0 bg-slate-400 rounded-t-xl bg-opacity-60">
   


            <div 
            onClick={()=>{
            AddProductToCart({productId:id})
            }} className="icon transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-[.5s]">
              <i
                        onClick={()=>{
                          RemoveItemFromWishList({itemId:id})
                        }}
                className="fa-solid bg-primary-300 p-2 hover:scale-125 hover:rotate-12 transition-all duration-300 text-white cursor-pointer rounded-full fa-cart-plus"></i>
            </div>



            <div className="icon transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-[.6s]">
              <i className="fa-solid bg-primary-300 p-2 hover:scale-125 hover:rotate-12 transition-all duration-300 text-white cursor-pointer rounded-full fa-eye"></i>
            </div>
          </div>
        </div>

        <div className="p-4 md:p-5">
          <h3 className="text-lg font-bold line-clamp-1 text-gray-800 dark:text-white">
            {title}
          </h3>
          <h4 className="text-lg mt-2 font-bold text-primary-500">
            {category.name}
          </h4>
          <p className="my-3 text-gray-500 line-clamp-2 dark:text-neutral-400">
            {description}
          </p>
          <div className="card-footer flex items-center justify-between">
            <div className="price text-lg font-semibold text-gray-800 dark:text-white">
              {price} L.E
            </div>
            <div className="rate text-lg font-semibold text-gray-800 dark:text-white">
              <i className="fa-solid fa-star mr-1 text-yellow-500"></i>{" "}
              {ratingsAverage}
            </div>
          </div>
          <button
          onClick={()=>{
            RemoveItemFromWishList({itemId:id})
          }}
           className="btn bg-transparent hover:bg-red-600 border-2 border-red-600 text-black dark:text-white font-semibold transition-all duration-700  w-full mt-4">Remove <i className="fa-solid fa-trash"></i></button>
        </div>
       
      </div>
    </>
  );
}

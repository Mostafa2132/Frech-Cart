/* eslint-disable react/prop-types */

import { useContext } from "react";
import { cartContext } from "../../Context/Cart.context";

export default function CartItem({ productInfo }) {
  let { price, product, count } = productInfo;
  let { title, imageCover, category, id } = product;
  let { RemoveItemFromCart, UpdataCart ,AddItemToWishList } = useContext(cartContext);

  return (
    <>
      <div className="h-auto my-4 border rounded-xl shadow-sm flex flex-wrap sm:flex-nowrap dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
        {/* Image Section */}
        <div className="flex items-center justify-center w-full sm:w-[250px] rounded-t-xl overflow-hidden sm:rounded-s-xl sm:rounded-tr-none">
          <img
            className="h-[140px] w-[140px] object-cover"
            src={imageCover}
            alt="Card Image"
          />
        </div>
        {/* Content Section */}
        <div className="flex flex-col gap-3 p-4 sm:p-2 grow rounded-r-md">
          <h3 className="text-lg text-black font-semibold dark:text-white max-w-[540px]">
            {title}
          </h3>
          <p className="text-primary-300 ">{category.name}</p>
          <p className="text-black dark:text-white font-semibold">
            {" "}
            Price : {price} L.E
          </p>
        </div>
        {/* Actions Section */}
        <div className="flex flex-col items-center sm:items-end sm:justify-center gap-3 p-4 sm:p-2">
          <div className="flex items-center gap-5 dark:text-white">
            <i
              onClick={() => {
                return UpdataCart({ proId: id, count: count - 1 });
              }}
              className="fa-solid fa-minus border-primary-400 cursor-pointer border p-2"
            ></i>
            <span>{count}</span>
            <i
              onClick={() => {
                return UpdataCart({ proId: id, count: count + 1 });
              }}
              className="fa-solid fa-plus border-primary-400 cursor-pointer border p-2"
            ></i>
          </div>
          <div className="flex  gap-8">
            <button
              onClick={() => {
                AddItemToWishList({productId:id})
              }}
              className="btn bg-transparent border text-black dark:text-white border-primary-400  px-5 py-1 flex items-center gap-2"
            >
              <i className="fa-regular fa-heart"></i>Add Item to wish list
            </button>
            <button
              onClick={() => {
                RemoveItemFromCart({ id: id });
              }}
              className="btn bg-transparent text-black dark:text-white  border border-red-600 hover:bg-red-800 hover:text-white px-5 py-1 flex items-center gap-2"
            >
              <i className="fa-solid fa-trash-can"></i> Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Loading from "../../Components/Loading/Loading";
import { useParams } from "react-router-dom";
import { cartContext } from "../../Context/Cart.context";
import ReactImageGallery from "react-image-gallery";

import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../../Components/Card/Card";
import { Helmet } from "react-helmet";

export default function ProductDetails() {
  let [ProductDetails, SetProductDetails] = useState(null);
  let [Related, SetRelated] = useState(null);
  let { AddProductToCart } = useContext(cartContext);

  let { id } = useParams();

  async function GetProductDetails() {
    let options = {
      url: `https://ecommerce.routemisr.com/api/v1/products/${id}`,
      method: "GET",
    };
    let { data } = await axios.request(options);
    console.log(data);
    SetProductDetails(data.data);
  }

  async function GetRelatedProduct() {
    let options = {
      url: `https://ecommerce.routemisr.com/api/v1/products?category[in]=${ProductDetails.category._id}`,
      method: "GET",
    };
    let { data } = await axios.request(options);
    console.log(data);
    SetRelated(data.data);
  }

  useEffect(() => {
    GetProductDetails();
  }, [id]);
  useEffect(() => {
    if (ProductDetails === null) return;
    GetRelatedProduct();
  }, [ProductDetails]);

  return (
    <>

<Helmet>
        
        <title> ProductDetails Page</title>
       
      </Helmet>

      {ProductDetails && Related ? (
        <>
          <div className="bg-white  border space-y-5 my-5 rounded-xl shadow-sm sm:flex dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
            <div className="shrink-0  relative w-full rounded-t-xl overflow-hidden  sm:rounded-s-xl sm:max-w-60 md:rounded-se-none md:max-w-xs">
              <ReactImageGallery
                showThumbnails={false}
                showNav={false}
                showBullets={true}
                autoPlay={true}
                showFullscreenButton={false}
                showPlayButton={false}
                items={ProductDetails.images.map((img) => {
                  return { original: img, thumbnail: img };
                })}
              />{" "}
            </div>
            <div className="flex flex-wrap  grow  relative  ">
              <div className="p-4 flex flex-col h-full mt-20 space-y-5 sm:p-7">
                <h3 className=" text-3xl font-medium  text-gray-800 dark:text-white">
                  {ProductDetails.title}
                </h3>
                <p className="mt-1  text-primary-400 font-medium text-lg ">
                  {ProductDetails.category.name}
                </p>
                <p className="text-gray-400">{ProductDetails.description}</p>
                <div className="rate flex items-center justify-between">
                  <h4 className="dark:text-white">
                    <span className="text-primary-600 me-2">
                      {ProductDetails.price}
                    </span>{" "}
                    L.E
                  </h4>
                  <h4 >
                    {" "}
                    <i className="fa-solid  text-yellow-400 me-1 fa-star"></i>{" "}
                    <span className="dark:text-white">{ProductDetails.ratingsAverage}</span>
                  </h4>
                </div>
                <button
                  onClick={() => {
                    AddProductToCart({ productId: id });
                  }}
                  className="btn w-[95%] absolute bottom-5 mx-auto "
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>

          <section>
            <h1 className="py-4 text-3xl text-primary-500  font-semibold  ">
              Related Product <i className="fa-solid fa-heart"></i>{" "}
            </h1>
            <Swiper 
            slidesPerView={6}
             spaceBetween={20}
              loop={true}     
                     breakpoints={{
            0:{slidesPerView: 2},
            640: { slidesPerView: 2 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}>
              {Related.map((product) => {
                return (
                  <>
                    <SwiperSlide>
                      <Card key={product.id} productInfo={product} />
                    </SwiperSlide>
                  </>
                );
              })}
            </Swiper>
          </section>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}

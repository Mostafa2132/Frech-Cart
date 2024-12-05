import { useEffect, useState } from "react"
import Loading from "../Loading/Loading"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import axios from "axios";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

export default function CategoriesSlider() {

    let [categories , setCategories] = useState(null)
  async function getCategories() {
        let options = {
            url:'https://ecommerce.routemisr.com/api/v1/categories',
            method:'GET',
        }
        let {data} = await axios.request(options)
        setCategories(data.data)
    }
    useEffect(()=>{
        getCategories()
    },[])

  return (
    <>
    <h1 className="py-4 font-bold  text-primary-500"> <i className="fa-solid fa-basket-shopping"></i> Choose Your Favorite Category : </h1>
      {categories === null ? (
        <Loading />
      ) : (
        <Swiper
        modules={[Autoplay]}
        speed={1000}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
          slidesPerView={6}
           spaceBetween={20} 
           loop={true}
           breakpoints={{
            0:{slidesPerView: 2},
            640: { slidesPerView: 2 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
          >
            
          {categories.map((category) => (
            <SwiperSlide key={category._id}>
              <div className="h-72 object-contain">
              <Link to={`/categorydetails/${category._id}`} className="">
                <img src={category.image} className="h-full" />
              </Link>
              </div>
       
              <h3 className="lg:text-lg text-center md:font-semibold sm:text-wrap sm:text-[12px] sm:font-thin text-primary-500">{category.name}</h3>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
}

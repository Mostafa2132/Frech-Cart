import img1 from "../../assets/imgs/slider-image-3.jpeg";
import img2 from "../../assets/imgs/slider-image-2.jpeg";
import img3 from "../../assets/imgs/slider-image-1.jpeg";
import img4 from "../../assets/imgs/slider-2.jpeg";
import img5 from "../../assets/imgs/blog-img-2.jpeg";


// Import Swiper React components
// eslint-disable-next-line no-unused-vars
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay, EffectFade } from "swiper/modules";

export default function HomeSlider() {
  return (
    <>
  <div className="slider grid lg:grid-cols-12 lg:grid-rows-1 grid-cols-1 grid-rows-2 h-screen py-9">
  <div className="slide1 h-full lg:col-span-8 lg:row-span-1">
    <Swiper
      className="h-full"
      modules={[Autoplay, EffectFade]}
      slidesPerView={1}
      loop={true}
      speed={1000}
      effect="flip"
      autoplay={{ delay: 2000, disableOnInteraction: false }}
    >
      <SwiperSlide className="h-full relative">
        <img className="w-full h-full object-cover rounded-l-lg " src={img3} alt="" />
        <div className="text absolute top-1/4 left-5">
          <h1 className="font-bold">Start your shopping journey today! 🛒</h1>
        </div>
      </SwiperSlide>
  

 

      <SwiperSlide className="h-full relative">
        <img className="w-full h-full object-cover rounded-l-lg " src={img4} alt="" />
        <div className="text absolute top-1/4 left-5">
          <h1 className="font-bold">Start your shopping journey today! 🛒</h1>
        </div>
      </SwiperSlide>
      <SwiperSlide className="h-full relative">
        <img className="w-full h-full object-cover rounded-l-lg " src={img2} alt="" />
        <div className="text absolute top-1/4 left-5">
          <h1 className="font-bold">Hurry up! Stock is running out! 🕒</h1>
        </div>
      </SwiperSlide>
      <SwiperSlide className="h-full relative">
        <img className="w-full h-full object-cover rounded-l-lg " src={img1} alt="" />
        <div className="text absolute top-1/4 left-5">
          <h1 className="font-bold">Buy now and enjoy FREE shipping! 📦</h1>
        </div>
      </SwiperSlide>
      <SwiperSlide className="h-full relative">
        <img className="w-full h-full object-cover rounded-l-lg " src={img5} alt="" />
        <div className="text absolute top-[24px] left-5">
          <h1 className="text-white font-bold">Buy now and enjoy FREE shipping! 📦</h1>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
  <div className="slide1 w-full h-full lg:col-span-4 lg:row-span-1 flex flex-col">
    <img className="w-full h-1/2 object-cover rounded-tr-lg" src={img2} alt="" />
    <img className="w-full h-1/2 object-cover rounded-br-lg " src={img1} alt="" />
  </div>
</div>

    </>
  );
}

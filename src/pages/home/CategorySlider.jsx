import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import slider1 from "../../assets/home/slide1.jpg";
import slider2 from "../../assets/home/slide2.jpg";
import slider3 from "../../assets/home/slide3.jpg";
import slider4 from "../../assets/home/slide4.jpg";
import slider5 from "../../assets/home/slide5.jpg";
import SectionTitle from "../../components/SectionTitle";

const CategorySlider = () => {
  return (
    <section>
        <SectionTitle
        subheading={"From 11:00am to 10:00pm"}
        heading={"ORDER ONLINE"}
        >
        </SectionTitle>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper my-10"
      >
        <SwiperSlide>
          <img src={slider1} alt="" />
          <h2 className="text-3xl text-center -mt-10 text-white">salads</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="" />
          <h2 className="text-3xl text-center -mt-10 text-white">soups</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="" />
          <h2 className="text-3xl text-center -mt-10 text-white">pizzas</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} alt="" />
          <h2 className="text-3xl text-center -mt-10 text-white">Desserts</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider1} alt="" />
          <h2 className="text-3xl text-center -mt-10 text-white">salads</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="" />
          <h2 className="text-3xl text-center -mt-10 text-white">shoups</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="" />
          <h2 className="text-3xl text-center -mt-10 text-white">pizzas</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} alt="" />
          <h2 className="text-3xl text-center -mt-10 text-white">Desserts</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} alt="" />
          <h2 className="text-3xl text-center -mt-10 text-white">Mountain</h2>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default CategorySlider;

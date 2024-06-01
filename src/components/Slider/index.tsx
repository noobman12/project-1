import { useEffect } from "react";
import SwiperCore from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Install Swiper modules
SwiperCore.use([Navigation, Pagination]);

const Slider = () => {
  useEffect(() => {
    // Additional Swiper configuration or initialization can be done here
  }, []);

  return (
    <Swiper
      pagination={{ clickable: true }}
      className='swiper mySwiper swiper-initialized swiper-horizontal swiper-backface-hidden'
    >
      <SwiperSlide style={{ width: "1903px" }}>
        <img
          src='https://victorthemes.com/themes/windfall/wp-content/uploads/2019/04/slide1.png'
          alt=''
        />
      </SwiperSlide>
      <SwiperSlide style={{ width: "1903px" }}>
        <img
          src='https://victorthemes.com/themes/windfall/wp-content/uploads/2019/04/slide2.png'
          alt=''
        />
      </SwiperSlide>
      <SwiperSlide style={{ width: "1903px" }}>
        <img
          src='https://victorthemes.com/themes/windfall/wp-content/uploads/2019/04/slide3.png'
          alt=''
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;

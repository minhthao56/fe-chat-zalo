import React from "react";
import SwiperCore, { Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "./HomeImage.scss";

import Home1 from "../../../assets/images/home1.jpg";
import Home2 from "../../../assets/images/home2.jpg";
import Home3 from "../../../assets/images/home3.jpg";
import Home4 from "../../../assets/images/home4.jpg";

// install Swiper components
SwiperCore.use([Pagination, A11y, Autoplay]);

export default function HomeImage() {
  return (
    <div className="home-img">
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
      >
        <SwiperSlide>
          <img src={Home1} alt="" className="home-img__img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Home2} alt="" className="home-img__img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Home3} alt="" className="home-img__img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Home4} alt="" className="home-img__img" />
        </SwiperSlide>
        <div className="home-img__note">
          <p className="home-img__title">Trải nghiêm xuyên suốt</p>
          <span className="home-img__content">
            Kết nối và đông bộ suyển suốt giữa các thiết bị
          </span>
        </div>
        .
      </Swiper>
    </div>
  );
}

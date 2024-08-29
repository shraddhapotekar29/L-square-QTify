import React, { useRef } from "react";
import styles from "./Carousel.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';
//import './swiper.css'; 
import 'swiper/css/bundle';
import PrevBtn from "./PrevBtn1";
import MediaCard from "../Card/Card";
import NextBtn from "./NextBtn";
const Carousel = ({albumData}) => {
  const swiperRef = useRef(null);
  return (
    <div className={styles.swiperDiv}>
 <PrevBtn swiperRef={swiperRef} />
    <Swiper
      spaceBetween={20}
      slidesPerView={2}
      breakpoints={{
        601: {
          slidesPerView: 2,
        },
        768:{
          slidesPerView:4,
        },
        1008:{
          slidesPerView:7,
        }
      }}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
    >
      {albumData.map((album)=>{
          return<SwiperSlide><MediaCard album={album}/></SwiperSlide>
      })}
      
    </Swiper>
    <NextBtn swiperRef={swiperRef} />
    </div>
  );
};

export default Carousel;

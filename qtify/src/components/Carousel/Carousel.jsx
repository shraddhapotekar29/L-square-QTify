import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import LeftNavigation from '../Navigation/LeftNavigation';
import RightNavigation from '../Navigation/RightNavigation';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';


import './style.css';
import MediaCard from '../Card/Card';
// import { FreeMode, Pagination } from 'swiper/modules';


import 'swiper/css/navigation';
export default function Carousel({albumData}) {
    const swiperRef = useRef(null);
  return (
    <><div className='carouselDiv'>
        <div className='navigation'>
        <LeftNavigation onClick={() => swiperRef.current?.slidePrev()}/>
        </div>
      <Swiper
      pagination={false}
      navigation={false}
      modules={[Pagination, Navigation]}
        slidesPerView={7}
        spaceBetween={15}
        onSwiper={(swiper) => { swiperRef.current = swiper; }}
        className="mySwiper"
      >
        {albumData.map((album)=>(
            <SwiperSlide><MediaCard album={album}/></SwiperSlide>
        ))}
      </Swiper>
      <div className='navigation'>
      <RightNavigation onClick={() => swiperRef.current?.slideNext()}/>
        </div>
      </div>
    </>
  );
}

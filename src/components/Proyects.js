/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Proyects = () => {

  return (
    <div>
      <div>Proyects</div>
      <div className="w-3/4 m-auto">
        <div className="mt-20">
        <Swiper 
         rewind={true}
         navigation={true}
         pagination={{
            type:'progressbar' ,
          }}
        modules={[Navigation, Pagination]} className="mySwiper">
        {data.map((d) => (
            <SwiperSlide>
            <div className="bg-white h-[450px] text-cyan-600 rounded-xl">
              <div className="h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center">
                <img src={d.img} alt="" className="h-44 w-84 rounded-3xl"/>
              </div>
              <div className="flex flex-col justify-center items-center gap-4 p-4">
                <p className="text-xl font-semibold">{d.name}</p>
                <p>{d.review}</p>
                <button className="bg-indigo-500 text-white hover:bg-cyan-600 text-lg px-6 py-1 rounded-xl">read more</button>
              </div>
            </div>
            </SwiperSlide>
          ))},
          
          </Swiper>
        </div>
      </div>
    </div>
  );
};
const data = [
  {
    name: "proyect 1",
    img: "/proyectOne.png",
    review:
      "The following props are available for carousel component.These are the custom props that weve added for the carousel component and you can use all the other native props as well.",
  },
  {
    name: "proyect 2",
    img: "/proyectTwo.jpeg",
    review:
      "The following props are available for carousel component.These are the custom props that weve added for the carousel component and you can use all the other native props as well.",
  },
  {
    name: "proyect 3",
    img: "/proyectTree.jpeg",
    review:
      "The following props are available for carousel component.These are the custom props that weve added for the carousel component and you can use all the other native props as well.",
  },
  {
    name: "proyect 4",
    img: "/proyectFour.jpeg",
    review:
      "The following props are available for carousel component.These are the custom props that weve added for the carousel component and you can use all the other native props as well.",
  },
];

export default Proyects;

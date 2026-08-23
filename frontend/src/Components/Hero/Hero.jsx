import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import movies from "../../API/data";

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
function Hero() {
  return (
    <>
      <div className="w-full h-[70vh] relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
          className="h-full"
        >
          {movies.map((movie, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[70vh]">
                {/* Background Image */}
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-full object-cover"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-20 left-10 max-w-xl text-white">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    {movie.title}
                  </h1>

                  <p className="text-sm md:text-lg mb-6 line-clamp-3">
                    {movie.description}
                  </p>

                  <div className="flex gap-3">
                    <button className="bg-[#e4a625] text-black px-6 py-2 rounded font-semibold">
                     <PlayArrowIcon/> Play Now
                    </button>

                    <button className="border border-[#e4a625] rounded-lg bg-transparent px-6 py-2 rounded hover:bg-[#e4a625] hover:text-black">
                      <AddIcon/>My List
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Hero;

import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/swiper.css";

const sliderSettings = {
  breakpoints: {
    1400: {
      slidesPerView: 5,
      spaceBetween: 60,
    },
    1100: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
    800: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
};

const TopPlaces = () => {
  return (
    <section className="bg-white container">
      <div className="w-full">
        <div className="mb-8 flex flex-col justify-center items-start">
          <div className="text-orange-600 text-2xl font-semibold">
            Best Choices
          </div>
          <div className="text-[#1f3e72] text-4xl font-semibold">
            Popular places
          </div>
        </div>
        <Swiper {...sliderSettings} className="overflow-scroll">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <SwiperSlide key={index}>
              <div className="mx-auto card flex flex-col justify-center items-start gap-1 max-w-max transition-effect">
                <img
                  src={`./${index}.jpg`}
                  alt="home"
                  className="w-52 h-28 rounded-lg object-fit"
                />
                <span className="text-[#1f3e72] font-semibold mt-3">
                  place number {index}
                </span>
                <span className="w-52">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TopPlaces;

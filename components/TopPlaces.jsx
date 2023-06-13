import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.css";
import axios from "axios";

const sliderSettings = {
  breakpoints: {
    480: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    680: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1100: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1400: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
  },
};

const TopPlaces = () => {
  const { data } = useQuery(["topPlaces"], async () => {
    const res = await axios.get(
      "https://modulus-project.onrender.com/top_places"
    );
    console.log(res.data)
    return res.data;
  });
  return (
    <section className="container">
      <div className="w-full pt-12">
        <div className="mb-8 flex flex-col justify-center items-start">
          <div className="text-white text-xl font-medium">Best Choices</div>
          <div className="text-white text-4xl font-semibold">
            Popular places
          </div>
        </div>
        <Swiper {...sliderSettings} className="overflow-scroll">
          {data?.map(({ nom, address, photos, description }, index) => (
            <SwiperSlide key={index} className="sm:max-w-max">
              <div className="mx-auto card flex flex-col justify-center items-start gap-1 max-w-[250px] bg-gray-900 rounded-lg transition-effect">
                <img
                  src={`https://modulus-project.onrender.com${photos[0]?.url}`}
                  alt="home"
                  className="h-28 w-full rounded-t-lg object-cover"
                />
                <div className="p-3">
                  <p className="text-white text-lg capitalize font-semibold">
                    {nom}
                  </p>
                  <p className="italic text-sm text-gray-300 mb-2">{address}</p>
                  <span className="w-52 text-gray-400">
                    {description.slice(0, 50) + "..."}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TopPlaces;

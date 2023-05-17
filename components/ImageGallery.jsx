import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

function ImageGallery({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? data.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === data.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    data.length > 0 && (
      <div className="overflow-hidden lg:h-[30rem] sm:mx-10 md:mx-0 h-[20rem] relative flex items-center content-center rounded-xl bg-white shadow mb-12">
        {data.map((img, index) => (
          <img
            key={index}
            src={"https://modulus-project.onrender.com" + img.photo}
            className={`overflow-hidden min-h-full min-w-full rounded-xl  ${
              index != currentIndex && "hidden"
            }`}
          />
        ))}
        {/* Left Arrow */}
        <div
          onClick={prevSlide}
          className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-0 rounded-full hover:cursor-pointer"
        >
          <ChevronLeftIcon className="h-6 w-6 text-lightText" />
        </div>
        {/* Right Arrow */}
        <div
          onClick={nextSlide}
          className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-0 rounded-full hover:cursor-pointer"
        >
          <ChevronRightIcon className="h-6 w-6 text-lightText" />
        </div>
        <div className="flex justify-center bottom-2 py-2 absolute left-[50%] -translate-y-0 translate-x-[-50%]">
          {data.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`text-2xl cursor-pointer rounded-full ${
                slideIndex == currentIndex ? "bg-niceBlue" : "bg-lightText"
              } h-2 w-2 mx-2`}
            ></div>
          ))}
        </div>
      </div>
    )
  );
}

export default ImageGallery;

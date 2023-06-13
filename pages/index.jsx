import Contact from "@/components/Contact";
import TopPlaces from "@/components/TopPlaces";
import Link from "next/link";
import React from "react";

function Landing() {
  return (
    <div>
      <div className="h-screen relative flex flex-col pb-32">
        <nav className="container flex items-center py-10">
          <span className="font-semibold text-xl text-white">DZ Travel</span>
          <Link
            href="/login"
            className="ml-auto text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Signup
          </Link>
        </nav>
        <video
          className="w-screen h-[calc(100%+30px)] object-cover fixed left-0 top-0 -z-20"
          id="background-video"
          autoPlay
          loop
          muted
          src="https://res.cloudinary.com/ddrigh0zp/video/upload/v1684140089/algeria_2_sri3ie.mp4"
          type="video/mp4"
        ></video>

        <div className="w-screen h-screen fixed left-0 top-0 -z-10 bg-black opacity-60"></div>
        <div className="container mt-auto text-white">
          <h1 className="text-5xl sm:text-6xl font-semibold mt-auto">
            Discover cool places in Algeria
          </h1>
          <p className="mt-8 max-w-md">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            ratione eum iusto eius molestias excepturi nulla quas laboriosam
            dicta accusantium.
          </p>
        </div>
      </div>
      <div className=" rounded-t-3xl">
        <TopPlaces />
        <Contact />
      </div>
    </div>
  );
}

export default Landing;

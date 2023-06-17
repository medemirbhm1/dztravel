import { PhoneIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import { MdCall, MdMail, MdFax, MdLanguage } from "react-icons/md";

const Contact = () => {
  return (
    <section className="container mt-12 bg-gray-900 rounded-t-3xl py-10">
      <div className="flex flex-col justify-center items-start gap-2 ">
        <span className="text-white text-2xl font-semibold">Our Contacts</span>
        <span className="text-white text-4xl font-semibold">
          Easy to contact us
        </span>
        <span className="text-xl text-gray-400 max-w-md">
          you're welcome to contact us for suggestions and feedbacks about this
          website through social media and phone.
        </span>
      </div>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-8 items-start mt-8">
        <div className="flex flex-col justify-center items-start gap-4">
          <div className="flex flex-row justify-center gap-4">
            <div className="p-3 bg-[#eeeeff] rounded-md ">
              <MdCall size={35} className="fill-gray-900" />
            </div>
            <div className="flex flex-col items-start justify-evenly">
              <span className="font-medium text-white text-xl">Call</span>
              <span className="text-gray-400">0799371806</span>
            </div>
          </div>
          <Link
            href="tel:0799371806"
            className="w-full text-center
              font-medium py-3 px-6 text-white blue-gradient border-none rounded-md transition-effect hover:cursor-pointer hover:scale-105"
          >
            Call
          </Link>
        </div>
        <div className="flex flex-col justify-center items-start gap-4">
          <div className="flex flex-row justify-center gap-4">
            <div className="p-3 bg-[#eeeeff] rounded-md">
              <MdMail size={35} className="fill-gray-900" />
            </div>
            <div className="flex flex-col items-start justify-evenly">
              <span className="font-medium text-white text-xl">Email</span>
              <span className="text-gray-400">ka_feghouli@esi.dz</span>
            </div>
          </div>
          <Link
            href="mailto:dztravel@gmail.com"
            className="w-full text-center
              font-medium py-3 px-6 text-white blue-gradient border-none rounded-md transition-effect hover:cursor-pointer hover:scale-105"
          >
            Send
          </Link>
        </div>
        <div className="flex flex-col justify-center items-start gap-4">
          <div className="flex flex-row justify-center gap-4">
            <div className="p-3 bg-[#eeeeff] rounded-md">
              <MdFax size={35} className="fill-gray-900" />
            </div>
            <div className="flex flex-col items-start justify-evenly">
              <span className="font-medium text-white text-xl">Fax</span>
              <span className="text-gray-400">021210404</span>
            </div>
          </div>
          <div
            className="w-full text-center
              font-medium py-3 px-6 text-white blue-gradient border-none rounded-md transition-effect hover:cursor-pointer hover:scale-105"
          >
            Fax
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-4">
          <div className="flex flex-row justify-center gap-4">
            <div className="p-3 bg-[#eeeeff] rounded-md">
              <MdLanguage size={35} className="fill-gray-900" />
            </div>
            <div className="flex flex-col items-start justify-evenly">
              <span className="font-medium text-white text-xl ">Navigate</span>
              <span className="text-gray-400">dztravel.com</span>
            </div>
          </div>
          <div
            className="w-full text-center
              font-medium py-3 px-6 text-white blue-gradient border-none rounded-md transition-effect hover:cursor-pointer hover:scale-105"
          >
            Navigate
          </div>
        </div>
      </section>
    </section>
  );
};

export default Contact;

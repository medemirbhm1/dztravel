import React from "react";
import { MdCall, MdMail, MdFax, MdLanguage } from "react-icons/md";

const Contact = () => {
  return (
    <section className="container mt-5 bg-white">
      <div className="flex flex-col justify-center items-start gap-2 ">
        <span className="text-orange-600 text-2xl font-semibold">
          Our Contacts
        </span>
        <span className="text-[#1f3e72] text-4xl font-semibold">
          Easy to contact us
        </span>
        <span className="text-xl max-w-md">
          you're welcome to contact us for suggestions and feedbacks about this
          website through social media and phone.
        </span>
      </div>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-8 items-start mt-8">
        <div className="flex flex-col justify-center items-start gap-4">
          <div className="flex flex-row justify-center gap-4">
            <div className="p-3 bg-[#eeeeff] rounded-md">
              <MdCall size={35} className="fill-[#4066ff]" />
            </div>
            <div className="flex flex-col items-start justify-evenly">
              <span
                className="font-bold text-[#1f3e72] text-2xl
                "
              >
                Call
              </span>
              <span className="">0799371806</span>
            </div>
          </div>
          <div
            className="w-full text-center
              font-medium py-3 px-6 text-white blue-gradient border-none rounded-md transition-effect hover:cursor-pointer hover:scale-110"
          >
            Call
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-4">
          <div className="flex flex-row justify-center gap-4">
            <div className="p-3 bg-[#eeeeff] rounded-md">
              <MdMail size={35} className="fill-[#4066ff]" />
            </div>
            <div className="flex flex-col items-start justify-evenly">
              <span
                className="font-bold text-[#1f3e72] text-2xl
                "
              >
                Email
              </span>
              <span className="">ka_feghouli@esi.dz</span>
            </div>
          </div>
          <div
            className="w-full text-center
              font-medium py-3 px-6 text-white blue-gradient border-none rounded-md transition-effect hover:cursor-pointer hover:scale-110"
          >
            Send
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-4">
          <div className="flex flex-row justify-center gap-4">
            <div className="p-3 bg-[#eeeeff] rounded-md">
              <MdFax size={35} className="fill-[#4066ff]" />
            </div>
            <div className="flex flex-col items-start justify-evenly">
              <span
                className="font-bold text-[#1f3e72] text-2xl
                "
              >
                Fax
              </span>
              <span className="">021210404</span>
            </div>
          </div>
          <div
            className="w-full text-center
              font-medium py-3 px-6 text-white blue-gradient border-none rounded-md transition-effect hover:cursor-pointer hover:scale-110"
          >
            Fax
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-4">
          <div className="flex flex-row justify-center gap-4">
            <div className="p-3 bg-[#eeeeff] rounded-md">
              <MdLanguage size={35} className="fill-[#4066ff]" />
            </div>
            <div className="flex flex-col items-start justify-evenly">
              <span
                className="font-bold text-[#1f3e72] text-2xl
                "
              >
                Navigate
              </span>
              <span className="">dztravel.com</span>
            </div>
          </div>
          <div
            className="w-full text-center
              font-medium py-3 px-6 text-white blue-gradient border-none rounded-md transition-effect hover:cursor-pointer hover:scale-110"
          >
            Navigate
          </div>
        </div>
      </section>
    </section>
  );
};

export default Contact;

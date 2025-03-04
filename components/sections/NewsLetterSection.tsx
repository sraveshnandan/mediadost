import { Bell, MailOpen } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {};

const NewsLetterSection = (props: Props) => {
  return (
    <div className="relative xl:-mx-16 lg:-mx-12 md:-mx-8 -mx-4 lg:h-[40vh] h-65vh md:w-70vh ">
      <Image
        src="/images/hero-bg.jpg"
        alt="hero"
        width={100}
        height={100}
        className="absolute w-full h-full -z-10"
      />

      <div className="w-full flex items-center justify-center py-4 flex-col h-full">
        <h2 className="text-primary-100 font-bold">SUBSCRIBE NEWSLETTER</h2>
        <h1 className="text-2xl font-semibold text-Text-100">
          Get Every Latest News
        </h1>

        {/* email input box  */}

        <form className="xl:w-[40%] lg:mt-12 mt-6 items-center lg:w-[50%] md:w-[60%] w-[90%] my-4 flex flex-row bg-white rounded-md p-2">
          <MailOpen className="text-gray-400" size={20} />
          <input
            className="flex-grow outline-none placeholder:font-medium border-none md:p-3 p-1"
            type="text"
            placeholder="Enter your email..."
          />
          <div className="w-[40%]">
            <button className="bg-primary-100 w-full p-2  text-md flex gap-2 lg:px-5 lg:py-3 justify-center text-white font-semibold line-clamp-1  rounded-md  text-sm flex-row items-center">
              <Bell />
              Subscribe Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsLetterSection;

import { SocialLinks } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ComingSoonPage = () => {
  return (
    <div className="w-full p-[10%] bg-primary-100 gap-2 text-center text-white min-h-screen flex-col flex items-center justify-center">
      <Image
        src={"/images/logo_text.png"}
        alt="logo"
        width={150}
        height={50}
        className="animate-bounce"
      />
      <h2 className="md:text-5xl text-3xl font-bold ">We're Launching Soon!</h2>
      <h5 className="font-semibold text-xs">
        A new world of creative advertising is almost here.
      </h5>

      <h2 className="md:text-2xl mt-4 font-bold ">We are live!</h2>

      <div className="flex w-[90%] mt-4 h-fit  mx-auto flex-row items-center justify-center gap-3 ">
        {SocialLinks.map((item, index) => (
          <Link
            className="w-10 h-10 bg-slate-700 hover:scale-95 duration-300 transition-all rounded-xl flex items-center justify-center"
            href={item.link}
            key={index}
          >
            <Image
              src={item?.icon}
              alt="logo"
              className="aspect-square fill-white"
              width={25}
              height={25}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ComingSoonPage;

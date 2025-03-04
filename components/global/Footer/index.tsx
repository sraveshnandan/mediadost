import {
  ContactInfo,
  FooterLinks1,
  FooterLinks2,
  SocialLinks,
} from "@/constant";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="bg-FooterBG xl:px-16 lg:px-12 md:px-8 px-4 py-8 ">
      <div className="w-full">
        {/* internal grid  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-white">
          {/* company section  */}
          <div className="w-full flex flex-col gap-3">
            <Image
              src={"/images/logo_text.png"}
              alt="logo"
              width={150}
              height={60}
              className=""
            />

            <h4>
              Advertising should be effortless and impactful. At MediaDost, we
              ensure every ad finds its perfect place, engaging audiences with
              precision and purpose. Experience the future of seamless
              advertising with us.
            </h4>

            <div className="w-full flex items-center gap-3 justify-start">
              {SocialLinks.map((item) => (
                <Link
                  key={item.icon}
                  href={item.link}
                  className="rounded-md hover:bg-primary-100 transition-all duration-300 bg-transparent/30 p-3 ">
                  <Image src={item.icon} width={25} height={25} alt="logo" />
                </Link>
              ))}
            </div>
          </div>
          {/* link 1  */}
          <div className="w-full flex flex-col">
            <h1 className="text-3xl font-semibold mb-4">Explore</h1>
            <div className="w-full flex  gap-2 flex-col">
              {FooterLinks1.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  className="flex flex-row transition-all duration-300 hover:text-primary-100 items-center gap-1">
                  <ChevronRight />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* link 2  */}

          <div className="w-full flex flex-col">
            <h1 className="text-3xl font-semibold mb-4">Useful Links</h1>
            <div className="w-full flex  gap-2 flex-col">
              {FooterLinks2.map((item) => (
                <Link
                  key={item.icon}
                  href={item.name}
                  className="flex flex-row transition-all duration-300 hover:text-primary-100 items-center gap-1">
                  <ChevronRight />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* contact info  */}

          <div className="w-full flex flex-col">
            <h1 className="text-3xl font-semibold mb-4">Contact Info</h1>

            <div className="flex flex-col gap-2">
              {ContactInfo.map((item) => (
                <Link
                  href={"/"}
                  key={item.icon}
                  className="flex items-center gap-3 flex-row">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={20}
                    height={20}
                  />

                  <h2 className="font-semibold text-md">{item.description}</h2>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full flex items-center justify-center mt-8 text-white">
          <span className="text-md">
            Copyright 2025 Media Dost. All Rights Reserved by{" "}
            <Link className="font-semibold" href={"/"}>
              MediaDost
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import { ServicesSection } from "@/constant";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const WhyChooseUsSection = (props: Props) => {
  return (
    <div className="w-full flex lg:flex-row my-8 flex-col items-center justify-center">
      {/* image section  */}
      <div className="lg:w-1/2 relative my-4 lg:my-0 w-full flex items-center justify-center">
        <Image
          src={"/images/about-banner1.jpg"}
          alt="banner1"
          width={100}
          height={100}
          className="w-[80%] h-fit hover:animate-pulse rounded-md grayscale hover:scale-90 hover:grayscale-0 transition-all duration-700"
        />
        <Image
          src={"/images/about-banner2.jpg"}
          alt="banner1"
          width={100}
          height={100}
          className="w-[20%] absolute bottom-4 right-2 transition-all  duration-500 rotate-45 hover:rotate-0 cursor-pointer  scale-50 hover:scale-75 drop-shadow-md rounded-md"
        />
        <Image
          src={"/images/about-banner3.jpg"}
          alt="banner1"
          width={100}
          height={100}
          className="w-[20%] absolute top-4 left-2  transition-all  duration-500 -rotate-45 hover:rotate-0 cursor-pointer scale-50 hover:scale-75 drop-shadow-md rounded-md"
        />
      </div>
      {/* text section */}
      <div className="lg:w-1/2 mt-8 lg:mt-0 w-full flex flex-col items-start justify-center">
        <h4 className="font-bold text-primary-100">WHY CHOOSE US ?</h4>

        <h1 className="lg:text-3xl text-Text-100 my-2 text-xl font-semibold">
          We Offer The Best Advertisement Services
        </h1>

        {/* Services Sections  */}
        <div className="my-2">
          {ServicesSection.map((item) => (
            <div key={item.icon} className="flex my-6 flex-row gap-4">
              <div
                style={{ backgroundColor: item.color }}
                className={`min-w-16 min-h-16 flex items-center justify-center rounded-full overflow-hidden `}>
                <Image
                  src={item.icon}
                  alt="icon"
                  width={40}
                  className="aspect-square"
                  height={40}
                />
              </div>

              <div className="flex flex-col">
                <h4 className="text-lg font-semibold">{item.title}</h4>
                <h5 className="text-xs line-clamp-2 max-w-[80%] text-gray-500 font-semibold">
                  {item.description}
                </h5>
              </div>
            </div>
          ))}
        </div>
        {/* CTA button  */}
        <Link
          href={`/about-us`}
          className="bg-primary-100 py-4 px-3 rounded-md my-4 text-white text-xl font-semibold flex items-center gap-2 flex-row ">
          Know About Us
          <ArrowRightIcon />
        </Link>
      </div>
    </div>
  );
};

export default WhyChooseUsSection;

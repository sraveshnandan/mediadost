import { HeroCTAActions } from "@/constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ArrowRightIcon, ArrowUpRightFromSquareIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <div className="mb-8 relative xl:-mx-16 lg:-mx-12 md:-mx-8 -mx-4 md:h-[50vh] lg:h-[60vh] ">
      <Image
        src="/images/hero-bg.jpg"
        alt="hero"
        width={100}
        height={100}
        className="absolute w-full h-full -z-10"
      />
      <div className="flex z-20 flex-col w-full py-10  h-full xl:px-16 lg:px-12 md:px-8 px-4">
        <h2 className="text-primary-100 font-bold">YOUR MEDIA PARTNER</h2>
        <h1 className="text-3xl font-semibold text-Text-100">
          Maximize Your Reach with Media Dost
        </h1>

        {/* CTA Actions  */}

        <div className="grid grid-cols-2 md:grid-cols-3 w-[90%] md:w-[70%] lg:w-[50%] gap-4 my-8 mx-auto">
          {HeroCTAActions.map((item) => (
            <Link
              href={item.link}
              key={item.name}
              className="flex transition-all duration-300 hover:drop-shadow-lg hover:scale-95 flex-col w-full items-center p-3 gap-2 bg-white rounded-md ">
              <FontAwesomeIcon icon={item.icon} size="3x" color="#535de0" />
              <h2 className="text-primary-100 font-semibold text-2xl">
                {item.name}
              </h2>
              <p className="text-md font-medium">{item.desc}</p>

              <ArrowUpRightFromSquareIcon color="#535de0" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

import { CalendarPlusIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const NeedHelpSection = (props: Props) => {
  return (
    <div
      style={{ backgroundImage: "url('/images/cta-bg.png')" }}
      className="bg-primary-100 gap-4 flex lg:flex-row flex-col my-8 rounded-md p-12 w-[95%] md:w-[85%] mx-auto text-white">
      <div className="flex-grow flex items-start flex-col ">
        <h1 className="font-bold text-4xl mb-4">Need Help ?</h1>
        <h3 className="font-semibold text-xl">
          Get a free media planner to craft and execute your next promotion. Let
          us handle the strategy and placement for you!
        </h3>

        <Link
          href={`/plan`}
          className="flex bg-Text-100 px-5 py-3 rounded-md mt-6 items-center gap-3 flex-row">
          <CalendarPlusIcon />
          Request Plan
        </Link>
      </div>

      <div className="h-full w-full  flex lg:w-[35%] justify-end">
        <Image
          src={"/images/thinking.svg"}
          alt="think"
          width={50}
          height={50}
          className="lg:w-full lg:h-full w-36 h-36"
        />
      </div>
    </div>
  );
};

export default NeedHelpSection;

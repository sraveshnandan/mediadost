import { CalendarPlusIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  noMargin?: boolean;
};

const NeedHelpSection = ({ noMargin = false }: Props) => {
  return (
    <div
      style={{ backgroundImage: "url('/images/cta-bg.png')" }}
      className={`bg-primary-100 gap-4 flex lg:flex-row flex-col my-8 rounded-2xl p-12 ${
        noMargin ? "w-full" : "w-[95%] md:w-[90%]"
      } mx-auto text-white`}
    >
      <div className="flex-grow flex items-start flex-col ">
        <h1 className="font-bold text-4xl mb-4">Need Help ?</h1>
        <h3 className="font-semibold text-xl">
          Get a free media planner to craft and execute your next promotion. Let
          us handle the strategy and placement for you!
        </h3>

        <Link
          href={`/plan`}
          className="flex bg-Text-100 px-5 py-3 rounded-2xl mt-6 items-center gap-3 flex-row"
        >
          <CalendarPlusIcon />
          Request Plan
        </Link>
      </div>

      <div className="flex lg:w-[35%]  justify-end items-center lg:justify-center">
        <Image
          src={"/images/thinking.svg"}
          alt="think"
          width={50}
          height={50}
          className="aspect-square h-40 w-40"
        />
      </div>
    </div>
  );
};

export default NeedHelpSection;

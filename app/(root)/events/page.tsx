import { FetchAllEvent } from "@/services/genral.services";
import { EventType } from "@/types";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = async () => {
  const allEvent: EventType[] = await FetchAllEvent();
  return (
    <div className="lg:w-[85%] pb-8  w-full flex flex-col justify-center mx-auto items-center">
      <h2 className="text-center text-2xl text-Text-100 font-semibold">
        Explore Events to Sponsor
      </h2>
      {/* listing all available events  */}
      <div className="grid w-full grid-cols-1 gap-4 p-4 my-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {allEvent?.map((item) => (
          <div className="p-2 border rounded-2xl h-fit" key={item?.id}>
            <Image
              src={item?.images[0].url}
              alt="image"
              width={720}
              height={360}
              className="aspect-video rounded-xl w-full"
            />

            <div className="w-full my-2 p-2">
              <h4 className="text-2xl text-Text-100 font-semibold">
                {item?.name}
              </h4>

              <h6 className="text-sm my-1 text-Text-100/60 font-semibold">
                {item?.fullAddress}
              </h6>

              <h6 className="text-lg text-Text-100/60 font-medium">
                ₹ {item?.price} min spend
              </h6>

              <Link href={`/events/${item?.slug}`} className="text-primary-100 flex items-center gap-1 font-semibold mt-3">View Details <ArrowRight /></Link>

              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;

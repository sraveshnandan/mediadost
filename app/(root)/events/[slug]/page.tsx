import NeedHelpSection from "@/components/sections/NeedHelpSection";
import ImageSection from "@/components/ui/ImageSection";
import { FetchEventBySlug } from "@/services/genral.services";
import { EventType } from "@/types";
import React from "react";

type Props = {};

const EventDetailsPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;
  const event: EventType = await FetchEventBySlug(slug);
  return (
    <div className="w-[95%] lg:w-[80%] mx-auto py-8 flex-col ">
      <div className=" w-full flex flex-col lg:flex-row justify-center">
        {/* images  */}
        <div className="w-full lg:w-1/2">
          <ImageSection price={event?.price} images={event?.images} />
        </div>
        {/* Details  */}
        <div className="w-full p-3 lg:w-1/2">
          <h2 className="text-3xl text-Text-100 font-semibold">
            {event?.name}
          </h2>

          <h2 className="text-xl text-Text-100/50 font-semibold">
            {event?.fullAddress}
          </h2>

          <h2 className="text-md text-Text-100 mt-2 opacity-85 font-semibold">
            {event?.description.substring(0, 250)}...
          </h2>

          {/* sponserShip details  */}

          <h2 className="text-2xl text-Text-100 mt-2 opacity-85 font-semibold">
            Sponsorship Details :
          </h2>
          <div className=""></div>
        </div>
      </div>

      <NeedHelpSection noMargin />
    </div>
  );
};

export default EventDetailsPage;

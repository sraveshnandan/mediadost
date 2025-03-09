"use client";
import Image from "next/image";
import React, { useState } from "react";
import AddToCartSection from "./AddToCartSection";

type Props = {
  images: { id: string; url: string }[];
  price?: number;
};

const ImageSection = ({ images, price }: Props) => {
  const [mainImage, setMainImage] = useState<string>(images[0].url);
  return (
    <div className="w-full h-full border p-2">
      <Image
        src={mainImage}
        alt="Main Image"
        width={1024}
        height={720}
        className="aspect-video rounded-xl"
      />

      <div className="flex my-4  w-full flex-row items-center gap-3 flex-wrap">
        {images?.map((item) => (
          <button
            className="transition-all duration-300 hover:scale-110"
            onClick={() => setMainImage(item?.url)}
          >
            <Image
              src={item?.url}
              key={item?.id}
              alt="logo"
              width={100}
              height={60}
              className="rounded-lg aspect-video w-auto h-12 "
            />
          </button>
        ))}
      </div>
      <div className="my-4">
        <AddToCartSection price={price} />
      </div>
    </div>
  );
};

export default ImageSection;

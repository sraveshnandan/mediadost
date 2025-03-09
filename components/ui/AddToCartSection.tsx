"use client";
import { ShoppingBasket, TagIcon } from "lucide-react";
import React, { useState } from "react";

type Props = {
  price?: number;
};

const AddToCartSection = ({ price }: Props) => {
  const [first, setfirst] = useState(null);
  return (
    <div className="w-full bg-primary-100/20 rounded-lg p-3 flex items-center justify-between">
      <div className="flex items-center gap-2 text-xl">
        <TagIcon className="text-yellow-100" />
        <h4 className="font-semibold lg:text-3xl">₹ {price} /-</h4>
      </div>

      <div className="flex items-center gap-2 text-xl">
        <button className="flex bg-primary-100 text-white p-2 rounded-xl lg:p-4 flex-row items-center gap-2">
          <ShoppingBasket className="hidden sm:flex" />
          <span className="text-sm">Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default AddToCartSection;

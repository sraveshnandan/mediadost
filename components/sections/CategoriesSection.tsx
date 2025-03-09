import { FetchAllCategories } from "@/services/genral.services";
import React from "react";
import CategoryIcon from "../ui/DynamicIcon";
import Link from "next/link";

export const revalidate = 20;

type Props = {};

const CategoriesSection = async (props: Props) => {
  const categories = await FetchAllCategories();
  return (
    <div className="flex w-full my-8 flex-col items-center justify-center">
      <h2 className="text-2xl text-Text-100 font-semibold">
        Browse Media by Genre
      </h2>

      <div className="lg:w-[90%] w-full  my-8 mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-content-center place-items-center gap-2">
        {categories.length > 0 ? (
          categories?.map((item: any) => (
            <Link
              href={`/`}
              key={item.id}
              className="bg-background h-40 transition-all duration-500 hover:scale-90 w-full rounded-2xl p-2 flex items-center justify-center flex-col">
              <CategoryIcon iconClass={item.icon} />
              <h4 className="text-primary-100 font-semibold mt-2">
                {item.name}
              </h4>
            </Link>
          ))
        ) : (
          <>
            <div className="w-full flex items-center justify-center">
              <span className="text-red-600">Something went wrong.</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CategoriesSection;

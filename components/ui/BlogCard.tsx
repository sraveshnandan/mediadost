import { Blog } from "@/types";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  blog: Blog;
};

const BlogCard = ({ blog }: Props) => {
  const { id, adImage, author, title, createdAt, mainImage } = blog;
  return (
    <div className="w-full p-3 rounded-2xl duration-300 transition-all hover:shadow-lg  border">
      <div>
        <Image
          src={mainImage.url}
          alt="blog_image"
          width={1024}
          height={720}
          quality={100}
          loading="lazy"
          className="w-full aspect-video h-auto rounded-2xl"
        />
      </div>

      <div className="my-2">
        <h2 className="font-semibold cursor-pointer hover:text-primary-100 hover:opacity-100 drop-shadow-md  opacity-75 text-xl text-Text-100 line-clamp-2">
          {title}
        </h2>
      </div>

      {/* read more button  */}
      <div className="w-full justify-end flex items-end">
        <Link
          href={`/blog/${id}`}
          className="flex hover:text-yellow-100 text-primary-100 group flex-row  font-semibold items-center gap-1"
        >
          Read more
          <div>
            <ArrowRightIcon
              className="group-hover:translate-x-2 group-hover:text-yellow-100 transition-all duration-500"
              size={22}
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;

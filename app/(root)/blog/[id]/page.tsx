import { FetchBlogById } from "@/services/genral.services";
import { Blog } from "@/types";
import { Calendar } from "lucide-react";
import Image from "next/image";

import Showdown from "showdown";

type Props = {};

const BlogDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
  const blogId = (await params).id;

  const blog: Blog = await FetchBlogById(blogId);

  const converter = new Showdown.Converter();
  converter.setFlavor("allOn");
  const contentHTML = converter.makeHtml(blog?.context || "");

  console.log(blog);

  return !blog?.title ? (
    <></>
  ) : (
    <div className="w-[80%] mx-auto flex-col flex py-8">
      <h2 className="text-3xl  text-secondary-100 font-semibold">
        {blog?.title}
      </h2>

      {/* author section  */}

      <div className="w-fit  my-4 items-center flex flex-row gap-4  rounded-full ">
        <h6 className="text-gray-600 text-lg font-semibold">{blog?.author}</h6>
        <h6 className="text-md flex flex-row items-center gap-2 font-semibold  text-secondary-100 px-5 py-1">
          <Calendar color="green" className="text-sm" />
          {new Date(blog?.createdAt).toLocaleDateString()}
        </h6>
      </div>

      {/* main image  */}

      <div className="my-4 w-full">
        <Image
          src={blog?.mainImage?.url}
          width={1024}
          height={720}
          alt="blog images"
          className="aspect-video w-full h-auto rounded-lg"
        />
      </div>

      <div className="my-4 ">
        <div
          className="text-xl  prose prose-lg prose-blue max-w-none leading-relaxed"
          dangerouslySetInnerHTML={{ __html: contentHTML || "" }}
        />
      </div>
    </div>
  );
};

export default BlogDetails;

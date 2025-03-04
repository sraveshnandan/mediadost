import { FetchAllBlogs } from "@/services/genral.services";
import BlogCard from "../ui/BlogCard";
import { Blog } from "@/types";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

export const revalidate_path = 30;
type Props = {};

const BlogSections = async (props: Props) => {
  const blogs = await FetchAllBlogs();
  return (
    <div className="w-full flex flex-col items-center my-24">
      <h3 className="text-primary-100 font-bold">LATEST BLOGS</h3>
      <h1 className="text-Text-100 text-2xl font-semibold">
        Read Our Featured Blogs
      </h1>

      <div className="w-full my-12 gap-3 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogs.length > 0 &&
          blogs.map((item: Blog) => <BlogCard key={item.id} blog={item} />)}
      </div>

      <div className="w-full justify-end flex items-end">
        <Link
          href={`/blog`}
          className="flex hover:text-yellow-100 text-primary-100 group flex-row  font-semibold items-center gap-1">
          Read all blogs
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

export default BlogSections;

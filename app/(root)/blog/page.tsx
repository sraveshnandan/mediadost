export const revalidate = 20;
import BlogCard from "@/components/ui/BlogCard";
import { FetchAllBlogs } from "@/services/genral.services";
import { Blog } from "@/types";

const BlogPage = async () => {
  const blogs = await FetchAllBlogs();

  return (
    <div className="w-full flex flex-col items-center py-2">
      <h2 className="text-Text-100/70 text-3xl text-center font-semibold">
        Explore Our Featured Blogs
      </h2>
      <h6></h6>

      <div className="w-[90%] my-12 gap-3 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogs?.map((blog: Blog) => (
          <BlogCard blog={blog} key={blog.id} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;

import Link from "next/link";
import BlogCard from "./BlogCard";
import { getBlogPosts } from "@/app/lib/data";

export default async function FeaturedBlogPosts() {
  const posts = await getBlogPosts();

  return (
    <div className="bg-white p-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-blue-950 sm:text-5xl">
            From the blog
          </h2>
          <p className="mt-2 text-lg/8 text-blue-950">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-blue-800 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.title} {...post} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/blog"
            className="inline-block bg-white text-blue-900 px-3 py-1.5 rounded-3xl hover:bg-blue-800 hover:text-white transition-colors text-sm font-medium"
          >
            More blog posts
          </Link>
        </div>
      </div>
    </div>
  );
}

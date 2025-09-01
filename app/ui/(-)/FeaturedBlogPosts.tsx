import Link from "next/link";
import BlogCard from "./BlogCard";
import { getBlogPosts } from "@/app/lib/data";

export default async function FeaturedBlogPosts() {  
  const posts = await getBlogPosts();

  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold mb-4 text-primary text-center">Latest Blog Posts</h2>
      <div className="space-y-4">
        {posts.map((post, index) => {
          if (index > 2) return null;
          
          return <BlogCard key={post.title} {...post} />;
        })}
      </div>
      <div className="text-center mt-6">
        <Link
          href="/blog"
          className="inline-block bg-black text-white text-background px-4 py-2 rounded-4xl hover:bg-secondary transition-colors"
        >
          More blog posts
        </Link>
      </div>
    </section>
  )
};

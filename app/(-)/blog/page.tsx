import { getBlogPosts } from "@/app/lib/data";
import { BlogPost } from "@/app/lib/interfaces/blog";
import BlogCard from "@/app/ui/(-)/BlogCard";

export default async function Page() {
  const posts: BlogPost[] = await getBlogPosts();
  return (
    <div className="flex justify-center items-center py-12 min-h-screen">
      <div className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-3xl p-10 text-gray-900 overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">Blog Posts</h2>
        <div className="space-y-6">
          {posts.map((post) => (
            <BlogCard key={post.title} {...post} />
          ))}
        </div>
      </div>
    </div>
  )
}
import { getBlogPosts } from "@/app/lib/data";
import { BlogPost } from "@/app/lib/interfaces/blog";
import BlogCard from "@/app/ui/(-)/BlogCard";

export default async function Page() {
  const posts: BlogPost[] = await getBlogPosts();
  
  return (
    <div>
      {posts.map((post) => (
        <BlogCard key={post.title} {...post} />  
      ))}
    </div>
  )
}
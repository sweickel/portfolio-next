import { BlogPost } from "@/app/lib/interfaces/blog";

export default async function BlogCard({ title, link, summary, date }: BlogPost) {
  return (
    <div key={title} className="bg-emerald-50 rounded-lg shadow-lg p-4">
      <a
        href={link}
        className="text-lg font-semibold">
        {title}
      </a>
      <p className="text-secondary text-sm mb-1">{summary}</p>
      <span className="text-xs text-gray-500">{date}</span>
    </div>
  )
};

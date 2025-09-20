import { BlogPost } from "@/app/lib/interfaces/blog";
import { Link } from "@/ui";

export default async function BlogCard({ title, link, summary, date }: BlogPost) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", { month: 'long', day: 'numeric', year: 'numeric' });
  return (
    <article key={title} className="flex max-w-xl flex-col items-start justify-between">
      <div className="flex items-center gap-x-4 text-xs">
        <time dateTime={formattedDate} className="text-blue-900">
          {formattedDate}
        </time>
        <div
          // href={link}
          className="relative z-10 rounded-full bg-blue-300 px-3 py-1.5 font-medium text-blue-900 hover:bg-blue-950 hover:text-white"
        >
          {"AI"}
        </div>
      </div>
      <div className="group relative grow">
        <h3 className="mt-3 text-lg/6 font-semibold text-blue-900 group-hover:text-blue-500">
          <Link href={link}>
            <span className="absolute inset-0" />
            {title}
          </Link>
        </h3>
        <p className="mt-5 line-clamp-3 text-sm/6 text-blue-900">{summary}</p>
      </div>
      {/* author div for future dev */}
      {/* <div className="relative mt-8 flex items-center gap-x-4 justify-self-end">
        <img alt="" src={post.author.imageUrl} className="size-10 rounded-full bg-gray-800" />
        <div className="text-sm/6">
          <p className="font-semibold text-white">
            <a href={post.author.href}>
              <span className="absolute inset-0" />
              {post.author.name}
            </a>
          </p>
          <p className="text-gray-400">{post.author.role}</p>
        </div>
      </div> */}
    </article>
  )
};

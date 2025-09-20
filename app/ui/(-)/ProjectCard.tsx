import { Project } from "@/app/lib/interfaces/project";
import { Link } from "@/ui";

export default function ProjectCard({ title, description, link }: Project) {
  return (
    <div>
      <div className="relative bg-blue-950 rounded-2xl shadow-xl p-6 mb-6 transition-transform duration-200 hover:scale-[1.03] hover:shadow-2xl border border-blue-900/10">
        <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
        <div className="h-[2px] w-12 bg-blue-300 rounded-full mb-3" />
        <p className="text-base text-sm/6 text-blue-100 leading-relaxed">
          {description}
        </p>
      </div>
      <Link
        href={link}
        className="text-accent bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-colors duration-150 font-semibold text-sm self-end"
      >
        View Project
      </Link>
    </div>
  );
}

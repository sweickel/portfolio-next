import { getProjects } from "@/app/lib/data";
import Link from "next/link";
import ProjectCard from "./ProjectCard";

export default async function FeaturedProjects() {
  const projects = await getProjects();

  return(
   <section className="mb-8 py-12">
    <h3 className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl mb-8">
      Recent Projects
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {projects.map((project, index) => 
      {
        if (index > 2) return null;
        return <ProjectCard key={index} {...project} />
      })}
    </div>
    <div className="text-center mt-6">
      <Link
        href="/projects"
        className="inline-block bg-blue-850 text-white text-background px-4 py-2 rounded-4xl hover:bg-blue-800 transition-colors font-medium text-sm"
      >
        See all projects
      </Link>
    </div>
  </section> 
  );
}
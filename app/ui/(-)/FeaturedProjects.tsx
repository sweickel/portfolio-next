import { getProjects } from "@/app/lib/data";
import Link from "next/link";
import ProjectCard from "./ProjectCard";

export default async function FeaturedProjects() {
  const projects = await getProjects();

  return(
   <section className="mb-8">
    <h2 className="text-2xl font-bold mb-4 text-primary text-center">Recent Projects</h2>
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
        className="inline-block bg-black text-white text-background px-4 py-2 rounded-4xl hover:bg-secondary transition-colors"
      >
        See all projects
      </Link>
    </div>
  </section> 
  );
}
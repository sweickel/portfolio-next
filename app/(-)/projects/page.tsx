import { getProjects } from "@/app/lib/data";
import ProjectCard from "@/app/ui/(-)/ProjectCard";

export default async function Page() {
  const projects = await getProjects();
  return (
    <section className="py-20 bg-background pt-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
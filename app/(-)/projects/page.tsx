import { getProjects } from "@/app/lib/data";
import ProjectCard from "@/app/ui/(-)/ProjectCard";

export default async function Page() {
  const projects = await getProjects();
  return (
    <div className="flex justify-center py-12 min-h-screen">
      <div className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-5xl p-10 text-gray-900 overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}
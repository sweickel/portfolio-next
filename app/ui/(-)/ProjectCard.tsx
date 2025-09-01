import { Project } from "@/app/lib/interfaces/project";

export default function ProjectCard({ title, description, link }: Project) {
  return(
    <div className="bg-primary rounded-lg shadow-lg p-4">
      <h3 className="text-xl font-semibold mb-2 text-primary">{title}</h3>
      <p className="text-secondary mb-4">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">View Project</a>
    </div>  
  )
};
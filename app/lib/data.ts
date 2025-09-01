import { Project } from "./interfaces/project";
import { getBlogPostsMock, getProjectsMock } from "./mock/reponse";
import { BlogPost } from "./interfaces/blog";

export async function getProjects(): Promise<Project[] | []> {
  return Promise.resolve(getProjectsMock);
}

export async function getBlogPosts(): Promise<BlogPost[] | []> {
  return Promise.resolve(getBlogPostsMock);
}


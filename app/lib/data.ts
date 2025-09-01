import { Project } from "./interfaces/project";
import { BlogPost } from "./interfaces/blog";
import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });  

async function retrieveProjects() {
  const projects = await sql<Project[]>`SELECT * FROM projects ORDER BY created_at DESC`;
  return projects;
}

async function retrievePosts() {
  const posts = await sql<BlogPost[]>`SELECT * FROM posts ORDER BY created_at DESC`;
  return posts.map(post => {
    return {
      ...post,
      date: post.date.toLocaleString()
    };
  });
}

export async function getProjects(): Promise<Project[]> {
  try {
    return await retrieveProjects();
  }
  catch (error) {
    console.error("Failed to fetch projects", error);
    return [];
  }
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    return await retrievePosts();
  }
  catch (error) {
    console.error("Failed to fetch blog posts", error);
    return [];
  }
}


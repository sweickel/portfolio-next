import { BlogPost } from "../interfaces/blog";
import { Project } from "../interfaces/project";

export const getProjectsMock: Project[] = [
  {
    title: "Old Project 1",
    description:
      "A beginner project from my early coding days, showcasing basic HTML/CSS skills.",
    link: "#",
  },
  {
    title: "Old Project 2",
    description:
      "An early JavaScript app demonstrating DOM manipulation and event handling.",
    link: "#",
  },
  {
    title: "Crypto Dashboard (New)",
    description:
      "A React app with live crypto data and interactive charts using Chart.js.",
    link: "#",
  },
  {
    title: "Task Management API (New)",
    description:
      "A Node.js REST API with MongoDB, paired with a React front-end.",
    link: "#",
  },
  {
    title: "Book Recommender (New)",
    description:
      "A React app with a simulated AI recommendation system for books.",
    link: "#",
  },
];

export const getBlogPostsMock: BlogPost[] = [
  {
    title: "How I Built My Portfolio with React & Vite",
    summary:
      "A walkthrough of the tech stack and design decisions behind this site.",
    link: "#",
    date: "2025-06-20",
  },
  {
    title: "Integrating AI into My Dev Workflow",
    summary: "How I use AI tools to boost productivity and code quality.",
    link: "#",
    date: "2025-06-10",
  },
  {
    title: "Lessons Learned from My First 10 Projects",
    summary:
      "Reflections on growth, mistakes, and best practices as a self-taught developer.",
    link: "#",
    date: "2025-05-30",
  },
];

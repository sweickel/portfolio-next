import { Suspense } from "react";
import AboutSummary from "./ui/(-)/AboutSummary";
import FeaturedProjects from "./ui/(-)/FeaturedProjects";
import FeaturedBlogPosts from "./ui/(-)/FeaturedBlogPosts";

export default function Page() {
  const components = 
    [
      <AboutSummary key="aboutSummary" />,
      <FeaturedBlogPosts key="featuredBlogPosts" />, 
      <FeaturedProjects key="featuredProjects" />
    ];

  return (
    <>
      {components.map((c) => (
        <Suspense key={c.key}>{c}</Suspense>
      ))}
    </>
  )
}

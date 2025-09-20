import { Suspense } from "react";
import AboutSummary from "./ui/(-)/AboutSummary";
import FeaturedBlogPosts from "./ui/(-)/FeaturedBlogPosts";
import FeaturedProjects from "./ui/(-)/FeaturedProjects";
// ...existing code...

export default function Page() {
  return (
    <div className="flex justify-center items-center md:py-12 min-h-screen">
      <div className="bg-white md:rounded-[2.5rem] shadow-2xl w-full max-w-5xl p-0 text-gray-900 overflow-hidden">
        {/* Hero Section - blue */}
        <section className="section-blue flex flex-col md:flex-row items-center gap-8 p-12 md:rounded-t-[2.5rem]">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              AI-Driven Development Portfolio
            </h1>
            <p className="text-lg mb-6">{`Præct basedolode, asperesong nogome rnast and treaintcive oettronnigsicon.`}</p>
            <button className="bg-white text-blue-700 font-semibold py-2 px-6 rounded-full">
              Contact Me
            </button>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-blue-900 rounded-2xl w-64 h-48 flex items-center justify-center">
              <span className="text-6xl text-white">🖥️</span>
            </div>
          </div>
        </section>

        {/* Featured Blog Posts - white */}
        <section className="section-white">
          <Suspense>
            <FeaturedBlogPosts />
          </Suspense>
        </section>

        {/* Featured Projects - blue */}
        <section className="section-blue">
          <div className="max-w-4xl mx-auto">
            <Suspense>
              <FeaturedProjects />
            </Suspense>
          </div>
        </section>

        {/* About Me Summary - white */}
        <section className="section-white p-12">
          <div className="max-w-2xl mx-auto">
            <Suspense>
              <AboutSummary />
            </Suspense>
          </div>
        </section>

        {/* Contact Me Section - blue */}
        <section className="section-blue p-12 md:rounded-b-[2.5rem]">
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          <p className="mb-6">
            Interested in collaborating or have a project in mind? Reach out to discuss your ideas, request a quote, or learn more about my services.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-900 rounded-2xl p-4 flex flex-col items-center">
              <span className="text-4xl mb-2 text-white">⚙️</span>
              <p className="text-white font-semibold">
                Software Engineering & AI Solutions
              </p>
            </div>
            <div className="bg-blue-900 rounded-2xl p-4 flex flex-col items-center">
              <span className="text-4xl mb-2 text-white">🧑‍💻</span>
              <p className="text-white font-semibold">
                Custom Application Development
              </p>
            </div>
            <div className="bg-blue-900 rounded-2xl p-4 flex flex-col items-center">
              <span className="text-4xl mb-2 text-white">🌐</span>
              <p className="text-white font-semibold">
                Full-Stack Web Development
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

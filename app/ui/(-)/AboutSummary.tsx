import { Link } from "@/ui";

export default function AboutSummary() {
  return (
    <section className="mb-8 text-center">
      <h2 className="text-3xl font-bold mb-2 text-primary">{`Hi, I'm Sean Weickel`}</h2>
      <p className="text-secondary mb-4 max-w-xl mx-auto">
        {/* Experienced full-stack Software Engineer passionate about front-end development and experienced with Angular, React, C#, Node.js, and NestJS. Skilled in working with SQL/NoSQL databases, CMS platforms, and DevOps tools like Terraform and CircleCI. Enthusiastic about integrating AI into development workflows. */}
        {`I'm an experienced full-stack Software Engineer passionate about front-end and AI-driven development, automation and context engineering, and improving development workflows.`}
      </p>
      <Link href="/about">
        Read more about me
      </Link>
    </section>
  )
}
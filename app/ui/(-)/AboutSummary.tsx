import Link from "next/link";

export default function AboutSummary() {
  return (
    <section className="mb-8 text-center">
      <h2 className="text-3xl font-bold mb-2 text-primary">{`Hi, I'm Sean Weickel`}</h2>
      <p className="text-secondary mb-4 max-w-xl mx-auto">
        Self-taught Software Engineer passionate about front-end development and experienced with Angular, React, C#, Node.js, and NestJS. Skilled in working with SQL/NoSQL databases, CMS platforms, and DevOps tools like Terraform and CircleCI. Enthusiastic about integrating AI into development workflows.
      </p>
      <Link
        href="/about"
        className="inline-block bg-black text-white text-background px-4 py-2 rounded-4xl hover:bg-secondary transition-colors"
      >
        Read more about me
      </Link>
    </section>
  )
}
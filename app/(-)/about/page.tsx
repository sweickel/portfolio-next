export default function Page() {
  return (
    <section className="py-20 bg-transparent">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">About Me</h2>
      <p className="text-lg text-secondary max-w-2xl mx-auto">
        {/* TODO: replace this hard-coded line */}
        {`I'm a self-taught Software Engineer with a passion for front-end web development. I thrive on learning new technologies and adapting to different challenges, always striving to improve my skills and deliver high-quality solutions. My experience spans working with frameworks like Angular and React, as well as building APIs using C#, Node.js, and NestJS.`}
        <br /><br />
        {/* TODO: replace this hard-coded line */}
        {`I enjoy working with both SQL and NoSQL databases, and have hands-on experience with CMS platforms such as Sitecore and WordPress. Beyond front-end development, I'm interested in DevOps practices, including CI/CD pipelines with tools like Terraform and CircleCI. I'm also enthusiastic about integrating AI into development workflows to create smarter, more efficient applications.`}
      </p>
    </div>
  </section>
  )
}
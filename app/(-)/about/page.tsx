export default function Page() {
  return (
    <div className="flex justify-center items-center py-12 min-h-screen">
      <div className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-3xl p-10 text-gray-900 overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">About Me</h2>
        <p className="text-lg text-gray-700 mb-4">
          {`I'm a self-taught Software Engineer with a passion for front-end web development. I thrive on learning new technologies and adapting to different challenges, always striving to improve my skills and deliver high-quality solutions. My experience spans working with frameworks like Angular and React, as well as building APIs using C#, Node.js, and NestJS.`}
        </p>
        <p className="text-lg text-gray-700">
          {`I enjoy working with both SQL and NoSQL databases, and have hands-on experience with CMS platforms such as Sitecore and WordPress. Beyond front-end development, I'm interested in DevOps practices, including CI/CD pipelines with tools like Terraform and CircleCI. I'm also enthusiastic about integrating AI into development workflows to create smarter, more efficient applications.`}
        </p>
      </div>
    </div>
  )
}
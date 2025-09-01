export default function Page() {
  return (
    <section className="py-20 bg-emerald-100 text-black pt-16 text-weight-bold">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
        <p className="text-lg mb-6">
          Interested in collaborating? Reach out to me!
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
          <a href="mailto:your.email@example.com" className="hover:underline">
            Email
          </a>
        </div>
      </div>
    </section>
  );
}

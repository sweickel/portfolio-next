import { Link } from '@/ui';

export default function Page() {
  const links = [
    { href: "https://github.com/sweickel", label: "GitHub" },
    { href: "https://linkedin.com/in/sweickel", label: "LinkedIn" },
    { href: "mailto:sean@weickel.org", label: "Email" },
  ];
  return (
    <div className="flex justify-center items-center py-12 min-h-screen">
      <div className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-xl p-10 text-gray-900 overflow-hidden text-center">
        <h2 className="text-3xl font-bold mb-8 text-blue-900">Get in Touch</h2>
        <p className="text-lg mb-6 text-gray-700">
          Interested in collaborating? Reach out to me!
        </p>
        <div className="flex justify-center space-x-6">
          {links.map((link) => (
            <Link key={link.label} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

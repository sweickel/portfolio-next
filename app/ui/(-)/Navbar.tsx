"use client";

import { Link } from "@/ui";
import { HomeIcon } from "@heroicons/react/24/outline";

const links = [
  { href: "/blog", label: "Blog" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="w-full max-w-5xl mx-auto flex justify-around md:justify-between items-center py-4 px-4">
        <Link
          href="/"
          className="text-xl font-bold flex items-center hover:text-blue-700"
          aria-label="Dashboard"
        >
          <HomeIcon className="h-6 w-6 mr-2 text-blue-700" />
        </Link>

        <div className="space-x-4">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:underline hover:text-blue-700">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

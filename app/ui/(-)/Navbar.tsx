"use client";

import Link from "next/link";
import { HomeIcon } from "@heroicons/react/24/outline";

const links = [
  { href: "/blog", label: "Blog" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="bg-secondary text-background p-4 w-full top-0 shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-bold flex items-center hover:text-accent"
          aria-label="Dashboard"
        >
          <HomeIcon className="h-6 w-6 mr-2 text-accent" />
        </Link>

        <div className="space-x-4">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:underline">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

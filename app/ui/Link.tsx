import React from "react";
import { default as NextLink } from "next/link";

export function Link({
  href,
  children,
  className,
  external = false
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}): React.ReactElement {
  return (
    <NextLink
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`hover:underline text-blue-400 ${className}`}
    >
      {children}
    </NextLink>
  );
}

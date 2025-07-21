// components/ActiveLink.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface ActiveLinkProps {
  href: string;
  exact?: boolean;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
}

export function ActiveLink({
  href,
  exact = false,
  children,
  className,
  activeClassName = "text-primary font-semibold",
}: ActiveLinkProps) {
  const pathname = usePathname();

  const isActive = exact
    ? pathname === href
    : (pathname.startsWith(href) && href !== "/") ||
      (pathname === "/" && href === "/");

  return (
    <Link href={href} className={cn(className, isActive && activeClassName)}>
      {children}
    </Link>
  );
}

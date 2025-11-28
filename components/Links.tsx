"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, socialLinks } from "@/constants";

export function NavLinks({ mobile = false }: { mobile?: boolean }) {
  const pathname = usePathname();

  return (
    <div
      className={`flex ${
        mobile
          ? "flex-col gap-3 py-4 border-t border-gray-100"
          : "items-center gap-3"
      }`}
    >
      {navLinks.map((item) => {
        const isActive =
          item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

        const baseClass =
          "px-4 py-2 text-body-medium bg-clip-text text-transparent transition-colors bg-gradient-to-br from-gray-700 to-gray-900 hover:from-green-secondary hover:to-green-primary";

        const activeClass = "bg-green-gradient bg-clip-text text-transparent";
        const inactiveClass = "text-bodyblack";

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`${baseClass} ${isActive ? activeClass : inactiveClass}`}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}

export function FooterNavLinks() {
  return (
    <nav className="flex md:flex-row flex-col md:items-center gap-8">
      {navLinks.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-white text-body-semibold hover:opacity-80 transition-opacity"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

export function FooterSocialLinks() {
  {
    return socialLinks.map((item) => (
      <a
        key={item.alt}
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition-opacity"
      >
        <img src={item.img} alt={item.alt} />
      </a>
    ));
  }
}

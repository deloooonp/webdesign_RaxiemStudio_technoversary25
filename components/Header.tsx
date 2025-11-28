"use client";

import Link from "next/link";
import { useState } from "react";
import { NavLinks } from "./Links";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full sticky bg-background top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto h-20 flex justify-between items-center px-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="text-logo font-bold bg-green-gradient bg-clip-text text-transparent">
            ECOVEST
          </span>
        </Link>

        <nav className="hidden lg:flex items-center">
          <NavLinks />
          <div className="ml-4 flex gap-2">
            <Link
              href="/user"
              className="px-4 py-4 text-body-medium text-white bg-green-gradient rounded-[10px] hover:shadow-lg transition-all"
            >
              Login
            </Link>
          </div>
        </nav>

        <div className="lg:hidden flex items-center">
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="p-2 rounded-md border border-gray-200"
          >
            <img src="/icons/mobilebutton.svg"></img>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden">
          <NavLinks mobile />
          <div className="flex flex-col gap-3 px-4 pb-4">
            <Link
              href="/user"
              className="py-2 text-body text-white bg-green-gradient rounded-md text-center"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

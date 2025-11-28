"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { dashLinks } from "@/constants";
import { useState } from "react";

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-51 p-2 rounded-md bg-green-primary text-white"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          {isOpen ? (
            <path
              d="M18 6L6 18M6 6l12 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          ) : (
            <path
              d="M3 12H21M3 6H21M3 18H21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          )}
        </svg>
      </button>
      <aside
        className={`fixed top-0 left-0 h-screen w-[316px] bg-background shadow-2xl transition-transform duration-200 z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex flex-col items-start gap-[52px] px-[66.5px] py-9 h-full">
          <div className="flex w-[163px] h-[60px] justify-center items-center">
            <Link
              href="/"
              className="bg-green-gradient bg-clip-text text-transparent text-logo font-bold"
            >
              ECOVEST
            </Link>
          </div>

          <nav className="flex flex-col gap-[30.9px] w-full">
            {dashLinks.map((item) => {
              const isActive =
                item.href === "/user"
                  ? pathname === "/user"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-[15px] px-2.5 py-2.5 rounded-[10px] transition-colors duration-200 ${
                    isActive
                      ? "bg-green-gradient text-body-semibold text-background"
                      : "hover:bg-section-alt/80"
                  }`}
                >
                  <img
                    src={isActive ? item.imgWhite : item.imgBlack}
                    alt={item.label}
                  />
                  <span
                    className={`text-body-medium ${
                      isActive ? "text-background" : "text-bodyblack"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
            <Link
              href="/"
              className="relative flex items-center gap-[15px] p-2.5 group border-[1.75px] border-gradient rounded-xl"
            >
              <img src="/icons/user/arrow-home.svg" alt="Home" />
              <span className="text-body-medium bg-green-gradient bg-clip-text text-transparent">
                Home
              </span>
            </Link>
          </nav>
        </div>
      </aside>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}

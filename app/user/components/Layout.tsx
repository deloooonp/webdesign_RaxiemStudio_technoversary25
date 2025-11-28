"use client";

import { Sidebar, Header } from "./";
import { ReactNode } from "react";

export default function Layout({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 lg:ml-[316px]">
        <Header title={title} />
        <div className="px-4 py-6 sm:px-6 lg:px-12 lg:py-8">{children}</div>
      </main>
    </div>
  );
}

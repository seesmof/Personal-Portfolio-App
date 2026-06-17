"use client";

import Link from "next/link";
import { useState } from "react";

export default function HomePage() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-sky-50">
      <div className="flex mx-auto max-w-3xl flex-col gap-3 p-3">
        <header className="justify-between flex bg-white rounded-md p-3">
          <Link className="hover:underline underline-offset-4" href={"/"}>
            seesmof
          </Link>
          <div className="gap-3 hidden sm:flex">
            <Link href={"/"}>Home</Link>
            <Link href={"/projects/"}>Projects</Link>
            <Link href={"/articles/"}>Articles</Link>
            <Link href={"/contact/"}>Contact</Link>
          </div>
          <button
            className="block sm:hidden hover:underline underline-offset-4"
            onClick={() => setIsOpen((isOpen) => !isOpen)}
          >
            {isOpen ? "Hide" : "Open"}
          </button>
        </header>
        {isOpen && (
          <>
            <nav className="flex flex-col gap-3 bg-white w-full p-3 rounded-md">
              <Link href={"/"}>Home</Link>
              <Link href={"/projects/"}>Projects</Link>
              <Link href={"/articles/"}>Articles</Link>
              <Link href={"/contact/"}>Contact</Link>
            </nav>
          </>
        )}
      </div>
    </div>
  );
}

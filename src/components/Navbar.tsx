"use client";

import Link from "next/link";
import { useState } from "react";

const NavigationLinks = () => {
  return (
    <>
      <Link
        className="hover:underline underline-offset-4 decoration-green-600"
        href="https://github.com/seesmof"
      >
        GitHub
      </Link>
      <Link
        className="hover:underline underline-offset-4 decoration-green-600"
        href="mailto:seesmwork@gmail.com"
      >
        EMail
      </Link>
      <Link
        className="hover:underline underline-offset-4 decoration-green-600"
        href="https://t.me/seesmof"
      >
        Telegram
      </Link>
    </>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <section className="sticky top-3 flex flex-col gap-3 z-50">
      <header className="justify-between flex bg-white outline outline-stone-100 rounded-md p-3">
        <Link
          className="hover:underline decoration-green-600 underline-offset-4"
          href={"/"}
        >
          seesmof
        </Link>
        <div className="gap-3 hidden sm:flex">
          <NavigationLinks />
        </div>
        <button
          className="block sm:hidden hover:underline underline-offset-4 cursor-pointer"
          onClick={() => setIsOpen((isOpen) => !isOpen)}
        >
          {isOpen ? "Hide" : "Open"}
        </button>
      </header>
      {isOpen && (
        <>
          <nav className="flex flex-col gap-3 bg-white outline outline-stone-100 w-full p-3 rounded-md">
            <NavigationLinks />
          </nav>
        </>
      )}
    </section>
  );
}

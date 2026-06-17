"use client";

import EducationSection from "@/components/index/EducationSection";
import ProjectsSection from "@/components/index/ProjectsSection";
import SkillsSection from "@/components/index/SkillsSection";
import Link from "next/link";
import { useState } from "react";

const NavigationLinks = () => {
  return (
    <>
      <Link
        className="hover:underline underline-offset-4 decoration-green-600"
        href={"/projects/"}
      >
        Projects
      </Link>
      <Link
        className="hover:underline underline-offset-4 decoration-green-600"
        href={"/articles/"}
      >
        Articles
      </Link>
      <Link
        className="hover:underline underline-offset-4 decoration-green-600"
        href={"/contact/"}
      >
        Contact
      </Link>
    </>
  );
};

export default function HomePage() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-green-50">
      <div className="flex mx-auto max-w-3xl flex-col gap-3 p-3">
        {/* Navbar */}
        <section className="sticky top-3 flex flex-col gap-3 z-50">
          <header className="justify-between flex bg-white rounded-md p-3">
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
              <nav className="flex flex-col gap-3 bg-white w-full p-3 rounded-md">
                <NavigationLinks />
              </nav>
            </>
          )}
        </section>

        {/* Hero Section */}
        <section className="flex flex-col bg-white rounded-md p-3 py-24 justify-center items-center">
          <h1 className="font-bold text-3xl sm:text-4xl">
            Christian Frontend Developer
          </h1>
          <p className="mt-3 text-stone-600">
            Working for the glory of our Lord Jesus Christ.
          </p>
        </section>

        <div className="flex sm:flex-row flex-col gap-3">
          <ProjectsSection />
          <div className="flex flex-col gap-3">
            <EducationSection />
            <SkillsSection />
          </div>
        </div>
      </div>
    </div>
  );
}

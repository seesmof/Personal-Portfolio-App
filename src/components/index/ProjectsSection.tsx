import Link from "next/link";

interface Project {
  name: string;
  href: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    name: "Bible Memorization App",
    href: "https://bible-memorization-app.vercel.app/",
    technologies: ["Next.js", "FastAPI", "Express.js"],
  },
  {
    name: "Tic Tac Toe App",
    href: "https://tic-tac-toe-next-js-ruby.vercel.app/",
    technologies: ["Next.js"],
  },
  {
    name: "Tabs Component",
    href: "https://tabs-component-next-js.vercel.app/",
    technologies: ["Next.js"],
  },
  {
    name: "Life Guide",
    href: "https://life-guide-three.vercel.app/",
    technologies: ["Next.js"],
  },
  {
    name: "Bible Accordion Component",
    href: "https://bible-trivia-accordion.vercel.app/",
    technologies: ["Next.js"],
  },
  {
    name: "Cars Search Component",
    href: "https://cars-search-next-js.vercel.app/",
    technologies: ["Next.js"],
  },
  {
    name: "Accessible Form Component",
    href: "https://accessible-signup-form.vercel.app/",
    technologies: ["Next.js"],
  },
  {
    name: "Todo App",
    href: "https://todo-app-ten-chi-22.vercel.app/",
    technologies: ["Next.js"],
  },
  {
    name: "Categories Switcher",
    href: "https://categories-switcher-app.vercel.app/",
    technologies: ["Next.js"],
  },
  {
    name: "Random Bible Verse",
    href: "https://random-bible-verse-liart.vercel.app/",
    technologies: ["Next.js"],
  },
  {
    name: "Cart App",
    href: "https://shopping-cart-webapp-five.vercel.app/",
    technologies: ["Next.js", "Zustand"],
  },
  {
    name: "Flags Viewer",
    href: "https://flags-viewer.vercel.app/",
    technologies: ["Next.js"],
  },
  {
    name: "Bible Viewer",
    href: "https://open-bible-reader.vercel.app/JHN/3",
    technologies: ["Next.js"],
  },
];

const ProjectComponent = ({ project }: { project: Project }) => {
  return (
    <div className="flex flex-col gap-1">
      <h3 className="font-bold">
        <Link
          className="hover:underline underline-offset-4 decoration-green-600"
          href={project.href}
        >
          {project.name}
        </Link>
      </h3>
      <div className="flex gap-3 text-sm text-stone-600">
        {project.technologies.map((technology, index) => (
          <p key={index}>{technology}</p>
        ))}
      </div>
    </div>
  );
};

export default function ProjectsSection() {
  return (
    <section className="flex flex-col gap-3 p-3 bg-white outline outline-stone-100 shadow rounded-md flex-1 h-fit">
      <h2 className="font-semibold text-lg sm:text-xl">Projects</h2>
      {projects
        .sort((one, two) => one.name.localeCompare(two.name))
        .map((project, index) => (
          <ProjectComponent project={project} key={index} />
        ))}
    </section>
  );
}

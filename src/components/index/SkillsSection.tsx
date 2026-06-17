const skills: string[] = ["Python", "TypeScript", "React", "TailwindCSS"];

export default function SkillsSection() {
  return (
    <section className="flex flex-col gap-3 p-3 bg-white outline outline-stone-100 rounded-md">
      <h2 className="font-semibold text-lg sm:text-xl">Skills</h2>
      <ul className="list-disc list-inside ml-1">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

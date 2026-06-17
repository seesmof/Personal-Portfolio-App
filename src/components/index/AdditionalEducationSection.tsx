interface Education {
  title: string;
  description: string;
}

const educations: Education[] = [
  {
    title: "Networking Basics",
    description: "A networking course by Cisco. 2025",
  },
  {
    title: "HTML & CSS Course",
    description: "A frontend templating course by Freshcode. 2023",
  },
];

export default function AdditionalEducationSection() {
  return (
    <section className="bg-white roundmd p-3 flex flex-col gap-3">
      <h2 className="font-semibold text-lg sm:text-xl">Additional Education</h2>
      {educations.map((education, index) => (
        <div className="flex flex-col gap-1" key={index}>
          <h3 className="font-bold">{education.title}</h3>
          <p className="text-stone-600 text-sm">{education.description}</p>
        </div>
      ))}
    </section>
  );
}

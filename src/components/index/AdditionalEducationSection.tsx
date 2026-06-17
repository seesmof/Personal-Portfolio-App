import Link from "next/link";

interface Education {
  title: string;
  description: string;
  certificateHref: string;
}

const educations: Education[] = [
  {
    title: "Networking Basics",
    description: "A networking course by Cisco. 2025",
    certificateHref: "cisco",
  },
  {
    title: "HTML & CSS Course",
    description: "A frontend templating course by Freshcode. 2023",
    certificateHref: "freshcode",
  },
];

export default function AdditionalEducationSection() {
  return (
    <section className="bg-white outline outline-stone-100 rounded-md p-3 flex flex-col gap-3">
      <h2 className="font-semibold text-lg sm:text-xl">Additional Education</h2>
      {educations.map((education, index) => (
        <Link
          href={`/certificates/${education.certificateHref}.pdf`}
          className="flex flex-col gap-1 group"
          key={index}
        >
          <h3 className="font-bold group-hover:underline underline-offset-4 decoration-green-600">
            {education.title}
          </h3>
          <p className="text-stone-600 text-sm">{education.description}</p>
        </Link>
      ))}
    </section>
  );
}

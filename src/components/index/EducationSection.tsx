interface Education {
  name: string;
  details: string;
}

const EducationComponent = ({ education }: { education: Education }) => {
  return (
    <div className="flex flex-col gap-1">
      <h3 className="font-bold">{education.name}</h3>
      <p className="text-stone-600 text-sm">{education.details}</p>
    </div>
  );
};

const educationDetails: Education[] = [
  { name: "Zaporizhzhia School №47", details: "School Education. 2011-2022" },
  {
    name: 'National University "Zaporizhzhia Polytechnic"',
    details: "Bachelor's Education. 2022-2026",
  },
];

export default function EducationSection() {
  return (
    <section className="flex flex-col gap-3 p-3 bg-white outline outline-stone-100 rounded-md">
      <h2 className="font-semibold text-lg sm:text-xl">Education</h2>
      {educationDetails.map((detail, index) => (
        <EducationComponent education={detail} key={index} />
      ))}
    </section>
  );
}

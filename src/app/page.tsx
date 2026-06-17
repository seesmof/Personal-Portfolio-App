import AdditionalEducationSection from "@/components/index/AdditionalEducationSection";
import EducationSection from "@/components/index/EducationSection";
import ProjectsSection from "@/components/index/ProjectsSection";
import SkillsSection from "@/components/index/SkillsSection";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-green-50">
      <div className="flex mx-auto max-w-3xl flex-col gap-3 p-3">
        <Navbar />

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
            <AdditionalEducationSection />
            <SkillsSection />
          </div>
        </div>
      </div>
    </div>
  );
}

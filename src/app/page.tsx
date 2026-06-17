import Navbar from "@/components/Navbar";
import HeroSection from "@/components/index/HeroSection";
import ProjectsSection from "@/components/index/ProjectsSection";
import EducationSection from "@/components/index/EducationSection";
import AdditionalEducationSection from "@/components/index/AdditionalEducationSection";
import SkillsSection from "@/components/index/SkillsSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-green-50">
      <div className="flex mx-auto max-w-3xl flex-col gap-3 p-3">
        <Navbar />
        <HeroSection />
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

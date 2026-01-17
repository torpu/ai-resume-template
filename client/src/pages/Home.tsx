import { useState, useRef } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsGrid from "@/components/SkillsGrid";
import FitCheckTool from "@/components/FitCheckTool";
import Footer from "@/components/Footer";
import ChatInterface from "@/components/ChatInterface";
import { resumeData } from "@/data/resumeData";

export default function Home() {
  const [showChat, setShowChat] = useState(false);
  const experienceRef = useRef<HTMLDivElement>(null);
  const fitCheckRef = useRef<HTMLDivElement>(null);

  const handleNavigate = (section: string) => {
    switch (section) {
      case "hero":
        window.scrollTo({ top: 0, behavior: "smooth" });
        break;
      case "experience":
        experienceRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "fit-check":
        fitCheckRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "ask-ai":
        setShowChat(true);
        break;
      default:
        break;
    }
  };

  const companies = resumeData.experience
    .map((exp) => exp.company)
    .filter((company, index, self) => self.indexOf(company) === index);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <Navigation
        onNavigate={handleNavigate}
        initials={resumeData.personal.initials}
      />

      {/* Hero Section */}
      <HeroSection
        name={resumeData.personal.name}
        title={resumeData.personal.title}
        bio={resumeData.personal.bio}
        status={resumeData.personal.status}
        companies={companies}
        onAskAI={() => setShowChat(true)}
      />

      {/* Experience Section */}
      <div ref={experienceRef}>
        <ExperienceSection experiences={resumeData.experience} />
      </div>

      {/* Skills Grid */}
      <SkillsGrid
        strong={resumeData.skills.strong}
        moderate={resumeData.skills.moderate}
        gaps={resumeData.skills.gaps}
      />

      {/* Fit Check Tool */}
      <div ref={fitCheckRef}>
        <FitCheckTool />
      </div>

      {/* Footer */}
      <Footer
        name={resumeData.personal.name}
        title={resumeData.personal.title}
        social={resumeData.social}
      />

      {/* Chat Interface */}
      <ChatInterface
        isOpen={showChat}
        onClose={() => setShowChat(false)}
        candidateName={resumeData.personal.name}
      />
    </div>
  );
}

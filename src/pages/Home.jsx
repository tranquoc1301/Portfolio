import React, { useState } from "react";
import { StarBackground } from "@components/StarBackground";
import { ThemeToggle } from "@components/ThemeToggle";
import { Navbar } from "@components/NavBar";
import { HeroSection } from "@components/HeroSection";
import { AboutMe } from "@components/AboutMe";
import { SkillsSection } from "@components/SkillsSection";
import { ProjectsSection } from "@components/ProjectsSection";
import { ContactSection } from "@components/ContactSection";
import { Footer } from "@components/Footer";

export const Home = () => {
  const [activeSection, setActiveSection] = useState("#hero");
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme toggle */}
      <ThemeToggle />
      {/* Background Effects */}
      <StarBackground />
      {/* Navbar */}
      <Navbar onSectionChange={setActiveSection} />
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutMe isActive={activeSection === "#about"} />
        <SkillsSection isActive={activeSection === "#skills"} />
        <ProjectsSection isActive={activeSection === "#projects"} />
        <ContactSection isActive={activeSection === "#contact"} />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

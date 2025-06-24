import { StarBackground } from "@components/StarBackground";
import { ThemeToggle } from "@components/ThemeToggle";
import { Navbar } from "@components/NavBar";
import { HeroSection } from "@components/HeroSection";
import { AboutMe } from "@components/AboutMe";
import { SkillsSection } from "@components/SkillsSection";
import { ProjectsSection } from "@components/ProjectsSection";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme toggle */}
      <ThemeToggle />
      {/* Background Effects */}
      <StarBackground />
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutMe />
        <SkillsSection />
        <ProjectsSection />
      </main>
      {/* Footer */}
    </div>
  );
};

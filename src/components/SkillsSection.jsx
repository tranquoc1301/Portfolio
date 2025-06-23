import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Code,
  Server,
  Wrench,
  Monitor,
  Languages,
  Globe,
  Database,
  GitBranch,
  Palette,
  Layout,
  FileText,
} from "lucide-react";

const skills = [
  // Frontend
  { name: "HTML/CSS", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "Tailwind", category: "Frontend" },
  { name: "Bootstrap", category: "Frontend" },
  // Backend
  { name: "Node.js", category: "Backend" },
  { name: "Express", category: "Backend" },
  { name: "Flask", category: "Backend" },
  { name: "MySQL", category: "Backend" },
  { name: "PostgreSQL", category: "Backend" },
  // Tools
  { name: "Git/GitHub", category: "Tools" },
  { name: "VS Code", category: "Tools" },
  { name: "Figma", category: "Tools" },
  { name: "Trello", category: "Tools" },
  // OS
  { name: "Windows", category: "OS" },
  { name: "Linux", category: "OS" },
  // Languages
  { name: "English (Basic)", category: "Languages" },
  { name: "Vietnamese (Native)", category: "Languages" },
  { name: "Japanese (Basic)", category: "Languages" },
];

const categories = [
  { name: "All", icon: Globe },
  { name: "Frontend", icon: Layout },
  { name: "Backend", icon: Server },
  { name: "Tools", icon: Wrench },
  { name: "OS", icon: Monitor },
  { name: "Languages", icon: Languages },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filterSkills = skills.filter((skill) => {
    if (activeCategory === "All") return true;
    return skill.category === activeCategory;
  });

  return (
    <section
      id="skills"
      className="py-24 px-4 relative bg-gradient-to-b from-secondary/20 to-secondary/40"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center tracking-tight">
          My{" "}
          <span className="text-primary bg-clip-text bg-gradient-to-r from-primary to-primary/60">
            Skills
          </span>
        </h2>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <button
                key={index}
                className={cn(
                  "px-5 py-2 rounded-full transition-all duration-300 capitalize cursor-pointer",
                  "flex items-center gap-2 text-sm font-medium",
                  "ring-1 ring-secondary/30 hover:ring-primary/50",
                  activeCategory === category.name
                    ? "bg-primary text-primary-foreground font-bold shadow-md scale-105"
                    : "bg-secondary/80 text-foreground hover:bg-secondary/60 hover:scale-105"
                )}
                onClick={() => setActiveCategory(category.name)}
                aria-pressed={activeCategory === category.name}
              >
                <Icon className="w-4 h-4" />
                {category.name}
              </button>
            );
          })}
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filterSkills.map((skill, index) => (
            <li
              key={index}
              className={cn(
                "bg-card rounded-xl p-6 shadow-sm transition-all duration-300",
                "hover:shadow-lg hover:-translate-y-1 hover:bg-card/90",
                "border border-secondary/20"
              )}
            >
              <span className="text-lg font-semibold text-foreground">
                {skill.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

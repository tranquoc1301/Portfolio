import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  Server,
  Wrench,
  Monitor,
  Languages,
  Globe,
  Layout,
} from "lucide-react";

import HTMLIcon from "@/assets/icons/html.svg";
import CSSIcon from "@/assets/icons/css.svg";
import JSIcon from "@/assets/icons/javascript.svg";
import ReactIcon from "@/assets/icons/react.svg";
import NodeIcon from "@/assets/icons/Node.png";
import ExpressIcon from "@/assets/icons/express-js.png";
import FlaskIcon from "@/assets/icons/flask.png";
import MySQLIcon from "@/assets/icons/mysql.svg";
import PostgreSQLIcon from "@/assets/icons/Postgresql.png";
import GitHubDarkIcon from "@/assets/icons/github-mark-white.svg";
import GitHubLightIcon from "@/assets/icons/github.svg";
import VSCodeIcon from "@/assets/icons/vscode.png";
import FigmaIcon from "@/assets/icons/figma.svg";
import TrelloIcon from "@/assets/icons/trello.svg";
import WindowsIcon from "@/assets/icons/Windows.png";
import LinuxIcon from "@/assets/icons/linux.png";
import EnglishIcon from "@/assets/icons/english.svg";
import VietnameseIcon from "@/assets/icons/vietnamese.svg";
import JapaneseIcon from "@/assets/icons/japan.png";
import TailwindIcon from "@/assets/icons/tailwind.svg";
import BootstrapIcon from "@/assets/icons/Bootstrap.png";

const skills = [
  { name: "HTML", category: "Frontend" },
  { name: "CSS", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "TailwindCSS", category: "Frontend" },
  { name: "Bootstrap", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express", category: "Backend" },
  { name: "Flask", category: "Backend" },
  { name: "MySQL", category: "Backend" },
  { name: "PostgreSQL", category: "Backend" },
  { name: "Git/GitHub", category: "Tools" },
  { name: "VS Code", category: "Tools" },
  { name: "Figma", category: "Tools" },
  { name: "Trello", category: "Tools" },
  { name: "Windows", category: "OS" },
  { name: "Linux", category: "OS" },
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

export const SkillsSection = ({ isActive }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [theme, setTheme] = useState(
    document.documentElement.classList.contains("dark") ? "dark" : "light"
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setTheme(
        document.documentElement.classList.contains("dark") ? "dark" : "light"
      );
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  const skillIcons = {
    HTML: HTMLIcon,
    CSS: CSSIcon,
    JavaScript: JSIcon,
    React: ReactIcon,
    TailwindCSS: TailwindIcon,
    Bootstrap: BootstrapIcon,
    "Node.js": NodeIcon,
    Express: ExpressIcon,
    Flask: FlaskIcon,
    MySQL: MySQLIcon,
    PostgreSQL: PostgreSQLIcon,
    "Git/GitHub": theme === "dark" ? GitHubDarkIcon : GitHubLightIcon,
    "VS Code": VSCodeIcon,
    Figma: FigmaIcon,
    Trello: TrelloIcon,
    Windows: WindowsIcon,
    Linux: LinuxIcon,
    "English (Basic)": EnglishIcon,
    "Vietnamese (Native)": VietnameseIcon,
    "Japanese (Basic)": JapaneseIcon,
  };

  function renderSkillIcon(skillName) {
    const Icon = skillIcons[skillName];
    if (!Icon)
      return (
        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-secondary/40 text-secondary">
          ?
        </span>
      );
    return (
      <img
        src={Icon}
        alt={skillName + " icon"}
        className="w-8 h-8 object-contain transition-transform duration-200 group-hover:scale-110"
        loading="lazy"
      />
    );
  }

  const filterSkills = skills.filter((skill) =>
    activeCategory === "All" ? true : skill.category === activeCategory
  );

  return (
    <section
      id="skills"
      className="py-20 px-2 sm:px-4 bg-gradient-to-b from-secondary/20 to-secondary/40"
    >
      <div className="container mx-auto max-w-5xl">
        <h2
          className={`text-3xl md:text-4xl font-bold mb-2 tracking-tight ${
            isActive ? "text-glow" : ""
          }`}
        >
          {" "}
          My{" "}
          <span className="text-primary bg-clip-text bg-gradient-to-r from-primary to-primary/60">
            Skills
          </span>
        </h2>
        {isActive && (
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-400 mx-auto rounded-full grow-in"></div>
        )}

        <div className="flex flex-wrap justify-center gap-4 mt-6 mb-10">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.name}
                className={cn(
                  "px-4 py-2 rounded-full transition-all duration-200 capitalize cursor-pointer",
                  "flex items-center gap-2 text-sm font-medium",
                  "ring-1 ring-secondary/30 hover:ring-primary/50",
                  activeCategory === category.name
                    ? "bg-primary text-primary-foreground font-bold shadow scale-105"
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
          {filterSkills.map((skill) => (
            <li
              key={skill.name}
              className={cn(
                "bg-card rounded-xl p-5 shadow-sm transition-all duration-200 group",
                "hover:shadow-lg hover:-translate-y-1 hover:bg-card/90",
                "border border-secondary/20 flex items-center gap-4"
              )}
            >
              {renderSkillIcon(skill.name)}
              <span className="text-base md:text-lg font-semibold text-foreground">
                {skill.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

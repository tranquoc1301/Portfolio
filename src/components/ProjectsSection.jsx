import GithubIcon from "@assets/icons/github-mark-white.svg";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Online Library Website - Fullstack",
    description:
      "A simple web application allow users to read and download books online",
    link: "https://github.com/tranquoc1301/library_web",
    tags: ["Bootstrap", "HTML", "CSS", "JavaScript", "MySQL", "Flask"],
  },
  {
    id: 2,
    title: "Simple Spotify Clone - Frontend",
    description:
      "A simple frontend clone of Spotify, offering a familiar and intuitive experience for browsing music content.",
    link: "https://github.com/tranquoc1301/spotify-clone",
    tags: ["React", "Tailwind", "JavaScript"],
  },
  {
    id: 3,
    title: "My Portfolio Website - Frontend",
    description:
      "A personal portfolio website showcasing my skills, projects, and contact information.",
    link: "https://github.com/tranquoc1301/portfolio",
    tags: ["React", "Tailwind", "JavaScript", "CSS"],
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 px-4 relative overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center animate-fade-in">
          My{" "}
          <span className="text-primary bg-clip-text bg-gradient-to-r from-primary to-primary/60">
            Projects
          </span>
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in-delay-1">
          Here are some of my personal projects that I have worked on. Each
          project is a unique opportunity to learn and grow, and I am excited to
          share them with you.
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <li
              key={project.id}
              className="flex flex-col bg-card rounded-lg overflow-hidden gradient-border card-hover animate-fade-in-delay-2 h-full"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="p-5 flex flex-col h-full">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2.5 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground hover:shadow-sm transition-all duration-200 hover:scale-105"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cosmic-button inline-block text-sm px-4 py-1.5"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="text-center mt-10 animate-fade-in-delay-3">
          <a
            href="https://github.com/tranquoc1301"
            target="_blank"
            rel="noopener noreferrer"
            className="cosmic-button inline-flex items-center text-sm px-4 py-1.5"
            aria-label="Visit my GitHub profile"
          >
            Check My
            <img
              src={GithubIcon}
              alt="GitHub logo"
              className="w-4 h-4 mx-1.5"
            />
            GitHub
            <ArrowRight size={16} className="ml-1.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

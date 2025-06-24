import SpotifyClonePreview from "@assets/projects/spotifyclone.png";
import GithubIcon from "@assets/icons/github-mark-white.svg";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Online Library Website - Fullstack",
    description:
      "A simple web application allow users to read and download books online",
    image: "",
    link: "https://github.com/tranquoc1301/library_web",
    tags: ["Bootstrap", "HTML", "CSS", "JavaScript", "MySQL", "Flask"],
  },
  {
    id: 2,
    title: "Simple Spotify Clone - Frontend",
    description:
      "A simple frontend clone of Spotify, offering a familiar and intuitive experience for browsing music content.",
    image: SpotifyClonePreview,
    link: "https://github.com/tranquoc1301/spotify-clone",
    tags: ["React", "Tailwind", "JavaScript"],
  },
];
export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My{" "}
          <span className="text-primary bg-clip-text bg-gradient-to-r from-primary to-primary/60">
            Projects
          </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my personal projects that I have worked on. Each
          project is a unique opportunity to learn and grow, and I am excited to
          share them with you.
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project) => (
            <li
              key={project.id}
              className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-2 mb-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border border-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cosmic-button"
                >
                  View Project
                </a>
              </div>
            </li>
          ))}
        </ul>

        <div className="text-center mt-12">
          <a
            href="https://github.com/tranquoc1301"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-gray-900 dark:bg-gray-700 rounded-full hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-200 hover:shadow-lg group w-fit mx-auto"
            aria-label="Visit my GitHub profile"
          >
            Check My
            <img
              src={GithubIcon}
              alt="GitHub logo"
              className="w-5 h-5 mx-2 transition-transform duration-500 group-hover:scale-110"
            />
            GitHub
            <ArrowRight
              size={20}
              className="ml-2 transition-transform duration-400 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

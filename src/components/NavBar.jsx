import { cn } from "@/lib/utils";
import { Menu, X, House, User, Wrench, FolderGit2, Mail } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { name: "Home", href: "#hero", icon: House },
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: Wrench },
  { name: "Projects", href: "#projects", icon: FolderGit2 },
  { name: "Contact", href: "#contact", icon: Mail },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = navItems.map((item) => ({
        href: item.href,
        element: document.querySelector(item.href),
      }));

      const currentSection = sections.find((section) => {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveItem(currentSection.href);
      } else if (window.scrollY < 100) {
        setActiveItem("#hero");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const handleNavClick = (href) => {
    setIsMenuOpen(false);
    setActiveItem(href);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/90 backdrop-blur-lg shadow-sm" : "py-4"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          href="#hero"
          className="text-2xl font-bold text-primary flex items-center hover:animate-float"
          onClick={() => handleNavClick("#hero")}
        >
          <span className="relative z-10 text-glow">
            <span className="text-foreground">Quoc</span> Portfolio
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => handleNavClick(item.href)}
              className={cn(
                "text-foreground/80 hover:text-primary text-base font-medium transition-all duration-200 px-4 py-2 rounded-full hover:scale-105",
                activeItem === item.href
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-primary/20 hover:text-glow"
              )}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Nav Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Nav Menu */}
        <div
          className={cn(
            "fixed top-[64px] right-4 w-64 h-auto bg-background/90 shadow-md z-40 flex flex-col items-start px-6 py-6 rounded-xl gradient-border",
            "transition-all duration-200 ease-in-out md:hidden",
            isMenuOpen
              ? "opacity-100 translate-x-0 pointer-events-auto"
              : "opacity-0 translate-x-full pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-2 w-full">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className={cn(
                  "flex items-center text-foreground/80 hover:text-primary text-base font-medium transition-all duration-200 px-4 py-2 rounded-full hover:scale-105",
                  activeItem === item.href
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-primary/20 hover:text-glow"
                )}
              >
                <item.icon size={20} className="mr-2" />
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

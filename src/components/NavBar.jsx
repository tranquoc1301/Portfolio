import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("hero");

  // Handle scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // Fixed: window.screenY -> window.scrollY
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle active item based on section in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveItem(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" } // Trigger when section is in the middle 50% of viewport
    );

    navItems.forEach((item) => {
      const element = document.querySelector(item.href);
      if (element) observer.observe(element);
    });

    return () => {
      navItems.forEach((item) => {
        const element = document.querySelector(item.href);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          href="#hero"
          className="text-xl font-bold text-primary flex items-center"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">Quoc</span> Portfolio
          </span>
        </a>

        {/* Desktop Nav */}
        <div>
          <div className="hidden md:flex space-x-12">
            {navItems.map((item, key) => (
              <a
                href={item.href}
                key={key}
                className={cn(
                  "relative text-foreground/80 text-base font-medium",
                  "hover:text-primary transition-all duration-300 ease-in-out",
                  "after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary",
                  "hover:after:w-full after:transition-all after:duration-300 after:ease-in-out",
                  activeItem === item.href.slice(1) &&
                    "text-primary after:w-full"
                )}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Nav */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                href={item.href}
                key={key}
                className={cn(
                  "text-foreground/80 hover:text-primary transition-colors duration-300",
                  activeItem === item.href.slice(1) && "text-primary"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

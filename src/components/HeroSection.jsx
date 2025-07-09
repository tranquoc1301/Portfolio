import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  const [isVisible, setScrollIndicatorVisible] = useState(true);

  useEffect(() => {
    function handleScroll() {
      // Hide the scroll indicator if scrolled past 100px
      if (window.scrollY > 100) {
        setScrollIndicatorVisible(false);
      } else {
        setScrollIndicatorVisible(true);
      }
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Tran
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              Quoc
            </span>
          </h1>
          <p className="text-lg text-center md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I am a year 4 student at Danang University Of Science and Technology
            (DUT), majoring in Computer Science. My future goal is to become a
            fullstack developer.
          </p>
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a className="cosmic-button" href="#projects">
              View My Projects
            </a>
          </div>
        </div>
      </div>
      {isVisible && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-sm text-muted-foreground mb-2">Scroll</span>
          <ArrowDown className="h-5 w-5 text-primary" />
        </div>
      )}
    </section>
  );
};

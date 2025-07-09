import { Code, Cpu, Music, FileText, Mail } from "lucide-react";

export const AboutMe = ({ isActive }) => {
  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-2 tracking-tight ${
              isActive ? "text-glow" : ""
            }`}
          >
            About <span className="text-primary">Me</span>
          </h2>
          {isActive && (
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-400 mx-auto rounded-full grow-in"></div>
          )}
          <p className="text-lg text-center md:text-xl mt-4 text-foreground/90 max-w-2xl mx-auto leading-relaxed">
            I'm a computer science student passionate about building responsive,
            user-friendly websites, exploring hardware innovation, and finding
            creative inspiration through music.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-fade-in-delay-1">
          <div className="bg-card/90 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 text-center shadow-lg card-hover gradient-border group">
            <div className="mb-4 p-3 bg-primary/10 rounded-full w-fit mx-auto group-hover:bg-primary/20 transition-colors">
              <Code className="w-8 h-8 text-primary" />
            </div>
            <h4 className="font-bold text-lg text-primary mb-2">
              Web Development
            </h4>
            <p className="text-foreground/80">
              Creating modern, responsive websites with smooth user experiences
            </p>
          </div>

          <div className="bg-card/90 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 text-center shadow-lg card-hover gradient-border group">
            <div className="mb-4 p-3 bg-primary/10 rounded-full w-fit mx-auto group-hover:bg-primary/20 transition-colors">
              <Cpu className="w-8 h-8 text-primary" />
            </div>
            <h4 className="font-bold text-lg text-primary mb-2">Hardware</h4>
            <p className="text-foreground/80">
              Exploring computer hardware and how technology drives innovation
            </p>
          </div>

          <div className="bg-card/90 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 text-center shadow-lg card-hover gradient-border group">
            <div className="mb-4 p-3 bg-primary/10 rounded-full w-fit mx-auto group-hover:bg-primary/20 transition-colors">
              <Music className="w-8 h-8 text-primary" />
            </div>
            <h4 className="font-bold text-lg text-primary mb-2">Music</h4>
            <p className="text-foreground/80">
              Drawing inspiration from Pop, Ballad, and Rap music genres
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-delay-3">
          <a href="#contact" className="cosmic-button p-4">
            Get In Touch
          </a>
          <a
            href="https://www.canva.com/design/DAGlEBdLi8w/QI_XtWJDvb5N-yfp1cwWow/edit?utm_content=DAGlEBdLi8w&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition-all duration-300 font-medium flex items-center justify-center card-hover group"
          >
            <FileText className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            My CV
          </a>
        </div>
      </div>
    </section>
  );
};

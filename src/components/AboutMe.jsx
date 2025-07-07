export const AboutMe = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1  gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate about{" "}
              <span className="text-primary">Web Development</span> and{" "}
              <span className="text-primary">Computer Hardware</span>
            </h3>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <a href="#contact" className="cosmic-button">
              Get In Touch
            </a>
            <a
              href="https://www.canva.com/design/DAGlEBdLi8w/QI_XtWJDvb5N-yfp1cwWow/edit?utm_content=DAGlEBdLi8w&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
              target="_blank"
              className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
            >
              My CV
            </a>
          </div>

          {/* <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover"></div>
            <div className="gradient-border p-6 card-hover"></div>
            <div className="gradient-border p-6 card-hover"></div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

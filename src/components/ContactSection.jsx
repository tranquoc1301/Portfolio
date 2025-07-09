import { Mail, MapPin, Phone, Send } from "lucide-react";
import FacebookIcon from "@assets/icons/facebook.svg";
import InstagramIcon from "@assets/icons/instargram.svg";
import LinkedinIcon from "@assets/icons/linkedin.svg";

export const ContactSection = ({ isActive }) => {
  return (
    <section
      id="contact"
      className="py-24 px-4 bg-secondary/30 animate-fade-in"
    >
      <div className="container mx-auto max-w-5xl">
        <h2
          className={`text-3xl md:text-4xl font-bold mb-2 tracking-tight ${
            isActive ? "text-glow" : ""
          }`}
        >
          {" "}
          Get In <span className="text-primary">Touch</span>
        </h2>
        {isActive && (
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-400 mx-auto rounded-full grow-in"></div>
        )}
        <p className="text-lg text-center text-muted-foreground mt-4 mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:tranquoc1301@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    tranquoc1301@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+84123456789"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +84 123 456 789
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">Danang, Vietnam</p>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <h4 className="font-medium mb-4 text-center">Connect with Me</h4>
              <div className="flex space-x-6 justify-center">
                <a href="">
                  <img
                    src={FacebookIcon}
                    alt="Facebook"
                    className="w-8 h-8 transition-transform duration-300 hover:scale-110 hover:drop-shadow-md"
                  />
                </a>
                <a href="">
                  <img
                    src={InstagramIcon}
                    alt="Instagram"
                    className="w-8 h-8 transition-transform duration-300 hover:scale-110 hover:drop-shadow-md"
                  />
                </a>
                <a href="">
                  <img
                    src={LinkedinIcon}
                    alt="Linkedin"
                    className="w-8 h-8 transition-transform duration-300 hover:scale-110 hover:drop-shadow-md"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-card p-4 sm:p-6 rounded-xl shadow-sm">
            <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-4 animate-fade-in">
              Send a Message
            </h3>

            <form action="#submit-form" className="space-y-3">
              <div className="opacity-0 animate-fade-in-delay-1">
                <label
                  htmlFor="name"
                  className="block mb-1 text-sm sm:text-base font-medium text-foreground"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground text-sm sm:text-base placeholder-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary focus:scale-[1.01] transition-all duration-200"
                />
              </div>
              <div className="opacity-0 animate-fade-in-delay-2">
                <label
                  htmlFor="email"
                  className="block mb-1 text-sm sm:text-base font-medium text-foreground"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground text-sm sm:text-base placeholder-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary focus:scale-[1.01] transition-all duration-200"
                />
              </div>
              <div className="opacity-0 animate-fade-in-delay-3">
                <label
                  htmlFor="message"
                  className="block mb-1 text-sm sm:text-base font-medium text-foreground"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Your Message"
                  rows="4"
                  style={{ resize: "none" }}
                  className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground text-sm sm:text-base placeholder-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary focus:scale-[1.01] transition-all duration-200"
                />
              </div>
              <button
                type="submit"
                className="cosmic-button w-full sm:w-auto px-4 py-2 text-sm sm:text-base bg-primary hover:bg-primary/90 hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2 animate-fade-in-delay-4"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

import { Mail, MapPin, Phone, Send } from "lucide-react";
import FacebookIcon from "@assets/icons/facebook.svg";
import InstagramIcon from "@assets/icons/instargram.svg";
import LinkedinIcon from "@assets/icons/linkedin.svg";

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-24 px-4 bg-secondary/30 animate-fade-in"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
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
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold text-primary mb-6">
              Send a Message
            </h3>

            <form action="" className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary transition-colors duration-200"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary transition-colors duration-200"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Your Message"
                  rows="4"
                  style={{ resize: "none" }}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary transition-colors duration-200"
                />
              </div>
              <button
                type="submit"
                className="cosmic-button bg-primary hover:bg-primary/80 transition-colors duration-200"
              >
                <Send className="inline-block mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

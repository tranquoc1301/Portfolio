import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      <p className="text-sm text-muted-foreground text-center md:text-left w-full md:w-auto mb-4 md:mb-0">
        &copy; {new Date().getFullYear()} Tran Quoc. All rights reserved.
      </p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};

import { Atom, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Programs", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "Toppers", href: "#toppers" },
  { label: "Study Materials", href: "#study-materials" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      data-ocid="navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-smooth ${
        scrolled
          ? "backdrop-frosted border-b border-border/60 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            type="button"
            onClick={() => scrollTo("#home")}
            data-ocid="navbar.logo_button"
            className="flex items-center gap-2 group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-md transition-smooth group-hover:scale-110">
              <Atom className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <div className="font-display font-bold text-sm lg:text-base text-foreground leading-tight">
                Medhavi Physics
              </div>
              <div className="text-[10px] text-muted-foreground font-medium tracking-wide">
                Er. Pooja Verma
              </div>
            </div>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => scrollTo(link.href)}
                data-ocid={`navbar.${link.label.toLowerCase()}_link`}
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-accent rounded-lg hover:bg-primary/10 transition-smooth"
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://wa.me/919897085277"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="navbar.cta_button"
              className="ml-3 px-5 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-accent to-primary shadow-md hover:scale-105 transition-smooth"
            >
              Enroll Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            data-ocid="navbar.hamburger_button"
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-lg hover:bg-primary/10 transition-smooth"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          data-ocid="navbar.mobile_menu"
          className="md:hidden backdrop-frosted border-t border-border/40 px-4 pb-4"
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              type="button"
              onClick={() => scrollTo(link.href)}
              className="block w-full text-left px-4 py-3 text-sm font-medium text-foreground/80 hover:text-accent hover:bg-primary/10 rounded-lg transition-smooth"
            >
              {link.label}
            </button>
          ))}
          <a
            href="https://wa.me/919897085277"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-2 px-4 py-3 text-sm font-semibold text-white text-center bg-gradient-to-r from-accent to-primary rounded-xl"
          >
            Enroll Now
          </a>
        </div>
      )}
    </nav>
  );
}

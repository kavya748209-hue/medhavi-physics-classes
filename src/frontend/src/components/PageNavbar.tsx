import { Atom, ChevronDown, Menu, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

type NavWindow = Window & { __navigateTo?: (path: string) => void };

const primaryNavLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Courses", to: "/courses" },
  { label: "Results", to: "/results" },
  { label: "Gallery", to: "/gallery" },
  { label: "Study Materials", to: "/study-materials" },
  { label: "Contact", to: "/#contact" },
];

const moreNavLinks = [
  { label: "Physics Tips", to: "/physics-tips" },
  { label: "Admission", to: "/admission" },
];

const allMobileLinks = [...primaryNavLinks, ...moreNavLinks];

export function PageNavbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [moreOpen, setMoreOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const handlePop = () => setCurrentPath(window.location.pathname);
    window.addEventListener("popstate", handlePop);
    return () => window.removeEventListener("popstate", handlePop);
  }, []);

  // Close "More" dropdown on outside click
  useEffect(() => {
    if (!moreOpen) return;
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("[data-more-menu]")) setMoreOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [moreOpen]);

  const navigate = useCallback((to: string) => {
    setOpen(false);
    setMoreOpen(false);
    if (to.startsWith("/#")) {
      const id = to.slice(2);
      if (window.location.pathname !== "/") {
        (window as NavWindow).__navigateTo?.("/");
        setTimeout(
          () =>
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }),
          300,
        );
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }
    (window as NavWindow).__navigateTo?.(to);
    setCurrentPath(to);
  }, []);

  const isMoreActive = moreNavLinks.some((l) => currentPath === l.to);

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
            onClick={() => navigate("/")}
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
            {primaryNavLinks.map((link) => (
              <button
                key={link.to}
                type="button"
                onClick={() => navigate(link.to)}
                data-ocid={`navbar.${link.label.toLowerCase().replace(/ /g, "_")}_link`}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-smooth ${
                  currentPath === link.to
                    ? "text-accent bg-primary/10"
                    : "text-foreground/80 hover:text-accent hover:bg-primary/10"
                }`}
              >
                {link.label}
              </button>
            ))}

            {/* More dropdown */}
            <div className="relative" data-more-menu>
              <button
                type="button"
                onClick={() => setMoreOpen((v) => !v)}
                data-ocid="navbar.more_dropdown"
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-smooth ${
                  isMoreActive
                    ? "text-accent bg-primary/10"
                    : "text-foreground/80 hover:text-accent hover:bg-primary/10"
                }`}
              >
                More
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    moreOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {moreOpen && (
                <div
                  data-ocid="navbar.more_menu"
                  className="absolute right-0 top-full mt-1 min-w-[160px] rounded-xl border border-border/60 backdrop-frosted shadow-xl py-1 z-50"
                >
                  {moreNavLinks.map((link) => (
                    <button
                      key={link.to}
                      type="button"
                      onClick={() => navigate(link.to)}
                      data-ocid={`navbar.${link.label.toLowerCase().replace(/ /g, "_")}_link`}
                      className={`block w-full text-left px-4 py-2.5 text-sm font-medium transition-smooth ${
                        currentPath === link.to
                          ? "text-accent bg-primary/10"
                          : "text-foreground/80 hover:text-accent hover:bg-primary/10"
                      }`}
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

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
          {allMobileLinks.map((link) => (
            <button
              key={link.to}
              type="button"
              onClick={() => navigate(link.to)}
              className={`block w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-smooth ${
                currentPath === link.to
                  ? "text-accent bg-primary/10"
                  : "text-foreground/80 hover:text-accent hover:bg-primary/10"
              }`}
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

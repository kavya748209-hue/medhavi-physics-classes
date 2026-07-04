import { ChevronDown, Menu, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

type NavWindow = Window & { __navigateTo?: (path: string) => void };

type NavLink = {
  label: string;
  to: string;
  highlight?: boolean;
  external?: boolean;
};

const FEE_POLICY_URL =
  "https://drive.google.com/file/d/1wQsT4ciVW8DeEd5gplpj9_NCtyYOlw6g/view";

// Desktop primary row — Admission upfront, Contact last.
const primaryNavLinks: NavLink[] = [
  { label: "Home", to: "/" },
  { label: "Admission", to: "/admission" },
  { label: "About", to: "/about" },
  { label: "Courses", to: "/courses" },
  { label: "Results", to: "/results" },
  { label: "Gallery", to: "/gallery", highlight: true },
  { label: "Fee Policy", to: FEE_POLICY_URL, external: true },
  { label: "Contact", to: "/#contact" },
];

// "More" dropdown — only Physics Tips remains.
const moreNavLinks: NavLink[] = [
  { label: "Physics Tips", to: "/physics-tips" },
];

// Mobile order — Physics Tips before Contact (Contact last).
const mobileNavLinks: NavLink[] = [
  { label: "Home", to: "/" },
  { label: "Admission", to: "/admission" },
  { label: "About", to: "/about" },
  { label: "Courses", to: "/courses" },
  { label: "Results", to: "/results" },
  { label: "Gallery", to: "/gallery", highlight: true },
  { label: "Fee Policy", to: FEE_POLICY_URL, external: true },
  { label: "Physics Tips", to: "/physics-tips" },
  { label: "Contact", to: "/#contact" },
];

const ocidFor = (label: string, suffix = "link") =>
  `navbar.${label.toLowerCase().replace(/ /g, "_")}_${suffix}`;

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

  // Close "More" dropdown on outside click or touch
  useEffect(() => {
    if (!moreOpen) return;
    const handler = (e: MouseEvent | TouchEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("[data-more-menu]")) setMoreOpen(false);
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler, { passive: true });
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [moreOpen]);

  // Close mobile menu on outside tap
  useEffect(() => {
    if (!open) return;
    const handler = (e: TouchEvent) => {
      const target = e.target as HTMLElement;
      if (
        !target.closest("[data-mobile-menu]") &&
        !target.closest("[data-ocid='navbar.hamburger_button']")
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("touchstart", handler, { passive: true });
    return () => document.removeEventListener("touchstart", handler);
  }, [open]);

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

  const handleLink = useCallback(
    (link: NavLink) => {
      if (link.external) {
        setOpen(false);
        setMoreOpen(false);
        window.open(link.to, "_blank", "noopener,noreferrer");
        return;
      }
      navigate(link.to);
    },
    [navigate],
  );

  const isMoreActive = moreNavLinks.some((l) => currentPath === l.to);

  const renderLinkClass = (link: NavLink, active: boolean) =>
    link.highlight
      ? active
        ? "text-primary bg-primary/20 ring-1 ring-primary/60 font-semibold"
        : "text-primary bg-primary/10 ring-1 ring-primary/30 font-semibold hover:bg-primary/20 hover:ring-primary/60"
      : active
        ? "text-accent bg-primary/10"
        : "text-foreground/80 hover:text-accent hover:bg-primary/10";

  return (
    <nav
      data-ocid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-[oklch(0.08_0.02_250/0.95)] border-b border-[oklch(0.72_0.18_80/0.3)] shadow-lg"
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
            className="flex items-center gap-2.5 group"
          >
            <div className="h-10 lg:h-12 w-10 lg:w-12 rounded-xl bg-white ring-1 ring-primary/30 shadow-md overflow-hidden flex items-center justify-center transition-smooth group-hover:scale-105 group-hover:ring-primary/60">
              <img
                src="/assets/images/medhavi-logo.png"
                alt="Medhavi Physics Classes logo"
                className="h-full w-full object-contain"
              />
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
            {primaryNavLinks.map((link) =>
              link.external ? (
                <a
                  key={link.to}
                  href={link.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid={ocidFor(link.label)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-smooth ${renderLinkClass(
                    link,
                    false,
                  )}`}
                >
                  {link.label}
                </a>
              ) : (
                <button
                  key={link.to}
                  type="button"
                  onClick={() => handleLink(link)}
                  data-ocid={ocidFor(link.label)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-smooth ${renderLinkClass(
                    link,
                    currentPath === link.to,
                  )}`}
                >
                  {link.label}
                </button>
              ),
            )}

            {/* More dropdown — Physics Tips only */}
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
                      data-ocid={ocidFor(link.label)}
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
      <div
        data-ocid="navbar.mobile_menu"
        data-mobile-menu
        className={`md:hidden backdrop-frosted border-t border-border/40 px-4 pb-4 overflow-hidden transition-all duration-300 ease-in-out ${
          open
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        {mobileNavLinks.map((link) =>
          link.external ? (
            <a
              key={link.to}
              href={link.to}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid={ocidFor(link.label, "mobile_link")}
              className={`block w-full px-4 py-3 text-sm font-medium rounded-lg transition-smooth ${renderLinkClass(
                link,
                false,
              )}`}
            >
              {link.label}
            </a>
          ) : (
            <button
              key={link.to}
              type="button"
              onClick={() => handleLink(link)}
              data-ocid={ocidFor(link.label, "mobile_link")}
              className={`block w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-smooth ${renderLinkClass(
                link,
                currentPath === link.to,
              )}`}
            >
              {link.label}
            </button>
          ),
        )}
        <a
          href="https://wa.me/919897085277"
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-2 px-4 py-3 text-sm font-semibold text-white text-center bg-gradient-to-r from-accent to-primary rounded-xl"
        >
          Enroll Now
        </a>
      </div>
    </nav>
  );
}

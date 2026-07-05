import { Atom } from "lucide-react";
import { SiInstagram, SiWhatsapp } from "react-icons/si";

export function Footer() {
  const year = new Date().getFullYear();
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.08 0.01 270) 0%, oklch(0.06 0.015 275) 50%, oklch(0.04 0.01 270) 100%)",
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.72 0.16 80 / 0.5), oklch(0.68 0.2 220 / 0.5), transparent)",
        }}
      />
      <div
        className="absolute top-0 left-1/4 w-96 h-40 pointer-events-none"
        style={{
          background: "oklch(0.72 0.16 80 / 0.05)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-80 h-32 pointer-events-none"
        style={{
          background: "oklch(0.68 0.2 220 / 0.05)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.72 0.16 80), oklch(0.68 0.2 220))",
                  boxShadow: "0 0 30px oklch(0.72 0.16 80 / 0.3)",
                }}
              >
                <Atom
                  className="w-5 h-5"
                  style={{ color: "oklch(0.08 0.01 270)" }}
                />
              </div>
              <div>
                <div
                  className="font-display font-black text-base"
                  style={{
                    background:
                      "linear-gradient(90deg, oklch(0.85 0.12 80), oklch(0.72 0.16 80))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Medhavi Physics Classes
                </div>
                <div
                  className="text-xs"
                  style={{ color: "oklch(0.5 0.02 60)" }}
                >
                  by Er. Pooja Verma
                </div>
              </div>
            </div>
            <p
              className="text-sm max-w-xs leading-relaxed mb-5"
              style={{ color: "oklch(0.5 0.02 60)" }}
            >
              Bijnor's most trusted physics coaching institute. Transforming
              students into NEET &amp; JEE toppers for over 14+ years.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/919897085277"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-smooth hover:scale-110"
                style={{
                  background: "oklch(0.55 0.18 145 / 0.2)",
                  border: "1px solid oklch(0.55 0.18 145 / 0.4)",
                  color: "oklch(0.75 0.18 145)",
                }}
              >
                <SiWhatsapp className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/medhaviphysicsclasses"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-smooth hover:scale-110"
                style={{
                  background: "oklch(0.55 0.2 0 / 0.15)",
                  border: "1px solid oklch(0.6 0.18 10 / 0.3)",
                  color: "oklch(0.75 0.18 10)",
                }}
              >
                <SiInstagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4
              className="font-display font-bold text-sm mb-4"
              style={{ color: "oklch(0.85 0.12 80)" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                ["#home", "Home"],
                ["#why", "Why Medhavi"],
                ["#services", "Courses"],
                ["#toppers", "Results"],
                ["#reviews", "Reviews"],
                ["#quotes", "Physics Quotes"],
                ["#faq", "FAQ"],
                ["#contact", "Contact"],
              ].map(([href, label]) => (
                <li key={href}>
                  <button
                    type="button"
                    onClick={() => scrollTo(href)}
                    className="text-sm text-left transition-smooth hover:translate-x-1"
                    style={{ color: "oklch(0.5 0.02 60)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.color =
                        "oklch(0.75 0.18 220)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.color =
                        "oklch(0.5 0.02 60)";
                    }}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="font-display font-bold text-sm mb-4"
              style={{ color: "oklch(0.85 0.12 80)" }}
            >
              Contact
            </h4>
            <div
              className="space-y-2 text-xs"
              style={{ color: "oklch(0.5 0.02 60)" }}
            >
              <p>📍 Surendra Nagar, near Shiv Mandir,</p>
              <p>Aawas Vikas, Bijnor, UP 246701</p>
              <a
                href="tel:09897085277"
                className="mt-3 block font-bold text-sm transition-smooth hover:scale-105"
                style={{ color: "oklch(0.85 0.12 80)" }}
              >
                📞 09897085277
              </a>
              <a
                href="tel:9634429377"
                className="mt-1 block text-xs transition-smooth hover:scale-105"
                style={{ color: "oklch(0.6 0.02 60)" }}
              >
                📞 Mr. Nitish Verma: 9634429377
              </a>
              <p className="mt-1">⏰ Mon–Sat: 7AM – 8PM</p>
            </div>
          </div>
        </div>

        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid oklch(1 0 0 / 0.06)" }}
        >
          <p className="text-xs" style={{ color: "oklch(0.35 0.01 60)" }}>
            © {year} Medhavi Physics Classes by Er. Pooja Verma. All rights
            reserved.
          </p>
          <p className="text-xs" style={{ color: "oklch(0.35 0.01 60)" }}>
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-smooth"
              style={{ color: "oklch(0.5 0.02 60)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color =
                  "oklch(0.85 0.12 80)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color =
                  "oklch(0.5 0.02 60)";
              }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

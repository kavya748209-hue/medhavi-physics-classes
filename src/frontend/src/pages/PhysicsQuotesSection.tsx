import { SectionWrapper } from "@/components/SectionWrapper";

const quotes = [
  {
    quote:
      "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
    author: "Albert Einstein",
    field: "Theory of Relativity",
    icon: "⚛️",
  },
  {
    quote:
      "If I have seen further it is by standing on the shoulders of Giants.",
    author: "Isaac Newton",
    field: "Classical Mechanics",
    icon: "🍎",
  },
  {
    quote:
      "The first principle is that you must not fool yourself — and you are the easiest person to fool.",
    author: "Richard Feynman",
    field: "Quantum Physics",
    icon: "🌊",
  },
  {
    quote:
      "However difficult life may seem, there is always something you can do and succeed at.",
    author: "Stephen Hawking",
    field: "Theoretical Cosmology",
    icon: "🌌",
  },
  {
    quote:
      "If you thought that science was certain — well, that is just an error on your part.",
    author: "Niels Bohr",
    field: "Quantum Mechanics",
    icon: "💡",
  },
  {
    quote:
      "The day science begins to study non-physical phenomena, it will make more progress in one decade than in all previous centuries.",
    author: "Nikola Tesla",
    field: "Electromagnetism",
    icon: "⚡",
  },
  {
    quote:
      "Nothing is too wonderful to be true, if it be consistent with the laws of nature.",
    author: "Michael Faraday",
    field: "Electromagnetic Induction",
    icon: "🔋",
  },
  {
    quote:
      "Physics is really nothing more than a search for ultimate simplicity, but so far all we have is a kind of elegant messiness.",
    author: "Bill Bryson",
    field: "Science Communicator",
    icon: "🔭",
  },
];

export function PhysicsQuotesSection() {
  return (
    <SectionWrapper
      id="quotes"
      className="py-24 relative overflow-hidden"
      style={
        {
          background:
            "linear-gradient(180deg, oklch(0.08 0.01 270) 0%, oklch(0.10 0.018 275) 50%, oklch(0.08 0.01 270) 100%)",
        } as React.CSSProperties
      }
    >
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-40 pointer-events-none"
        style={{
          background: "oklch(0.72 0.16 80 / 0.05)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute top-10 left-10 w-40 h-40 rounded-full pointer-events-none"
        style={{
          background: "oklch(0.68 0.2 220 / 0.07)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-10 right-10 w-40 h-40 rounded-full pointer-events-none"
        style={{
          background: "oklch(0.72 0.16 80 / 0.07)",
          filter: "blur(60px)",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        {["E=mc²", "F=ma", "∇·E=ρ/ε₀", "ΔxΔp≥ℏ/2", "E=hf"].map((formula, i) => (
          <span
            key={formula}
            className="absolute font-mono font-bold"
            style={{
              color: "oklch(0.72 0.16 80 / 0.06)",
              top: `${15 + i * 16}%`,
              left: i % 2 === 0 ? `${5 + i * 3}%` : undefined,
              right: i % 2 !== 0 ? `${5 + i * 2}%` : undefined,
              transform: `rotate(${i % 2 === 0 ? "-" : ""}${10 + i * 5}deg)`,
              fontSize: "clamp(0.7rem, 1.5vw, 1.1rem)",
            }}
          >
            {formula}
          </span>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
            style={{
              background: "oklch(0.68 0.2 220 / 0.1)",
              border: "1px solid oklch(0.68 0.2 220 / 0.3)",
              color: "oklch(0.75 0.18 220)",
            }}
          >
            Words of Wisdom
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl mb-4">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, oklch(0.72 0.16 80), oklch(0.85 0.1 75), oklch(0.68 0.2 220))",
              }}
            >
              Physics Quotes That
            </span>
            <span
              className="block mt-1"
              style={{ color: "oklch(0.88 0.04 60)" }}
            >
              Inspire Every Student
            </span>
          </h2>
          <p
            className="max-w-xl mx-auto text-sm"
            style={{ color: "oklch(0.58 0.02 60)" }}
          >
            Great minds who shaped our understanding of the universe — their
            words fuel every class at Medhavi Physics.
          </p>
        </div>

        {/* Featured quote */}
        <div
          className="mb-10 rounded-3xl p-8 lg:p-12 text-center relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.13 0.02 270), oklch(0.17 0.025 260))",
            border: "1px solid oklch(0.72 0.16 80 / 0.3)",
            boxShadow:
              "0 0 80px oklch(0.72 0.16 80 / 0.1), inset 0 0 60px oklch(0.72 0.16 80 / 0.04)",
          }}
          data-ocid="quotes.featured_card"
        >
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, oklch(0.72 0.16 80 / 0.6), transparent)",
            }}
          />
          <div
            className="text-7xl font-display leading-none mb-4"
            style={{ color: "oklch(0.72 0.16 80 / 0.35)" }}
          >
            &#8220;
          </div>
          <blockquote
            className="font-display font-black text-2xl sm:text-3xl lg:text-4xl max-w-3xl mx-auto leading-snug"
            style={{ color: "oklch(0.92 0.06 75)" }}
          >
            Not everything that can be counted counts, and not everything that
            counts can be counted.
          </blockquote>
          <cite
            className="block mt-6 text-base font-semibold not-italic"
            style={{ color: "oklch(0.85 0.12 80)" }}
          >
            — Albert Einstein
          </cite>
          <span
            className="inline-block mt-2 text-xs uppercase tracking-widest font-semibold"
            style={{ color: "oklch(0.58 0.02 60)" }}
          >
            Theoretical Physicist · Nobel Prize 1921
          </span>
        </div>

        {/* Quote grid */}
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          data-ocid="quotes.list"
        >
          {quotes.map((q, i) => (
            <div
              key={q.author}
              data-ocid={`quotes.item.${i + 1}`}
              className="rounded-2xl p-5 flex flex-col transition-smooth hover:scale-[1.02] cursor-default"
              style={{
                background: "oklch(0.14 0.015 270 / 0.85)",
                border:
                  i % 2 === 0
                    ? "1px solid oklch(0.72 0.16 80 / 0.15)"
                    : "1px solid oklch(0.68 0.2 220 / 0.15)",
                backdropFilter: "blur(20px)",
                boxShadow: "0 4px 24px oklch(0 0 0 / 0.25)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor =
                  i % 2 === 0
                    ? "oklch(0.72 0.16 80 / 0.45)"
                    : "oklch(0.68 0.2 220 / 0.45)";
                el.style.boxShadow =
                  i % 2 === 0
                    ? "0 0 40px oklch(0.72 0.16 80 / 0.15), 0 4px 24px oklch(0 0 0 / 0.3)"
                    : "0 0 40px oklch(0.68 0.2 220 / 0.15), 0 4px 24px oklch(0 0 0 / 0.3)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor =
                  i % 2 === 0
                    ? "oklch(0.72 0.16 80 / 0.15)"
                    : "oklch(0.68 0.2 220 / 0.15)";
                el.style.boxShadow = "0 4px 24px oklch(0 0 0 / 0.25)";
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">{q.icon}</span>
                <span
                  className="text-3xl font-display leading-none"
                  style={{
                    color:
                      i % 2 === 0
                        ? "oklch(0.72 0.16 80 / 0.4)"
                        : "oklch(0.68 0.2 220 / 0.4)",
                  }}
                >
                  &#8220;
                </span>
              </div>
              <p
                className="text-xs leading-relaxed italic flex-1 mb-4"
                style={{ color: "oklch(0.72 0.03 60)" }}
              >
                {q.quote}
              </p>
              <div>
                <div
                  className="font-display font-bold text-xs"
                  style={{
                    color:
                      i % 2 === 0
                        ? "oklch(0.85 0.12 80)"
                        : "oklch(0.75 0.18 220)",
                  }}
                >
                  — {q.author}
                </div>
                <div
                  className="text-[9px] mt-0.5 uppercase tracking-wide font-semibold"
                  style={{ color: "oklch(0.45 0.02 60)" }}
                >
                  {q.field}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div
          className="mt-10 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{
            background: "oklch(0.14 0.015 270 / 0.7)",
            border: "1px solid oklch(0.68 0.2 220 / 0.15)",
          }}
          data-ocid="quotes.cta_strip"
        >
          <div>
            <p
              className="font-display font-bold text-sm"
              style={{ color: "oklch(0.88 0.04 60)" }}
            >
              Let these minds inspire your journey
            </p>
            <p
              className="text-xs mt-0.5"
              style={{ color: "oklch(0.52 0.02 60)" }}
            >
              Join Medhavi Physics — where curiosity meets rigorous preparation
            </p>
          </div>
          <a
            href="https://wa.me/919897085277"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="quotes.cta_button"
            className="flex-shrink-0 px-6 py-3 rounded-full font-bold text-sm transition-smooth hover:scale-105"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.68 0.2 220), oklch(0.72 0.16 80))",
              color: "oklch(0.08 0.01 270)",
            }}
          >
            Start Your Physics Journey
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}

import { FloatingButtons } from "@/components/FloatingButtons";
import { PageNavbar } from "@/components/PageNavbar";
import { Footer } from "@/pages/Footer";
import { useState } from "react";

// ── Types ─────────────────────────────────────────────────────────────────────
type Category = "All" | "Class 11" | "Class 12" | "NEET" | "JEE";
type Difficulty = "Beginner" | "Intermediate" | "Advanced";

interface Tip {
  id: string;
  icon: string;
  title: string;
  bullets: string[];
  difficulty: Difficulty;
  category: Exclude<Category, "All">;
}

// ── Data ──────────────────────────────────────────────────────────────────────
const TIPS: Tip[] = [
  {
    id: "tip-newtons-laws",
    icon: "⚙️",
    title: "Mastering Newton's Laws",
    category: "Class 11",
    difficulty: "Beginner",
    bullets: [
      "Always draw a free-body diagram before writing any equation.",
      "Identify every force (normal, friction, gravity, tension) before applying F = ma.",
      "For systems, choose a consistent sign convention and stick to it throughout.",
    ],
  },
  {
    id: "tip-wave-motion",
    icon: "〰️",
    title: "Wave Motion Clarity",
    category: "Class 11",
    difficulty: "Beginner",
    bullets: [
      "Distinguish transverse vs longitudinal waves with a simple node/antinode sketch.",
      "Remember: v = fλ links frequency and wavelength — memorise it as 'velocity = flock'.",
      "Practice superposition problems using phasor diagrams for quick results.",
    ],
  },
  {
    id: "tip-thermodynamics",
    icon: "🌡️",
    title: "Thermodynamics Tactics",
    category: "Class 11",
    difficulty: "Intermediate",
    bullets: [
      "Draw PV diagrams for every process — isothermal, adiabatic, isochoric, isobaric.",
      "For adiabatic: W = ΔU only (no heat exchange). Internalize this to avoid sign errors.",
      "Entropy always increases in irreversible processes — use this as a quick sanity check.",
    ],
  },
  {
    id: "tip-optics-class12",
    icon: "🔭",
    title: "Optics: Ray Diagrams Done Right",
    category: "Class 12",
    difficulty: "Intermediate",
    bullets: [
      "Use the mirror/lens formula 1/v – 1/u = 1/f consistently with sign convention.",
      "Total internal reflection only occurs when going from denser to rarer medium.",
      "For lenses, mark object, image, and focal point before calculating — never skip this.",
    ],
  },
  {
    id: "tip-electrostatics",
    icon: "⚡",
    title: "Electrostatics Without Fear",
    category: "Class 12",
    difficulty: "Intermediate",
    bullets: [
      "Use Gauss's Law for symmetric charge distributions (sphere, cylinder, plane) first.",
      "Electric potential is a scalar — add algebraically, not vectorially.",
      "Capacitor energy E = ½CV² is often tested with parallel/series combinations.",
    ],
  },
  {
    id: "tip-modern-physics",
    icon: "⚛️",
    title: "Modern Physics Shortcuts",
    category: "Class 12",
    difficulty: "Advanced",
    bullets: [
      "Photoelectric effect: threshold frequency ν₀ = W/h. Memorise common work functions.",
      "de Broglie wavelength λ = h/mv — useful for electron diffraction problems.",
      "Radioactive decay: N = N₀e^(−λt). Master half-life to full-life conversions quickly.",
    ],
  },
  {
    id: "tip-neet-biophysics",
    icon: "🧬",
    title: "NEET: Physics-Biology Linkages",
    category: "NEET",
    difficulty: "Intermediate",
    bullets: [
      "Fluid mechanics applies directly to blood flow (Bernoulli + Poiseuille's law).",
      "Sound intensity levels in decibels appear in both physics and biophysics questions.",
      "Bioelectricity concepts overlap with Class 12 current electricity — use both.",
    ],
  },
  {
    id: "tip-neet-time-mgmt",
    icon: "⏱️",
    title: "NEET Time Management",
    category: "NEET",
    difficulty: "Beginner",
    bullets: [
      "Allocate 40 mins to Physics, 40 mins to Chemistry, 50 mins to Biology.",
      "Skip and flag any question taking more than 90 seconds — return at the end.",
      "Eliminate wrong options first in MCQs to boost speed by 20–30%.",
    ],
  },
  {
    id: "tip-neet-mock-strategy",
    icon: "📝",
    title: "Mock Test Strategy for NEET",
    category: "NEET",
    difficulty: "Advanced",
    bullets: [
      "Simulate exam conditions: fixed timing, no phone, answer in OMR format.",
      "Review wrong answers within 2 hours of finishing — memory consolidation is highest then.",
      "Track error type: concept gap vs careless mistake vs time pressure. Fix each differently.",
    ],
  },
  {
    id: "tip-jee-problem-solving",
    icon: "🧮",
    title: "JEE Problem-Solving Framework",
    category: "JEE",
    difficulty: "Advanced",
    bullets: [
      "Read the problem twice: first for the story, second to extract all given quantities.",
      "Write down what is asked before attempting — prevents solving the wrong thing.",
      "Dimensional analysis is your emergency check when you're unsure of a formula.",
    ],
  },
  {
    id: "tip-jee-formula-revision",
    icon: "📐",
    title: "Formula Revision for JEE",
    category: "JEE",
    difficulty: "Intermediate",
    bullets: [
      "Build a one-page formula sheet per chapter and revise it daily the week before the exam.",
      "Derive key formulas once — understanding derivation prevents formula confusion under pressure.",
      "Group related formulas: all rotational analogs beside their linear counterparts.",
    ],
  },
  {
    id: "tip-jee-rotational",
    icon: "🌀",
    title: "Rotational Mechanics Deep Dive",
    category: "JEE",
    difficulty: "Advanced",
    bullets: [
      "Moment of inertia depends on axis choice — always state the axis when writing I.",
      "Use parallel-axis theorem: I = I_cm + Md² for off-center axes.",
      "Rolling without slipping: v_cm = ωR is the golden constraint — write it first.",
    ],
  },
];

const QUOTES = [
  {
    id: "quote-feynman",
    text: "Physics is like sex: sure, it may give some practical results, but that's not why we do it.",
    author: "Richard Feynman",
  },
  {
    id: "quote-einstein",
    text: "Imagination is more important than knowledge. Knowledge is limited; imagination encircles the world.",
    author: "Albert Einstein",
  },
  {
    id: "quote-kalam",
    text: "Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.",
    author: "Dr. A.P.J. Abdul Kalam",
  },
];

const FORMULAS = [
  { id: "f-newton2", label: "Newton's 2nd Law", expr: "F = ma" },
  { id: "f-kinetic", label: "Kinetic Energy", expr: "KE = ½mv²" },
  { id: "f-grav", label: "Gravitational Force", expr: "F = Gm₁m₂ / r²" },
  { id: "f-coulomb", label: "Coulomb's Law", expr: "F = kq₁q₂ / r²" },
  { id: "f-capac", label: "Capacitor Energy", expr: "E = ½CV²" },
  { id: "f-wave", label: "Wave Speed", expr: "v = fλ" },
  { id: "f-snell", label: "Snell's Law", expr: "n₁ sin θ₁ = n₂ sin θ₂" },
  { id: "f-photon", label: "Photon Energy", expr: "E = hν" },
  { id: "f-debroglie", label: "de Broglie Wavelength", expr: "λ = h / mv" },
  { id: "f-rotkin", label: "Rotational KE", expr: "KE = ½Iω²" },
];

const CATEGORIES: Category[] = ["All", "Class 11", "Class 12", "NEET", "JEE"];

const DIFFICULTY_STYLES: Record<Difficulty, string> = {
  Beginner: "border-green-500/40 text-green-400 bg-green-500/10",
  Intermediate: "border-yellow-500/40 text-yellow-400 bg-yellow-500/10",
  Advanced: "border-red-500/40 text-red-400 bg-red-500/10",
};

const TIP_OF_DAY: Tip = TIPS.find(
  (t) => t.id === "tip-jee-problem-solving",
) as Tip;

// ── Sub-components ────────────────────────────────────────────────────────────
function DifficultyBadge({ level }: { level: Difficulty }) {
  return (
    <span
      className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full border ${DIFFICULTY_STYLES[level]}`}
    >
      {level}
    </span>
  );
}

function TipCard({ tip }: { tip: Tip }) {
  return (
    <article
      data-ocid={`physics-tips.tip-card.${tip.id}`}
      className="glass-card rounded-2xl p-6 flex flex-col gap-3 depth-card transition-smooth hover:-translate-y-1 hover:border-primary/40 cursor-default"
      style={{ borderColor: "oklch(0.72 0.16 80 / 0.18)" }}
    >
      <div className="flex items-start justify-between gap-2">
        <span className="text-3xl leading-none" aria-hidden="true">
          {tip.icon}
        </span>
        <DifficultyBadge level={tip.difficulty} />
      </div>
      <h3 className="font-display text-lg font-semibold text-foreground leading-snug">
        {tip.title}
      </h3>
      <ul className="flex flex-col gap-1.5 mt-1">
        {tip.bullets.map((b) => (
          <li
            key={`${tip.id}-${b.slice(0, 20)}`}
            className="text-sm text-muted-foreground leading-relaxed flex gap-2"
          >
            <span className="text-primary mt-0.5 shrink-0">›</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function PhysicsTipsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered =
    activeCategory === "All"
      ? TIPS
      : TIPS.filter((t) => t.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <PageNavbar />

      {/* ── Hero ── */}
      <section
        data-ocid="physics-tips.hero.section"
        className="relative pt-32 pb-20 px-4 overflow-hidden"
      >
        {/* ambient glow orbs */}
        <div
          aria-hidden="true"
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full glow-blur pointer-events-none"
          style={{ background: "oklch(0.72 0.16 80 / 0.12)" }}
        />
        <div
          aria-hidden="true"
          className="absolute top-10 right-1/4 w-72 h-72 rounded-full glow-blur pointer-events-none"
          style={{ background: "oklch(0.68 0.2 220 / 0.1)" }}
        />

        <div className="relative max-w-4xl mx-auto text-center">
          <div
            className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6"
            style={{
              background: "oklch(0.72 0.16 80 / 0.12)",
              border: "1px solid oklch(0.72 0.16 80 / 0.3)",
              color: "oklch(0.72 0.16 80)",
            }}
          >
            Expert Guidance
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.72 0.16 80), oklch(0.85 0.12 70))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Physics Tips
            </span>{" "}
            <span className="text-foreground">&amp; Strategies</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ace your exams with expert guidance from{" "}
            <span
              style={{ color: "oklch(0.72 0.16 80)" }}
              className="font-semibold"
            >
              Er. Pooja Verma
            </span>
            . Curated tips for Class 11, 12, NEET &amp; JEE.
          </p>
        </div>
      </section>

      {/* ── Tip of the Day ── */}
      <section
        data-ocid="physics-tips.totd.section"
        className="max-w-3xl mx-auto px-4 pb-16"
      >
        <div
          className="shine-effect rounded-2xl p-7 depth-card"
          style={{
            background: "oklch(0.14 0.015 270 / 0.9)",
            backdropFilter: "blur(20px)",
            border: "1px solid oklch(0.72 0.16 80 / 0.45)",
            boxShadow:
              "0 0 60px oklch(0.72 0.16 80 / 0.2), 0 0 120px oklch(0.72 0.16 80 / 0.08)",
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span
              className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full animate-glow-pulse"
              style={{
                background: "oklch(0.72 0.16 80 / 0.15)",
                border: "1px solid oklch(0.72 0.16 80 / 0.4)",
                color: "oklch(0.72 0.16 80)",
              }}
            >
              ⭐ Tip of the Day
            </span>
            <DifficultyBadge level={TIP_OF_DAY.difficulty} />
          </div>

          <div className="flex gap-4">
            <span className="text-4xl leading-none mt-1" aria-hidden="true">
              {TIP_OF_DAY.icon}
            </span>
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">
                {TIP_OF_DAY.title}
              </h2>
              <ul className="flex flex-col gap-2">
                {TIP_OF_DAY.bullets.map((b) => (
                  <li
                    key={`totd-${b.slice(0, 20)}`}
                    className="flex gap-2 text-muted-foreground leading-relaxed"
                  >
                    <span
                      style={{ color: "oklch(0.72 0.16 80)" }}
                      className="mt-0.5 shrink-0 font-bold"
                    >
                      ›
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Motivational Quotes ── */}
      <section
        data-ocid="physics-tips.quotes.section"
        className="py-14 px-4"
        style={{ background: "oklch(0.11 0.012 270 / 0.7)" }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-center mb-10 text-foreground">
            <span style={{ color: "oklch(0.68 0.2 220)" }}>💡</span> Words That
            Ignite
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {QUOTES.map((q) => (
              <blockquote
                key={q.id}
                data-ocid={`physics-tips.quote.${q.id}`}
                className="glass-card rounded-2xl p-6 flex flex-col gap-4"
                style={{ borderColor: "oklch(0.68 0.2 220 / 0.2)" }}
              >
                <span
                  className="text-4xl leading-none"
                  aria-hidden="true"
                  style={{ color: "oklch(0.68 0.2 220 / 0.6)" }}
                >
                  &ldquo;
                </span>
                <p className="text-foreground text-base leading-relaxed italic -mt-6">
                  {q.text}
                </p>
                <footer className="mt-auto">
                  <cite
                    className="not-italic text-sm font-semibold"
                    style={{ color: "oklch(0.68 0.2 220)" }}
                  >
                    — {q.author}
                  </cite>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── Category Filter + Tip Cards ── */}
      <section
        data-ocid="physics-tips.tips.section"
        className="max-w-7xl mx-auto px-4 py-16"
      >
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
            Browse by Topic
          </h2>
          <p className="text-muted-foreground">
            Filter tips by your class or exam target
          </p>
        </div>

        {/* Filter tabs */}
        <div
          data-ocid="physics-tips.category.filter"
          className="flex flex-wrap justify-center gap-3 mb-12"
          role="tablist"
          aria-label="Filter tips by category"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat}
              data-ocid={`physics-tips.filter.${cat.toLowerCase().replace(" ", "-")}`}
              onClick={() => setActiveCategory(cat)}
              className="px-5 py-2 rounded-full text-sm font-semibold border transition-smooth focus-visible:outline-none focus-visible:ring-2"
              style={{
                background:
                  activeCategory === cat
                    ? "oklch(0.72 0.16 80 / 0.18)"
                    : "oklch(0.14 0.015 270 / 0.7)",
                borderColor:
                  activeCategory === cat
                    ? "oklch(0.72 0.16 80 / 0.5)"
                    : "oklch(0.22 0.02 270)",
                color:
                  activeCategory === cat
                    ? "oklch(0.72 0.16 80)"
                    : "oklch(0.68 0.02 60)",
                boxShadow:
                  activeCategory === cat
                    ? "0 0 20px oklch(0.72 0.16 80 / 0.15)"
                    : "none",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tip cards grid */}
        <div
          data-ocid="physics-tips.tips.list"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((tip) => (
            <TipCard key={tip.id} tip={tip} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p
            data-ocid="physics-tips.tips.empty_state"
            className="text-center text-muted-foreground py-16"
          >
            No tips for this category yet.
          </p>
        )}
      </section>

      {/* ── Quick Formula Reference ── */}
      <section
        data-ocid="physics-tips.formulas.section"
        className="py-16 px-4"
        style={{ background: "oklch(0.11 0.012 270 / 0.7)" }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-3 text-foreground">
            Quick Formula Reference
          </h2>
          <p className="text-center text-muted-foreground mb-10">
            10 essential equations — always at your fingertips
          </p>

          <div
            className="rounded-2xl overflow-hidden depth-card"
            style={{
              background: "oklch(0.08 0.01 270)",
              border: "1px solid oklch(0.68 0.2 220 / 0.2)",
              boxShadow: "0 0 40px oklch(0.68 0.2 220 / 0.08)",
            }}
          >
            {/* header bar */}
            <div
              className="flex items-center gap-2 px-5 py-3 border-b"
              style={{ borderColor: "oklch(0.68 0.2 220 / 0.15)" }}
            >
              <span
                className="w-3 h-3 rounded-full bg-red-500/60"
                aria-hidden="true"
              />
              <span
                className="w-3 h-3 rounded-full bg-yellow-500/60"
                aria-hidden="true"
              />
              <span
                className="w-3 h-3 rounded-full bg-green-500/60"
                aria-hidden="true"
              />
              <span
                className="ml-2 text-xs font-mono"
                style={{ color: "oklch(0.68 0.2 220 / 0.6)" }}
              >
                physics-formulas.md
              </span>
            </div>

            {/* formula rows */}
            <ul
              className="divide-y"
              style={{ borderColor: "oklch(0.68 0.2 220 / 0.08)" }}
            >
              {FORMULAS.map((f, i) => (
                <li
                  key={f.id}
                  data-ocid={`physics-tips.formula.item.${i + 1}`}
                  className="flex items-center justify-between px-6 py-3.5 hover:bg-accent/5 transition-smooth group"
                >
                  <span
                    className="text-sm"
                    style={{ color: "oklch(0.68 0.02 60 / 0.75)" }}
                  >
                    <span
                      className="mr-3 text-xs font-mono"
                      style={{ color: "oklch(0.68 0.2 220 / 0.45)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {f.label}
                  </span>
                  <code
                    className="font-mono text-base font-semibold tracking-wide group-hover:scale-105 transition-smooth inline-block"
                    style={{ color: "oklch(0.68 0.2 220)" }}
                  >
                    {f.expr}
                  </code>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── CTA Strip ── */}
      <section
        data-ocid="physics-tips.cta.section"
        className="py-16 px-4 text-center"
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">
            Ready to take the next step?
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Join Medhavi Physics Classes and get personalised coaching from Er.
            Pooja Verma.
          </p>
          <button
            type="button"
            data-ocid="physics-tips.cta.enroll_button"
            className="shine-effect px-8 py-4 rounded-xl font-display font-bold text-lg transition-smooth hover:scale-105 focus-visible:outline-none focus-visible:ring-2"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.72 0.16 80), oklch(0.65 0.14 75))",
              color: "oklch(0.08 0.01 270)",
              boxShadow: "0 0 40px oklch(0.72 0.16 80 / 0.3)",
            }}
            onClick={() => {
              const nav = (
                window as Window & { __navigateTo?: (p: string) => void }
              ).__navigateTo;
              if (nav) nav("/courses");
            }}
          >
            Explore Our Courses →
          </button>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}

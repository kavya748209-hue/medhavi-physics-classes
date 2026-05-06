import { FloatingButtons } from "@/components/FloatingButtons";
import { PageNavbar } from "@/components/PageNavbar";
import { Footer } from "@/pages/Footer";
import {
  BookOpen,
  Download,
  FileText,
  Film,
  MessageCircle,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const subjects = [
  "All",
  "Mechanics",
  "Optics",
  "Electrodynamics",
  "Thermodynamics",
  "Modern Physics",
  "Waves",
];

const materials = [
  {
    id: 1,
    title: "Complete Formula Sheet — Class 11",
    desc: "Comprehensive formula reference for all Class 11 physics topics. Covers mechanics, thermodynamics, waves and SHM.",
    type: "Formula Sheet",
    subject: "Mechanics",
    icon: FileText,
    pages: "32 pages",
    difficulty: "Foundation",
  },
  {
    id: 2,
    title: "Complete Formula Sheet — Class 12",
    desc: "All Class 12 formulas compiled in one place. Essential for last-minute revision before NEET or JEE.",
    type: "Formula Sheet",
    subject: "Electrodynamics",
    icon: FileText,
    pages: "28 pages",
    difficulty: "Advanced",
  },
  {
    id: 3,
    title: "Optics — Important Derivations",
    desc: "Step-by-step derivations of all important optics results — ray optics, lens formula, wave optics, diffraction.",
    type: "Derivations",
    subject: "Optics",
    icon: BookOpen,
    pages: "24 pages",
    difficulty: "Advanced",
  },
  {
    id: 4,
    title: "Modern Physics — Video Lecture Notes",
    desc: "Structured notes from Er. Pooja Verma's video lectures on atomic structure, photoelectric effect, radioactivity.",
    type: "Lecture Notes",
    subject: "Modern Physics",
    icon: Film,
    pages: "40 pages",
    difficulty: "Advanced",
  },
  {
    id: 5,
    title: "Electrostatics Practice Paper Set",
    desc: "50 MCQs + 10 numerical problems on electrostatics — perfect for NEET & JEE pattern practice.",
    type: "Practice Paper",
    subject: "Electrodynamics",
    icon: Zap,
    pages: "20 pages",
    difficulty: "Intermediate",
  },
  {
    id: 6,
    title: "Thermodynamics Practice Problems",
    desc: "Conceptual and numerical problems on thermodynamics — laws, cycles, heat engines, and entropy.",
    type: "Practice Paper",
    subject: "Thermodynamics",
    icon: Zap,
    pages: "16 pages",
    difficulty: "Intermediate",
  },
  {
    id: 7,
    title: "NEET PYQ Physics 2019–2024",
    desc: "Previous 6 years NEET physics questions organized topic-wise with detailed solutions and strategy notes.",
    type: "Previous Year Papers",
    subject: "Modern Physics",
    icon: FileText,
    pages: "80 pages",
    difficulty: "Advanced",
  },
  {
    id: 8,
    title: "JEE Main PYQ Physics 2019–2024",
    desc: "JEE Main physics previous year questions with full solutions, analysis, and topic-wise weightage breakdown.",
    type: "Previous Year Papers",
    subject: "Mechanics",
    icon: FileText,
    pages: "96 pages",
    difficulty: "Advanced",
  },
  {
    id: 9,
    title: "Wave Mechanics — Derivations & Examples",
    desc: "Complete derivation set for waves, standing waves, resonance, Doppler effect with solved examples.",
    type: "Derivations",
    subject: "Waves",
    icon: BookOpen,
    pages: "22 pages",
    difficulty: "Intermediate",
  },
  {
    id: 10,
    title: "Mechanics Mock Test Series (10 Tests)",
    desc: "10 full-length mock tests covering all mechanics topics — NEET & JEE pattern with solutions.",
    type: "Mock Tests",
    subject: "Mechanics",
    icon: Zap,
    pages: "120 pages",
    difficulty: "Advanced",
  },
  {
    id: 11,
    title: "Optics Short Notes — Quick Revision",
    desc: "Compact 1-page-per-topic notes for rapid optics revision. Ideal for last-week exam preparation.",
    type: "Lecture Notes",
    subject: "Optics",
    icon: Film,
    pages: "18 pages",
    difficulty: "Foundation",
  },
  {
    id: 12,
    title: "Electromagnetic Induction Problem Bank",
    desc: "200+ problems on EMI, Faraday's laws, Lenz's law, and AC circuits — graded by difficulty.",
    type: "Practice Paper",
    subject: "Electrodynamics",
    icon: Zap,
    pages: "36 pages",
    difficulty: "Advanced",
  },
];

const difficultyColor: Record<string, string> = {
  Foundation: "text-accent bg-accent/10",
  Intermediate: "text-primary bg-primary/10",
  Advanced: "text-destructive bg-destructive/10",
};

export default function StudyMaterialsPage() {
  const [activeSubject, setActiveSubject] = useState("All");
  const filtered =
    activeSubject === "All"
      ? materials
      : materials.filter((m) => m.subject === activeSubject);

  return (
    <div className="min-h-screen bg-background">
      <PageNavbar />

      {/* Hero */}
      <section className="relative pt-36 pb-24 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 left-1/3 w-80 h-80 rounded-full glow-blur"
            style={{ background: "oklch(0.72 0.16 80 / 0.1)" }}
          />
          <div
            className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full glow-blur"
            style={{ background: "oklch(0.68 0.2 220 / 0.1)" }}
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-display font-semibold text-sm tracking-widest uppercase mb-3"
          >
            Free Resources
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-black text-4xl md:text-6xl text-foreground mb-4"
          >
            Study{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Materials
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg italic max-w-2xl mx-auto"
          >
            &ldquo;Knowledge is like a garden: if it is not cultivated, it
            cannot be harvested.&rdquo; — African Proverb
          </motion.p>
        </div>
      </section>

      {/* Info Banner */}
      <div
        className="py-6 px-4"
        style={{ background: "oklch(0.12 0.015 270)" }}
      >
        <div className="max-w-3xl mx-auto flex items-center justify-center gap-3">
          <MessageCircle className="w-5 h-5 text-accent shrink-0" />
          <p className="text-muted-foreground text-sm text-center">
            All study materials are available to enrolled students.{" "}
            <strong className="text-foreground">WhatsApp us</strong> to get
            instant access to your course materials.
          </p>
        </div>
      </div>

      {/* Filters + Cards */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {subjects.map((subject) => (
              <button
                key={subject}
                type="button"
                data-ocid={`materials.filter.${subject.toLowerCase().replace(/ /g, "_")}_tab`}
                onClick={() => setActiveSubject(subject)}
                className={`px-5 py-2 rounded-full font-semibold text-sm transition-smooth ${
                  activeSubject === subject
                    ? "bg-primary text-primary-foreground"
                    : "glass-card text-muted-foreground hover:text-foreground hover:bg-primary/10"
                }`}
              >
                {subject}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((mat, i) => (
              <motion.div
                key={mat.id}
                data-ocid={`materials.resource.item.${i + 1}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 6) * 0.08 }}
                className="glass-card rounded-2xl p-6 hover:glow-subtle transition-smooth group flex flex-col"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-smooth">
                    <mat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <span
                      className={`inline-block px-2 py-0.5 rounded text-xs font-semibold mb-1 ${difficultyColor[mat.difficulty]}`}
                    >
                      {mat.difficulty}
                    </span>
                    <h4 className="font-display font-bold text-foreground text-sm leading-tight">
                      {mat.title}
                    </h4>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                  {mat.desc}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-border/40">
                  <div className="space-y-1">
                    <span className="inline-block px-2 py-0.5 rounded text-xs bg-card/80 text-muted-foreground">
                      {mat.type}
                    </span>
                    <div className="text-xs text-muted-foreground">
                      {mat.pages} · {mat.subject}
                    </div>
                  </div>
                  <a
                    href="https://wa.me/919897085277"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid={`materials.download_button.${i + 1}`}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary transition-smooth text-sm font-semibold"
                  >
                    <Download className="w-4 h-4" /> Get
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div
              data-ocid="materials.empty_state"
              className="text-center py-16"
            >
              <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">
                No materials found for this subject yet
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Physics Quote */}
      <div
        className="py-8 px-4"
        style={{ background: "oklch(0.12 0.015 270)" }}
      >
        <p className="text-center text-primary/70 italic font-display text-lg max-w-3xl mx-auto">
          &ldquo;Study without desire spoils the memory, and it retains nothing
          that it takes in.&rdquo; — Leonardo da Vinci
        </p>
      </div>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-black text-3xl md:text-4xl text-foreground mb-4">
              Ready to{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Access All Materials?
              </span>
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Enroll in any course to get full access to all study materials,
              mock tests, and video lecture notes.
            </p>
            <a
              href="https://wa.me/919897085277"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="materials.enroll_cta_button"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base bg-primary text-primary-foreground hover:scale-105 transition-smooth glow-gold"
            >
              <MessageCircle className="w-5 h-5" /> Get Access via WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}

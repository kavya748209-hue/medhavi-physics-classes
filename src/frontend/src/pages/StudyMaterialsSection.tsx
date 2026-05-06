import { GlowCard } from "@/components/GlowCard";
import { SectionWrapper } from "@/components/SectionWrapper";
import {
  BookOpen,
  Download,
  FileText,
  Layers,
  TestTube2,
  Video,
} from "lucide-react";

const materials = [
  {
    icon: FileText,
    title: "Theory Notes — Class 11",
    desc: "Comprehensive handwritten-style digital notes covering Mechanics, Thermodynamics, Waves, and Optics with solved examples.",
    tag: "PDF Notes",
    chapters: 14,
  },
  {
    icon: FileText,
    title: "Theory Notes — Class 12",
    desc: "Complete notes for Electrostatics, Magnetism, Current Electricity, Modern Physics, and Semiconductor Physics.",
    tag: "PDF Notes",
    chapters: 15,
  },
  {
    icon: TestTube2,
    title: "DPP — Daily Practice Problems",
    desc: "700+ hand-picked DPP questions topic-wise. Designed to build speed, accuracy, and conceptual depth for every exam.",
    tag: "Practice Sheets",
    chapters: 30,
  },
  {
    icon: Layers,
    title: "PYQ Bank — NEET 10 Years",
    desc: "Solved and annotated Previous Year Questions for NEET Physics from 2014–2024. Pattern analysis included.",
    tag: "Question Bank",
    chapters: 10,
  },
  {
    icon: Layers,
    title: "PYQ Bank — JEE Mains & Advanced",
    desc: "Complete previous year JEE question repository with detailed solution approaches and difficulty tagging.",
    tag: "Question Bank",
    chapters: 12,
  },
  {
    icon: Video,
    title: "Video Explanations",
    desc: "Recorded concept videos for tricky topics — Projectile Motion, Electric Field Lines, Nuclear Physics — with whiteboard clarity.",
    tag: "Video Library",
    chapters: 45,
  },
  {
    icon: BookOpen,
    title: "Formula Sheets & Mnemonics",
    desc: "Quick-revision formula cards for all chapters. Colour-coded mnemonics to remember derivations before exam day.",
    tag: "Revision Cards",
    chapters: 30,
  },
  {
    icon: TestTube2,
    title: "Mock Test Series",
    desc: "Full-length timed mock tests simulating NEET/JEE exam pattern. Includes OMR practice and detailed score analysis.",
    tag: "Mock Tests",
    chapters: 20,
  },
];

const tagColors: Record<string, string> = {
  "PDF Notes": "oklch(0.72 0.16 80)",
  "Practice Sheets": "oklch(0.68 0.2 220)",
  "Question Bank": "oklch(0.65 0.18 160)",
  "Video Library": "oklch(0.65 0.18 300)",
  "Revision Cards": "oklch(0.72 0.16 80)",
  "Mock Tests": "oklch(0.68 0.2 220)",
};

export function StudyMaterialsSection() {
  const scrollToContact = () =>
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <SectionWrapper
      id="study-materials"
      className="py-24 relative overflow-hidden"
      style={
        {
          background:
            "linear-gradient(180deg, oklch(0.10 0.015 270) 0%, oklch(0.08 0.01 270) 100%)",
        } as React.CSSProperties
      }
    >
      {/* Glow accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-40 pointer-events-none"
        style={{
          background: "oklch(0.68 0.2 220 / 0.12)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
            style={{
              background: "oklch(0.68 0.2 220 / 0.12)",
              border: "1px solid oklch(0.68 0.2 220 / 0.4)",
              color: "oklch(0.68 0.2 220)",
            }}
          >
            Study Materials
          </span>
          <h2
            className="font-display font-black text-3xl sm:text-4xl lg:text-5xl mb-4"
            style={{ color: "oklch(0.96 0.02 60)" }}
          >
            Everything You Need
            <span
              className="block mt-1 bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, oklch(0.72 0.16 80), oklch(0.68 0.2 220))",
              }}
            >
              To Crack Physics
            </span>
          </h2>
          <p
            className="max-w-2xl mx-auto text-base leading-relaxed"
            style={{ color: "oklch(0.65 0.02 270)" }}
          >
            All study resources prepared personally by Er. Pooja Verma —
            available exclusively to enrolled students. Structured from basics
            to mastery.
          </p>
        </div>

        <div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          data-ocid="study.materials_list"
        >
          {materials.map((m, i) => (
            <GlowCard
              key={m.title}
              className="p-6"
              data-ocid={`study.material.${i + 1}`}
              style={{ animationDelay: `${i * 0.08}s` } as React.CSSProperties}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: `${tagColors[m.tag] ?? "oklch(0.72 0.16 80)"} / 0.12`,
                    backgroundColor: `color-mix(in oklch, ${tagColors[m.tag] ?? "oklch(0.72 0.16 80)"} 15%, transparent)`,
                  }}
                >
                  <m.icon
                    className="w-6 h-6"
                    style={{ color: tagColors[m.tag] ?? "oklch(0.72 0.16 80)" }}
                  />
                </div>
                <span
                  className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full"
                  style={{
                    background: `color-mix(in oklch, ${tagColors[m.tag] ?? "oklch(0.72 0.16 80)"} 12%, transparent)`,
                    color: tagColors[m.tag] ?? "oklch(0.72 0.16 80)",
                    border: `1px solid color-mix(in oklch, ${tagColors[m.tag] ?? "oklch(0.72 0.16 80)"} 30%, transparent)`,
                  }}
                >
                  {m.tag}
                </span>
              </div>
              <h3
                className="font-display font-bold text-sm mb-2"
                style={{ color: "oklch(0.92 0.02 60)" }}
              >
                {m.title}
              </h3>
              <p
                className="text-xs leading-relaxed mb-4"
                style={{ color: "oklch(0.60 0.02 270)" }}
              >
                {m.desc}
              </p>
              <div
                className="text-[10px] font-semibold"
                style={{ color: "oklch(0.55 0.02 270)" }}
              >
                {m.chapters}{" "}
                {m.tag.includes("Video") ? "videos" : "chapters / sets"}
              </div>
            </GlowCard>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <div
            className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl mb-6"
            style={{
              background: "oklch(0.14 0.015 270 / 0.9)",
              border: "1px solid oklch(0.72 0.16 80 / 0.3)",
              boxShadow: "0 0 40px oklch(0.72 0.16 80 / 0.1)",
            }}
          >
            <Download
              className="w-5 h-5"
              style={{ color: "oklch(0.72 0.16 80)" }}
            />
            <span
              className="text-sm font-medium"
              style={{ color: "oklch(0.85 0.02 60)" }}
            >
              All materials provided FREE to enrolled students
            </span>
          </div>
          <br />
          <button
            type="button"
            onClick={scrollToContact}
            data-ocid="study.enroll_cta_button"
            className="px-10 py-4 rounded-full font-bold text-sm shine-effect transition-smooth hover:scale-105"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.72 0.16 80), oklch(0.65 0.18 85))",
              color: "oklch(0.08 0.01 270)",
              boxShadow: "0 0 30px oklch(0.72 0.16 80 / 0.4)",
            }}
          >
            Enroll to Access All Materials
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
}

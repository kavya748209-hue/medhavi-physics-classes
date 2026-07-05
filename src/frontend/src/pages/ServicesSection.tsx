import { SectionWrapper } from "@/components/SectionWrapper";
import { Float } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Atom,
  BookOpen,
  Calculator,
  ChevronRight,
  FlaskConical,
  Microscope,
} from "lucide-react";
import { Suspense, useRef } from "react";
import type * as THREE from "three";

function FloatingTorus({
  position,
  color,
}: { position: [number, number, number]; color: string }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((s) => {
    if (ref.current) {
      ref.current.rotation.x = s.clock.elapsedTime * 0.4;
      ref.current.rotation.z = s.clock.elapsedTime * 0.3;
    }
  });
  return (
    <Float speed={1.5} floatIntensity={0.3}>
      <mesh ref={ref} position={position}>
        <torusGeometry args={[0.2, 0.06, 16, 40]} />
        <meshStandardMaterial
          color={color}
          metalness={0.9}
          roughness={0.1}
          emissive={color}
          emissiveIntensity={0.4}
        />
      </mesh>
    </Float>
  );
}

const programs = [
  {
    icon: BookOpen,
    title: "Class 11 Physics",
    badge: "Foundation",
    desc: "Build rock-solid fundamentals in Mechanics, Thermodynamics, Waves, and Optics. CBSE & State Board aligned with deep conceptual clarity.",
    features: [
      "Complete NCERT coverage",
      "Weekly chapter tests",
      "Formula revision sheets",
      "Doubt sessions daily",
    ],
    subjects: ["Mechanics", "Thermodynamics", "Waves", "Optics"],
    highlight: false,
  },
  {
    icon: Calculator,
    title: "Class 12 Physics",
    badge: "Advanced",
    desc: "Master Electrostatics, Magnetism, Modern Physics, and Semiconductors. Board exam and competitive exam prep rolled into one.",
    features: [
      "Board + competitive prep",
      "Numericals workshop",
      "Previous year analysis",
      "1-on-1 mentoring",
    ],
    subjects: [
      "Electrostatics",
      "Magnetism",
      "Modern Physics",
      "Semiconductors",
    ],
    highlight: false,
  },
  {
    icon: Microscope,
    title: "NEET Physics",
    badge: "★ Most Popular",
    desc: "Targeted NEET preparation with 3000+ MCQs, NTA-pattern mocks, and concept reinforcement designed for medical aspirants.",
    features: [
      "NTA exam pattern",
      "3000+ MCQ bank",
      "Full-length mocks",
      "Rank predictor sessions",
    ],
    subjects: ["Mechanics", "Optics", "Nuclear", "Electrodynamics"],
    highlight: true,
  },
  {
    icon: FlaskConical,
    title: "JEE Physics",
    badge: "Engineering",
    desc: "Rigorous JEE Mains & Advanced preparation. Problem-solving techniques, integer-type questions, and advanced concept drills.",
    features: [
      "JEE Mains + Advanced",
      "Integer & paragraph type",
      "Physics DPP sheets",
      "Numerical mastery",
    ],
    subjects: ["Rotational", "SHM", "Optics", "Modern Physics"],
    highlight: false,
  },
  {
    icon: Atom,
    title: "Class 11 Chemistry",
    badge: "Foundation",
    desc: "Build strong fundamentals in Physical, Organic, and Inorganic Chemistry. CBSE & State Board aligned with deep conceptual clarity and reaction mastery.",
    features: [
      "Complete NCERT coverage",
      "Weekly chapter tests",
      "Reaction revision sheets",
      "Doubt sessions daily",
    ],
    subjects: [
      "Physical Chemistry",
      "Organic Basics",
      "Inorganic",
      "Mole Concept",
    ],
    highlight: false,
  },
];

export function ServicesSection() {
  return (
    <SectionWrapper
      id="services"
      className="py-24 relative overflow-hidden"
      style={{ background: "oklch(0.08 0.01 270)" } as React.CSSProperties}
    >
      <div className="absolute inset-0 pointer-events-none opacity-35">
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.3} />
            <pointLight position={[5, 5, 5]} intensity={3} color="#D4A847" />
            <pointLight position={[-5, -5, 3]} intensity={2} color="#22D3EE" />
            {[
              [-4, 2, -1],
              [4, -2, -1],
              [-3, -3, -2],
              [3, 3, -2],
              [0, 3.5, -1.5],
              [-3.5, 0, -1],
            ].map((p, idx) => (
              <FloatingTorus
                key={`${p[0]},${p[1]}`}
                position={p as [number, number, number]}
                color={idx % 2 === 0 ? "#D4A847" : "#22D3EE"}
              />
            ))}
          </Suspense>
        </Canvas>
      </div>
      <div
        className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background: "oklch(0.72 0.16 80 / 0.08)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: "oklch(0.68 0.2 220 / 0.08)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
            style={{
              background: "oklch(0.72 0.16 80 / 0.12)",
              border: "1px solid oklch(0.72 0.16 80 / 0.35)",
              color: "oklch(0.85 0.12 80)",
            }}
          >
            Our Programs
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl mb-4">
            <span style={{ color: "oklch(0.92 0.04 60)" }}>
              Comprehensive Physics Coaching
            </span>
            <span
              className="block mt-1 bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, oklch(0.72 0.16 80), oklch(0.85 0.1 75), oklch(0.68 0.2 220))",
              }}
            >
              For Every Aspirant
            </span>
          </h2>
          <p
            className="max-w-xl mx-auto"
            style={{ color: "oklch(0.62 0.02 60)" }}
          >
            From foundational Class 11 to advanced JEE/NEET — the right program
            tailored for your goal.
          </p>
        </div>

        <div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          data-ocid="services.programs_list"
        >
          {programs.map((p, i) => (
            <div
              key={p.title}
              data-ocid={`services.program.item.${i + 1}`}
              className="rounded-2xl p-6 relative overflow-hidden flex flex-col transition-smooth hover:scale-[1.02]"
              style={{
                background: p.highlight
                  ? "linear-gradient(145deg, oklch(0.16 0.025 240), oklch(0.19 0.03 230))"
                  : "oklch(0.14 0.015 270 / 0.9)",
                border: p.highlight
                  ? "1px solid oklch(0.68 0.2 220 / 0.5)"
                  : "1px solid oklch(0.72 0.16 80 / 0.18)",
                backdropFilter: "blur(20px)",
                boxShadow: p.highlight
                  ? "0 0 60px oklch(0.68 0.2 220 / 0.25), 0 8px 32px oklch(0 0 0 / 0.4)"
                  : "0 8px 32px oklch(0 0 0 / 0.3)",
              }}
            >
              {p.highlight && (
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                  style={{
                    background:
                      "linear-gradient(90deg, oklch(0.68 0.2 220), oklch(0.72 0.16 80))",
                  }}
                />
              )}
              {p.highlight && (
                <div className="absolute top-4 right-4">
                  <span
                    className="px-2.5 py-1 text-[10px] font-bold rounded-full"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.68 0.2 220), oklch(0.72 0.16 80))",
                      color: "oklch(0.08 0.01 270)",
                    }}
                  >
                    {p.badge}
                  </span>
                </div>
              )}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background: p.highlight
                    ? "oklch(0.68 0.2 220 / 0.15)"
                    : "oklch(0.72 0.16 80 / 0.12)",
                  border: p.highlight
                    ? "1px solid oklch(0.68 0.2 220 / 0.3)"
                    : "1px solid oklch(0.72 0.16 80 / 0.25)",
                }}
              >
                <p.icon
                  className="w-6 h-6"
                  style={{
                    color: p.highlight
                      ? "oklch(0.75 0.18 220)"
                      : "oklch(0.85 0.12 80)",
                  }}
                />
              </div>
              {!p.highlight && (
                <div className="mb-2">
                  <span
                    className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full"
                    style={{
                      background: "oklch(0.72 0.16 80 / 0.12)",
                      color: "oklch(0.85 0.12 80)",
                    }}
                  >
                    {p.badge}
                  </span>
                </div>
              )}
              <h3
                className="font-display font-bold text-base mb-2 mt-1"
                style={{ color: "oklch(0.92 0.04 60)" }}
              >
                {p.title}
              </h3>
              <p
                className="text-xs leading-relaxed mb-3"
                style={{ color: "oklch(0.6 0.02 60)" }}
              >
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.subjects.map((s) => (
                  <span
                    key={s}
                    className="text-[9px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wide"
                    style={{
                      background: p.highlight
                        ? "oklch(0.68 0.2 220 / 0.1)"
                        : "oklch(0.22 0.02 270)",
                      color: p.highlight
                        ? "oklch(0.75 0.18 220)"
                        : "oklch(0.65 0.04 60)",
                      border: `1px solid ${p.highlight ? "oklch(0.68 0.2 220 / 0.2)" : "oklch(0.28 0.02 270)"}`,
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
              <ul className="mt-auto space-y-1.5">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-xs"
                    style={{ color: "oklch(0.7 0.03 60)" }}
                  >
                    <ChevronRight
                      className="w-3 h-3 flex-shrink-0"
                      style={{
                        color: p.highlight
                          ? "oklch(0.75 0.18 220)"
                          : "oklch(0.72 0.16 80 / 0.8)",
                      }}
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/919897085277"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 block text-center py-2.5 rounded-xl text-xs font-bold transition-smooth hover:scale-105 hover:shadow-lg"
                style={{
                  background: p.highlight
                    ? "linear-gradient(135deg, oklch(0.68 0.2 220), oklch(0.72 0.16 80))"
                    : "linear-gradient(135deg, oklch(0.72 0.16 80 / 0.9), oklch(0.65 0.14 75))",
                  color: "oklch(0.08 0.01 270)",
                }}
              >
                Enquire Now
              </a>
            </div>
          ))}
        </div>

        <div
          className="mt-14 rounded-3xl p-8 lg:p-12 relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.14 0.025 260), oklch(0.18 0.03 250), oklch(0.14 0.02 270))",
            border: "1px solid oklch(0.68 0.2 220 / 0.2)",
            boxShadow:
              "0 0 80px oklch(0.68 0.2 220 / 0.1), 0 0 40px oklch(0.72 0.16 80 / 0.08)",
          }}
        >
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              background: "oklch(0.68 0.2 220 / 0.05)",
              filter: "blur(40px)",
            }}
          />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3
                className="font-display font-black text-2xl sm:text-3xl mb-2"
                style={{ color: "oklch(0.92 0.04 60)" }}
              >
                Ready to Become the Next Topper?
              </h3>
              <p
                className="text-sm max-w-lg"
                style={{ color: "oklch(0.65 0.02 60)" }}
              >
                Join Medhavi Physics Classes today. First demo class is
                absolutely free. Limited seats available per batch.
              </p>
            </div>
            <a
              href="https://wa.me/919897085277"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="services.cta_button"
              className="flex-shrink-0 px-8 py-3.5 rounded-full font-bold text-sm transition-smooth hover:scale-105 hover:shadow-2xl shine-effect"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.72 0.16 80), oklch(0.68 0.2 220))",
                color: "oklch(0.08 0.01 270)",
              }}
            >
              Book Free Demo Class 🎓
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

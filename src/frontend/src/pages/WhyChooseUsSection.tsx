import { SectionWrapper } from "@/components/SectionWrapper";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Award,
  BookOpen,
  Brain,
  CheckCircle2,
  Medal,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Trophy,
  Users,
  Zap,
} from "lucide-react";
import { Suspense, useRef } from "react";
import type * as THREE from "three";

function RotatingGeom({
  position,
  color,
  speed,
}: { position: [number, number, number]; color: string; speed: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((s) => {
    if (ref.current) {
      ref.current.rotation.x = s.clock.elapsedTime * speed;
      ref.current.rotation.y = s.clock.elapsedTime * speed * 0.7;
    }
  });
  return (
    <mesh ref={ref} position={position}>
      <octahedronGeometry args={[0.18, 0]} />
      <meshStandardMaterial
        color={color}
        metalness={0.9}
        roughness={0.08}
        emissive={color}
        emissiveIntensity={0.3}
      />
    </mesh>
  );
}

const reasons = [
  {
    icon: Trophy,
    title: "500+ Toppers Produced",
    desc: "Our students have consistently ranked in NEET & JEE top lists across Uttar Pradesh, with many securing government medical and engineering seats.",
  },
  {
    icon: Brain,
    title: "Concept-First Teaching",
    desc: "Er. Pooja Verma uses deep conceptual methods — every formula is derived from first principles, not memorized. Students truly understand physics.",
  },
  {
    icon: Target,
    title: "Exam-Specific Strategy",
    desc: "Tailored prep strategies for NEET, JEE Mains & Advanced, and Board exams. We know exactly what each exam demands and train accordingly.",
  },
  {
    icon: Users,
    title: "Small Batch Learning",
    desc: "Limited seats per batch ensure personal attention. Every student's doubts are addressed, every concept is reinforced with individual care.",
  },
  {
    icon: Star,
    title: "10+ Years of Excellence",
    desc: "Over a decade of transforming average students into confident achievers. Our track record speaks — Medhavi is Bijnor's most trusted physics institute.",
  },
  {
    icon: BookOpen,
    title: "Comprehensive Study Material",
    desc: "Meticulously curated notes, practice sheets, previous year papers, and mock tests aligned with the latest NTA and CBSE syllabi.",
  },
  {
    icon: Zap,
    title: "Regular Mock Tests",
    desc: "Weekly tests simulate real exam conditions. Detailed analysis reports help identify weak areas and track improvement over time.",
  },
  {
    icon: Award,
    title: "Proven Result Oriented",
    desc: "Year after year, 98% of our enrolled students clear their target exams. We don't just teach — we guarantee results with dedication.",
  },
];

export function WhyChooseUsSection() {
  return (
    <SectionWrapper
      id="why"
      className="py-24 relative overflow-hidden"
      style={
        {
          background:
            "linear-gradient(180deg, oklch(0.08 0.01 270) 0%, oklch(0.11 0.015 270) 50%, oklch(0.08 0.01 270) 100%)",
        } as React.CSSProperties
      }
    >
      {/* 3D accent canvas */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.3} />
            <pointLight position={[4, 4, 4]} intensity={3} color="#D4A847" />
            <pointLight position={[-4, -4, 2]} intensity={2} color="#22D3EE" />
            {[
              [-5, 3, -2],
              [5, -2, -1],
              [-4, -3, -1.5],
              [4, 3, -2],
              [0, 4, -1],
              [3, 0, -1],
              [-3, 0, -2],
              [0, -4, -1],
            ].map((p, idx) => (
              <RotatingGeom
                key={`${p[0]},${p[1]}`}
                position={p as [number, number, number]}
                color={idx % 2 === 0 ? "#D4A847" : "#22D3EE"}
                speed={0.3 + idx * 0.04}
              />
            ))}
          </Suspense>
        </Canvas>
      </div>

      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "oklch(0.72 0.16 80 / 0.06)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
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
            Why Choose Medhavi
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl mb-4">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, oklch(0.72 0.16 80), oklch(0.85 0.1 75), oklch(0.68 0.2 220))",
              }}
            >
              Why Medhavi Physics?
            </span>
          </h2>
          <p
            className="max-w-2xl mx-auto text-base"
            style={{ color: "oklch(0.68 0.02 60)" }}
          >
            More than just coaching — a legacy of excellence, a community of
            achievers, and an unbreakable promise of results.
          </p>
        </div>

        <div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          data-ocid="why.reasons_list"
        >
          {reasons.map((r, i) => (
            <div
              key={r.title}
              data-ocid={`why.reason.item.${i + 1}`}
              className="group rounded-2xl p-6 transition-smooth hover:scale-[1.03] cursor-default"
              style={{
                background: "oklch(0.14 0.015 270 / 0.85)",
                border: "1px solid oklch(0.72 0.16 80 / 0.15)",
                backdropFilter: "blur(20px)",
                boxShadow: "0 8px 32px oklch(0 0 0 / 0.3)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "oklch(0.68 0.2 220 / 0.5)";
                el.style.boxShadow =
                  "0 8px 40px oklch(0.68 0.2 220 / 0.2), 0 0 60px oklch(0.72 0.16 80 / 0.1)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "oklch(0.72 0.16 80 / 0.15)";
                el.style.boxShadow = "0 8px 32px oklch(0 0 0 / 0.3)";
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-smooth group-hover:scale-110"
                style={{
                  background:
                    i % 2 === 0
                      ? "linear-gradient(135deg, oklch(0.72 0.16 80 / 0.2), oklch(0.72 0.16 80 / 0.08))"
                      : "linear-gradient(135deg, oklch(0.68 0.2 220 / 0.2), oklch(0.68 0.2 220 / 0.08))",
                  border:
                    i % 2 === 0
                      ? "1px solid oklch(0.72 0.16 80 / 0.3)"
                      : "1px solid oklch(0.68 0.2 220 / 0.3)",
                }}
              >
                <r.icon
                  className="w-6 h-6"
                  style={{
                    color:
                      i % 2 === 0
                        ? "oklch(0.85 0.12 80)"
                        : "oklch(0.75 0.18 220)",
                  }}
                />
              </div>
              <h3
                className="font-display font-bold text-sm mb-2"
                style={{ color: "oklch(0.92 0.04 60)" }}
              >
                {r.title}
              </h3>
              <p
                className="text-xs leading-relaxed"
                style={{ color: "oklch(0.62 0.02 60)" }}
              >
                {r.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Achievement Banner */}
        <div
          className="mt-16 rounded-3xl p-8 lg:p-12 relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.14 0.015 270), oklch(0.18 0.02 270))",
            border: "1px solid oklch(0.72 0.16 80 / 0.25)",
            boxShadow:
              "0 0 80px oklch(0.72 0.16 80 / 0.12), inset 0 0 40px oklch(0.72 0.16 80 / 0.05)",
          }}
        >
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
            style={{
              background: "oklch(0.72 0.16 80 / 0.08)",
              filter: "blur(60px)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-48 h-48 rounded-full pointer-events-none"
            style={{
              background: "oklch(0.68 0.2 220 / 0.08)",
              filter: "blur(60px)",
            }}
          />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <div
                className="text-5xl font-display font-black mb-2 leading-none"
                style={{ color: "oklch(0.85 0.12 80)" }}
              >
                500+
              </div>
              <div className="text-sm" style={{ color: "oklch(0.65 0.02 60)" }}>
                Toppers Produced
              </div>
            </div>
            <div
              className="hidden md:block w-px h-16"
              style={{ background: "oklch(0.72 0.16 80 / 0.2)" }}
            />
            <div className="text-center md:text-left">
              <div
                className="text-5xl font-display font-black mb-2 leading-none"
                style={{ color: "oklch(0.75 0.18 220)" }}
              >
                98%
              </div>
              <div className="text-sm" style={{ color: "oklch(0.65 0.02 60)" }}>
                Success Rate
              </div>
            </div>
            <div
              className="hidden md:block w-px h-16"
              style={{ background: "oklch(0.72 0.16 80 / 0.2)" }}
            />
            <div className="text-center md:text-left">
              <div
                className="text-5xl font-display font-black mb-2 leading-none"
                style={{ color: "oklch(0.85 0.12 80)" }}
              >
                10+
              </div>
              <div className="text-sm" style={{ color: "oklch(0.65 0.02 60)" }}>
                Years of Excellence
              </div>
            </div>
            <div
              className="hidden md:block w-px h-16"
              style={{ background: "oklch(0.72 0.16 80 / 0.2)" }}
            />
            <div className="flex-1 max-w-sm">
              <blockquote
                className="text-sm italic leading-relaxed"
                style={{ color: "oklch(0.78 0.06 60)" }}
              >
                <span
                  className="text-4xl font-display leading-none block mb-1"
                  style={{ color: "oklch(0.72 0.16 80 / 0.5)" }}
                >
                  &#8220;
                </span>
                Physics is not just a subject — it is the art of understanding
                why the universe works the way it does.
                <span
                  className="block mt-2 text-xs font-semibold uppercase tracking-widest"
                  style={{ color: "oklch(0.72 0.16 80 / 0.7)" }}
                >
                  — Er. Pooja Verma, Medhavi Physics
                </span>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

import { SectionWrapper } from "@/components/SectionWrapper";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion, useInView } from "motion/react";
import { Suspense, useEffect, useRef, useState } from "react";
import type * as THREE from "three";

// ── 3D spinning ring (gold/cyan palette) ──────────────────────────────────────
function SpinningRing({
  position,
  color,
  speed,
}: {
  position: [number, number, number];
  color: string;
  speed: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((s) => {
    if (ref.current) {
      ref.current.rotation.x = s.clock.elapsedTime * speed;
      ref.current.rotation.y = s.clock.elapsedTime * speed * 0.6;
    }
  });
  return (
    <mesh ref={ref} position={position}>
      <torusGeometry args={[0.28, 0.06, 16, 60]} />
      <meshStandardMaterial
        color={color}
        metalness={0.95}
        roughness={0.05}
        emissive={color}
        emissiveIntensity={0.3}
      />
    </mesh>
  );
}

// Floating wireframe icosahedron ornament
function FloatingSphere({
  position,
  color,
}: { position: [number, number, number]; color: string }) {
  const ref = useRef<THREE.Mesh>(null);
  const base = position[1];
  useFrame((s) => {
    if (ref.current) {
      ref.current.position.y =
        base + Math.sin(s.clock.elapsedTime * 0.7) * 0.25;
      ref.current.rotation.y = s.clock.elapsedTime * 0.4;
    }
  });
  return (
    <mesh ref={ref} position={position}>
      <icosahedronGeometry args={[0.18, 1]} />
      <meshStandardMaterial
        color={color}
        metalness={1}
        roughness={0.1}
        wireframe
      />
    </mesh>
  );
}

// ── Animated counter hook ─────────────────────────────────────────────────────
function useCounter(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, active]);
  return count;
}

// ── Stat card ─────────────────────────────────────────────────────────────────
function StatCard({
  value,
  suffix,
  label,
  icon,
  delay,
  active,
}: {
  value: number;
  suffix: string;
  label: string;
  icon: string;
  delay: number;
  active: boolean;
}) {
  const count = useCounter(value, 2200, active);
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
      className="relative rounded-2xl p-6 flex flex-col items-center text-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.14 0.02 270 / 0.9), oklch(0.18 0.025 270 / 0.7))",
        border: "1px solid oklch(0.72 0.16 80 / 0.35)",
        boxShadow:
          "0 0 24px oklch(0.72 0.16 80 / 0.12), inset 0 1px 0 oklch(0.72 0.16 80 / 0.15)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div
        className="absolute top-0 right-0 w-20 h-20 rounded-full pointer-events-none"
        style={{
          background: "oklch(0.72 0.16 80 / 0.06)",
          filter: "blur(16px)",
        }}
      />
      <span className="text-3xl mb-3">{icon}</span>
      <div
        className="font-display font-black text-4xl sm:text-5xl tracking-tight"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.85 0.18 80), oklch(0.72 0.16 80))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          filter: "drop-shadow(0 0 8px oklch(0.72 0.16 80 / 0.6))",
        }}
      >
        {count}
        {suffix}
      </div>
      <p
        className="mt-2 text-xs font-semibold uppercase tracking-widest"
        style={{ color: "oklch(0.68 0.2 220)" }}
      >
        {label}
      </p>
    </motion.div>
  );
}

// ── Topper quote card (ZERO photos) ──────────────────────────────────────────
function TopperCard({
  name,
  rank,
  year,
  quote,
  index,
  active,
}: {
  name: string;
  rank: string;
  year: string;
  quote: string;
  index: number;
  active: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={active ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.15 * index }}
      data-ocid={`toppers.item.${index + 1}`}
      className="relative rounded-2xl p-6 overflow-hidden"
      style={{
        background:
          "linear-gradient(145deg, oklch(0.12 0.02 270 / 0.95), oklch(0.16 0.025 270 / 0.85))",
        border: "1px solid oklch(0.68 0.2 220 / 0.3)",
        boxShadow:
          "0 0 20px oklch(0.68 0.2 220 / 0.08), inset 0 0 30px oklch(0.68 0.2 220 / 0.03)",
      }}
    >
      {/* Cyan top-edge accent */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.68 0.2 220 / 0.8), transparent)",
        }}
      />
      {/* Decorative giant quote glyph */}
      <span
        className="absolute -top-2 left-4 font-display font-black text-8xl select-none pointer-events-none"
        style={{ color: "oklch(0.72 0.16 80 / 0.12)", lineHeight: 1 }}
      >
        &ldquo;
      </span>
      <p
        className="relative text-sm italic leading-relaxed mb-5"
        style={{ color: "oklch(0.88 0.03 60)" }}
      >
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div>
          <p
            className="font-display font-bold text-base"
            style={{ color: "oklch(0.96 0.02 60)" }}
          >
            {name}
          </p>
          <p
            className="text-xs font-semibold mt-0.5"
            style={{ color: "oklch(0.72 0.16 80)" }}
          >
            {rank}
          </p>
        </div>
        <span
          className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest"
          style={{
            background: "oklch(0.68 0.2 220 / 0.15)",
            border: "1px solid oklch(0.68 0.2 220 / 0.4)",
            color: "oklch(0.78 0.2 220)",
          }}
        >
          {year}
        </span>
      </div>
    </motion.div>
  );
}

// ── Achievement badge pill ─────────────────────────────────────────────────────
function BadgePill({ text, icon }: { text: string; icon: string }) {
  return (
    <div
      className="flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap text-sm font-semibold"
      style={{
        background: "oklch(0.14 0.02 270 / 0.9)",
        border: "1px solid oklch(0.72 0.16 80 / 0.4)",
        color: "oklch(0.85 0.14 80)",
        boxShadow: "0 0 12px oklch(0.72 0.16 80 / 0.15)",
      }}
    >
      <span>{icon}</span>
      <span>{text}</span>
    </div>
  );
}

// ── Static data ───────────────────────────────────────────────────────────────
const stats = [
  { value: 500, suffix: "+", label: "Toppers Produced", icon: "🏆" },
  { value: 10, suffix: "+", label: "Years of Excellence", icon: "⭐" },
  { value: 98, suffix: "%", label: "Success Rate", icon: "📈" },
  { value: 50, suffix: "+", label: "AIR Ranks Secured", icon: "🎯" },
  { value: 5, suffix: "x", label: "Top 100 NEET Streak", icon: "🔥" },
  { value: 1000, suffix: "+", label: "Students Mentored", icon: "👩‍🎓" },
];

const toppers = [
  {
    name: "Aman Sharma",
    rank: "AIR 247 — NEET 2024",
    year: "NEET 2024",
    quote:
      "Physics became my strongest subject under Ma'am's guidance. Her way of breaking complex concepts into simple logic is truly unmatched.",
  },
  {
    name: "Priya Singh",
    rank: "99.2 Percentile — JEE Mains 2023",
    year: "JEE 2023",
    quote:
      "Medhavi's structured DPP sheets and daily revision sessions gave me the edge I needed to crack JEE with a top percentile.",
  },
  {
    name: "Rahul Verma",
    rank: "AIR 156 — NEET 2023",
    year: "NEET 2023",
    quote:
      "From an average student to AIR 156 — that journey happened because Pooja Ma'am believed in me before I believed in myself.",
  },
  {
    name: "Sneha Agarwal",
    rank: "Class 12 Board — 99/100 Physics",
    year: "Boards 2024",
    quote:
      "Scoring 100% in Physics felt like a distant dream until Medhavi showed me the systematic approach. The study material here is world-class.",
  },
  {
    name: "Karan Mishra",
    rank: "JEE Advanced Qualified 2023",
    year: "JEE 2023",
    quote:
      "The personal attention each student receives at Medhavi is something you won't find in any big coaching factory. It made all the difference.",
  },
  {
    name: "Ritu Yadav",
    rank: "AIR 1023 — NEET 2022",
    year: "NEET 2022",
    quote:
      "Pooja Ma'am's passion for Physics is contagious. From fearing the subject to scoring 175/180 — Medhavi completely transformed me.",
  },
];

const marqueeItems = [
  "🏆 500+ Toppers",
  "🎯 AIR 156 in NEET",
  "⭐ 10+ Years of Excellence",
  "📈 98% Success Rate",
  "🔥 Top 100 NEET — 5 Years Running",
  "👩‍🎓 1000+ Students Mentored",
  "🥇 JEE Advanced Qualifiers Every Batch",
  "💡 99.2%ile in JEE Mains",
  "🌟 Best Physics Faculty Award",
  "🏅 50+ AIR Ranks in NEET",
];

const ringConfig: {
  pos: [number, number, number];
  col: string;
  spd: number;
}[] = [
  { pos: [-6, 3, -3], col: "#D4AF37", spd: 0.4 },
  { pos: [6, -2, -2.5], col: "#00BFFF", spd: 0.35 },
  { pos: [-5, -3, -2], col: "#D4AF37", spd: 0.55 },
  { pos: [5, 3, -3], col: "#00BFFF", spd: 0.45 },
  { pos: [0, 4.5, -3], col: "#D4AF37", spd: 0.3 },
  { pos: [-3, 0.5, -1.5], col: "#00BFFF", spd: 0.6 },
  { pos: [3, -4, -2], col: "#D4AF37", spd: 0.5 },
  { pos: [0, -5, -2.5], col: "#00BFFF", spd: 0.38 },
  { pos: [-7, 0, -3.5], col: "#D4AF37", spd: 0.42 },
  { pos: [7, 1, -3], col: "#00BFFF", spd: 0.48 },
];

const sphereConfig: { pos: [number, number, number]; col: string }[] = [
  { pos: [-4, 2, -1], col: "#D4AF37" },
  { pos: [4, -1, -1], col: "#00BFFF" },
  { pos: [0, 3, -2], col: "#D4AF37" },
  { pos: [-2, -4, -1.5], col: "#00BFFF" },
];

// ── Main export ───────────────────────────────────────────────────────────────
export function ToppersSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <SectionWrapper
      id="toppers"
      className="py-24 relative overflow-hidden"
      style={
        {
          background:
            "linear-gradient(180deg, oklch(0.06 0.015 270) 0%, oklch(0.09 0.02 265) 50%, oklch(0.06 0.015 270) 100%)",
        } as React.CSSProperties
      }
    >
      {/* 3D canvas background */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.4} />
            <pointLight position={[8, 6, 4]} intensity={3} color="#D4AF37" />
            <pointLight position={[-8, -4, 4]} intensity={2} color="#00BFFF" />
            {ringConfig.map((r) => (
              <SpinningRing
                key={r.pos.join(",")}
                position={r.pos}
                color={r.col}
                speed={r.spd}
              />
            ))}
            {sphereConfig.map((s) => (
              <FloatingSphere
                key={s.pos.join(",")}
                position={s.pos}
                color={s.col}
              />
            ))}
          </Suspense>
        </Canvas>
      </div>

      {/* Ambient glows */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-64 rounded-full pointer-events-none"
        style={{
          background: "oklch(0.72 0.16 80 / 0.07)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-0 left-1/4 w-[400px] h-40 rounded-full pointer-events-none"
        style={{
          background: "oklch(0.68 0.2 220 / 0.07)",
          filter: "blur(50px)",
        }}
      />

      <div
        ref={sectionRef}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* ── Section header ── */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-5"
            style={{
              background: "oklch(0.72 0.16 80 / 0.1)",
              border: "1px solid oklch(0.72 0.16 80 / 0.4)",
              color: "oklch(0.82 0.16 80)",
              boxShadow: "0 0 16px oklch(0.72 0.16 80 / 0.2)",
            }}
          >
            <span>🏆</span> Hall of Fame
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-black text-4xl sm:text-5xl lg:text-6xl mb-4"
            style={{ color: "oklch(0.96 0.02 60)" }}
          >
            Our Pride &amp;{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.72 0.16 80), oklch(0.88 0.2 82), oklch(0.72 0.16 80))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 0 20px oklch(0.72 0.16 80 / 0.5))",
              }}
            >
              Achievements
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-2xl mx-auto text-base leading-relaxed"
            style={{ color: "oklch(0.70 0.03 220)" }}
          >
            Every rank, every percentile, every board score — a testament to
            dedication. These are not just numbers; they are lives transformed
            through the art of understanding Physics with Er. Pooja Verma.
          </motion.p>
        </div>

        {/* ── Achievement stats grid ── */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-16"
          data-ocid="toppers.stats.list"
        >
          {stats.map((s, i) => (
            <StatCard
              key={s.label}
              value={s.value}
              suffix={s.suffix}
              label={s.label}
              icon={s.icon}
              delay={i * 0.1}
              active={isInView}
            />
          ))}
        </div>

        {/* ── Marquee ticker ── */}
        <div
          className="relative overflow-hidden rounded-full mb-16 py-3"
          style={{
            background: "oklch(0.12 0.02 270 / 0.8)",
            border: "1px solid oklch(0.72 0.16 80 / 0.25)",
            boxShadow: "0 0 30px oklch(0.72 0.16 80 / 0.1)",
          }}
          data-ocid="toppers.marquee"
        >
          <div className="flex gap-8 animate-marquee whitespace-nowrap">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span
                // biome-ignore lint/suspicious/noArrayIndexKey: static list
                key={i}
                className="text-sm font-semibold px-3"
                style={{ color: "oklch(0.82 0.16 80)" }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* ── Topper quote cards (text-only, zero photos) ── */}
        <div className="mb-12">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-display font-bold text-2xl sm:text-3xl text-center mb-10"
            style={{ color: "oklch(0.96 0.02 60)" }}
          >
            Words from Our{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.68 0.2 220), oklch(0.78 0.2 220))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Toppers
            </span>
          </motion.h3>

          <div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
            data-ocid="toppers.list"
          >
            {toppers.map((t, i) => (
              <TopperCard key={t.name} {...t} index={i} active={isInView} />
            ))}
          </div>
        </div>

        {/* ── Achievement badge pills ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mt-8"
          data-ocid="toppers.badges"
        >
          <BadgePill icon="🥇" text="NEET Top 100 — 5 Consecutive Years" />
          <BadgePill icon="📚" text="Best Physics Faculty — Bijnor District" />
          <BadgePill icon="🎓" text="JEE Advanced Qualifiers Every Batch" />
          <BadgePill icon="⚡" text="India's Most Dedicated Physics Tutor" />
          <BadgePill icon="🌟" text="500+ Students in Top Medical Colleges" />
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

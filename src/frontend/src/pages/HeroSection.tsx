import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Float, MeshDistortMaterial, Sphere, Stars } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { ChevronDown } from "lucide-react";
import { Suspense, useEffect, useRef, useState } from "react";
import type * as THREE from "three";

// ─── Physics quotes data ─────────────────────────────────────────────────────
const physicsQuotes = [
  {
    quote:
      "The important thing is not to stop questioning. Curiosity has its own reason for existing.",
    author: "Albert Einstein",
  },
  {
    quote:
      "Physics is not a religion. If it were, we'd have a much easier time raising money.",
    author: "Leon Lederman",
  },
  {
    quote:
      "The laws of physics are the canvas God laid down on which to paint the universe.",
    author: "Dan Brown",
  },
  {
    quote:
      "If you are not completely confused by quantum mechanics, you do not understand it.",
    author: "John Wheeler",
  },
  {
    quote:
      "Physics is the foundation of all natural sciences and the universe itself.",
    author: "Er. Pooja Verma",
  },
  {
    quote:
      "To understand the universe is to understand yourself. Study physics.",
    author: "Carl Sagan",
  },
];

// ─── 3D Scene ────────────────────────────────────────────────────────────────
function AtomCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });
  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.6, 32, 32]} />
      <meshStandardMaterial
        color="#c8a83a"
        roughness={0.1}
        metalness={0.9}
        emissive="#c8a83a"
        emissiveIntensity={0.4}
      />
    </mesh>
  );
}

function OrbitRing({
  radius,
  speed,
  tilt,
}: { radius: number; speed: number; tilt: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const dotRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (groupRef.current) groupRef.current.rotation.z = tilt;
    if (dotRef.current) {
      const t = state.clock.elapsedTime * speed;
      dotRef.current.position.x = Math.cos(t) * radius;
      dotRef.current.position.y = Math.sin(t) * radius;
    }
  });
  return (
    <group ref={groupRef}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[radius, 0.015, 16, 100]} />
        <meshStandardMaterial
          color="#4fc3f7"
          transparent
          opacity={0.5}
          emissive="#4fc3f7"
          emissiveIntensity={0.3}
        />
      </mesh>
      <mesh ref={dotRef}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial
          color="#f0d060"
          emissive="#f0d060"
          emissiveIntensity={2}
        />
      </mesh>
    </group>
  );
}

function FloatingParticle({
  position,
}: { position: [number, number, number] }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.3;
      ref.current.rotation.y = state.clock.elapsedTime * 0.7;
      ref.current.rotation.x = state.clock.elapsedTime * 0.4;
    }
  });
  return (
    <mesh ref={ref} position={position}>
      <octahedronGeometry args={[0.07, 0]} />
      <meshStandardMaterial
        color="#4fc3f7"
        metalness={0.9}
        roughness={0.1}
        emissive="#4fc3f7"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}

function SceneContent() {
  const particles: [number, number, number][] = [
    [-3.5, 1.2, -1],
    [3.2, -1.0, -2],
    [-2.5, -2.2, 0],
    [2.8, 2.2, -1],
    [-1.2, 2.8, -1.5],
    [1.5, -2.8, -0.5],
    [-4.2, 0.2, -2],
    [4.0, 0.8, -1.5],
    [0.3, 3.2, -1],
    [-3.8, -1.8, -1],
    [1.8, 3.5, -2],
    [-1.5, -3.5, -1.5],
  ];
  return (
    <>
      <ambientLight intensity={0.3} color="#1a2040" />
      <pointLight position={[5, 5, 5]} intensity={2.5} color="#f0d060" />
      <pointLight position={[-5, -3, 3]} intensity={1.5} color="#4fc3f7" />
      <pointLight position={[0, 0, 4]} intensity={1.0} color="#a0c0ff" />
      <Stars
        radius={80}
        depth={60}
        count={1200}
        factor={4}
        saturation={0.8}
        fade
        speed={0.4}
      />
      <Float speed={1.8} rotationIntensity={0.3} floatIntensity={0.6}>
        <AtomCore />
        <OrbitRing radius={1.2} speed={1.6} tilt={0.3} />
        <OrbitRing radius={1.8} speed={-1.0} tilt={1.1} />
        <OrbitRing radius={2.4} speed={0.8} tilt={1.8} />
      </Float>
      {particles.map((pos) => (
        <FloatingParticle
          key={`${pos[0]},${pos[1]},${pos[2]}`}
          position={pos}
        />
      ))}
      <Sphere args={[0.25, 32, 32]} position={[-2.2, 1.8, 0.2]}>
        <MeshDistortMaterial
          color="#4fc3f7"
          distort={0.5}
          speed={2}
          metalness={0.6}
          roughness={0.1}
          emissive="#4fc3f7"
          emissiveIntensity={0.4}
        />
      </Sphere>
      <Sphere args={[0.18, 32, 32]} position={[2.8, -1.8, 0.5]}>
        <MeshDistortMaterial
          color="#c8a83a"
          distort={0.4}
          speed={1.8}
          metalness={0.8}
          roughness={0.1}
          emissive="#c8a83a"
          emissiveIntensity={0.5}
        />
      </Sphere>
    </>
  );
}

// ─── Physics Quotes Carousel ─────────────────────────────────────────────────
function PhysicsQuoteCarousel() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % physicsQuotes.length);
        setFading(false);
      }, 400);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const q = physicsQuotes[current];

  return (
    <div
      className="relative mt-10 mx-auto max-w-2xl"
      data-ocid="hero.quote_carousel"
      style={{
        transition: "opacity 0.4s ease",
        opacity: fading ? 0 : 1,
      }}
    >
      <div
        className="rounded-2xl px-6 py-5 text-center"
        style={{
          background: "oklch(0.14 0.015 270 / 0.85)",
          border: "1px solid oklch(0.72 0.16 80 / 0.3)",
          boxShadow:
            "0 0 40px oklch(0.72 0.16 80 / 0.12), inset 0 1px 0 oklch(0.72 0.16 80 / 0.1)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div
          className="text-3xl mb-2 leading-none"
          style={{ color: "oklch(0.72 0.16 80)" }}
        >
          ❝
        </div>
        <p
          className="text-sm sm:text-base font-medium italic leading-relaxed mb-3"
          style={{
            color: "oklch(0.92 0.02 60)",
            textShadow: "0 1px 8px oklch(0.08 0.01 270 / 0.8)",
          }}
        >
          {q.quote}
        </p>
        <span
          className="text-xs font-semibold tracking-widest uppercase"
          style={{ color: "oklch(0.72 0.16 80)" }}
        >
          — {q.author}
        </span>
        {/* Dot indicators */}
        <div className="flex justify-center gap-1.5 mt-3">
          {physicsQuotes.map((q, i) => (
            <button
              key={q.author}
              type="button"
              onClick={() => {
                setFading(true);
                setTimeout(() => {
                  setCurrent(i);
                  setFading(false);
                }, 300);
              }}
              aria-label={`Quote ${i + 1}`}
              style={{
                width: i === current ? "20px" : "6px",
                height: "6px",
                borderRadius: "3px",
                background:
                  i === current
                    ? "oklch(0.72 0.16 80)"
                    : "oklch(0.35 0.02 270)",
                transition: "all 0.3s ease",
                border: "none",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Stats ────────────────────────────────────────────────────────────────────
const stats = [
  { value: 500, suffix: "+", label: "Toppers" },
  { value: 10, suffix: "+", label: "Years Exp." },
  { value: 98, suffix: "%", label: "Success Rate" },
  { value: 2000, suffix: "+", label: "Students" },
];

// ─── Hero Section ─────────────────────────────────────────────────────────────
export function HeroSection() {
  const scrollToContact = () =>
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  const scrollToServices = () =>
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  const scrollToNext = () =>
    document.querySelector("#why")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.06 0.015 270) 0%, oklch(0.10 0.02 255) 50%, oklch(0.07 0.012 280) 100%)",
      }}
    >
      {/* Animated grid overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.68 0.2 220 / 0.04) 1px, transparent 1px), linear-gradient(90deg, oklch(0.68 0.2 220 / 0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* 3D Canvas background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
          <Suspense fallback={null}>
            <SceneContent />
          </Suspense>
        </Canvas>
      </div>

      {/* Gold glow orb top-left */}
      <div
        className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none z-0"
        style={{
          background: "oklch(0.72 0.16 80 / 0.12)",
          filter: "blur(100px)",
        }}
      />
      {/* Cyan glow orb bottom-right */}
      <div
        className="absolute bottom-1/4 -right-40 w-[450px] h-[450px] rounded-full pointer-events-none z-0"
        style={{
          background: "oklch(0.68 0.2 220 / 0.15)",
          filter: "blur(100px)",
        }}
      />

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* ── Left text column ── */}
            <div>
              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-xs font-semibold uppercase tracking-widest"
                style={{
                  background: "oklch(0.72 0.16 80 / 0.1)",
                  border: "1px solid oklch(0.72 0.16 80 / 0.4)",
                  color: "oklch(0.72 0.16 80)",
                  boxShadow: "0 0 20px oklch(0.72 0.16 80 / 0.2)",
                }}
              >
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ background: "oklch(0.72 0.16 80)" }}
                />
                ⚛ Bijnor's #1 Physics Institute
              </div>

              {/* Headline */}
              <h1 className="font-display font-black leading-tight mb-5">
                <span
                  className="block text-4xl sm:text-5xl lg:text-6xl"
                  style={{
                    color: "oklch(0.96 0.02 60)",
                    textShadow:
                      "0 2px 20px oklch(0.08 0.01 270 / 0.8), 0 0 40px oklch(0.68 0.2 220 / 0.3)",
                  }}
                >
                  Unlock the Universe
                </span>
                <span
                  className="block text-4xl sm:text-5xl lg:text-6xl"
                  style={{
                    color: "oklch(0.96 0.02 60)",
                    textShadow: "0 2px 20px oklch(0.08 0.01 270 / 0.8)",
                  }}
                >
                  of{" "}
                  <span
                    className="bg-clip-text text-transparent"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, oklch(0.72 0.16 80), oklch(0.78 0.18 90), oklch(0.68 0.2 220))",
                      WebkitBackgroundClip: "text",
                      filter: "drop-shadow(0 0 20px oklch(0.72 0.16 80 / 0.6))",
                    }}
                  >
                    Physics
                  </span>
                </span>
                <span
                  className="block text-2xl sm:text-3xl lg:text-4xl mt-2"
                  style={{
                    color: "oklch(0.72 0.16 80)",
                    textShadow: "0 0 30px oklch(0.72 0.16 80 / 0.5)",
                    fontWeight: 700,
                  }}
                >
                  Er. Pooja Verma
                </span>
              </h1>

              {/* Sub-heading */}
              <p
                className="text-base sm:text-lg font-medium mb-2 max-w-lg"
                style={{
                  color: "oklch(0.68 0.2 220)",
                  textShadow: "0 0 20px oklch(0.68 0.2 220 / 0.4)",
                  letterSpacing: "0.02em",
                }}
              >
                Expert Coaching for Class 11 | 12 | NEET | JEE
              </p>
              <p
                className="text-sm mb-2 max-w-lg leading-relaxed"
                style={{ color: "oklch(0.75 0.02 60)" }}
              >
                Engineer-turned-mentor with 10+ years transforming Bijnor's
                brightest minds into national-level toppers.
              </p>
              <p
                className="text-xs mb-8 flex items-center gap-1.5"
                style={{ color: "oklch(0.60 0.02 270)" }}
              >
                <span style={{ color: "oklch(0.68 0.2 220)" }}>📍</span>
                Surendra Nagar, near Shiv Mandir, Aawas Vikas, Bijnor, UP 246701
              </p>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-4 mb-8">
                <button
                  type="button"
                  onClick={scrollToContact}
                  data-ocid="hero.enroll_button"
                  className="px-8 py-3.5 rounded-full font-semibold text-sm shine-effect transition-smooth hover:scale-105"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.72 0.16 80), oklch(0.65 0.18 85))",
                    color: "oklch(0.08 0.01 270)",
                    boxShadow:
                      "0 0 30px oklch(0.72 0.16 80 / 0.5), 0 4px 20px oklch(0.08 0.01 270 / 0.4)",
                    fontWeight: 700,
                  }}
                >
                  ✦ Enroll Now — Free Demo
                </button>
                <button
                  type="button"
                  onClick={scrollToServices}
                  data-ocid="hero.explore_button"
                  className="px-8 py-3.5 rounded-full font-semibold text-sm transition-smooth hover:scale-105"
                  style={{
                    border: "1.5px solid oklch(0.68 0.2 220 / 0.7)",
                    color: "oklch(0.68 0.2 220)",
                    background: "oklch(0.68 0.2 220 / 0.08)",
                    boxShadow: "0 0 20px oklch(0.68 0.2 220 / 0.25)",
                  }}
                >
                  View Courses →
                </button>
              </div>

              {/* Physics quote carousel */}
              <PhysicsQuoteCarousel />
            </div>

            {/* ── Right: teacher photo column ── */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Outer glow ring */}
                <div
                  className="absolute -inset-4 rounded-3xl pointer-events-none animate-glow-pulse"
                  style={{
                    background:
                      "radial-gradient(ellipse, oklch(0.72 0.16 80 / 0.25), transparent 70%)",
                    filter: "blur(24px)",
                  }}
                />
                {/* Cyan outer border */}
                <div
                  className="absolute -inset-1 rounded-3xl pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.72 0.16 80 / 0.5), oklch(0.68 0.2 220 / 0.5))",
                    padding: "1px",
                    borderRadius: "1.5rem",
                  }}
                />
                {/* Photo card */}
                <div
                  className="relative z-10 rounded-3xl overflow-hidden"
                  style={{
                    width: "300px",
                    border: "2px solid oklch(0.72 0.16 80 / 0.5)",
                    boxShadow:
                      "0 0 60px oklch(0.72 0.16 80 / 0.3), 0 20px 60px oklch(0.08 0.01 270 / 0.8)",
                  }}
                >
                  <img
                    src="/assets/photo9.png"
                    alt="Er. Pooja Verma — Physics Expert & Mentor"
                    className="w-full h-auto object-cover"
                    style={{ maxHeight: "360px", objectPosition: "top" }}
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 px-5 py-4"
                    style={{
                      background:
                        "linear-gradient(0deg, oklch(0.06 0.015 270 / 0.97) 0%, transparent 100%)",
                    }}
                  >
                    <div
                      className="font-display font-bold text-sm mb-0.5"
                      style={{ color: "oklch(0.96 0.02 60)" }}
                    >
                      Er. Pooja Verma
                    </div>
                    <div
                      className="text-xs"
                      style={{ color: "oklch(0.72 0.16 80)" }}
                    >
                      M.Tech | Physics Expert | 10+ Yrs
                    </div>
                  </div>
                </div>

                {/* Floating badges */}
                <div
                  className="absolute -top-5 -right-5 px-3 py-2 rounded-xl text-xs font-bold animate-float z-20"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.72 0.16 80), oklch(0.65 0.18 85))",
                    color: "oklch(0.08 0.01 270)",
                    boxShadow: "0 0 20px oklch(0.72 0.16 80 / 0.5)",
                  }}
                >
                  500+ Toppers 🏆
                </div>
                <div
                  className="absolute -bottom-5 -left-5 px-3 py-2 rounded-xl text-xs font-bold animate-float z-20"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.68 0.2 220), oklch(0.60 0.22 230))",
                    color: "oklch(0.08 0.01 270)",
                    boxShadow: "0 0 20px oklch(0.68 0.2 220 / 0.5)",
                    animationDelay: "1s",
                  }}
                >
                  98% Success ⭐
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats bar ── */}
      <div
        className="relative z-10 w-full"
        data-ocid="hero.stats_section"
        style={{
          background: "oklch(0.10 0.015 270 / 0.9)",
          borderTop: "1px solid oklch(0.72 0.16 80 / 0.2)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center group">
                <div
                  className="font-display font-black text-3xl lg:text-4xl"
                  style={{
                    color: "oklch(0.72 0.16 80)",
                    textShadow: "0 0 30px oklch(0.72 0.16 80 / 0.6)",
                  }}
                >
                  <AnimatedCounter
                    end={s.value}
                    suffix={s.suffix}
                    duration={2200}
                  />
                </div>
                <div
                  className="text-xs font-medium mt-1 uppercase tracking-widest"
                  style={{ color: "oklch(0.65 0.02 270)" }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        type="button"
        onClick={scrollToNext}
        aria-label="Scroll down"
        data-ocid="hero.scroll_indicator"
        className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 transition-smooth hover:opacity-80"
        style={{ color: "oklch(0.65 0.02 270)" }}
      >
        <span className="text-xs uppercase tracking-widest">Explore</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </button>
    </section>
  );
}

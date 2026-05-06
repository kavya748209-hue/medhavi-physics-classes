import { FloatingButtons } from "@/components/FloatingButtons";
import { PageNavbar } from "@/components/PageNavbar";
import { Footer } from "@/pages/Footer";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  CheckCircle,
  Clock,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

const courses = [
  {
    id: "class11",
    badge: "Foundation",
    title: "Class 11",
    subtitle: "Physics Foundation Program",
    desc: "Build rock-solid fundamentals in Class 11 physics. This course ensures complete NCERT mastery combined with competitive exam-level practice from day one.",
    color: "primary" as const,
    duration: "12 Months",
    batch: "Morning: 7–9 AM | Evening: 5–7 PM",
    highlights: [
      "Mechanics — Laws of Motion, Work & Energy",
      "Kinematics — Motion in 1D, 2D & 3D",
      "Thermal Physics — Thermodynamics & Kinetic Theory",
      "Waves & Oscillations — SHM, Wave Optics",
      "Gravitation & Fluid Mechanics",
      "Weekly Chapter Tests + NCERT Solutions",
    ],
  },
  {
    id: "class12",
    badge: "Advanced",
    title: "Class 12",
    subtitle: "Physics Advanced Program",
    desc: "Master the most exam-critical topics of Class 12 physics with deep conceptual clarity and intensive mock test preparation for Board + Competitive exams.",
    color: "accent" as const,
    duration: "12 Months",
    batch: "Morning: 7–9 AM | Evening: 5–7 PM",
    highlights: [
      "Electrostatics & Electrodynamics",
      "Current Electricity & Magnetic Effects",
      "Electromagnetic Induction & AC Circuits",
      "Ray Optics & Wave Optics",
      "Modern Physics — Atoms, Nuclei, Semiconductors",
      "Board Exam Special + PYQ Practice",
    ],
  },
  {
    id: "neet",
    badge: "Medical",
    title: "NEET Prep",
    subtitle: "NEET Medical Physics Program",
    desc: "Comprehensive NEET physics preparation covering the complete syllabus with high-yield topic identification, NTA pattern practice, and strategy coaching.",
    color: "primary" as const,
    duration: "18 Months",
    batch: "Morning: 6–9 AM | Weekend: 9 AM – 1 PM",
    highlights: [
      "Complete NEET Syllabus — Class 11 + 12 Physics",
      "NTA Pattern Mock Tests (Weekly)",
      "High-Yield Topic Focus (35% of NEET from Modern Physics)",
      "Previous 10 Year NEET Paper Analysis",
      "Time Management & Exam Strategy",
      "Biology-Physics Integration Tips",
    ],
  },
  {
    id: "jee",
    badge: "Engineering",
    title: "JEE Prep",
    subtitle: "JEE Main + Advanced Program",
    desc: "The most rigorous physics program for JEE aspirants. Deep problem-solving, advanced applications, and full coverage of JEE Advanced-level questions.",
    color: "accent" as const,
    duration: "24 Months",
    batch: "Morning: 6–9 AM | Weekend: 9 AM – 2 PM",
    highlights: [
      "JEE Main + Advanced Complete Syllabus",
      "Advanced Problem Solving (Level 1 to Level 5)",
      "Rotational Dynamics, Fluid Mechanics (Advanced)",
      "Optics, Modern Physics — JEE Advanced Focus",
      "Olympiad-Level Conceptual Questions",
      "Full-Length JEE Mocks + Rank Analysis",
    ],
  },
];

const comparison = [
  { feature: "NCERT Coverage", c11: true, c12: true, neet: true, jee: true },
  {
    feature: "Competitive Level",
    c11: false,
    c12: true,
    neet: true,
    jee: true,
  },
  {
    feature: "Mock Tests",
    c11: "Weekly",
    c12: "Weekly",
    neet: "Weekly",
    jee: "2x/Week",
  },
  {
    feature: "Doubt Sessions",
    c11: "Daily",
    c12: "Daily",
    neet: "Daily",
    jee: "Daily",
  },
  { feature: "Study Material", c11: true, c12: true, neet: true, jee: true },
  { feature: "PYQ Practice", c11: false, c12: true, neet: true, jee: true },
  {
    feature: "Batch Size",
    c11: "20-25",
    c12: "20-25",
    neet: "15-20",
    jee: "15-20",
  },
];

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageNavbar />

      {/* Hero Banner */}
      <section className="relative py-32 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 left-1/3 w-80 h-80 rounded-full glow-blur"
            style={{ background: "oklch(0.72 0.16 80 / 0.12)" }}
          />
          <div
            className="absolute bottom-0 right-1/3 w-64 h-64 rounded-full glow-blur"
            style={{ background: "oklch(0.68 0.2 220 / 0.1)" }}
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-display font-semibold text-sm tracking-widest uppercase mb-3"
          >
            Programs & Courses
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-black text-4xl md:text-6xl text-foreground mb-4"
          >
            Expert Physics{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Programs
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg italic"
          >
            &ldquo;An investment in knowledge pays the best interest.&rdquo; —
            Benjamin Franklin
          </motion.p>
        </div>
      </section>

      {/* Course Cards */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {courses.map((course, i) => (
              <motion.div
                key={course.id}
                data-ocid={`courses.${course.id}_card`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`glass-card rounded-3xl p-8 ${course.color === "primary" ? "glow-gold" : "glow-cyan"} hover:scale-[1.02] transition-smooth group relative overflow-hidden`}
              >
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full glow-blur"
                  style={{
                    background:
                      course.color === "primary"
                        ? "oklch(0.72 0.16 80 / 0.15)"
                        : "oklch(0.68 0.2 220 / 0.12)",
                  }}
                />
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${course.color === "primary" ? "bg-primary/20 text-primary" : "bg-accent/20 text-accent"}`}
                    >
                      {course.badge}
                    </span>
                    <BookOpen
                      className={`w-6 h-6 ${course.color === "primary" ? "text-primary" : "text-accent"}`}
                    />
                  </div>
                  <h3 className="font-display font-black text-2xl text-foreground mb-1">
                    {course.title}
                  </h3>
                  <p
                    className={`font-semibold text-sm mb-4 ${course.color === "primary" ? "text-primary" : "text-accent"}`}
                  >
                    {course.subtitle}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {course.desc}
                  </p>
                  <div className="flex gap-4 mb-6">
                    <div className="flex items-center gap-2 text-muted-foreground text-xs">
                      <Clock className="w-4 h-4 text-primary" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-xs">
                      <Calendar className="w-4 h-4 text-accent" />
                      <span className="truncate max-w-[160px]">
                        {course.batch}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2 mb-8">
                    {course.highlights.map((h) => (
                      <div key={h} className="flex items-start gap-2">
                        <CheckCircle
                          className={`w-4 h-4 mt-0.5 shrink-0 ${course.color === "primary" ? "text-primary" : "text-accent"}`}
                        />
                        <span className="text-muted-foreground text-sm">
                          {h}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-6 border-t border-border/40">
                    <p className="text-muted-foreground text-xs mb-4">
                      💬 Fees details available on inquiry — contact us for
                      current batch pricing and scholarships.
                    </p>
                    <a
                      href="https://wa.me/919897085277"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-ocid={`courses.${course.id}_enroll_button`}
                      className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-smooth hover:scale-105 ${course.color === "primary" ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"}`}
                    >
                      Enroll Now <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Physics Quote Banner */}
      <div
        className="py-8 px-4"
        style={{ background: "oklch(0.12 0.015 270)" }}
      >
        <p className="text-center text-primary/70 italic font-display text-lg max-w-3xl mx-auto">
          &ldquo;The difference between a good student and an extraordinary one
          is the quality of questions they ask.&rdquo;
        </p>
      </div>

      {/* Comparison Table */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display font-black text-3xl md:text-4xl text-foreground mb-4">
              Course{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Comparison
              </span>
            </h2>
            <p className="text-muted-foreground">
              Find the right program for your goal
            </p>
          </motion.div>
          <div className="glass-card rounded-3xl overflow-hidden glow-subtle">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr style={{ background: "oklch(0.18 0.02 270)" }}>
                    <th className="text-left px-6 py-4 text-foreground font-bold text-sm">
                      Feature
                    </th>
                    {["Class 11", "Class 12", "NEET", "JEE"].map((h) => (
                      <th
                        key={h}
                        className="px-4 py-4 text-center text-primary font-bold text-sm"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={i % 2 === 0 ? "bg-card/30" : ""}
                    >
                      <td className="px-6 py-4 text-muted-foreground text-sm font-medium">
                        {row.feature}
                      </td>
                      {(
                        [row.c11, row.c12, row.neet, row.jee] as (
                          | boolean
                          | string
                        )[]
                      ).map((val, j) => (
                        <td
                          key={`${row.feature}-${j}`}
                          className="px-4 py-4 text-center"
                        >
                          {typeof val === "boolean" ? (
                            val ? (
                              <CheckCircle className="w-5 h-5 text-accent mx-auto" />
                            ) : (
                              <span className="text-muted-foreground text-lg">
                                —
                              </span>
                            )
                          ) : (
                            <span className="text-foreground text-sm font-medium">
                              {val}
                            </span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment CTA */}
      <section
        className="py-20 px-4"
        style={{ background: "oklch(0.11 0.012 270)" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Zap className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="font-display font-black text-3xl md:text-4xl text-foreground mb-4">
              Start Your Journey{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Today
              </span>
            </h2>
            <p className="text-muted-foreground mb-4 text-lg">
              Limited seats available in each batch. Admissions are on
              first-come, first-served basis.
            </p>
            <p className="text-muted-foreground mb-8 text-sm">
              📞 Call us at{" "}
              <strong className="text-foreground">09897085277</strong> or
              WhatsApp to confirm your seat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/919897085277"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="courses.enroll_cta_button"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-base bg-primary text-primary-foreground hover:scale-105 transition-smooth glow-gold"
              >
                Book Free Demo Class <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:09897085277"
                data-ocid="courses.call_button"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-base glass-card border border-primary/30 text-foreground hover:scale-105 transition-smooth"
              >
                <Users className="w-5 h-5 text-accent" /> Call for Details
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}

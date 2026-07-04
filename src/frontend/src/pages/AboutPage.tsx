import { FloatingButtons } from "@/components/FloatingButtons";
import { PageNavbar } from "@/components/PageNavbar";
import { Footer } from "@/pages/Footer";
import {
  Atom,
  Award,
  BookOpen,
  Brain,
  GraduationCap,
  Star,
  Target,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

const physicsSymbols = [
  "Ψ",
  "∇",
  "∫",
  "Σ",
  "∂",
  "λ",
  "ω",
  "φ",
  "μ",
  "ε",
  "F=ma",
  "E=mc²",
  "∞",
  "π",
  "ΔE",
];

const milestones = [
  {
    year: "2010",
    title: "Founded Institute",
    desc: "Started Medhavi Physics Classes with a vision to make physics accessible and enjoyable for every student in Bijnor.",
  },
  {
    year: "2013",
    title: "First JEE Topper",
    desc: "Student Rohit Sharma secured AIR 142 in JEE Advanced — the institute's first national-rank achievement.",
  },
  {
    year: "2016",
    title: "100 Toppers Milestone",
    desc: "Celebrated 100th student to crack either NEET or JEE with distinction, a landmark achievement.",
  },
  {
    year: "2019",
    title: "Batch Expansion",
    desc: "Expanded to dedicated batches for Class 11, Class 12, NEET, and JEE, growing our student community across Bijnor.",
  },
  {
    year: "2022",
    title: "500+ Toppers",
    desc: "Over 500 students have now qualified in NEET/JEE from our institute, setting a record in Bijnor.",
  },
  {
    year: "2024",
    title: "National Recognition",
    desc: "Recognized as one of UP's top physics coaching institutes by multiple education bodies and media outlets.",
  },
];

const values = [
  {
    icon: Brain,
    title: "Conceptual Clarity",
    desc: "We believe in understanding over memorization. Every concept is taught from first principles to build unshakeable foundations.",
  },
  {
    icon: Target,
    title: "Exam-Focused Training",
    desc: "Rigorous practice with previous year papers, mock tests, and pattern analysis ensures students are fully exam-ready.",
  },
  {
    icon: Users,
    title: "Personal Attention",
    desc: "Small batch sizes ensure every student gets individual attention, doubt clearing, and personalized guidance.",
  },
  {
    icon: Star,
    title: "Excellence Culture",
    desc: "We cultivate a culture of excellence where mediocrity is never accepted and every student strives for their best.",
  },
];

const qualifications = [
  { icon: GraduationCap, label: "B.Tech (Physics & Engineering)" },
  { icon: BookOpen, label: "14+ Years Teaching Experience" },
  { icon: Award, label: "500+ NEET/JEE Qualified Students" },
  { icon: Atom, label: "Specialized in Modern Physics & Electrodynamics" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageNavbar />

      {/* Hero Banner */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {physicsSymbols.map((sym, idx) => (
            <motion.div
              key={sym}
              className="absolute font-mono text-primary/10 select-none"
              style={{
                left: `${(idx * 7.3) % 95}%`,
                top: `${(idx * 11.7) % 90}%`,
                fontSize: `${1 + (idx % 3) * 0.5}rem`,
              }}
              animate={{ y: [0, -20, 0], opacity: [0.05, 0.15, 0.05] }}
              transition={{
                duration: 4 + (idx % 4),
                repeat: Number.POSITIVE_INFINITY,
                delay: idx * 0.3,
              }}
            >
              {sym}
            </motion.div>
          ))}
          <div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full glow-blur"
            style={{ background: "oklch(0.72 0.16 80 / 0.12)" }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full glow-blur"
            style={{ background: "oklch(0.68 0.2 220 / 0.1)" }}
          />
        </div>
        <div className="relative z-10 text-center px-4 py-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-display font-semibold text-sm tracking-widest uppercase mb-3"
          >
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-black text-4xl md:text-6xl text-foreground mb-4 leading-tight"
          >
            About{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Our Institute
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg italic"
          >
            &ldquo;Physics is not just a subject — it is the language of the
            universe, and we make you fluent in it.&rdquo;
          </motion.p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">
                Meet the Educator
              </p>
              <h2 className="font-display font-black text-3xl md:text-4xl text-foreground mb-2">
                Er. Pooja Verma
              </h2>
              <p className="text-accent font-semibold text-sm mb-6">
                M.Tech, B.Tech, B.Ed.
              </p>
              <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
                <p>
                  Er. Pooja Verma is one of India's most dedicated physics
                  educators, with over{" "}
                  <strong className="text-foreground">
                    14+ years of teaching experience
                  </strong>{" "}
                  at the highest competitive exam levels. Her B.Tech background
                  in Physics and Engineering gives her a unique edge.
                </p>
                <p>
                  Under her expert guidance, more than{" "}
                  <strong className="text-foreground">500 students</strong> have
                  cracked NEET and JEE examinations, with many securing top AIR
                  ranks. Her teaching philosophy centers on making complex
                  physics intuitive, enjoyable, and deeply understood.
                </p>
                <p>
                  Known for her patient, systematic teaching style — from
                  Quantum Mechanics to Electrostatics — Er. Pooja Verma has
                  built a reputation as Bijnor's most trusted physics coach.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {qualifications.map((q, qIdx) => (
                  <motion.div
                    key={q.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: qIdx * 0.1 }}
                    className="glass-card rounded-xl p-4 flex items-start gap-3"
                  >
                    <q.icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground text-sm font-medium">
                      {q.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="glass-card rounded-3xl p-10 glow-subtle relative overflow-hidden">
                <div
                  className="absolute top-0 right-0 w-40 h-40 rounded-full glow-blur"
                  style={{ background: "oklch(0.72 0.16 80 / 0.2)" }}
                />
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { num: "1400+", label: "Happy Students" },
                    { num: "14+", label: "Years of Excellence" },
                    { num: "98%", label: "Success Rate" },
                    { num: "4", label: "Expert Courses" },
                  ].map((s) => (
                    <div key={s.num} className="text-center">
                      <div className="font-display font-black text-3xl md:text-4xl bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
                        {s.num}
                      </div>
                      <div className="text-muted-foreground text-sm mt-1">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-8 border-t border-border/40">
                  <p className="text-center text-muted-foreground text-sm italic">
                    &ldquo;Every student who walks through our doors carries the
                    potential to be extraordinary.&rdquo;
                  </p>
                  <p className="text-center text-primary font-semibold text-sm mt-2">
                    — Er. Pooja Verma
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Physics Quote Banner */}
      <div
        className="py-8 px-4"
        style={{ background: "oklch(0.12 0.015 270)" }}
      >
        <p className="text-center text-primary/70 italic font-display text-lg max-w-3xl mx-auto">
          &ldquo;The most incomprehensible thing about the universe is that it
          is comprehensible.&rdquo; — Albert Einstein
        </p>
      </div>

      {/* Mission & Vision */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-black text-3xl md:text-4xl text-foreground mb-4">
              Mission &amp;{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Vision
              </span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                title: "Our Mission",
                icon: Target,
                glow: "glow-gold",
                text: "To provide world-class physics education to every student in Bijnor and beyond, making competitive exam success achievable for all through conceptual depth, rigorous practice, and personalized mentorship.",
              },
              {
                title: "Our Vision",
                icon: Star,
                glow: "glow-cyan",
                text: "To be recognized as India's most impactful physics coaching institute, where every graduate carries not just exam success, but a lifelong love for science and an ability to think analytically about the world.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className={`glass-card rounded-2xl p-8 ${item.glow} hover:scale-[1.02] transition-smooth`}
              >
                <item.icon
                  className={`w-10 h-10 mb-4 ${i === 0 ? "text-primary" : "text-accent"}`}
                />
                <h3 className="font-display font-bold text-xl text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

          <h3 className="font-display font-bold text-2xl text-center text-foreground mb-8">
            Our Core Values
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6 text-center hover:scale-105 transition-smooth glow-subtle group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-smooth">
                  <v.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-display font-bold text-foreground mb-2">
                  {v.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section
        className="py-20 px-4"
        style={{ background: "oklch(0.11 0.012 270)" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-black text-3xl md:text-4xl text-foreground mb-4">
              Teaching{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Methodology
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A proven 5-step framework that transforms average students into
              toppers
            </p>
          </motion.div>
          <div className="space-y-4 max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "Conceptual Foundation",
                desc: "Every topic begins with first-principles understanding. No shortcuts, no rote learning — only deep conceptual clarity that lasts a lifetime.",
              },
              {
                step: "02",
                title: "Visual & Intuitive Teaching",
                desc: "Complex physics is explained through diagrams, real-world analogies, and thought experiments that make abstract ideas tangible.",
              },
              {
                step: "03",
                title: "Problem-Solving Drills",
                desc: "Structured practice sessions from basic to advanced problems, building confidence and speed for exam conditions.",
              },
              {
                step: "04",
                title: "Mock Test Regime",
                desc: "Weekly full-length mock tests under real exam conditions, followed by detailed performance analysis and personalized feedback.",
              },
              {
                step: "05",
                title: "Doubt Resolution",
                desc: "Dedicated daily doubt-clearing sessions where no question is too small or too basic — every doubt gets answered.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 glass-card rounded-2xl p-6 hover:glow-subtle transition-smooth"
              >
                <div className="font-display font-black text-4xl text-primary/20 shrink-0 w-14 text-right">
                  {item.step}
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-black text-3xl md:text-4xl text-foreground mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
          </motion.div>
          <div className="relative pl-12 md:pl-0">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/20" />
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex mb-10 last:mb-0"
              >
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background mt-5" />
                <div
                  className={`ml-8 md:ml-0 ${i % 2 === 0 ? "md:mr-auto md:pr-10 md:text-right" : "md:ml-auto md:pl-10"} md:w-[45%] glass-card rounded-2xl p-5 hover:glow-subtle transition-smooth`}
                >
                  <div className="text-primary font-display font-black text-xl mb-1">
                    {m.year}
                  </div>
                  <h4 className="font-bold text-foreground mb-2">{m.title}</h4>
                  <p className="text-muted-foreground text-sm">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div
        className="py-8 px-4"
        style={{ background: "oklch(0.12 0.015 270)" }}
      >
        <p className="text-center text-accent/70 italic font-display text-lg max-w-3xl mx-auto">
          &ldquo;In physics, you don&apos;t have to go around making trouble for
          yourself — nature does it for you.&rdquo; — Frank Wilczek
        </p>
      </div>

      <Footer />
      <FloatingButtons />
    </div>
  );
}

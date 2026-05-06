import { FloatingButtons } from "@/components/FloatingButtons";
import { PageNavbar } from "@/components/PageNavbar";
import { Footer } from "@/pages/Footer";
import { Award, Quote, Star, TrendingUp, Trophy, Users } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const physicsQuotes = [
  {
    text: "Physics is the study of the most fundamental processes in nature — and the joy lies in discovering them yourself.",
    attrib: "— Inspired by Feynman",
  },
  {
    text: "Success in competitive exams is not about intelligence alone — it is about consistent effort, clarity, and resilience.",
    attrib: "— Er. Pooja Verma",
  },
  {
    text: "If you can't explain it simply, you don't understand it well enough.",
    attrib: "— Albert Einstein",
  },
  {
    text: "The secret to getting ahead is getting started. Every topper began as a beginner.",
    attrib: "— Mark Twain (adapted)",
  },
];

const toppers = [
  {
    name: "Priya Sharma",
    rank: "AIR 234",
    exam: "NEET 2024",
    year: "2024",
    score: "720/720",
    quote:
      "Er. Pooja ma'am's explanations made thermodynamics feel like second nature. I owe my rank to her teaching.",
  },
  {
    name: "Rahul Verma",
    rank: "AIR 412",
    exam: "JEE Advanced 2024",
    year: "2024",
    score: "278/360",
    quote:
      "The structured approach and weekly mocks at Medhavi made JEE Advanced feel manageable. Highly recommended!",
  },
  {
    name: "Ananya Singh",
    rank: "AIR 89",
    exam: "NEET 2024",
    year: "2024",
    score: "715/720",
    quote:
      "The doubt-clearing sessions were exceptional. No question was ever dismissed — every concept was addressed.",
  },
  {
    name: "Karan Gupta",
    rank: "AIR 567",
    exam: "JEE Mains 2024",
    year: "2024",
    score: "99.2 percentile",
    quote:
      "Pooja ma'am's problem-solving methodology helped me tackle the trickiest JEE questions with confidence.",
  },
  {
    name: "Neha Agarwal",
    rank: "AIR 145",
    exam: "NEET 2023",
    year: "2023",
    score: "710/720",
    quote:
      "From struggling in basics to AIR 145 — Medhavi Physics completely transformed my understanding.",
  },
  {
    name: "Arjun Patel",
    rank: "AIR 782",
    exam: "JEE Advanced 2023",
    year: "2023",
    score: "255/360",
    quote:
      "The advanced problem sets at Medhavi were harder than the actual JEE. The exam felt like a practice test!",
  },
  {
    name: "Simran Kaur",
    rank: "AIR 198",
    exam: "NEET 2023",
    year: "2023",
    score: "708/720",
    quote:
      "The way er. Pooja teaches electrostatics — using real-life analogies — made it my strongest subject in NEET.",
  },
  {
    name: "Vikram Yadav",
    rank: "AIR 1123",
    exam: "JEE Mains 2022",
    year: "2022",
    score: "98.8 percentile",
    quote:
      "Consistent daily practice and Pooja ma'am's mentorship made the difference between clearing and topping.",
  },
  {
    name: "Divya Mishra",
    rank: "AIR 321",
    exam: "NEET 2022",
    year: "2022",
    score: "703/720",
    quote:
      "Physics was my weakest subject before joining Medhavi. Within 3 months, it became my strongest.",
  },
  {
    name: "Aditya Kumar",
    rank: "AIR 890",
    exam: "JEE Advanced 2022",
    year: "2022",
    score: "240/360",
    quote:
      "The level of dedication at Medhavi is unmatched. Even on holidays, doubt sessions were available.",
  },
  {
    name: "Pooja Tiwari",
    rank: "AIR 267",
    exam: "NEET 2021",
    year: "2021",
    score: "706/720",
    quote:
      "Ma'am's notes on modern physics were gold — I used them right up to the exam. Best material I've seen.",
  },
  {
    name: "Rohit Saxena",
    rank: "AIR 142",
    exam: "JEE Advanced 2021",
    year: "2021",
    score: "301/360",
    quote:
      "Getting AIR 142 in JEE Advanced was a dream I thought impossible. Medhavi made it happen.",
  },
];

const years = ["All", "2024", "2023", "2022", "2021"];

const stats = [
  { label: "Students Qualified", value: "500+", icon: Users },
  { label: "Top 100 AIR Ranks", value: "28+", icon: Trophy },
  { label: "Success Rate", value: "98%", icon: TrendingUp },
  { label: "Years of Results", value: "10+", icon: Award },
];

export default function ResultsPage() {
  const [activeYear, setActiveYear] = useState("All");
  const filtered =
    activeYear === "All"
      ? toppers
      : toppers.filter((t) => t.year === activeYear);

  return (
    <div className="min-h-screen bg-background">
      <PageNavbar />

      {/* Hero */}
      <section className="relative pt-36 pb-24 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 left-1/4 w-72 h-72 rounded-full glow-blur"
            style={{ background: "oklch(0.72 0.16 80 / 0.12)" }}
          />
          <div
            className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full glow-blur"
            style={{ background: "oklch(0.68 0.2 220 / 0.08)" }}
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-display font-semibold text-sm tracking-widest uppercase mb-3"
          >
            Hall of Fame
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-black text-4xl md:text-6xl text-foreground mb-4"
          >
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Toppers
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg mb-4 italic max-w-2xl mx-auto"
          >
            500+ students have cracked NEET &amp; JEE from Medhavi Physics. Here
            are their stories of triumph.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-primary/70 italic text-sm font-display"
          >
            &ldquo;Success is no accident. It is hard work, perseverance,
            learning, studying, sacrifice and most of all, love of what you are
            doing.&rdquo; — Pelé
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section
        className="py-16 px-4"
        style={{ background: "oklch(0.11 0.012 270)" }}
      >
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 text-center glow-subtle"
            >
              <s.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="font-display font-black text-3xl bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
                {s.value}
              </div>
              <div className="text-muted-foreground text-sm mt-1">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Physics Quote */}
      <div className="py-8 px-4">
        <p className="text-center text-accent/70 italic font-display text-lg max-w-3xl mx-auto">
          &ldquo;{physicsQuotes[0].text}&rdquo; {physicsQuotes[0].attrib}
        </p>
      </div>

      {/* Year Filter + Cards */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {years.map((year) => (
              <button
                key={year}
                type="button"
                data-ocid={`results.filter.${year.toLowerCase()}_tab`}
                onClick={() => setActiveYear(year)}
                className={`px-6 py-2 rounded-full font-semibold text-sm transition-smooth ${
                  activeYear === year
                    ? "bg-primary text-primary-foreground"
                    : "glass-card text-muted-foreground hover:text-foreground hover:bg-primary/10"
                }`}
              >
                {year === "All" ? "All Years" : `Batch ${year}`}
              </button>
            ))}
          </div>

          {/* Success Metrics Bar */}
          <div className="glass-card rounded-2xl p-6 mb-12 glow-subtle">
            <h3 className="font-display font-bold text-center text-foreground mb-6">
              Year-wise Success Rate
            </h3>
            <div className="space-y-4">
              {[
                { year: "2024", neet: 96, jee: 94 },
                { year: "2023", neet: 97, jee: 93 },
                { year: "2022", neet: 95, jee: 91 },
                { year: "2021", neet: 98, jee: 95 },
                { year: "2020", neet: 94, jee: 90 },
              ].map((row) => (
                <div
                  key={row.year}
                  className="grid grid-cols-[80px_1fr] items-center gap-4"
                >
                  <span className="text-muted-foreground text-sm font-semibold text-right">
                    {row.year}
                  </span>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-primary w-10">NEET</span>
                      <div
                        className="flex-1 h-3 rounded-full"
                        style={{ background: "oklch(0.22 0.02 270)" }}
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${row.neet}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3 }}
                          className="h-full rounded-full"
                          style={{
                            background:
                              "linear-gradient(90deg, oklch(0.72 0.16 80), oklch(0.75 0.18 85))",
                          }}
                        />
                      </div>
                      <span className="text-xs text-foreground w-10 text-right">
                        {row.neet}%
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-accent w-10">JEE</span>
                      <div
                        className="flex-1 h-3 rounded-full"
                        style={{ background: "oklch(0.22 0.02 270)" }}
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${row.jee}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="h-full rounded-full"
                          style={{
                            background:
                              "linear-gradient(90deg, oklch(0.68 0.2 220), oklch(0.72 0.22 225))",
                          }}
                        />
                      </div>
                      <span className="text-xs text-foreground w-10 text-right">
                        {row.jee}%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Topper Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((topper, i) => (
              <motion.div
                key={`${topper.name}-${i}`}
                data-ocid={`results.topper.item.${i + 1}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 6) * 0.1 }}
                className="glass-card rounded-2xl p-6 hover:glow-subtle transition-smooth group relative overflow-hidden"
              >
                <div
                  className="absolute top-0 right-0 w-20 h-20 rounded-full glow-blur"
                  style={{ background: "oklch(0.72 0.16 80 / 0.08)" }}
                />
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-3">
                      <span className="text-white font-display font-black text-lg">
                        {topper.name.charAt(0)}
                      </span>
                    </div>
                    <h4 className="font-display font-bold text-foreground">
                      {topper.name}
                    </h4>
                    <p className="text-muted-foreground text-xs">
                      {topper.exam}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="font-display font-black text-lg bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
                      {topper.rank}
                    </div>
                    <div className="text-muted-foreground text-xs">
                      {topper.score}
                    </div>
                    <div className="text-muted-foreground text-xs mt-1">
                      {topper.year}
                    </div>
                  </div>
                </div>
                <div className="border-t border-border/40 pt-4 relative">
                  <Quote className="w-5 h-5 text-primary/30 absolute -top-2 left-0" />
                  <p className="text-muted-foreground text-sm italic leading-relaxed pl-2">
                    {topper.quote}
                  </p>
                  <div className="flex justify-end mt-3">
                    {["1", "2", "3", "4", "5"].map((star) => (
                      <Star
                        key={star}
                        className="w-3 h-3 text-primary fill-primary"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div data-ocid="results.empty_state" className="text-center py-16">
              <Trophy className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">
                Results for this year coming soon
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Wisdom Quotes */}
      <section
        className="py-16 px-4"
        style={{ background: "oklch(0.11 0.012 270)" }}
      >
        <div className="max-w-5xl mx-auto">
          <h3 className="font-display font-bold text-2xl text-center text-foreground mb-10">
            Words of{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Wisdom
            </span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {physicsQuotes.slice(1).map((q, i) => (
              <motion.div
                key={q.attrib}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="glass-card rounded-2xl p-6 glow-subtle"
              >
                <Quote className="w-8 h-8 text-primary/40 mb-4" />
                <p className="text-foreground text-base italic mb-3 leading-relaxed">
                  {q.text}
                </p>
                <p className="text-muted-foreground text-sm">{q.attrib}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}

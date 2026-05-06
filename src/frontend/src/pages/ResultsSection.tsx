import { SectionWrapper } from "@/components/SectionWrapper";
import { Award, Star, TrendingUp, Trophy } from "lucide-react";

const achievements = [
  {
    year: "2024",
    highlights: [
      {
        name: "Aryan Sharma",
        exam: "NEET",
        score: "AIR 412",
        subject: "Physics: 175/180",
      },
      {
        name: "Priya Agarwal",
        exam: "JEE Mains",
        score: "98.5 Percentile",
        subject: "Physics: 99/100",
      },
      {
        name: "Sneha Gupta",
        exam: "CBSE Class 12",
        score: "99/100",
        subject: "Physics Perfect",
      },
      {
        name: "Vikram Singh",
        exam: "JEE Advanced",
        score: "Qualified",
        subject: "Physics: Top 1%",
      },
    ],
    totalToppers: 87,
    neetQualified: 42,
    jeeQualified: 31,
  },
  {
    year: "2023",
    highlights: [
      {
        name: "Rohit Verma",
        exam: "NEET",
        score: "AIR 689",
        subject: "Physics: 170/180",
      },
      {
        name: "Ritu Yadav",
        exam: "NEET",
        score: "AIR 1023",
        subject: "Physics: 165/180",
      },
      {
        name: "Amit Kumar",
        exam: "JEE Advanced",
        score: "Qualified",
        subject: "IIT Allotted",
      },
      {
        name: "Pooja Mishra",
        exam: "CBSE Class 12",
        score: "97/100",
        subject: "State Topper",
      },
    ],
    totalToppers: 74,
    neetQualified: 38,
    jeeQualified: 24,
  },
  {
    year: "2022",
    highlights: [
      {
        name: "Rakesh Yadav",
        exam: "NEET",
        score: "AIR 556",
        subject: "Physics: 172/180",
      },
      {
        name: "Anjali Singh",
        exam: "JEE Mains",
        score: "97.8 Percentile",
        subject: "Physics: 98/100",
      },
      {
        name: "Mohit Sharma",
        exam: "NEET",
        score: "AIR 1180",
        subject: "MBBS Secured",
      },
      {
        name: "Kavya Tiwari",
        exam: "CBSE Class 12",
        score: "100/100",
        subject: "District Topper",
      },
    ],
    totalToppers: 68,
    neetQualified: 35,
    jeeQualified: 21,
  },
];

const milestones = [
  {
    icon: Trophy,
    value: "500+",
    label: "Total Toppers (all years)",
    color: "oklch(0.72 0.16 80)",
  },
  {
    icon: Star,
    value: "98%",
    label: "Average Success Rate",
    color: "oklch(0.68 0.2 220)",
  },
  {
    icon: TrendingUp,
    value: "175+",
    label: "Students in Govt. Medical/Engineering",
    color: "oklch(0.65 0.18 160)",
  },
  {
    icon: Award,
    value: "10+",
    label: "State-Level Toppers",
    color: "oklch(0.72 0.16 80)",
  },
];

export function ResultsSection() {
  return (
    <SectionWrapper
      id="results"
      className="py-24 relative overflow-hidden"
      style={
        {
          background:
            "linear-gradient(180deg, oklch(0.12 0.018 270) 0%, oklch(0.09 0.012 270) 100%)",
        } as React.CSSProperties
      }
    >
      {/* Glow top */}
      <div
        className="absolute top-0 right-1/4 w-[500px] h-48 pointer-events-none"
        style={{
          background: "oklch(0.72 0.16 80 / 0.1)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
            style={{
              background: "oklch(0.72 0.16 80 / 0.1)",
              border: "1px solid oklch(0.72 0.16 80 / 0.4)",
              color: "oklch(0.72 0.16 80)",
            }}
          >
            🏆 Track Record of Excellence
          </span>
          <h2
            className="font-display font-black text-3xl sm:text-4xl lg:text-5xl mb-4"
            style={{ color: "oklch(0.96 0.02 60)" }}
          >
            Results That{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, oklch(0.72 0.16 80), oklch(0.68 0.2 220))",
              }}
            >
              Speak Louder
            </span>
          </h2>
          <p
            className="max-w-2xl mx-auto text-base"
            style={{ color: "oklch(0.65 0.02 270)" }}
          >
            Three consecutive years of outstanding outcomes. Every student who
            committed — succeeded.
          </p>
        </div>

        {/* Milestone stats */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16"
          data-ocid="results.milestones"
        >
          {milestones.map((m) => (
            <div
              key={m.label}
              className="rounded-2xl p-6 text-center transition-smooth hover:scale-[1.02]"
              style={{
                background: "oklch(0.13 0.015 270 / 0.8)",
                border: `1px solid ${m.color} / 0.2`,
                borderColor: `color-mix(in oklch, ${m.color} 25%, transparent)`,
                boxShadow: `0 0 30px color-mix(in oklch, ${m.color} 15%, transparent)`,
                backdropFilter: "blur(12px)",
              }}
            >
              <m.icon
                className="w-7 h-7 mx-auto mb-3"
                style={{ color: m.color }}
              />
              <div
                className="font-display font-black text-3xl mb-1"
                style={{
                  color: m.color,
                  textShadow: `0 0 20px color-mix(in oklch, ${m.color} 50%, transparent)`,
                }}
              >
                {m.value}
              </div>
              <div
                className="text-xs font-medium"
                style={{ color: "oklch(0.60 0.02 270)" }}
              >
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Year-wise results */}
        <div className="space-y-10" data-ocid="results.yearly_list">
          {achievements.map((yr, yi) => (
            <div
              key={yr.year}
              data-ocid={`results.year.${yi + 1}`}
              className="rounded-3xl overflow-hidden"
              style={{
                background: "oklch(0.12 0.015 270 / 0.7)",
                border: "1px solid oklch(0.72 0.16 80 / 0.15)",
                backdropFilter: "blur(12px)",
              }}
            >
              {/* Year header */}
              <div
                className="px-6 py-4 flex items-center justify-between"
                style={{
                  background:
                    "linear-gradient(90deg, oklch(0.72 0.16 80 / 0.12), oklch(0.68 0.2 220 / 0.08))",
                  borderBottom: "1px solid oklch(0.72 0.16 80 / 0.15)",
                }}
              >
                <h3
                  className="font-display font-black text-2xl"
                  style={{ color: "oklch(0.72 0.16 80)" }}
                >
                  Batch {yr.year}
                </h3>
                <div className="flex gap-4 text-xs font-semibold">
                  <span style={{ color: "oklch(0.68 0.2 220)" }}>
                    NEET: {yr.neetQualified} Qualified
                  </span>
                  <span style={{ color: "oklch(0.72 0.16 80)" }}>
                    JEE: {yr.jeeQualified} Qualified
                  </span>
                  <span style={{ color: "oklch(0.65 0.18 160)" }}>
                    Total: {yr.totalToppers} Toppers
                  </span>
                </div>
              </div>

              {/* Toppers grid */}
              <div className="p-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {yr.highlights.map((h, hi) => (
                  <div
                    key={h.name}
                    data-ocid={`results.topper.${yi + 1}.${hi + 1}`}
                    className="rounded-xl p-4 transition-smooth hover:scale-[1.02]"
                    style={{
                      background: "oklch(0.10 0.012 270 / 0.8)",
                      border: "1px solid oklch(0.72 0.16 80 / 0.12)",
                    }}
                  >
                    <div
                      className="text-xs font-bold uppercase tracking-wider mb-1"
                      style={{ color: "oklch(0.72 0.16 80)" }}
                    >
                      {h.exam}
                    </div>
                    <div
                      className="font-display font-bold text-sm mb-1"
                      style={{ color: "oklch(0.92 0.02 60)" }}
                    >
                      {h.name}
                    </div>
                    <div
                      className="text-xs font-semibold mb-1"
                      style={{ color: "oklch(0.68 0.2 220)" }}
                    >
                      {h.score}
                    </div>
                    <div
                      className="text-[10px]"
                      style={{ color: "oklch(0.55 0.02 270)" }}
                    >
                      {h.subject}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

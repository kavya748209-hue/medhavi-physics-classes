import { SectionWrapper } from "@/components/SectionWrapper";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Hitesh Chaudhary",
    role: "MBBS Student • Fergana Medical Institute of Public Health",
    rating: 5,
    text: "My medical journey started with a strong foundation in Physics at Medhavi. Pooja Ma'am's teaching style made difficult numerical problems simple and boosted my confidence for NEET.",
    emoji: "👩‍👦",
  },
  {
    name: "Khushi Khan",
    role: "Class 12 1st Topper • Raheemia Public School, Bijnor",
    rating: 5,
    text: "Pooja Ma'am made Physics my strongest subject. Her concept-based teaching and regular DPPs helped me score confidently in my board exams. Every doubt was cleared patiently, which made learning enjoyable.",
    emoji: "👨",
  },
  {
    name: "Gunjan Khanna",
    role: "Shikhar shiksha sadan school topper 2026 batch 91%",
    rating: 5,
    text: "The disciplined study schedule, weekly tests, and personal guidance at Medhavi Physics Classes helped me secure 91% in Class 12. I am grateful to Pooja Ma'am for always motivating me.",
    emoji: "👧",
  },
  {
    name: "Tasmiya",
    role: "School Topper (95.6%) • Raheemia Public School • Batch 2021",
    rating: 5,
    text: "The personal attention and consistent practice sessions at Medhavi helped me achieve 95.6% in Class 12. The supportive environment kept me motivated throughout my preparation.",
    emoji: "👨‍🎓",
  },
  {
    name: "Aastha Chaudhary",
    role: "MBBS Student • Muzaffarnagar Medical College",
    rating: 5,
    text: "Pooja Ma'am's guidance played a major role in my NEET preparation. The detailed explanations, revision classes, and doubt sessions helped me stay focused and achieve my dream of studying MBBS.",
    emoji: "👩‍👧‍👦",
  },
  {
    name: "Aryan Malik",
    role: "2nd Topper (93.8%) • H.M. Public School • Batch 2021",
    rating: 5,
    text: "Joining Medhavi Physics Classes was one of my best decisions. The practical approach to teaching and regular assessments helped me score 93.8% with confidence.",
    emoji: "👨‍⚕️",
  },
];

export function ReviewsSection() {
  return (
    <SectionWrapper
      id="reviews"
      className="py-24 relative overflow-hidden"
      style={
        {
          background:
            "linear-gradient(180deg, oklch(0.11 0.015 270) 0%, oklch(0.08 0.01 270) 100%)",
        } as React.CSSProperties
      }
    >
      <div
        className="absolute -top-10 left-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "oklch(0.72 0.16 80 / 0.07)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute -bottom-10 right-1/4 w-64 h-64 rounded-full pointer-events-none"
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
            Student & Parent Reviews
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl mb-4">
            <span style={{ color: "oklch(0.92 0.04 60)" }}>
              What Parents &amp; Students
            </span>
            <span
              className="block mt-1 bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, oklch(0.72 0.16 80), oklch(0.85 0.1 75), oklch(0.68 0.2 220))",
              }}
            >
              Say About Medhavi
            </span>
          </h2>
          <p
            className="max-w-xl mx-auto"
            style={{ color: "oklch(0.62 0.02 60)" }}
          >
            Real words from real students and parents across Bijnor, Meerut,
            Haridwar, and beyond.
          </p>
        </div>

        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          data-ocid="reviews.list"
        >
          {reviews.map((r, i) => (
            <div
              key={r.name}
              data-ocid={`reviews.item.${i + 1}`}
              className="rounded-2xl p-6 flex flex-col transition-smooth hover:scale-[1.02]"
              style={{
                background: "oklch(0.14 0.015 270 / 0.9)",
                border: "1px solid oklch(0.72 0.16 80 / 0.15)",
                backdropFilter: "blur(20px)",
                boxShadow: "0 8px 32px oklch(0 0 0 / 0.3)",
              }}
            >
              <div className="flex items-start gap-3 mb-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-2xl flex-shrink-0 font-bold"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.22 0.03 270), oklch(0.18 0.02 270))",
                    border: "1px solid oklch(0.72 0.16 80 / 0.2)",
                  }}
                >
                  {r.emoji}
                </div>
                <div>
                  <div
                    className="font-display font-bold text-sm"
                    style={{ color: "oklch(0.92 0.04 60)" }}
                  >
                    {r.name}
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "oklch(0.58 0.02 60)" }}
                  >
                    {r.role}
                  </div>
                  <div className="flex gap-0.5 mt-1">
                    {["1", "2", "3", "4", "5"]
                      .slice(0, r.rating)
                      .map((star) => (
                        <Star
                          key={star}
                          className="w-3 h-3 fill-current"
                          style={{ color: "oklch(0.85 0.12 80)" }}
                        />
                      ))}
                  </div>
                </div>
              </div>
              <p
                className="text-xs leading-relaxed italic flex-1"
                style={{ color: "oklch(0.65 0.02 60)" }}
              >
                “{r.text}”
              </p>
            </div>
          ))}
        </div>

        {/* Physics motivational quote */}
        <div
          className="mt-14 rounded-3xl p-8 lg:p-12 text-center relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.14 0.015 270), oklch(0.17 0.02 265))",
            border: "1px solid oklch(0.72 0.16 80 / 0.2)",
            boxShadow: "0 0 60px oklch(0.72 0.16 80 / 0.08)",
          }}
        >
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 pointer-events-none"
            style={{
              background: "oklch(0.72 0.16 80 / 0.05)",
              filter: "blur(40px)",
            }}
          />
          <div
            className="text-6xl font-display mb-4 leading-none"
            style={{ color: "oklch(0.72 0.16 80 / 0.4)" }}
          >
            &#8220;
          </div>
          <p
            className="font-display font-black text-xl sm:text-2xl lg:text-3xl max-w-3xl mx-auto leading-snug"
            style={{ color: "oklch(0.88 0.06 75)" }}
          >
            The most important thing is to not stop questioning. Curiosity has
            its own reason for existing.
          </p>
          <p
            className="mt-4 text-sm font-semibold uppercase tracking-widest"
            style={{ color: "oklch(0.68 0.2 220 / 0.8)" }}
          >
            — Albert Einstein
          </p>
          <p className="mt-6 text-xs" style={{ color: "oklch(0.55 0.02 60)" }}>
            This philosophy drives every class at Medhavi Physics.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}

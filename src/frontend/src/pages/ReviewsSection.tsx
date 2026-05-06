import { SectionWrapper } from "@/components/SectionWrapper";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sunita Sharma",
    role: "Parent of NEET qualifier, Meerut",
    rating: 5,
    text: "Er. Pooja Ma'am is truly exceptional. My son was struggling with Physics in Class 12, but after joining Medhavi, he scored 178/180 in NEET Physics. The personal attention each student gets here is unlike any other coaching center in the region.",
    emoji: "👩‍👦",
  },
  {
    name: "Rajesh Kumar",
    role: "Father of JEE qualifier, Bijnor",
    rating: 5,
    text: "Bahut achha coaching hai. Meri beti pehle Physics mein fail hoti thi, aur Medhavi join karne ke baad uska rank 96 percentile hua JEE Mains mein. Pooja Ma'am ka padhane ka tarika bilkul alag aur bahut effective hai.",
    emoji: "👨",
  },
  {
    name: "Priya Mishra",
    role: "Class 12 student, Haridwar",
    rating: 5,
    text: "Medhavi Physics Classes ne meri zindagi badal di. Ma'am ek ek concept itni clearly explain karti hain ki Physics ab mera favourite subject ban gaya hai. Mock tests aur DPPs se meri preparation bohot strong hui.",
    emoji: "👧",
  },
  {
    name: "Vikram Singh",
    role: "Engineering student, Roorkee",
    rating: 5,
    text: "I cracked JEE Advanced because of the rigorous training at Medhavi. The problem-solving approach taught here is truly at par with the best institutes in India. Er. Pooja Ma'am's dedication is unmatched — she's available for doubts even after class hours!",
    emoji: "👨‍🎓",
  },
  {
    name: "Anita Yadav",
    role: "Parent of Class 12 topper, Najibabad",
    rating: 5,
    text: "Mere teen bachche Medhavi mein padhe hain aur sabne board exams mein 95%+ score kiya hai. Ye coaching center sirf Physics nahi, discipline aur confidence bhi sikhata hai. Pooja Ji bahut mehnati aur dedicated teacher hain.",
    emoji: "👩‍👧‍👦",
  },
  {
    name: "Kartik Agarwal",
    role: "NEET 2023 qualifier, AIR 845",
    rating: 5,
    text: "Medhavi Physics Classes is the best decision I made for NEET prep. The study material is comprehensive, the faculty is highly qualified, and the environment pushes you to excel. Ma'am's teaching style is engaging, humorous, and incredibly effective.",
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

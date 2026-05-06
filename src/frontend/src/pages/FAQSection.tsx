import { SectionWrapper } from "@/components/SectionWrapper";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "What courses does Medhavi Physics Classes offer?",
    a: "We offer dedicated Physics coaching for Class 11, Class 12, NEET, and JEE (Mains & Advanced). All programs are designed by Er. Pooja Verma with a focus on deep conceptual clarity and exam-specific strategies.",
  },
  {
    q: "Is there a free demo class available?",
    a: "Yes! We offer a completely free demo class for all new students. You can experience our teaching methodology, interact with the faculty, and assess the batch environment before enrolling. Contact us on WhatsApp to schedule your free demo.",
  },
  {
    q: "What is the batch size at Medhavi?",
    a: "We maintain small batch sizes (typically 20-30 students per batch) to ensure personalized attention. Er. Pooja Verma personally mentors each student and ensures no doubt goes unresolved.",
  },
  {
    q: "How is the study material provided?",
    a: "Students receive comprehensive printed notes, chapter-wise DPPs (Daily Practice Problems), previous year papers with solutions, formula sheets, and access to mock test series. All material is aligned with the latest NTA and CBSE syllabus.",
  },
  {
    q: "Do you provide online classes as well?",
    a: "Yes, we offer both offline (at our Bijnor center) and online classes via recorded lectures and live sessions. This flexibility helps students from Bijnor, Najibabad, Haridwar, Meerut, and other nearby areas benefit from our coaching.",
  },
  {
    q: "What is the fee structure?",
    a: "Fee varies by program and batch type. We offer flexible payment options with monthly and semester plans. Scholarship opportunities are available for meritorious students. Please contact us on WhatsApp or visit our center for the current fee schedule.",
  },
  {
    q: "How many toppers has Medhavi produced?",
    a: "Over 10+ years, Medhavi Physics Classes has produced 500+ toppers across NEET, JEE, and Class 12 Boards. Many of our alumni are now doctors, engineers, and IITians contributing to society.",
  },
  {
    q: "What makes Er. Pooja Verma's teaching unique?",
    a: "Er. Pooja Verma is an engineer with a passion for teaching Physics. Her approach derives every concept from first principles, making formulas intuitive rather than memorized. Her energy, dedication, and availability for students outside class hours make her truly exceptional.",
  },
];

function FAQItem({
  faq,
  index,
}: { faq: { q: string; a: string }; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      data-ocid={`faq.item.${index + 1}`}
      className={cn("rounded-2xl transition-smooth overflow-hidden")}
      style={{
        background: open
          ? "oklch(0.17 0.02 270)"
          : "oklch(0.14 0.015 270 / 0.9)",
        border: open
          ? "1px solid oklch(0.68 0.2 220 / 0.45)"
          : "1px solid oklch(0.72 0.16 80 / 0.15)",
        backdropFilter: "blur(20px)",
        boxShadow: open
          ? "0 0 40px oklch(0.68 0.2 220 / 0.12)"
          : "0 4px 20px oklch(0 0 0 / 0.2)",
      }}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        data-ocid={`faq.toggle.${index + 1}`}
        className="w-full flex items-center justify-between px-6 py-4 text-left gap-4"
      >
        <span
          className="font-display font-semibold text-sm"
          style={{
            color: open ? "oklch(0.85 0.12 80)" : "oklch(0.88 0.04 60)",
          }}
        >
          {faq.q}
        </span>
        <ChevronDown
          className={cn(
            "w-4 h-4 flex-shrink-0 transition-smooth",
            open && "rotate-180",
          )}
          style={{
            color: open ? "oklch(0.75 0.18 220)" : "oklch(0.72 0.16 80 / 0.7)",
          }}
        />
      </button>
      {open && (
        <div className="px-6 pb-5">
          <p
            className="text-sm leading-relaxed"
            style={{ color: "oklch(0.65 0.02 60)" }}
          >
            {faq.a}
          </p>
        </div>
      )}
    </div>
  );
}

export function FAQSection() {
  return (
    <SectionWrapper
      id="faq"
      className="py-24 relative overflow-hidden"
      style={
        {
          background:
            "linear-gradient(180deg, oklch(0.08 0.01 270) 0%, oklch(0.11 0.015 270) 100%)",
        } as React.CSSProperties
      }
    >
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background: "oklch(0.72 0.16 80 / 0.07)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute left-0 top-1/4 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: "oklch(0.68 0.2 220 / 0.07)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
            style={{
              background: "oklch(0.72 0.16 80 / 0.12)",
              border: "1px solid oklch(0.72 0.16 80 / 0.35)",
              color: "oklch(0.85 0.12 80)",
            }}
          >
            Frequently Asked Questions
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl mb-4">
            <span style={{ color: "oklch(0.92 0.04 60)" }}>Got Questions?</span>
            <span
              className="block bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, oklch(0.72 0.16 80), oklch(0.68 0.2 220))",
              }}
            >
              We Have Answers.
            </span>
          </h2>
          <p
            className="max-w-lg mx-auto text-sm"
            style={{ color: "oklch(0.58 0.02 60)" }}
          >
            Everything you need to know about joining Medhavi Physics Classes.
          </p>
        </div>

        <div className="space-y-3" data-ocid="faq.list">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} faq={faq} index={i} />
          ))}
        </div>

        <div
          className="mt-12 rounded-2xl p-6 text-center"
          style={{
            background: "oklch(0.14 0.015 270 / 0.8)",
            border: "1px solid oklch(0.72 0.16 80 / 0.2)",
          }}
        >
          <p
            className="text-sm mb-1 font-semibold"
            style={{ color: "oklch(0.88 0.04 60)" }}
          >
            Still have questions?
          </p>
          <p className="text-xs mb-5" style={{ color: "oklch(0.58 0.02 60)" }}>
            Chat directly with Er. Pooja Verma on WhatsApp — she personally
            responds.
          </p>
          <a
            href="https://wa.me/919897085277"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="faq.contact_button"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm hover:scale-105 transition-smooth shine-effect"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.72 0.16 80), oklch(0.68 0.2 220))",
              color: "oklch(0.08 0.01 270)",
            }}
          >
            💬 Ask on WhatsApp — 09897085277
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}

import { FloatingButtons } from "@/components/FloatingButtons";
import { PageNavbar } from "@/components/PageNavbar";
import { Footer } from "@/pages/Footer";
import {
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  CreditCard,
  GraduationCap,
  MapPin,
  MessageCircle,
  Phone,
  UserCheck,
  Users,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

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
  "E=mc²",
  "π",
  "ΔE",
];

const admissionSteps = [
  {
    id: "step-inquiry",
    num: "01",
    icon: Phone,
    title: "Inquiry & Consultation",
    desc: "Reach out to us by calling 09897085277 or visiting our institute at Surendra Nagar, Aawas Vikas, Bijnor. Our counselors are available Monday–Saturday, 9 AM to 6 PM. We'll answer every question about courses, batches, and fees.",
  },
  {
    id: "step-counseling",
    num: "02",
    icon: UserCheck,
    title: "Counseling Session",
    desc: "A one-on-one session with Er. Pooja Verma herself or a senior faculty member. We understand your current level, target exam (Class 11/12, NEET, JEE), and learning style to recommend the most suitable course and batch for you.",
  },
  {
    id: "step-registration",
    num: "03",
    icon: ClipboardList,
    title: "Registration Form",
    desc: "Fill in the enrollment form with your personal and academic details. Submit the required documents (listed below) either in person or via WhatsApp. Our staff will verify and process your registration within 24 hours.",
  },
  {
    id: "step-fee",
    num: "04",
    icon: CreditCard,
    title: "Fee Payment",
    desc: "Pay the course fee through cash, UPI, NEFT/IMPS, or bank transfer. We offer flexible installment options for all courses. Once payment is confirmed, your seat is officially reserved in your preferred batch.",
  },
  {
    id: "step-batch",
    num: "05",
    icon: GraduationCap,
    title: "Batch Allotment & Welcome",
    desc: "Your batch timing is assigned based on availability and your preference. You will receive a welcome kit including study materials, schedule, and a personalized learning plan. Classes begin as per the batch start date.",
  },
];

const batchTimings = [
  {
    id: "morning",
    label: "Morning Batch",
    time: "7:00 AM – 9:00 AM",
    days: "Mon – Sat",
    note: "Ideal for Class 11 & 12",
  },
  {
    id: "evening",
    label: "Evening Batch",
    time: "4:00 PM – 7:00 PM",
    days: "Mon – Sat",
    note: "Ideal for NEET & JEE",
  },
  {
    id: "weekend",
    label: "Weekend Batch",
    time: "9:00 AM – 1:00 PM",
    days: "Sat & Sun",
    note: "Perfect for school students",
  },
  {
    id: "online",
    label: "Online Batch",
    time: "Flexible Timing",
    days: "Mon – Sat",
    note: "Live + recorded sessions",
  },
];

const courses = [
  {
    id: "class11",
    title: "Class 11",
    desc: "Foundation in mechanics, thermodynamics & waves",
    icon: "⚡",
  },
  {
    id: "class11-chemistry",
    title: "Class 11 Chemistry",
    desc: "Foundation in physical, organic & inorganic chemistry",
    icon: "⚗️",
  },
  {
    id: "class12",
    title: "Class 12",
    desc: "Electrodynamics, optics & modern physics",
    icon: "🔭",
  },
  {
    id: "neet",
    title: "NEET",
    desc: "Complete NEET physics with 500+ past papers",
    icon: "🧬",
  },
  {
    id: "jee",
    title: "JEE Mains & Advanced",
    desc: "Advanced problem solving & JEE-level rigor",
    icon: "🚀",
  },
];

const documents = [
  {
    id: "doc-marksheet",
    text: "Latest school marksheet / report card (Class 10 or 11)",
  },
  { id: "doc-id", text: "Government-issued ID proof (Aadhaar card preferred)" },
  { id: "doc-photos", text: "2 recent passport-size photographs" },
  {
    id: "doc-transfer",
    text: "Transfer certificate (TC) from previous school (if applicable)",
  },
  {
    id: "doc-admit",
    text: "Admit card / hall ticket of last competitive exam (if any)",
  },
  { id: "doc-parent-id", text: "Parent/guardian ID proof" },
  {
    id: "doc-address",
    text: "Proof of address (Aadhaar / electricity bill / ration card)",
  },
  {
    id: "doc-category",
    text: "Category certificate (SC/ST/OBC) if applying for concession",
  },
];

const faqs = [
  {
    id: "faq-eligibility",
    q: "Who can enroll at Medhavi Physics Classes?",
    a: "Any student currently in Class 11, Class 12, or appearing for NEET/JEE is eligible to enroll. We also accept students who want to repeat/improve their NEET or JEE score. There is no cut-off — we welcome all sincere learners.",
  },
  {
    id: "faq-fee-structure",
    q: "What is the fee structure for each course?",
    a: "Fees vary by course and batch type. We prefer to discuss the latest fee structure in person or over a call (09897085277) so we can also inform you about any ongoing discounts or scholarship opportunities. You can also WhatsApp us for the fee card.",
  },
  {
    id: "faq-batch-size",
    q: "How many students are there in each batch?",
    a: "We maintain small batch sizes of 15–25 students per batch to ensure each student gets individual attention and doubt-clearing time from Er. Pooja Verma. Quality over quantity is our guiding principle.",
  },
  {
    id: "faq-materials",
    q: "Are study materials included in the fee?",
    a: "Yes. All enrolled students receive comprehensive printed notes, chapter-wise problem sheets, and previous year question banks as part of their study kit. Additional reference books are recommended but not mandatory.",
  },
  {
    id: "faq-online",
    q: "Is there an online batch available?",
    a: "Yes! We offer live online classes conducted via Google Meet / Zoom with the same quality of teaching. All sessions are recorded so you can re-watch them. Online students also get WhatsApp doubt-clearing support.",
  },
  {
    id: "faq-doubt",
    q: "How are doubts handled outside class hours?",
    a: "We have dedicated daily doubt-clearing sessions in the institute. Additionally, all students have access to a private WhatsApp group where doubts can be posted anytime. Er. Pooja Verma personally reviews and responds to doubts regularly.",
  },
];

function FAQItem({ faq }: { faq: (typeof faqs)[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      layout
      className="glass-card rounded-2xl overflow-hidden"
      data-ocid={faq.id}
    >
      <button
        type="button"
        className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 hover:bg-primary/5 transition-smooth"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="font-display font-semibold text-foreground text-base">
          {faq.q}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0 text-primary"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 text-muted-foreground text-sm leading-relaxed border-t border-border/30 pt-4">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function AdmissionPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageNavbar />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {physicsSymbols.map((sym, idx) => (
            <motion.div
              key={sym}
              className="absolute font-mono text-primary/10 select-none"
              style={{
                left: `${(idx * 7.8) % 94}%`,
                top: `${(idx * 13.1) % 88}%`,
                fontSize: `${1 + (idx % 3) * 0.5}rem`,
              }}
              animate={{ y: [0, -18, 0], opacity: [0.05, 0.15, 0.05] }}
              transition={{
                duration: 4 + (idx % 4),
                repeat: Number.POSITIVE_INFINITY,
                delay: idx * 0.35,
              }}
            >
              {sym}
            </motion.div>
          ))}
          <div
            className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full"
            style={{
              background: "oklch(0.72 0.16 80 / 0.10)",
              filter: "blur(80px)",
            }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full"
            style={{
              background: "oklch(0.68 0.2 220 / 0.09)",
              filter: "blur(80px)",
            }}
          />
        </div>
        <div className="relative z-10 text-center px-4 py-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-display font-semibold text-sm tracking-widest uppercase mb-3"
          >
            Get Started Today
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-black text-5xl md:text-7xl text-foreground mb-5 leading-tight"
          >
            Admission{" "}
            <span className="bg-gradient-to-r from-primary via-yellow-300 to-accent bg-clip-text text-transparent">
              Process
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-xl mx-auto text-lg"
          >
            Join Medhavi Physics Classes — Your Gateway to Success
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="flex flex-wrap gap-4 justify-center mt-8"
          >
            <a
              href="tel:09897085277"
              data-ocid="admission.call_button"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth shadow-lg"
            >
              <Phone className="w-4 h-4" /> Call Now: 09897085277
            </a>
            <a
              href="https://wa.me/919897085277"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="admission.whatsapp_button"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm border border-primary/40 text-primary hover:bg-primary/10 transition-smooth"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Admission Steps Timeline ─────────────────────────── */}
      <section
        className="py-24 px-4"
        style={{ background: "oklch(0.11 0.012 270)" }}
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-black text-3xl md:text-4xl text-foreground mb-3">
              5 Simple{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Steps to Enroll
              </span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              From your first call to your first class — we make the process
              smooth and transparent.
            </p>
          </motion.div>

          {/* Vertical timeline */}
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/10" />

            {admissionSteps.map((step, i) => {
              const Icon = step.icon;
              const isRight = i % 2 !== 0;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: isRight ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.6 }}
                  className="relative flex items-start mb-12 last:mb-0"
                  data-ocid={step.id}
                >
                  {/* Connector dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-primary border-4 border-background z-10 mt-6" />

                  {/* Card — alternates left/right on desktop */}
                  <div
                    className={`ml-20 md:ml-0 ${
                      isRight
                        ? "md:ml-[calc(50%+2.5rem)] md:w-[45%]"
                        : "md:mr-[calc(50%+2.5rem)] md:w-[45%] md:text-right md:ml-auto"
                    } glass-card rounded-2xl p-6 hover:glow-subtle transition-smooth group`}
                    style={{ border: "1px solid oklch(0.72 0.16 80 / 0.18)" }}
                  >
                    <div
                      className={`flex items-center gap-3 mb-3 ${
                        isRight ? "" : "md:flex-row-reverse"
                      }`}
                    >
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-smooth">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <span className="text-primary/50 font-display font-black text-xs tracking-widest">
                          STEP {step.num}
                        </span>
                        <h3 className="font-display font-bold text-foreground text-lg leading-tight">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.desc}
                    </p>
                    {/* Gold accent line */}
                    <div
                      className="mt-4 h-0.5 rounded-full"
                      style={{
                        background:
                          "linear-gradient(90deg, oklch(0.72 0.16 80 / 0.6), transparent)",
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Batch Timings ────────────────────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display font-black text-3xl md:text-4xl text-foreground mb-3">
              Batch{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Timings
              </span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Choose a batch that fits your schedule — morning, evening,
              weekend, or online.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {batchTimings.map((batch, i) => (
              <motion.div
                key={batch.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                data-ocid={`batch.${batch.id}`}
                className="glass-card rounded-2xl p-6 text-center hover:scale-105 transition-smooth group"
                style={{ border: "1px solid oklch(0.72 0.16 80 / 0.15)" }}
              >
                <div className="font-display font-bold text-foreground text-lg mb-1 group-hover:text-primary transition-smooth">
                  {batch.label}
                </div>
                <div
                  className="text-2xl font-black font-display mb-1"
                  style={{ color: "oklch(0.72 0.16 80)" }}
                >
                  {batch.time}
                </div>
                <div className="text-muted-foreground text-sm mb-3">
                  {batch.days}
                </div>
                <div
                  className="text-xs px-3 py-1 rounded-full inline-block"
                  style={{
                    background: "oklch(0.68 0.2 220 / 0.12)",
                    color: "oklch(0.68 0.2 220)",
                  }}
                >
                  {batch.note}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Fee Structure ────────────────────────────────────── */}
      <section
        className="py-20 px-4"
        style={{ background: "oklch(0.11 0.012 270)" }}
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display font-black text-3xl md:text-4xl text-foreground mb-3">
              Fee{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Structure
              </span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Transparent pricing with flexible installment options. WhatsApp us
              for the latest fee card.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {courses.map((course, i) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                data-ocid={`fee.${course.id}`}
                className="glass-card rounded-2xl p-6 flex flex-col items-center text-center hover:glow-subtle transition-smooth"
                style={{ border: "1px solid oklch(0.72 0.16 80 / 0.18)" }}
              >
                <div className="text-4xl mb-3">{course.icon}</div>
                <h3 className="font-display font-bold text-foreground text-xl mb-2">
                  {course.title}
                </h3>
                <p className="text-muted-foreground text-xs mb-4 leading-relaxed flex-1">
                  {course.desc}
                </p>
                <div
                  className="text-sm font-semibold mb-4 px-3 py-1.5 rounded-lg"
                  style={{
                    background: "oklch(0.72 0.16 80 / 0.12)",
                    color: "oklch(0.72 0.16 80)",
                  }}
                >
                  Contact for latest fees
                </div>
                <a
                  href="https://wa.me/919897085277"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid={`fee.${course.id}.whatsapp_button`}
                  className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full transition-smooth hover:scale-105"
                  style={{
                    background: "oklch(0.45 0.2 142)",
                    color: "#fff",
                  }}
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Documents Required ───────────────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display font-black text-3xl md:text-4xl text-foreground mb-3">
              Documents{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Required
              </span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Please bring the following documents at the time of registration.
              Soft copies via WhatsApp are also accepted.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8"
            style={{ border: "1px solid oklch(0.72 0.16 80 / 0.18)" }}
          >
            <ul className="space-y-4" data-ocid="documents.list">
              {documents.map((doc, i) => (
                <motion.li
                  key={doc.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-start gap-3"
                  data-ocid={doc.id}
                >
                  <CheckCircle2
                    className="w-5 h-5 shrink-0 mt-0.5"
                    style={{ color: "oklch(0.72 0.16 80)" }}
                  />
                  <span className="text-foreground text-sm leading-relaxed">
                    {doc.text}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section
        className="py-20 px-4"
        style={{ background: "oklch(0.11 0.012 270)" }}
      >
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display font-black text-3xl md:text-4xl text-foreground mb-3">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Everything you need to know before joining. Still have questions?
              Just call or WhatsApp us.
            </p>
          </motion.div>
          <div className="space-y-3" data-ocid="admission.faq_list">
            {faqs.map((faq) => (
              <FAQItem key={faq.id} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Address & Contact CTA ─────────────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div
              className="glass-card rounded-3xl p-10 relative overflow-hidden"
              style={{ border: "1px solid oklch(0.72 0.16 80 / 0.25)" }}
            >
              <div
                className="absolute top-0 right-0 w-64 h-64 rounded-full -translate-y-1/2 translate-x-1/2"
                style={{
                  background: "oklch(0.72 0.16 80 / 0.07)",
                  filter: "blur(60px)",
                }}
              />
              <div
                className="absolute bottom-0 left-0 w-48 h-48 rounded-full translate-y-1/2 -translate-x-1/2"
                style={{
                  background: "oklch(0.68 0.2 220 / 0.07)",
                  filter: "blur(60px)",
                }}
              />
              <div className="relative z-10">
                <Users
                  className="w-12 h-12 mx-auto mb-4"
                  style={{ color: "oklch(0.72 0.16 80)" }}
                />
                <h2 className="font-display font-black text-3xl md:text-4xl text-foreground mb-3">
                  Ready to Begin Your{" "}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Journey?
                  </span>
                </h2>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                  Visit us, give us a call, or drop a WhatsApp message — our
                  team is ready to guide you every step of the way.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <a
                    href="tel:09897085277"
                    data-ocid="cta.call_button"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth shadow-lg"
                  >
                    <Phone className="w-4 h-4" /> 09897085277
                  </a>
                  <a
                    href="https://wa.me/919897085277"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid="cta.whatsapp_button"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-smooth"
                    style={{ background: "oklch(0.45 0.2 142)", color: "#fff" }}
                  >
                    <MessageCircle className="w-4 h-4" /> WhatsApp Us
                  </a>
                </div>

                <div
                  className="flex items-start justify-center gap-2 text-muted-foreground text-sm"
                  data-ocid="cta.address"
                >
                  <MapPin
                    className="w-4 h-4 shrink-0 mt-0.5"
                    style={{ color: "oklch(0.72 0.16 80)" }}
                  />
                  <span>
                    Surendra Nagar, near Shiv Mandir, Aawas Vikas, Bijnor, Uttar
                    Pradesh 246701
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}

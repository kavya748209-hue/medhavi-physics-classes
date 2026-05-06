import { SectionWrapper } from "@/components/SectionWrapper";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
    course: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nCourse Interest: ${form.course || "Not specified"}\nMessage: ${form.message}`,
    );
    window.open(`https://wa.me/919897085277?text=${msg}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const infoItems = [
    { icon: Phone, label: "Call / WhatsApp", value: "09897085277", gold: true },
    {
      icon: MapPin,
      label: "Address",
      value: "Surendra Nagar, near Shiv Mandir, Aawas Vikas, Bijnor, UP 246701",
      gold: false,
    },
    {
      icon: Clock,
      label: "Timings",
      value: "Mon–Sat: 7:00 AM – 8:00 PM | Sunday by appointment",
      gold: false,
    },
    {
      icon: Mail,
      label: "Email",
      value: "medhaviphysics@gmail.com",
      gold: false,
    },
  ];

  return (
    <SectionWrapper
      id="contact"
      className="py-24 relative overflow-hidden"
      style={{ background: "oklch(0.08 0.01 270)" } as React.CSSProperties}
    >
      <div
        className="absolute left-0 top-0 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "oklch(0.72 0.16 80 / 0.07)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute right-0 bottom-0 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background: "oklch(0.68 0.2 220 / 0.07)",
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
            Contact Us
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl mb-4">
            <span style={{ color: "oklch(0.92 0.04 60)" }}>
              Visit Medhavi or
            </span>
            <span
              className="block bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, oklch(0.72 0.16 80), oklch(0.68 0.2 220))",
              }}
            >
              Reach Out Today
            </span>
          </h2>
          <a
            href="tel:09897085277"
            className="inline-flex items-center gap-2 mt-2 font-display font-black text-2xl sm:text-3xl transition-smooth hover:scale-105"
            style={{
              background:
                "linear-gradient(90deg, oklch(0.85 0.12 80), oklch(0.72 0.16 80))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            📞 09897085277
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              {infoItems.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl p-4 transition-smooth"
                  style={{
                    background: "oklch(0.14 0.015 270 / 0.9)",
                    border: item.gold
                      ? "1px solid oklch(0.72 0.16 80 / 0.4)"
                      : "1px solid oklch(0.22 0.02 270)",
                    backdropFilter: "blur(20px)",
                    boxShadow: item.gold
                      ? "0 0 30px oklch(0.72 0.16 80 / 0.1)"
                      : "none",
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{
                        background: item.gold
                          ? "oklch(0.72 0.16 80 / 0.15)"
                          : "oklch(0.68 0.2 220 / 0.1)",
                        border: item.gold
                          ? "1px solid oklch(0.72 0.16 80 / 0.3)"
                          : "1px solid oklch(0.68 0.2 220 / 0.2)",
                      }}
                    >
                      <item.icon
                        className="w-4 h-4"
                        style={{
                          color: item.gold
                            ? "oklch(0.85 0.12 80)"
                            : "oklch(0.75 0.18 220)",
                        }}
                      />
                    </div>
                    <div>
                      <div
                        className="text-[10px] font-bold uppercase tracking-widest mb-0.5"
                        style={{ color: "oklch(0.5 0.02 60)" }}
                      >
                        {item.label}
                      </div>
                      <div
                        className="text-xs font-medium"
                        style={{
                          color: item.gold
                            ? "oklch(0.88 0.1 80)"
                            : "oklch(0.82 0.03 60)",
                        }}
                      >
                        {item.value}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="rounded-2xl overflow-hidden"
              style={{
                border: "1px solid oklch(0.72 0.16 80 / 0.2)",
                boxShadow: "0 0 40px oklch(0.72 0.16 80 / 0.08)",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3474.6!2d78.1383!3d29.3720!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMedhavi+Physics+Classes!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="260"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Medhavi Physics Classes Location"
              />
            </div>

            <div
              className="rounded-2xl p-5 relative overflow-hidden"
              style={{
                background: "oklch(0.14 0.015 270 / 0.8)",
                border: "1px solid oklch(0.68 0.2 220 / 0.2)",
              }}
            >
              <span
                className="absolute top-3 left-4 text-4xl font-display leading-none"
                style={{ color: "oklch(0.68 0.2 220 / 0.3)" }}
              >
                &#8220;
              </span>
              <p
                className="text-sm italic leading-relaxed pt-4 px-2"
                style={{ color: "oklch(0.72 0.04 60)" }}
              >
                If you want to find the secrets of the universe, think in terms
                of energy, frequency, and vibration.
              </p>
              <p
                className="text-xs mt-2 font-semibold"
                style={{ color: "oklch(0.75 0.18 220 / 0.8)" }}
              >
                — Nikola Tesla
              </p>
            </div>
          </div>

          <div
            className="rounded-3xl p-8"
            style={{
              background: "oklch(0.14 0.015 270 / 0.9)",
              border: "1px solid oklch(0.72 0.16 80 / 0.2)",
              backdropFilter: "blur(20px)",
              boxShadow: "0 0 60px oklch(0.72 0.16 80 / 0.08)",
            }}
          >
            <h3
              className="font-display font-bold text-xl mb-1"
              style={{ color: "oklch(0.92 0.04 60)" }}
            >
              Send an Enquiry
            </h3>
            <p
              className="text-sm mb-6"
              style={{ color: "oklch(0.55 0.02 60)" }}
            >
              Fill in the form below and we'll connect on WhatsApp within 24
              hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-semibold mb-1.5"
                  style={{ color: "oklch(0.75 0.04 60)" }}
                >
                  Full Name *
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  data-ocid="contact.name_input"
                  placeholder="e.g. Rahul Sharma"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-smooth"
                  style={{
                    background: "oklch(0.11 0.012 270)",
                    border: "1px solid oklch(0.25 0.02 270)",
                    color: "oklch(0.88 0.03 60)",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor =
                      "oklch(0.72 0.16 80 / 0.6)";
                    e.currentTarget.style.boxShadow =
                      "0 0 20px oklch(0.72 0.16 80 / 0.1)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "oklch(0.25 0.02 270)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs font-semibold mb-1.5"
                  style={{ color: "oklch(0.75 0.04 60)" }}
                >
                  Phone / WhatsApp *
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  data-ocid="contact.phone_input"
                  placeholder="+91 XXXXXXXXXX"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-smooth"
                  style={{
                    background: "oklch(0.11 0.012 270)",
                    border: "1px solid oklch(0.25 0.02 270)",
                    color: "oklch(0.88 0.03 60)",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor =
                      "oklch(0.72 0.16 80 / 0.6)";
                    e.currentTarget.style.boxShadow =
                      "0 0 20px oklch(0.72 0.16 80 / 0.1)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "oklch(0.25 0.02 270)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="course"
                  className="block text-xs font-semibold mb-1.5"
                  style={{ color: "oklch(0.75 0.04 60)" }}
                >
                  Interested In
                </label>
                <select
                  id="course"
                  data-ocid="contact.course_select"
                  value={form.course}
                  onChange={(e) => setForm({ ...form, course: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-smooth"
                  style={{
                    background: "oklch(0.11 0.012 270)",
                    border: "1px solid oklch(0.25 0.02 270)",
                    color: "oklch(0.88 0.03 60)",
                  }}
                >
                  <option value="">Select program...</option>
                  <option value="Class 11 Physics">Class 11 Physics</option>
                  <option value="Class 12 Physics">Class 12 Physics</option>
                  <option value="NEET Physics">NEET Physics</option>
                  <option value="JEE Physics">
                    JEE Physics (Mains + Advanced)
                  </option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold mb-1.5"
                  style={{ color: "oklch(0.75 0.04 60)" }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  data-ocid="contact.message_textarea"
                  rows={4}
                  placeholder="Any specific doubts or questions about admissions..."
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-smooth resize-none"
                  style={{
                    background: "oklch(0.11 0.012 270)",
                    border: "1px solid oklch(0.25 0.02 270)",
                    color: "oklch(0.88 0.03 60)",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor =
                      "oklch(0.72 0.16 80 / 0.6)";
                    e.currentTarget.style.boxShadow =
                      "0 0 20px oklch(0.72 0.16 80 / 0.1)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "oklch(0.25 0.02 270)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </div>
              <button
                type="submit"
                data-ocid="contact.submit_button"
                className="w-full py-3.5 rounded-xl font-bold text-sm transition-smooth hover:scale-[1.02] hover:shadow-xl shine-effect"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.72 0.16 80), oklch(0.68 0.2 220))",
                  color: "oklch(0.08 0.01 270)",
                }}
              >
                {sent
                  ? "Sent! Redirecting to WhatsApp ✅"
                  : "Send Enquiry via WhatsApp"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

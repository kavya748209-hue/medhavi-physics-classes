import { SiInstagram, SiWhatsapp } from "react-icons/si";

export function FloatingButtons() {
  return (
    <>
      {/* Instagram — bottom left */}
      <a
        href="https://www.instagram.com/medhaviphysicsclasses"
        target="_blank"
        rel="noopener noreferrer"
        data-ocid="floating.instagram_button"
        aria-label="Follow on Instagram"
        className="fixed bottom-6 left-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full text-white font-semibold text-sm shadow-xl transition-smooth hover:scale-110 animate-glow-pulse"
        style={{
          background:
            "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
          boxShadow: "0 4px 24px rgba(220,39,67,0.45)",
        }}
      >
        <SiInstagram className="w-5 h-5" />
        <span className="hidden sm:inline">Instagram</span>
      </a>

      {/* WhatsApp — bottom right */}
      <a
        href="https://wa.me/919897085277"
        target="_blank"
        rel="noopener noreferrer"
        data-ocid="floating.whatsapp_button"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full text-white font-semibold text-sm shadow-xl transition-smooth hover:scale-110 animate-glow-pulse"
        style={{
          background: "linear-gradient(135deg, #25d366 0%, #128c7e 100%)",
          boxShadow: "0 4px 24px rgba(37,211,102,0.45)",
        }}
      >
        <SiWhatsapp className="w-5 h-5" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </>
  );
}

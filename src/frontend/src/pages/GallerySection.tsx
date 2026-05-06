import { ChevronLeft, ChevronRight, Images, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const PHOTOS = [
  { src: "/assets/photo1.png", key: "gs-1", label: "Classroom Session" },
  { src: "/assets/photo2.png", key: "gs-2", label: "Students at Work" },
  { src: "/assets/photo3.png", key: "gs-3", label: "Toppers Celebration" },
  { src: "/assets/photo4.png", key: "gs-4", label: "Study Group" },
  { src: "/assets/photo5.png", key: "gs-5", label: "Batch Photo" },
  { src: "/assets/photo6.png", key: "gs-6", label: "Achievement Ceremony" },
  { src: "/assets/photo7.png", key: "gs-7", label: "Special Event" },
  { src: "/assets/photo8.png", key: "gs-8", label: "Lab Session" },
  { src: "/assets/photo9.png", key: "gs-9", label: "Prize Distribution" },
  { src: "/assets/photo10.png", key: "gs-10", label: "Annual Function" },
  { src: "/assets/photo11.png", key: "gs-11", label: "Result Announcement" },
  { src: "/assets/photo12.png", key: "gs-12", label: "Interactive Lecture" },
  { src: "/assets/photo13.png", key: "gs-13", label: "Topper Felicitation" },
  { src: "/assets/photo14.png", key: "gs-14", label: "Group Study" },
  { src: "/assets/photo15.png", key: "gs-15", label: "Demo Experiment" },
  { src: "/assets/photo16.png", key: "gs-16", label: "JEE Batch Gathering" },
  { src: "/assets/photo17.png", key: "gs-17", label: "Felicitation Ceremony" },
];

function useScrollVisible() {
  const refs = useRef<Map<string, Element>>(new Map());
  const [visible, setVisible] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setVisible((prev) => {
          const next = new Set(prev);
          for (const entry of entries) {
            const key = entry.target.getAttribute("data-key");
            if (key && entry.isIntersecting) next.add(key);
          }
          return next;
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );
    for (const el of refs.current.values()) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const setRef = useCallback((key: string, el: Element | null) => {
    if (el) refs.current.set(key, el);
    else refs.current.delete(key);
  }, []);

  return { visible, setRef };
}

function PhotoCard({
  photo,
  index,
  isVisible,
  onOpen,
  setRef,
}: {
  photo: (typeof PHOTOS)[number];
  index: number;
  isVisible: boolean;
  onOpen: (idx: number) => void;
  setRef: (key: string, el: Element | null) => void;
}) {
  const delay = (index % 8) * 0.06;
  return (
    <button
      type="button"
      ref={(el) => setRef(photo.key, el)}
      data-key={photo.key}
      data-ocid={`home_gallery.item.${index + 1}`}
      onClick={() => onOpen(index)}
      aria-label={`Open ${photo.label} in lightbox`}
      className="group relative cursor-pointer rounded-2xl overflow-hidden text-left w-full"
      style={{
        aspectRatio: "1 / 1",
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? "translateY(0) scale(1)"
          : "translateY(36px) scale(0.96)",
        transition: `opacity 0.55s ease ${delay}s, transform 0.55s ease ${delay}s`,
        background: "transparent",
        border: "none",
        padding: 0,
      }}
    >
      {/* default border glow */}
      <div
        className="absolute inset-0 rounded-2xl z-10 pointer-events-none"
        style={{ boxShadow: "0 0 0 1px oklch(0.72 0.16 80 / 0.18)" }}
      />
      {/* hover glow */}
      <div
        className="absolute inset-0 rounded-2xl z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          boxShadow:
            "0 0 0 2px oklch(0.72 0.16 80 / 0.7), 0 0 28px 4px oklch(0.72 0.16 80 / 0.22)",
        }}
      />

      <img
        src={photo.src}
        alt={photo.label}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />

      {/* Overlay label */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4 z-20">
        <span
          className="text-sm font-semibold tracking-wide"
          style={{ color: "oklch(0.72 0.16 80)" }}
        >
          {photo.label}
        </span>
        <span
          className="text-xs px-2 py-1 rounded-full border"
          style={{
            borderColor: "oklch(0.68 0.2 220 / 0.6)",
            color: "oklch(0.68 0.2 220)",
            background: "oklch(0.08 0.01 270 / 0.6)",
          }}
        >
          View
        </span>
      </div>
    </button>
  );
}

function Lightbox({
  open,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  open: boolean;
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const photo = PHOTOS[index];
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose, onPrev, onNext]);

  if (!open) return null;

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < 50) return;
    if (delta < 0) onNext();
    else onPrev();
  };

  return (
    <div
      data-ocid="home_gallery.lightbox"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        onKeyDown={(e) => e.key === "Enter" && onClose()}
        role="presentation"
        style={{
          position: "absolute",
          inset: 0,
          background: "oklch(0.05 0.01 270 / 0.92)",
          backdropFilter: "blur(12px)",
          cursor: "pointer",
        }}
      />

      <dialog
        open
        aria-label={`Lightbox: ${photo?.label ?? ""}`}
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "transparent",
          border: "none",
          padding: 0,
          margin: 0,
          overflow: "visible",
          width: "100%",
          maxWidth: "min(90vw, 900px)",
        }}
      >
        <button
          type="button"
          onClick={onClose}
          data-ocid="home_gallery.lightbox_close_button"
          aria-label="Close lightbox"
          className="absolute top-3 right-3 sm:top-5 sm:right-5 z-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-2"
          style={{
            width: 48,
            height: 48,
            minWidth: 48,
            minHeight: 48,
            background: "oklch(0.14 0.015 270 / 0.9)",
            border: "1px solid oklch(0.72 0.16 80 / 0.4)",
            color: "oklch(0.96 0.02 60)",
            boxShadow: "0 0 16px oklch(0.72 0.16 80 / 0.15)",
          }}
        >
          <X className="w-5 h-5" />
        </button>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          data-ocid="home_gallery.lightbox_prev_button"
          aria-label="Previous photo"
          className="absolute left-2 sm:left-4 z-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-2"
          style={{
            width: 48,
            height: 48,
            minWidth: 48,
            minHeight: 48,
            background: "oklch(0.14 0.015 270 / 0.9)",
            border: "1px solid oklch(0.68 0.2 220 / 0.4)",
            color: "oklch(0.96 0.02 60)",
            boxShadow: "0 0 16px oklch(0.68 0.2 220 / 0.15)",
          }}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          data-ocid="home_gallery.lightbox_next_button"
          aria-label="Next photo"
          className="absolute right-2 sm:right-4 z-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-2"
          style={{
            width: 48,
            height: 48,
            minWidth: 48,
            minHeight: 48,
            background: "oklch(0.14 0.015 270 / 0.9)",
            border: "1px solid oklch(0.68 0.2 220 / 0.4)",
            color: "oklch(0.96 0.02 60)",
            boxShadow: "0 0 16px oklch(0.68 0.2 220 / 0.15)",
          }}
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div
          className="relative z-10 flex flex-col items-center gap-4 px-16"
          style={{ width: "100%" }}
        >
          <img
            src={photo?.src}
            alt={photo?.label}
            className="rounded-2xl object-contain shadow-2xl w-full"
            style={{
              maxHeight: "72vh",
              border: "1px solid oklch(0.72 0.16 80 / 0.3)",
              boxShadow:
                "0 0 60px oklch(0.72 0.16 80 / 0.18), 0 0 120px oklch(0.68 0.2 220 / 0.10)",
            }}
          />
          <div className="flex items-center gap-3">
            <span
              className="text-sm sm:text-base font-semibold"
              style={{ color: "oklch(0.72 0.16 80)" }}
            >
              {photo?.label}
            </span>
            <span className="text-muted-foreground text-sm">
              {index + 1} / {PHOTOS.length}
            </span>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export function GallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const { visible, setRef } = useScrollVisible();

  const openLightbox = useCallback((idx: number) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  }, []);
  const closeLightbox = useCallback(() => setLightboxOpen(false), []);
  const prevPhoto = useCallback(
    () => setLightboxIndex((i) => (i - 1 + PHOTOS.length) % PHOTOS.length),
    [],
  );
  const nextPhoto = useCallback(
    () => setLightboxIndex((i) => (i + 1) % PHOTOS.length),
    [],
  );

  return (
    <section
      id="gallery"
      data-ocid="home_gallery.section"
      className="py-20 sm:py-28 relative overflow-hidden"
      style={{ background: "oklch(0.07 0.012 270)" }}
    >
      {/* Decorative background glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[420px] rounded-full opacity-15 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at center, oklch(0.72 0.16 80 / 0.4) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 w-64 h-64 rounded-full opacity-10 blur-3xl"
        style={{ background: "oklch(0.68 0.2 220 / 0.5)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 left-0 w-48 h-48 rounded-full opacity-10 blur-2xl"
        style={{ background: "oklch(0.68 0.2 220 / 0.4)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section heading */}
        <div className="flex flex-col items-center text-center mb-14 gap-3">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mb-1 shadow-lg"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.72 0.16 80 / 0.15), oklch(0.68 0.2 220 / 0.15))",
              border: "1px solid oklch(0.72 0.16 80 / 0.3)",
            }}
          >
            <Images
              className="w-7 h-7"
              style={{ color: "oklch(0.72 0.16 80)" }}
            />
          </div>

          <h2
            className="text-4xl sm:text-5xl font-display font-extrabold tracking-tight"
            style={{
              background:
                "linear-gradient(120deg, oklch(0.72 0.16 80) 30%, oklch(0.82 0.14 80) 60%, oklch(0.72 0.16 80) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Our Gallery
          </h2>

          {/* Cyan accent underline */}
          <div className="flex items-center justify-center gap-2">
            <div
              className="h-0.5 w-12 rounded-full"
              style={{ background: "oklch(0.68 0.2 220 / 0.6)" }}
            />
            <div
              className="h-1 w-24 rounded-full"
              style={{ background: "oklch(0.68 0.2 220)" }}
            />
            <div
              className="h-0.5 w-12 rounded-full"
              style={{ background: "oklch(0.68 0.2 220 / 0.6)" }}
            />
          </div>

          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mt-1">
            Moments from{" "}
            <span style={{ color: "oklch(0.72 0.16 80)" }}>
              Medhavi Physics Classes
            </span>{" "}
            — celebrating our students, toppers, and milestones.
          </p>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-5">
          {PHOTOS.map((photo, index) => (
            <PhotoCard
              key={photo.key}
              photo={photo}
              index={index}
              isVisible={visible.has(photo.key)}
              onOpen={openLightbox}
              setRef={setRef}
            />
          ))}
        </div>

        {/* View full gallery CTA */}
        <div className="flex justify-center mt-12">
          <button
            type="button"
            data-ocid="home_gallery.view_all_button"
            onClick={() => {
              const nav = (
                window as Window & { __navigateTo?: (p: string) => void }
              ).__navigateTo;
              if (nav) nav("/gallery");
              else window.location.href = "/gallery";
            }}
            className="px-8 py-3 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.72 0.16 80 / 0.15), oklch(0.68 0.2 220 / 0.12))",
              border: "1px solid oklch(0.72 0.16 80 / 0.45)",
              color: "oklch(0.72 0.16 80)",
              boxShadow: "0 0 20px oklch(0.72 0.16 80 / 0.12)",
            }}
          >
            View Full Gallery →
          </button>
        </div>
      </div>

      <Lightbox
        open={lightboxOpen}
        index={lightboxIndex}
        onClose={closeLightbox}
        onPrev={prevPhoto}
        onNext={nextPhoto}
      />
    </section>
  );
}

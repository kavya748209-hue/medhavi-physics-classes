import { FloatingButtons } from "@/components/FloatingButtons";
import { PageNavbar } from "@/components/PageNavbar";
import { Footer } from "@/pages/Footer";
import { ChevronLeft, ChevronRight, Images, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const PHOTOS = [
  { src: "/assets/photo1.png", key: "photo-1", label: "Photo 1" },
  { src: "/assets/photo2.png", key: "photo-2", label: "Photo 2" },
  { src: "/assets/photo3.png", key: "photo-3", label: "Photo 3" },
  { src: "/assets/photo4.png", key: "photo-4", label: "Photo 4" },
  { src: "/assets/photo5.png", key: "photo-5", label: "Photo 5" },
  { src: "/assets/photo6.png", key: "photo-6", label: "Photo 6" },
  { src: "/assets/photo7.png", key: "photo-7", label: "Photo 7" },
  { src: "/assets/photo8.png", key: "photo-8", label: "Photo 8" },
  { src: "/assets/photo9.png", key: "photo-9", label: "Photo 9" },
];

function useIntersectionObserver() {
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
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
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
  return (
    <button
      type="button"
      ref={(el) => setRef(photo.key, el)}
      data-key={photo.key}
      data-ocid={`gallery.item.${index + 1}`}
      onClick={() => onOpen(index)}
      aria-label={`Open ${photo.label} in lightbox`}
      className="group relative cursor-pointer rounded-2xl overflow-hidden text-left w-full"
      style={{
        aspectRatio: "1 / 1",
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? "translateY(0) scale(1)"
          : "translateY(40px) scale(0.96)",
        transition: `opacity 0.55s ease ${index * 0.07}s, transform 0.55s ease ${index * 0.07}s`,
        background: "transparent",
        border: "none",
        padding: 0,
      }}
    >
      {/* Gold glow border on hover */}
      <div
        className="absolute inset-0 rounded-2xl z-10 pointer-events-none transition-all duration-300"
        style={{
          boxShadow: "0 0 0 1px oklch(0.72 0.16 80 / 0.18)",
        }}
      />
      <div
        className="absolute inset-0 rounded-2xl z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          boxShadow:
            "0 0 0 2px oklch(0.72 0.16 80 / 0.7), 0 0 28px 4px oklch(0.72 0.16 80 / 0.25)",
        }}
      />

      {/* Image */}
      <img
        src={photo.src}
        alt={photo.label}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />

      {/* Overlay */}
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

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Keyboard navigation
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

  return (
    <div
      data-ocid="gallery.lightbox"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Backdrop */}
      <div
        data-ocid="gallery.lightbox_backdrop"
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

      {/* Dialog content */}
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
        }}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          data-ocid="gallery.lightbox_close_button"
          aria-label="Close lightbox"
          className="absolute top-5 right-5 z-10 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-2"
          style={{
            background: "oklch(0.14 0.015 270 / 0.9)",
            border: "1px solid oklch(0.72 0.16 80 / 0.4)",
            color: "oklch(0.96 0.02 60)",
            boxShadow: "0 0 16px oklch(0.72 0.16 80 / 0.15)",
          }}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Prev */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          data-ocid="gallery.lightbox_prev_button"
          aria-label="Previous photo"
          className="absolute left-4 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-2"
          style={{
            background: "oklch(0.14 0.015 270 / 0.9)",
            border: "1px solid oklch(0.68 0.2 220 / 0.4)",
            color: "oklch(0.96 0.02 60)",
            boxShadow: "0 0 16px oklch(0.68 0.2 220 / 0.15)",
          }}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          data-ocid="gallery.lightbox_next_button"
          aria-label="Next photo"
          className="absolute right-4 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-2"
          style={{
            background: "oklch(0.14 0.015 270 / 0.9)",
            border: "1px solid oklch(0.68 0.2 220 / 0.4)",
            color: "oklch(0.96 0.02 60)",
            boxShadow: "0 0 16px oklch(0.68 0.2 220 / 0.15)",
          }}
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Image container */}
        <div
          className="relative z-10 flex flex-col items-center gap-4"
          style={{ maxWidth: "min(90vw, 900px)", maxHeight: "90vh" }}
        >
          <img
            src={photo?.src}
            alt={photo?.label}
            className="rounded-2xl object-contain shadow-2xl"
            style={{
              maxWidth: "100%",
              maxHeight: "75vh",
              border: "1px solid oklch(0.72 0.16 80 / 0.3)",
              boxShadow:
                "0 0 60px oklch(0.72 0.16 80 / 0.18), 0 0 120px oklch(0.68 0.2 220 / 0.10)",
            }}
          />
          {/* Caption + counter */}
          <div className="flex items-center gap-3">
            <span
              className="text-base font-semibold"
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

export default function GalleryPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const { visible, setRef } = useIntersectionObserver();

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
    <div className="min-h-screen bg-background">
      <PageNavbar />

      {/* Page header */}
      <section
        data-ocid="gallery.page"
        className="pt-28 pb-14 px-4 text-center relative overflow-hidden"
      >
        {/* Background decorative blobs */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-20 blur-3xl"
          style={{
            background:
              "radial-gradient(ellipse at center, oklch(0.72 0.16 80 / 0.35) 0%, transparent 70%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-10 left-10 w-48 h-48 rounded-full opacity-10 blur-2xl"
          style={{ background: "oklch(0.68 0.2 220 / 0.5)" }}
        />

        <div className="relative z-10 flex flex-col items-center gap-3">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mb-2 shadow-lg"
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

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight"
            style={{
              background:
                "linear-gradient(120deg, oklch(0.72 0.16 80) 30%, oklch(0.82 0.14 80) 60%, oklch(0.72 0.16 80) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Our Gallery
          </h1>

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

          <p className="text-lg text-muted-foreground max-w-xl mt-1">
            Moments from{" "}
            <span style={{ color: "oklch(0.72 0.16 80)" }}>
              Medhavi Physics Classes
            </span>{" "}
            — celebrating our students, toppers, and milestones.
          </p>
        </div>
      </section>

      {/* Photo grid */}
      <section
        data-ocid="gallery.section"
        className="pb-20 px-4 sm:px-8 max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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

        {/* Empty state (should never appear with static data) */}
        {PHOTOS.length === 0 && (
          <div
            data-ocid="gallery.empty_state"
            className="text-center py-24 text-muted-foreground"
          >
            No photos yet.
          </div>
        )}
      </section>

      <Footer />
      <FloatingButtons />

      <Lightbox
        open={lightboxOpen}
        index={lightboxIndex}
        onClose={closeLightbox}
        onPrev={prevPhoto}
        onNext={nextPhoto}
      />
    </div>
  );
}

"use client";

import { useState, useEffect, useCallback } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "framer-motion";
import type { PanInfo } from "framer-motion";
import { FadeIn } from "@/components/FadeIn";


// ── Imports de fotos ──────────────────────────────────────────────────────────
import p1  from "./1.jpeg";
import p2  from "./2.jpeg";
import p3  from "./3.jpeg";
import p4  from "./4.jpeg";
import p5  from "./5.jpeg";
import p6  from "./6.jpeg";
import p7  from "./7.jpeg";
import p8  from "./8.jpeg";
import p9  from "./9.jpeg";
import p10 from "./10.jpeg";
import p11 from "./11.jpeg";
import p12 from "./12.jpeg";
import p13 from "./13.jpeg";
import p14 from "./14.jpeg";
import p15 from "./15.jpeg";
import p16 from "./16.jpeg";
import p17 from "./17.jpeg";
import p18 from "./18.jpeg";
import p19 from "./19.jpeg";
import p20 from "./20.jpeg";
import p21 from "./21.jpeg";
import p22 from "./22.jpeg";
import p23 from "./23.jpeg";
import p24 from "./24.jpeg";
import p25 from "./25.jpeg";
import p26 from "./26.jpeg";
import p27 from "./no-me-chifles.jpeg";
import p28 from "./vulva-dentada.jpeg";

const EASE = [0.22, 1, 0.36, 1] as const;

interface Photo {
  src: StaticImageData;
  id: number;
  category: string;
  label: string;
  year?: string;
}

// ── Metadata — edita label/category/year para cada foto ──────────────────────
const photos: Photo[] = [
  { src: p1,  id: 1,  category: "Feminismo",  label: "8M — Cuernavaca",               year: "2023" },
  { src: p2,  id: 2,  category: "Feminismo",  label: "Marcha Feminista",               year: "2023" },
  { src: p3,  id: 3,  category: "Feminismo",  label: "8M — Plaza de Armas",            year: "2023" },
  { src: p4,  id: 4,  category: "Feminismo",  label: "Manifestación",                  year: "2021" },
  { src: p5,  id: 5,  category: "Feminismo",  label: "No me chifles",                year: "2021" },
  { src: p6,  id: 6,  category: "Feminismo",  label: "Autorretrato",                      year: "2021" },
  { src: p7,  id: 7,  category: "Feminismo",  label: "8 de marzo",          year: "2022" },
  { src: p8,  id: 8,  category: "Feminismo",  label: "28S",     year: "2024" },
  { src: p9,  id: 9,  category: "Documental", label: "Registro Urbano",                year: "2023" },
  { src: p10, id: 10, category: "Documental", label: "Documentación Social",           year: "2023" },
  { src: p11, id: 11, category: "Documental", label: "Obra de teatro",                     year: "2022" },
  { src: p12, id: 12, category: "Documental", label: "Chinela",                 year: "2022" },
  { src: p13, id: 13, category: "Eventos",    label: "Sin título",                    year: "2024" },
  { src: p14, id: 14, category: "Eventos",    label: "Juanita",                       year: "2025" },
  { src: p15, id: 15, category: "Eventos",    label: "Obra de teatro",                year: "2025" },
  { src: p16, id: 16, category: "Eventos",    label: "Orquesta",       year: "2024" },
  { src: p17, id: 17, category: "Eventos",    label: "Performance",              year: "2023" },
  { src: p18, id: 18, category: "Eventos",    label: "Performance",   year: "2022" },
  { src: p19, id: 19, category: "Eventos",    label: "Danza contemporánea",           year: "2023" },
  { src: p20, id: 20, category: "Creativa",   label: "Danza contemporánea",        year: "2024" },
  { src: p21, id: 21, category: "Creativa",   label: "Miquixtli, Cuernavaca",         year: "2024" },
  { src: p22, id: 22, category: "Creativa",   label: "Miquixtli, Cuernavaca",            year: "2025" },
  { src: p23, id: 23, category: "Creativa",   label: "En el obturador",                 year: "2025" },
  { src: p24, id: 24, category: "Documental", label: "28S",                 year: "2023" },
  { src: p25, id: 25, category: "Documental", label: "Fotografía urbana",            year: "2022" },
  { src: p26, id: 26, category: "Documental", label: "Vendaval",          year: "2022" },
  { src: p27, id: 27, category: "Arte",        label: "No Me Chifles — Cartel",       year: "2023" },
  { src: p28, id: 28, category: "Arte",        label: "Vulva Dentada",                year: "2023" },
];



// ── Lightbox ──────────────────────────────────────────────────────────────────
function Lightbox({
  photos,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  photos: Photo[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const x = useMotionValue(0);

  const prevIdx = (index - 1 + photos.length) % photos.length;
  const nextIdx = (index + 1) % photos.length;

  // Adjacent photos are always exactly one viewport-width away from the current
  const prevX = useTransform(x, (v) => v - window.innerWidth);
  const nextX = useTransform(x, (v) => v + window.innerWidth);

  // Current photo scales down slightly while dragging — cinematic feel
  const currScale = useTransform(x, [-160, 0, 160], [0.92, 1, 0.92]);

  // Reset position when navigating
  useEffect(() => {
    x.set(0);
  }, [index, x]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") navigate("prev");
      if (e.key === "ArrowRight") navigate("next");
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onClose, onPrev, onNext]);

  function navigate(dir: "prev" | "next") {
    const vw = window.innerWidth;
    const target = dir === "next" ? -vw : vw;
    animate(x, target, {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
      onComplete: () => {
        if (dir === "next") onNext();
        else onPrev();
        x.set(0);
      },
    });
  }

  function handleDragEnd(_: PointerEvent, info: PanInfo) {
    const { offset, velocity } = info;
    if (offset.x < -52 || velocity.x < -420) {
      navigate("next");
    } else if (offset.x > 52 || velocity.x > 420) {
      navigate("prev");
    } else {
      // Not enough — spring back
      animate(x, 0, { type: "spring", stiffness: 320, damping: 32 });
    }
  }

  const photo = photos[index];

  const imgStyle: React.CSSProperties = {
    maxHeight: "78vh",
    maxWidth: "88vw",
    width: "auto",
    height: "auto",
    objectFit: "contain",
    display: "block",
    userSelect: "none",
    pointerEvents: "none",
    draggable: false,
  } as React.CSSProperties;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[200] overflow-hidden select-none"
      style={{ background: "rgba(4,4,4,0.98)", touchAction: "none" }}
    >
      {/* Close */}
      <button
        className="absolute top-5 right-6 z-30 text-xl p-2 transition-opacity duration-300 hover:opacity-70"
        style={{ color: "rgba(232,224,208,0.5)" }}
        onClick={onClose}
        aria-label="Cerrar"
      >
        ✕
      </button>

      {/* Counter */}
      <p
        className="absolute top-6 left-1/2 -translate-x-1/2 z-30 text-xs tracking-[0.25em] uppercase pointer-events-none"
        style={{ color: "rgba(232,224,208,0.2)", fontFamily: "var(--font-dm-sans)" }}
      >
        {index + 1} / {photos.length}
      </p>

      {/* Desktop nav buttons */}
      <button
        className="absolute left-5 top-1/2 -translate-y-1/2 z-30 p-3 text-xl hidden md:block transition-opacity duration-300 hover:opacity-70"
        style={{ color: "rgba(232,224,208,0.35)" }}
        onClick={() => navigate("prev")}
        aria-label="Anterior"
      >
        ←
      </button>
      <button
        className="absolute right-5 top-1/2 -translate-y-1/2 z-30 p-3 text-xl hidden md:block transition-opacity duration-300 hover:opacity-70"
        style={{ color: "rgba(232,224,208,0.35)" }}
        onClick={() => navigate("next")}
        aria-label="Siguiente"
      >
        →
      </button>

      {/* Previous photo — peeks in from the left while dragging right */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ x: prevX }}
      >
        <Image src={photos[prevIdx].src} alt={photos[prevIdx].label} style={imgStyle} placeholder="blur" />
      </motion.div>

      {/* Next photo — peeks in from the right while dragging left */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ x: nextX }}
      >
        <Image src={photos[nextIdx].src} alt={photos[nextIdx].label} style={imgStyle} placeholder="blur" />
      </motion.div>

      {/* Current photo — draggable strip */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        drag="x"
        dragMomentum={false}
        style={{ x, scale: currScale, cursor: "grab" }}
        onDragEnd={handleDragEnd}
        whileTap={{ cursor: "grabbing" }}
      >
        <Image src={photo.src} alt={photo.label} style={imgStyle} placeholder="blur" />
      </motion.div>

      {/* Caption — animates per photo */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 text-center whitespace-nowrap pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.22 }}
          >
            <p className="text-sm mb-0.5" style={{ color: "rgba(232,224,208,0.55)", fontFamily: "var(--font-dm-sans)" }}>
              {photo.label}
            </p>
            <p className="text-xs tracking-[0.18em] uppercase" style={{ color: "rgba(232,224,208,0.22)", fontFamily: "var(--font-dm-sans)" }}>
              {photo.category}{photo.year ? ` · ${photo.year}` : ""}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Mobile swipe hint — faint arrows */}
      <div className="absolute bottom-[76px] left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 md:hidden pointer-events-none">
        <span style={{ color: "rgba(232,224,208,0.18)", fontSize: "10px", letterSpacing: "0.05em" }}>←</span>
        <div style={{ width: "28px", height: "1px", background: "linear-gradient(to right, rgba(130,80,210,0.25), rgba(210,95,140,0.2))" }} />
        <span style={{ color: "rgba(232,224,208,0.18)", fontSize: "10px", letterSpacing: "0.05em" }}>→</span>
      </div>
    </motion.div>
  );
}

// ── Gallery card ──────────────────────────────────────────────────────────────
function GalleryCard({ photo, index, onClick }: { photo: Photo; index: number; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: Math.min(index * 0.028, 0.65), ease: EASE }}
      style={{ breakInside: "avoid", marginBottom: "5px", cursor: "pointer" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <div style={{ position: "relative", overflow: "hidden" }}>
        <div
          style={{
            transition: "transform 0.85s cubic-bezier(0.22,1,0.36,1), opacity 0.5s ease",
            transform: hovered ? "scale(1.04)" : "scale(1)",
            opacity: hovered ? 0.75 : 1,
          }}
        >
          <Image
            src={photo.src}
            alt={photo.label}
            width={photo.src.width}
            height={photo.src.height}
            style={{ width: "100%", height: "auto", display: "block" }}
            placeholder="blur"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        </div>
      </div>
    </motion.div>
  );
}

// ── Página ────────────────────────────────────────────────────────────────────
export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = useCallback((i: number) => setLightboxIndex(i), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevPhoto = useCallback(
    () => setLightboxIndex((i) => (i !== null ? (i - 1 + photos.length) % photos.length : 0)),
    []
  );
  const nextPhoto = useCallback(
    () => setLightboxIndex((i) => (i !== null ? (i + 1) % photos.length : 0)),
    []
  );

  return (
    <>
      {/* ── Header ── */}
      <section className="page-header-offset pb-10 md:pb-14 px-6 md:px-10 lg:px-14">
        <div className="max-w-7xl mx-auto">
          <div className="overflow-hidden mb-5">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, delay: 0.1, ease: EASE }}
              className="font-display leading-none"
              style={{ fontSize: "clamp(52px, 10vw, 130px)", color: "#e8e0d0", fontWeight: 300 }}
            >
              Galería
            </motion.h1>
          </div>
          <FadeIn delay={0.3}>
            <div className="flex gap-1.5 mb-5">
              <div style={{ width: "48px", height: "1px", background: "rgba(130,80,210,0.55)" }} />
              <div style={{ width: "24px", height: "1px", background: "rgba(210,95,140,0.45)" }} />
              <div style={{ width: "14px", height: "1px", background: "rgba(70,165,120,0.4)" }} />
            </div>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p
              className="text-sm md:text-base leading-7 max-w-sm"
              style={{ color: "rgba(232,224,208,0.32)", fontFamily: "var(--font-dm-sans)" }}
            >
              Fotografía documental, social y creativa.
              Haz clic en cualquier imagen para ampliarla.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Masonry editorial ── */}
      <section className="pb-20 md:pb-32 px-6 md:px-10 lg:px-14">
        <div className="max-w-7xl mx-auto">
          <div
            style={{
              columns: "3 200px",
              columnGap: "5px",
            }}
          >
            {photos.map((photo, idx) => (
              <GalleryCard
                key={photo.id}
                photo={photo}
                index={idx}
                onClick={() => openLightbox(idx)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            photos={photos}
            index={lightboxIndex}
            onClose={closeLightbox}
            onPrev={prevPhoto}
            onNext={nextPhoto}
          />
        )}
      </AnimatePresence>
    </>
  );
}

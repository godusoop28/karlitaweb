"use client";

import { useState, useEffect, useCallback } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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
  { src: p5,  id: 5,  category: "Feminismo",  label: "8M — Cuernavaca",                year: "2021" },
  { src: p6,  id: 6,  category: "Feminismo",  label: "Marcha 8M",                      year: "2021" },
  { src: p7,  id: 7,  category: "Feminismo",  label: "28S — Despenalización",          year: "2022" },
  { src: p8,  id: 8,  category: "Feminismo",  label: "Despenalización del Aborto",     year: "2024" },
  { src: p9,  id: 9,  category: "Documental", label: "Registro Urbano",                year: "2023" },
  { src: p10, id: 10, category: "Documental", label: "Documentación Social",           year: "2023" },
  { src: p11, id: 11, category: "Documental", label: "Cuernavaca",                     year: "2022" },
  { src: p12, id: 12, category: "Documental", label: "Memoria Visual",                 year: "2022" },
  { src: p13, id: 13, category: "Eventos",    label: "Joe T. Hodo",                    year: "2024" },
  { src: p14, id: 14, category: "Eventos",    label: "Gas Fest",                       year: "2025" },
  { src: p15, id: 15, category: "Eventos",    label: "Evento Cultural",                year: "2025" },
  { src: p16, id: 16, category: "Eventos",    label: "UAEM — Facultad de Artes",       year: "2024" },
  { src: p17, id: 17, category: "Eventos",    label: "Facultad de Artes",              year: "2023" },
  { src: p18, id: 18, category: "Eventos",    label: "Turismo y Cultura de Morelos",   year: "2022" },
  { src: p19, id: 19, category: "Eventos",    label: "Evento Cultural UAEM",           year: "2023" },
  { src: p20, id: 20, category: "Creativa",   label: "México en Ti — Producto",        year: "2024" },
  { src: p21, id: 21, category: "Creativa",   label: "Fotografía de Producto",         year: "2024" },
  { src: p22, id: 22, category: "Creativa",   label: "Fotografía Creativa",            year: "2025" },
  { src: p23, id: 23, category: "Creativa",   label: "Serie Creativa",                 year: "2025" },
  { src: p24, id: 24, category: "Documental", label: "Archivo Visual",                 year: "2023" },
  { src: p25, id: 25, category: "Documental", label: "Registro Documental",            year: "2022" },
  { src: p26, id: 26, category: "Documental", label: "Fotografía Documental",          year: "2022" },
];


// ── Fotografías sugeridas (pendientes) ────────────────────────────────────────
const pendingPhotos = [
  {
    id: 101,
    filename: "retrato-principal.jpg",
    description: "Retrato de Karlita — portada del sitio y sección Sobre mí",
    hint: "Vertical 3:4, luz natural o estudio.",
  },
  {
    id: 102,
    filename: "no-me-chifles-cartel.jpg",
    description: "Carteles 'No Me Chifles' pegados en espacios urbanos",
    hint: "Intervención en calle, Cuernavaca.",
  },
  {
    id: 103,
    filename: "no-me-chifles-proceso.jpg",
    description: "Proceso creativo de los posters — bocetos o impresiones",
    hint: "Flat lay 75×60cm piezas finales.",
  },
  {
    id: 104,
    filename: "8m-horizontal.jpg",
    description: "Fotografía panorámica de la marcha 8M para hero del proyecto",
    hint: "Gran angular 16:9 o 21:9.",
  },
  {
    id: 105,
    filename: "freelance-reciente.jpg",
    description: "Fotografía reciente — trabajo independiente 2025",
    hint: "Tu pieza más representativa actual.",
  },
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
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  const photo = photos[index];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[200] flex items-center justify-center"
      style={{ background: "rgba(4,4,4,0.98)" }}
      onClick={onClose}
    >
      {/* Close */}
      <button
        className="absolute top-5 right-6 z-10 text-xl p-2 transition-opacity duration-300"
        style={{ color: "rgba(232,224,208,0.4)" }}
        onClick={onClose}
        aria-label="Cerrar"
      >
        ✕
      </button>

      {/* Counter */}
      <p
        className="absolute top-6 left-1/2 -translate-x-1/2 text-xs tracking-[0.25em] uppercase"
        style={{ color: "rgba(232,224,208,0.2)", fontFamily: "var(--font-dm-sans)" }}
      >
        {index + 1} / {photos.length}
      </p>

      {/* Prev */}
      <button
        className="absolute left-4 md:left-7 z-10 p-3 text-lg md:text-xl"
        style={{ color: "rgba(232,224,208,0.3)" }}
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Anterior"
      >
        ←
      </button>

      {/* Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={photo.id}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.28 }}
          className="relative flex items-center justify-center px-16 md:px-20"
          style={{ maxWidth: "90vw", maxHeight: "82vh" }}
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={photo.src}
            alt={photo.label}
            style={{
              maxHeight: "78vh",
              maxWidth: "86vw",
              width: "auto",
              height: "auto",
              objectFit: "contain",
              display: "block",
            }}
            placeholder="blur"
          />
        </motion.div>
      </AnimatePresence>

      {/* Next */}
      <button
        className="absolute right-4 md:right-7 z-10 p-3 text-lg md:text-xl"
        style={{ color: "rgba(232,224,208,0.3)" }}
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Siguiente"
      >
        →
      </button>

      {/* Caption */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center whitespace-nowrap">
        <p className="text-sm mb-0.5" style={{ color: "rgba(232,224,208,0.55)", fontFamily: "var(--font-dm-sans)" }}>
          {photo.label}
        </p>
        <p className="text-xs tracking-[0.18em] uppercase" style={{ color: "rgba(232,224,208,0.22)", fontFamily: "var(--font-dm-sans)" }}>
          {photo.category}{photo.year ? ` · ${photo.year}` : ""}
        </p>
      </div>
    </motion.div>
  );
}

// ── Gallery card ──────────────────────────────────────────────────────────────
function GalleryCard({ photo, index, onClick }: { photo: Photo; index: number; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.04, ease: EASE }}
      className="flex flex-col cursor-pointer group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      {/* Photo frame — fixed height, foto centrada con contain, sin recorte */}
      <div
        style={{
          height: "clamp(160px, 22vw, 280px)",
          background: "#0e0e0e",
          padding: "14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          borderBottom: hovered ? "1px solid rgba(130,80,210,0.25)" : "1px solid transparent",
          transition: "border-color 0.4s ease",
        }}
      >
        {/* Inner container for the photo — fills frame after padding */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            transition: "transform 0.65s cubic-bezier(0.22,1,0.36,1)",
            transform: hovered ? "scale(1.04)" : "scale(1)",
          }}
        >
          <Image
            src={photo.src}
            alt={photo.label}
            fill
            style={{ objectFit: "contain" }}
            placeholder="blur"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        </div>

        {/* Hover overlay — muy sutil */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.18)",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.4s ease",
            pointerEvents: "none",
          }}
        />

        {/* Expand icon on hover */}
        <div
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            opacity: hovered ? 0.6 : 0,
            transition: "opacity 0.4s ease",
            color: "#e8e0d0",
            fontSize: "11px",
            letterSpacing: "0.1em",
            fontFamily: "var(--font-dm-sans)",
          }}
        >
          ↗
        </div>
      </div>

      {/* Caption — debajo del frame, como etiqueta de galería */}
      <div style={{ paddingTop: "8px", paddingBottom: "4px" }}>
        <p
          className="text-xs leading-4"
          style={{ color: "rgba(232,224,208,0.5)", fontFamily: "var(--font-dm-sans)" }}
        >
          {photo.label}
        </p>
        <p
          style={{
            fontSize: "10px",
            color: "rgba(140,95,210,0.45)",
            fontFamily: "var(--font-dm-sans)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginTop: "2px",
          }}
        >
          {photo.category}{photo.year ? ` · ${photo.year}` : ""}
        </p>
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
      <section className="pt-44 md:pt-64 pb-10 md:pb-14 px-6 md:px-10 lg:px-14">
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

      {/* ── Grid de galería ──
           4 columnas en desktop, 3 en md, 2 en sm.
           Cada foto en un frame oscuro de altura controlada.
           object-fit: contain — muestra la foto completa sin recortar. */}
      <section className="pb-20 md:pb-32 px-6 md:px-10 lg:px-14">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
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

      {/* ── Fotos pendientes ── */}
      <section
        className="pb-24 px-6 md:px-10 lg:px-14 border-t pt-14"
        style={{ borderColor: "rgba(255,255,255,0.05)" }}
      >
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p
              className="text-xs tracking-[0.25em] uppercase mb-10"
              style={{ color: "rgba(232,224,208,0.15)", fontFamily: "var(--font-dm-sans)" }}
            >
              Fotografías sugeridas — pendientes de agregar
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pendingPhotos.map((ph, i) => (
              <FadeIn key={ph.id} delay={i * 0.06}>
                <div
                  className="p-5 border"
                  style={{
                    borderColor: "rgba(255,255,255,0.06)",
                    borderStyle: "dashed",
                    background: "rgba(255,255,255,0.012)",
                    minHeight: "160px",
                  }}
                >
                  <p
                    className="text-[10px] tracking-[0.1em] uppercase mb-2.5"
                    style={{ color: "rgba(139,123,139,0.45)", fontFamily: "var(--font-dm-sans)" }}
                  >
                    {ph.filename}
                  </p>
                  <p
                    className="text-sm leading-6 mb-3"
                    style={{ color: "rgba(232,224,208,0.4)", fontFamily: "var(--font-dm-sans)" }}
                  >
                    {ph.description}
                  </p>
                  <p
                    className="text-xs italic leading-5"
                    style={{ color: "rgba(232,224,208,0.2)", fontFamily: "var(--font-dm-sans)" }}
                  >
                    {ph.hint}
                  </p>
                </div>
              </FadeIn>
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

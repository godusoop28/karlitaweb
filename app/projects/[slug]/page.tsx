"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeIn, StaggerContainer, staggerItem } from "@/components/FadeIn";
import { getProjectBySlug, projects } from "@/lib/projects";

const EASE = [0.22, 1, 0.36, 1] as const;

function GenericProject({ slug }: { slug: string }) {
  const project = getProjectBySlug(slug);
  if (!project) return notFound();

  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-end px-6 md:px-12 pb-20 pt-36">
        <div className="max-w-7xl mx-auto w-full">
          <FadeIn>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-6"
              style={{ color: "rgba(139,123,139,0.7)", fontFamily: "var(--font-dm-sans)" }}
            >
              {project.category}
            </p>
          </FadeIn>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: EASE }}
              className="font-display leading-none"
              style={{
                fontSize: "clamp(52px, 10vw, 140px)",
                color: "#e8e0d0",
                fontWeight: 300,
              }}
            >
              {project.title}
            </motion.h1>
          </div>

          {project.titleLine2 && (
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, delay: 0.32, ease: EASE }}
                className="font-display leading-none"
                style={{
                  fontSize: "clamp(52px, 10vw, 140px)",
                  color: "rgba(232,224,208,0.3)",
                  fontWeight: 300,
                  fontStyle: "italic",
                }}
              >
                {project.titleLine2}
              </motion.h1>
            </div>
          )}

          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.1, delay: 0.8, ease: EASE }}
            className="my-6"
            style={{ height: "1px", background: "rgba(255,255,255,0.08)" }}
          />

          <FadeIn delay={0.9}>
            <div className="flex flex-col md:flex-row gap-6 md:items-center">
              <p
                className="text-sm"
                style={{ color: "rgba(232,224,208,0.35)", fontFamily: "var(--font-dm-sans)" }}
              >
                {project.subtitle}
              </p>
              <span
                style={{ color: "rgba(255,255,255,0.1)", display: "none" }}
                className="md:block"
              >
                ·
              </span>
              <p
                className="text-sm"
                style={{ color: "rgba(232,224,208,0.25)", fontFamily: "var(--font-dm-sans)" }}
              >
                {project.year}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Description */}
      <section
        className="py-24 md:py-36 px-6 md:px-12 border-t"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8 md:col-start-3">
              <FadeIn>
                <p
                  className="font-display text-2xl md:text-3xl leading-snug"
                  style={{ color: "#e8e0d0", fontWeight: 300 }}
                >
                  {project.description}
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Back link */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase group"
            style={{ color: "rgba(232,224,208,0.35)", fontFamily: "var(--font-dm-sans)" }}
          >
            <span className="transition-transform duration-500 group-hover:-translate-x-1">←</span>
            Volver a proyectos
          </Link>
        </div>
      </section>
    </>
  );
}

function NoMeChifles() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const project = getProjectBySlug("no-me-chifles")!;

  return (
    <>
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col justify-end overflow-hidden"
        style={{ background: "#080808" }}
      >
        {/* Subtle accent */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 80%, rgba(139,123,139,0.05) 0%, transparent 70%)",
          }}
        />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative px-6 md:px-12 pb-20 md:pb-28 pt-36"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: EASE }}
            className="text-xs tracking-[0.35em] uppercase mb-10"
            style={{ color: "rgba(139,123,139,0.6)", fontFamily: "var(--font-dm-sans)" }}
          >
            Arte Documental · Activismo Social · Morelos, 2023
          </motion.p>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.3, delay: 0.15, ease: EASE }}
              className="font-display leading-none"
              style={{
                fontSize: "clamp(64px, 15vw, 220px)",
                color: "#e8e0d0",
                fontWeight: 300,
                letterSpacing: "-0.01em",
              }}
            >
              No Me
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.3, delay: 0.28, ease: EASE }}
              className="font-display leading-none"
              style={{
                fontSize: "clamp(64px, 15vw, 220px)",
                color: "rgba(232,224,208,0.25)",
                fontWeight: 300,
                fontStyle: "italic",
                letterSpacing: "-0.01em",
              }}
            >
              Chifles
            </motion.h1>
          </div>

          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.9, ease: EASE }}
            className="my-8"
            style={{ height: "1px", background: "rgba(255,255,255,0.07)" }}
          />

          <FadeIn delay={1.1}>
            <p
              className="text-base tracking-[0.05em]"
              style={{ color: "rgba(232,224,208,0.35)", fontFamily: "var(--font-dm-sans)" }}
            >
              Acoso Callejero en Morelos — Licenciatura en Artes Visuales
            </p>
          </FadeIn>
        </motion.div>

        {/* Scroll line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            style={{
              width: "1px",
              height: "52px",
              background:
                "linear-gradient(to bottom, transparent, rgba(139,123,139,0.4))",
            }}
          />
        </motion.div>
      </section>

      {/* ABOUT / ANTECEDENTES */}
      <section
        className="py-32 md:py-52 px-6 md:px-12 border-t"
        style={{ borderColor: "rgba(255,255,255,0.05)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
            <FadeIn className="md:col-span-3">
              <p
                className="text-xs tracking-[0.3em] uppercase"
                style={{ color: "rgba(232,224,208,0.2)", fontFamily: "var(--font-dm-sans)" }}
              >
                Antecedentes
              </p>
            </FadeIn>

            <div className="md:col-span-8">
              <FadeIn delay={0.1}>
                <h2
                  className="font-display leading-tight mb-10"
                  style={{
                    fontSize: "clamp(28px, 4vw, 52px)",
                    color: "#e8e0d0",
                    fontWeight: 300,
                  }}
                >
                  {project.description}
                </h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div
                  className="w-12 mb-10"
                  style={{ height: "1px", background: "rgba(139,123,139,0.35)" }}
                />
              </FadeIn>

              {/* Historical reference */}
              <FadeIn delay={0.25}>
                <div
                  className="p-6 md:p-8 border-l-2"
                  style={{
                    borderColor: "rgba(139,123,139,0.3)",
                    background: "rgba(139,123,139,0.03)",
                  }}
                >
                  <p
                    className="text-xs tracking-[0.2em] uppercase mb-4"
                    style={{ color: "rgba(139,123,139,0.6)", fontFamily: "var(--font-dm-sans)" }}
                  >
                    Referente Histórico · Tendedero de Denuncia
                  </p>
                  <p
                    className="text-base leading-8"
                    style={{ color: "rgba(232,224,208,0.45)", fontFamily: "var(--font-dm-sans)" }}
                  >
                    {project.historicalRef}
                  </p>
                </div>
              </FadeIn>

              {/* Morelos context */}
              <FadeIn delay={0.35}>
                <div className="mt-8">
                  <p
                    className="text-xs tracking-[0.2em] uppercase mb-4"
                    style={{ color: "rgba(232,224,208,0.2)", fontFamily: "var(--font-dm-sans)" }}
                  >
                    Acoso en Morelos
                  </p>
                  <p
                    className="text-base leading-8"
                    style={{ color: "rgba(232,224,208,0.4)", fontFamily: "var(--font-dm-sans)" }}
                  >
                    En el año 2015 se declaró alerta en los siguientes municipios de Morelos
                    como focos rojos de acoso callejero: Cuautla, Cuernavaca, Emiliano Zapata,
                    Jiutepec, Puente de Ixtla, Temixco, Xochitepec, Yautepec, entre otros.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section
        className="py-24 md:py-40 px-6 md:px-12 border-t"
        style={{ borderColor: "rgba(255,255,255,0.05)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <FadeIn className="md:col-span-3">
              <p
                className="text-xs tracking-[0.3em] uppercase"
                style={{ color: "rgba(232,224,208,0.2)", fontFamily: "var(--font-dm-sans)" }}
              >
                Metodología
              </p>
            </FadeIn>
            <div className="md:col-span-8">
              <FadeIn delay={0.1}>
                <p
                  className="text-base md:text-lg leading-8"
                  style={{ color: "rgba(232,224,208,0.4)", fontFamily: "var(--font-dm-sans)" }}
                >
                  A través de Instagram desarrollé una serie de preguntas a forma de encuesta
                  que respondieron mujeres cercanas a mí, residentes de Morelos y sus
                  alrededores. Sus respuestas se convirtieron en el corazón estadístico
                  de este proyecto.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* STATISTICS */}
      <section
        className="py-32 md:py-52 px-6 md:px-12"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(139,123,139,0.03) 30%, rgba(139,123,139,0.03) 70%, transparent)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-16 md:mb-24"
              style={{ color: "rgba(232,224,208,0.2)", fontFamily: "var(--font-dm-sans)" }}
            >
              Encuestas — Datos
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {project.stats!.map((stat, i) => (
              <FadeIn key={i} delay={i * 0.1} direction="up">
                <div
                  className="py-12 md:py-16 px-6 md:px-10 border-b md:border-b-0 md:border-r last:border-r-0"
                  style={{ borderColor: "rgba(255,255,255,0.06)" }}
                >
                  <p
                    className="font-display leading-none mb-4"
                    style={{
                      fontSize: "clamp(52px, 8vw, 100px)",
                      color: "#8b7b8b",
                      fontWeight: 300,
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-xs md:text-sm leading-6"
                    style={{ color: "rgba(232,224,208,0.35)", fontFamily: "var(--font-dm-sans)" }}
                  >
                    {stat.label}
                  </p>
                  {stat.note && (
                    <p
                      className="text-xs mt-3 font-display"
                      style={{ color: "rgba(139,123,139,0.3)" }}
                    >
                      [{stat.note}]
                    </p>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIES */}
      <section
        className="py-32 md:py-52 px-6 md:px-12 border-t"
        style={{ borderColor: "rgba(255,255,255,0.05)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            <FadeIn className="md:col-span-3">
              <div className="md:sticky md:top-24">
                <p
                  className="text-xs tracking-[0.3em] uppercase mb-4"
                  style={{ color: "rgba(232,224,208,0.2)", fontFamily: "var(--font-dm-sans)" }}
                >
                  Testimonios
                </p>
                <p
                  className="text-sm leading-7"
                  style={{ color: "rgba(232,224,208,0.25)", fontFamily: "var(--font-dm-sans)" }}
                >
                  A partir de las encuestas e historias compartidas por las
                  mujeres de mis redes, realicé una selección de algunas
                  de sus experiencias.
                </p>
              </div>
            </FadeIn>

            <div className="md:col-span-8">
              <StaggerContainer className="space-y-0">
                {project.testimonies!.map((t, i) => (
                  <motion.div
                    key={i}
                    variants={staggerItem}
                    className="py-10 md:py-14 border-b"
                    style={{ borderColor: "rgba(255,255,255,0.05)" }}
                  >
                    <div className="flex gap-6 md:gap-10">
                      <p
                        className="font-display text-xl md:text-2xl flex-shrink-0 mt-1"
                        style={{ color: "rgba(139,123,139,0.3)", fontWeight: 300 }}
                      >
                        &ldquo;
                      </p>
                      <p
                        className="font-display text-xl md:text-2xl leading-snug"
                        style={{ color: "rgba(232,224,208,0.6)", fontWeight: 300, fontStyle: "italic" }}
                      >
                        {t.text}
                      </p>
                    </div>
                    <p
                      className="text-xs tracking-[0.15em] uppercase mt-6 ml-12 md:ml-14"
                      style={{ color: "rgba(232,224,208,0.18)", fontFamily: "var(--font-dm-sans)" }}
                    >
                      Testimonio {String(i + 1).padStart(2, "0")}
                    </p>
                  </motion.div>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section
        className="py-32 md:py-52 px-6 md:px-12 border-t"
        style={{ borderColor: "rgba(255,255,255,0.05)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <FadeIn className="md:col-span-3">
              <p
                className="text-xs tracking-[0.3em] uppercase"
                style={{ color: "rgba(232,224,208,0.2)", fontFamily: "var(--font-dm-sans)" }}
              >
                Proceso Creativo
              </p>
            </FadeIn>

            <div className="md:col-span-8">
              <FadeIn delay={0.1}>
                <h2
                  className="font-display leading-tight mb-10"
                  style={{
                    fontSize: "clamp(28px, 4vw, 48px)",
                    color: "#e8e0d0",
                    fontWeight: 300,
                  }}
                >
                  La intervención urbana
                </h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p
                  className="text-base md:text-lg leading-8 mb-10"
                  style={{ color: "rgba(232,224,208,0.4)", fontFamily: "var(--font-dm-sans)" }}
                >
                  {project.process}
                </p>
              </FadeIn>

              {/* Poster specs */}
              <FadeIn delay={0.3}>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { label: "Formato", value: "75 × 60 cm" },
                    { label: "Bocetos previos", value: "10 × 15 cm" },
                    { label: "Distribución", value: "Espacio Urbano" },
                  ].map((spec) => (
                    <div
                      key={spec.label}
                      className="p-5 border"
                      style={{ borderColor: "rgba(255,255,255,0.06)" }}
                    >
                      <p
                        className="text-xs tracking-[0.15em] uppercase mb-2"
                        style={{ color: "rgba(232,224,208,0.2)", fontFamily: "var(--font-dm-sans)" }}
                      >
                        {spec.label}
                      </p>
                      <p
                        className="font-display text-xl md:text-2xl"
                        style={{ color: "rgba(232,224,208,0.6)", fontWeight: 300 }}
                      >
                        {spec.value}
                      </p>
                    </div>
                  ))}
                </div>
              </FadeIn>

              {/* Poster placeholders */}
              <FadeIn delay={0.4}>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-8">
                  {[1, 2, 3].map((n) => (
                    <div
                      key={n}
                      className="relative img-placeholder"
                      style={{ aspectRatio: "3/4" }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <p
                            className="font-display text-3xl md:text-4xl"
                            style={{ color: "rgba(255,255,255,0.05)", fontWeight: 300 }}
                          >
                            P.{String(n).padStart(2, "0")}
                          </p>
                          <p
                            className="text-xs tracking-[0.12em] uppercase mt-3"
                            style={{ color: "rgba(255,255,255,0.05)", fontFamily: "var(--font-dm-sans)" }}
                          >
                            Pieza Final
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Back */}
      <section className="pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase group"
            style={{ color: "rgba(232,224,208,0.3)", fontFamily: "var(--font-dm-sans)" }}
          >
            <span className="transition-transform duration-500 group-hover:-translate-x-1">←</span>
            Volver a proyectos
          </Link>
        </div>
      </section>
    </>
  );
}

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  const project = getProjectBySlug(slug);
  if (!project) return notFound();

  if (slug === "no-me-chifles") {
    return <NoMeChifles />;
  }

  return <GenericProject slug={slug} />;
}

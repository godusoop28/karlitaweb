"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeIn, StaggerContainer, staggerItem } from "@/components/FadeIn";
import { getFeaturedProjects } from "@/lib/projects";
import logoSrc from "./logo.png";
import portraitSrc from "./about/retrato-principal.jpeg";

const EASE = [0.22, 1, 0.36, 1] as const;
const PX = "px-6 md:px-10 lg:px-14";

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100dvh] flex flex-col justify-end overflow-hidden"
      style={{ background: "#0a0a0a" }}
    >
      {/* Accent glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 75% 65%, rgba(130,80,210,0.08) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 40% 30% at 18% 78%, rgba(210,95,140,0.07) 0%, transparent 65%)",
        }}
      />

      {/* Logo watermark — atmospheric, muy sutil, centrado en el hero */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.065 }}
        transition={{ duration: 3.5, delay: 0.8, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      >
        <div
          className="relative"
          style={{ width: "clamp(300px, 40vw, 580px)", height: "clamp(200px, 26.7vw, 387px)" }}
        >
          <Image
            src={logoSrc}
            alt=""
            fill
            style={{
              objectFit: "contain",
              objectPosition: "center",
              filter: "grayscale(1) invert(1) brightness(1.8) contrast(1.15)",
            }}
          />
        </div>
      </motion.div>

      <motion.div
        style={{ y, opacity }}
        className={`relative ${PX} pb-14 md:pb-20 pt-28 md:pt-36`}
      >
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: EASE }}
          className="text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.28em] uppercase mb-8 md:mb-12"
          style={{ color: "rgba(232,224,208,0.3)", fontFamily: "var(--font-dm-sans)" }}
        >
          Artista Visual · Fotografía Documental · Morelos, México
        </motion.p>

        {/* KARLITA */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "105%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, delay: 0.18, ease: EASE }}
            className="font-display leading-none"
            style={{
              fontSize: "clamp(44px, 13vw, 190px)",
              color: "#e8e0d0",
              fontWeight: 300,
              letterSpacing: "-0.01em",
            }}
          >
            KARLITA
          </motion.h1>
        </div>

        {/* RODRÍGUEZ + year */}
        <div className="flex items-end justify-between gap-4">
          <div className="overflow-hidden flex-1 min-w-0">
            <motion.h1
              initial={{ y: "105%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, delay: 0.32, ease: EASE }}
              className="font-display leading-none"
              style={{
                fontSize: "clamp(44px, 13vw, 190px)",
                color: "#e8e0d0",
                fontWeight: 300,
                letterSpacing: "-0.01em",
              }}
            >
              RODRÍGUEZ
            </motion.h1>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1, ease: EASE }}
            className="hidden lg:block pb-2 flex-shrink-0"
          >
            <p className="text-xs tracking-[0.18em] uppercase" style={{ color: "rgba(232,224,208,0.2)" }}>
              Est. 2019
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.88, ease: EASE }}
          className="my-5 md:my-7"
          style={{ height: "1px", background: "linear-gradient(to right, rgba(130,80,210,0.45), rgba(210,95,140,0.3), rgba(70,165,120,0.22), transparent)" }}
        />

        {/* Subtitle row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.05, ease: EASE }}
            className="text-[11px] md:text-xs tracking-[0.12em] md:tracking-[0.16em] uppercase"
            style={{ color: "rgba(232,224,208,0.35)", fontFamily: "var(--font-dm-sans)" }}
          >
            Fotografía Documental · Arte Contemporáneo · Movimientos Sociales
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.25, ease: EASE }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 text-[11px] md:text-xs tracking-[0.18em] uppercase group"
              style={{ color: "rgba(232,224,208,0.45)", fontFamily: "var(--font-dm-sans)" }}
            >
              Ver Trabajo
              <span
                className="block transition-all duration-500 group-hover:translate-x-1"
                style={{ width: "36px", height: "1px", background: "linear-gradient(to right, rgba(130,80,210,0.7), rgba(210,95,140,0.5))" }}
              />
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: "1px",
            height: "52px",
            background: "linear-gradient(to bottom, transparent, rgba(130,80,210,0.55), rgba(210,95,140,0.3))",
          }}
        />
      </motion.div>
    </section>
  );
}

function Statement() {
  return (
    <section className={`py-16 md:py-52 ${PX}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          <FadeIn className="hidden md:block md:col-span-1" direction="none">
            <p className="font-display text-lg" style={{ color: "rgba(130,80,210,0.5)" }}>
              I.
            </p>
          </FadeIn>

          <div className="md:col-span-9 md:col-start-2">
            <FadeIn delay={0.1}>
              <p
                className="font-display leading-tight"
                style={{
                  fontSize: "clamp(24px, 3.8vw, 50px)",
                  color: "#e8e0d0",
                  fontWeight: 300,
                }}
              >
                Fotógrafa documental, artista visual y licenciada en Artes
                Visuales por el Centro Morelense de las Artes.
              </p>
            </FadeIn>
            <FadeIn delay={0.28}>
              <p
                className="mt-8 md:mt-10 text-sm md:text-base leading-7"
                style={{ color: "rgba(232,224,208,0.35)", fontFamily: "var(--font-dm-sans)", maxWidth: "480px" }}
              >
                Su trabajo cruza el feminismo, la memoria colectiva y la
                documentación de movimientos sociales desde Morelos, México.
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedProjects() {
  const projects = getFeaturedProjects();

  return (
    <section className={`py-14 md:py-44 ${PX}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-14 md:mb-20">
          <FadeIn>
            <p
              className="text-[10px] md:text-xs tracking-[0.25em] uppercase"
              style={{ color: "rgba(232,224,208,0.25)", fontFamily: "var(--font-dm-sans)" }}
            >
              Trabajo Seleccionado
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Link
              href="/projects"
              className="text-[10px] md:text-xs tracking-[0.18em] uppercase link-hover"
              style={{ color: "rgba(232,224,208,0.35)", fontFamily: "var(--font-dm-sans)" }}
            >
              Ver todos →
            </Link>
          </FadeIn>
        </div>

        {/* List */}
        <StaggerContainer>
          {projects.map((project, i) => (
            <motion.div key={project.slug} variants={staggerItem}>
              <Link href={`/projects/${project.slug}`} className="block group">
                <div
                  className="py-10 md:py-14 border-t transition-all duration-500"
                  style={{ borderColor: "rgba(255,255,255,0.06)" }}
                >
                  <div className="flex items-start justify-between gap-4">
                    {/* Left */}
                    <div className="flex gap-4 md:gap-6 items-start min-w-0">
                      {/* Index */}
                      <span
                        className="text-xs pt-1 flex-shrink-0"
                        style={{ color: "rgba(130,80,210,0.6)", fontFamily: "var(--font-dm-sans)" }}
                      >
                        0{i + 1}
                      </span>

                      {/* Title block */}
                      <div className="min-w-0">
                        <h3
                          className="font-display leading-tight mb-1.5"
                          style={{
                            fontSize: "clamp(26px, 4vw, 56px)",
                            color: "#e8e0d0",
                            fontWeight: 300,
                          }}
                        >
                          {project.title}
                          {project.titleLine2 && (
                            <span style={{ color: "rgba(232,224,208,0.4)", fontStyle: "italic" }}>
                              {" "}{project.titleLine2}
                            </span>
                          )}
                        </h3>
                        <p
                          className="text-[10px] md:text-xs tracking-[0.14em] uppercase"
                          style={{ color: "rgba(140,95,210,0.5)", fontFamily: "var(--font-dm-sans)" }}
                        >
                          {project.category}
                        </p>
                        {/* Description — show on md+ */}
                        <p
                          className="hidden md:block text-sm leading-7 mt-3 max-w-lg"
                          style={{ color: "rgba(232,224,208,0.32)" }}
                        >
                          {project.shortDescription}
                        </p>
                      </div>
                    </div>

                    {/* Right — year + arrow */}
                    <div className="flex flex-col items-end justify-between flex-shrink-0 self-stretch">
                      <span
                        className="text-[10px] md:text-xs"
                        style={{ color: "rgba(232,224,208,0.2)", fontFamily: "var(--font-dm-sans)" }}
                      >
                        {project.year}
                      </span>
                      <span
                        className="text-lg md:text-2xl transition-transform duration-500 group-hover:translate-x-1.5"
                        style={{ color: "rgba(232,224,208,0.15)" }}
                      >
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
          <div style={{ height: "1px", background: "rgba(255,255,255,0.06)" }} />
        </StaggerContainer>
      </div>
    </section>
  );
}

function AboutTeaser() {
  return (
    <section className={`py-14 md:py-48 ${PX}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          {/* Portrait */}
          <FadeIn direction="left">
            <div className="purple-shadow relative overflow-hidden" style={{ aspectRatio: "4/5" }}>
              <Image
                src={portraitSrc}
                alt="Karlita Rodríguez"
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
                placeholder="blur"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </FadeIn>

          {/* Text */}
          <div className="flex flex-col gap-6 md:gap-8">
            <FadeIn delay={0.1}>
              <p className="text-[10px] md:text-xs tracking-[0.28em] uppercase" style={{ color: "rgba(232,224,208,0.22)", fontFamily: "var(--font-dm-sans)" }}>
                Sobre mí
              </p>
            </FadeIn>

            <FadeIn delay={0.18}>
              <h2
                className="font-display leading-tight"
                style={{ fontSize: "clamp(32px, 4.5vw, 60px)", color: "#e8e0d0", fontWeight: 300 }}
              >
                He sido fotógrafa
                <br />
                <span style={{ color: "rgba(210,110,155,0.55)", fontStyle: "italic" }}>
                  desde 2019.
                </span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.26}>
              <p
                className="text-sm md:text-base leading-7 md:leading-8"
                style={{ color: "rgba(232,224,208,0.45)", fontFamily: "var(--font-dm-sans)" }}
              >
                Soy licenciada en Artes Visuales y mi pasión es la fotografía
                documental de movimientos sociales. Creo que el arte es una
                forma de resistencia, de memoria y de justicia.
              </p>
            </FadeIn>

            <FadeIn delay={0.34}>
              <Link
                href="/about"
                className="inline-flex items-center gap-4 mt-2 text-xs tracking-[0.18em] uppercase group"
                style={{ color: "rgba(232,224,208,0.45)", fontFamily: "var(--font-dm-sans)" }}
              >
                Conocer más
                <span
                  className="block group-hover:w-14 transition-all duration-500"
                  style={{ width: "28px", height: "1px", background: "rgba(232,224,208,0.3)" }}
                />
              </Link>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

function NoMeChiflesHighlight() {
  return (
    <section
      className={`py-14 md:py-52 ${PX}`}
      style={{ background: "linear-gradient(to bottom, transparent, rgba(130,80,210,0.04) 30%, rgba(130,80,210,0.04) 70%, transparent)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-center">
          {/* Left */}
          <div className="md:col-span-5">
            <FadeIn>
              <p className="text-[10px] md:text-xs tracking-[0.25em] uppercase mb-5" style={{ color: "rgba(232,224,208,0.22)", fontFamily: "var(--font-dm-sans)" }}>
                Proyecto Destacado
              </p>
              <h2
                className="font-display leading-none mb-4"
                style={{ fontSize: "clamp(44px, 8vw, 96px)", color: "#e8e0d0", fontWeight: 300 }}
              >
                No Me<br />
                <span style={{ fontStyle: "italic", color: "rgba(232,224,208,0.5)" }}>Chifles</span>
              </h2>
              <p className="text-[10px] md:text-xs tracking-[0.18em] uppercase mb-7" style={{ color: "rgba(140,95,210,0.65)", fontFamily: "var(--font-dm-sans)" }}>
                Acoso Callejero en Morelos · 2023
              </p>
              <Link
                href="/projects/no-me-chifles"
                className="inline-flex items-center gap-4 text-xs tracking-[0.18em] uppercase group"
                style={{ color: "rgba(232,224,208,0.45)", fontFamily: "var(--font-dm-sans)" }}
              >
                Explorar proyecto
                <span
                  className="block group-hover:w-14 transition-all duration-500"
                  style={{ width: "32px", height: "1px", background: "rgba(232,224,208,0.3)" }}
                />
              </Link>
            </FadeIn>
          </div>

          {/* Right */}
          <div className="md:col-span-6 md:col-start-7">
            <FadeIn delay={0.15} direction="right">
              <p
                className="text-sm md:text-base leading-7 md:leading-8 mb-10"
                style={{ color: "rgba(232,224,208,0.38)", fontFamily: "var(--font-dm-sans)" }}
              >
                Un proyecto artístico y documental sobre el acoso callejero
                en Morelos. Investigación, estadísticas, testimonios e
                intervención urbana que denuncia y visibiliza una realidad
                que afecta a millones de mujeres.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 md:gap-10">
                {[
                  { v: "77%", l: "Acoso en escuela u hogar" },
                  { v: "71%", l: "Desde los 13-15 años" },
                  { v: "90%", l: "Culpabilizada por vestimenta" },
                ].map((s) => (
                  <div key={s.v}>
                    <p
                      className="font-display mb-1.5"
                      style={{ fontSize: "clamp(20px, 5.5vw, 44px)", color: "rgba(130,80,210,0.75)", fontWeight: 300 }}
                    >
                      {s.v}
                    </p>
                    <p
                      className="text-[10px] md:text-xs leading-4"
                      style={{ color: "rgba(232,224,208,0.28)", fontFamily: "var(--font-dm-sans)" }}
                    >
                      {s.l}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCTA() {
  return (
    <section className={`py-16 md:py-56 ${PX}`} style={{ position: "relative", overflow: "hidden" }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(130,80,210,0.06) 0%, transparent 70%)" }} />
      <div className="max-w-7xl mx-auto text-center" style={{ position: "relative" }}>
        <FadeIn>
          <p className="text-[10px] md:text-xs tracking-[0.25em] uppercase mb-7" style={{ color: "rgba(232,224,208,0.2)", fontFamily: "var(--font-dm-sans)" }}>
            Contacto
          </p>
          <h2
            className="font-display leading-tight mb-8 md:mb-10"
            style={{ fontSize: "clamp(32px, 5.5vw, 76px)", color: "#e8e0d0", fontWeight: 300 }}
          >
            ¿Tienes un proyecto
            <br />
            <span style={{ fontStyle: "italic", color: "rgba(232,224,208,0.45)" }}>en mente?</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.18}>
          <a
            href="mailto:karlaqrc201200@gmail.com"
            className="inline-block font-display text-lg md:text-xl link-hover"
            style={{ color: "rgba(232,224,208,0.55)" }}
          >
            karlaqrc201200@gmail.com
          </a>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-10 md:mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center gap-4 text-xs tracking-[0.22em] uppercase group"
              style={{ color: "rgba(232,224,208,0.4)", fontFamily: "var(--font-dm-sans)" }}
            >
              Ir a Contacto
              <span
                className="block transition-all duration-500 group-hover:translate-x-1.5"
                style={{ width: "36px", height: "1px", background: "currentColor" }}
              />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Statement />
      <FeaturedProjects />
      <AboutTeaser />
      <NoMeChiflesHighlight />
      <ContactCTA />
    </>
  );
}

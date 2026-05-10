"use client";

import Image from "next/image";
import { FadeIn, StaggerContainer, staggerItem } from "@/components/FadeIn";
import { motion } from "framer-motion";
import portraitSrc from "./retrato-principal.jpeg";

const experience = [
  {
    org: "México en Ti",
    role: "Fotógrafa y Videógrafa",
    period: "2024 — Actualidad",
    desc: "Fotografía y video de producto para redes sociales. Edición y publicación en medios digitales.",
  },
  {
    org: "Proyecto Joe T. Hodo",
    role: "Fotógrafa y Redes Sociales",
    period: "2024 — 2025",
    desc: "Creación de contenido, fotografía de eventos, propuesta de movimientos sociales.",
  },
  {
    org: "Facultad de Artes, UAEM",
    role: "Asistente de Diseño y Fotografía",
    period: "2023 — 2024",
    desc: "Fotografía de eventos, diseño de flyers, invitaciones y reconocimientos. Archivo histórico.",
  },
  {
    org: "Casa Senit Fisioterapia",
    role: "Diseño y Redes Sociales",
    period: "2023",
    desc: "Diseño y publicación de contenido visual. Recepción y seguimiento de pacientes.",
  },
  {
    org: "Secretaría de Turismo y Cultura de Morelos",
    role: "Practicante — Fotografía y Redes Sociales",
    period: "2022 — 2023",
    desc: "Fotografía y video de eventos. Edición y publicación en medios digitales.",
  },
];

const formation = [
  {
    title: "Licenciatura en Artes Visuales",
    inst: "Centro Morelense de las Artes",
    period: "2019 — 2023",
  },
  {
    title: "Diplomado en Fotografía",
    inst: "Centro Morelense de las Artes",
    period: "2018 — 2019",
  },
];

const skills = [
  "Fotografía Documental",
  "Fotografía de Eventos",
  "Fotografía Creativa",
  "Video y Edición",
  "Adobe Photoshop",
  "Adobe Lightroom",
  "Adobe Premiere",
  "Redes Sociales",
  "Diseño Visual",
  "Paquetería Office",
  "Cámara Profesional",
  "Documentación Social",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-end px-6 md:px-12 pb-16 md:pb-24 pt-32 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 50% 40% at 80% 70%, rgba(130,80,210,0.06) 0%, transparent 70%), radial-gradient(ellipse 35% 30% at 15% 60%, rgba(210,95,140,0.04) 0%, transparent 65%)" }}
        />
        <div className="max-w-7xl mx-auto w-full">
          <FadeIn>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-8"
              style={{ color: "rgba(232,224,208,0.25)", fontFamily: "var(--font-dm-sans)" }}
            >
              Sobre mí
            </p>
          </FadeIn>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-display leading-none"
              style={{
                fontSize: "clamp(56px, 12vw, 170px)",
                color: "#e8e0d0",
                fontWeight: 300,
              }}
            >
              Artista
            </motion.h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-8 overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="font-display leading-none"
                style={{
                  fontSize: "clamp(56px, 12vw, 170px)",
                  color: "rgba(232,224,208,0.3)",
                  fontWeight: 300,
                  fontStyle: "italic",
                }}
              >
                Visual
              </motion.h1>
            </div>
            <div className="md:col-span-4 flex items-end pb-3">
              <FadeIn delay={0.8}>
                <p
                  className="text-sm leading-7"
                  style={{ color: "rgba(232,224,208,0.4)", fontFamily: "var(--font-dm-sans)" }}
                >
                  Fotógrafa documental,
                  <br />
                  Morelos, México.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="px-6 md:px-12">
        <div
          className="max-w-7xl mx-auto"
          style={{ height: "1px", background: "linear-gradient(to right, rgba(130,80,210,0.4), rgba(210,95,140,0.25), transparent)" }}
        />
      </div>

      {/* Bio section */}
      <section className="py-32 md:py-52 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-28 items-start">
            {/* Portrait */}
            <FadeIn direction="left">
              <div className="purple-shadow relative aspect-[3/4] sticky top-24 overflow-hidden">
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

            {/* Text content */}
            <div className="flex flex-col gap-10">
              <FadeIn delay={0.1}>
                <p
                  className="font-display text-2xl md:text-3xl leading-snug"
                  style={{ color: "#e8e0d0", fontWeight: 300 }}
                >
                  Soy una mujer creativa, organizada y responsable. Creo en
                  el aprendizaje constante y en el poder del arte como
                  herramienta de transformación social.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div
                  className="w-16"
                  style={{ height: "1px", background: "linear-gradient(to right, rgba(130,80,210,0.6), rgba(210,95,140,0.45), rgba(70,165,120,0.35))" }}
                />
              </FadeIn>

              <FadeIn delay={0.25}>
                <p
                  className="text-base leading-8"
                  style={{ color: "rgba(232,224,208,0.45)", fontFamily: "var(--font-dm-sans)" }}
                >
                  He sido fotógrafa desde 2019 manejando las líneas de foto
                  documental, de evento y creativa. Soy licenciada en Artes
                  Visuales y mi pasión es la fotografía documental de
                  movimientos sociales.
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <p
                  className="text-base leading-8"
                  style={{ color: "rgba(232,224,208,0.45)", fontFamily: "var(--font-dm-sans)" }}
                >
                  Mi trabajo está profundamente relacionado con el feminismo,
                  la documentación urbana, la memoria y la narrativa visual.
                  Creo que fotografiar es un acto político de resistencia y
                  de justicia.
                </p>
              </FadeIn>

              <FadeIn delay={0.35}>
                <p
                  className="text-base leading-8"
                  style={{ color: "rgba(232,224,208,0.45)", fontFamily: "var(--font-dm-sans)" }}
                >
                  Aprender de otras personas es mi fuerte. Busco siempre ser
                  multidisciplinaria: fotografía, video, diseño visual, redes
                  sociales y gestión cultural forman parte de mi práctica.
                </p>
              </FadeIn>

              {/* Language tags */}
              <FadeIn delay={0.4}>
                <div className="flex gap-3 flex-wrap pt-2">
                  {["Español (Nativo)", "Inglés (Intermedio)"].map((lang) => (
                    <span
                      key={lang}
                      className="text-xs tracking-[0.1em] uppercase px-3 py-1.5 border"
                      style={{
                        borderColor: "rgba(255,255,255,0.08)",
                        color: "rgba(232,224,208,0.35)",
                        fontFamily: "var(--font-dm-sans)",
                      }}
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Formation */}
      <section
        className="py-32 md:py-48 px-6 md:px-12 border-t"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <FadeIn className="md:col-span-3">
              <p
                className="text-xs tracking-[0.25em] uppercase"
                style={{ color: "rgba(232,224,208,0.25)", fontFamily: "var(--font-dm-sans)" }}
              >
                Formación
              </p>
            </FadeIn>
            <div className="md:col-span-8">
              <StaggerContainer className="space-y-0">
                {formation.map((item) => (
                  <motion.div
                    key={item.title}
                    variants={staggerItem}
                    className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8 py-8 md:py-12 border-b"
                    style={{ borderColor: "rgba(255,255,255,0.05)" }}
                  >
                    <div>
                      <h3
                        className="font-display text-xl md:text-2xl mb-1"
                        style={{ color: "#e8e0d0", fontWeight: 300 }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-sm"
                        style={{ color: "rgba(232,224,208,0.4)", fontFamily: "var(--font-dm-sans)" }}
                      >
                        {item.inst}
                      </p>
                    </div>
                    <div className="md:text-right">
                      <p
                        className="text-xs tracking-[0.15em] uppercase"
                        style={{ color: "rgba(232,224,208,0.25)", fontFamily: "var(--font-dm-sans)" }}
                      >
                        {item.period}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section
        className="py-32 md:py-48 px-6 md:px-12 border-t"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <FadeIn className="md:col-span-3">
              <p
                className="text-xs tracking-[0.25em] uppercase"
                style={{ color: "rgba(232,224,208,0.25)", fontFamily: "var(--font-dm-sans)" }}
              >
                Experiencia
              </p>
            </FadeIn>
            <div className="md:col-span-8">
              <StaggerContainer className="space-y-0">
                {experience.map((item) => (
                  <motion.div
                    key={item.org}
                    variants={staggerItem}
                    className="py-10 md:py-14 border-b grid grid-cols-1 md:grid-cols-12 gap-4"
                    style={{ borderColor: "rgba(255,255,255,0.05)" }}
                  >
                    <div className="md:col-span-8">
                      <p
                        className="font-display text-xl md:text-2xl mb-1"
                        style={{ color: "#e8e0d0", fontWeight: 300 }}
                      >
                        {item.org}
                      </p>
                      <p
                        className="text-xs tracking-[0.12em] uppercase mb-3"
                        style={{ color: "rgba(140,95,210,0.55)", fontFamily: "var(--font-dm-sans)" }}
                      >
                        {item.role}
                      </p>
                      <p
                        className="text-sm leading-6"
                        style={{ color: "rgba(232,224,208,0.35)", fontFamily: "var(--font-dm-sans)" }}
                      >
                        {item.desc}
                      </p>
                    </div>
                    <div className="md:col-span-4 md:text-right">
                      <p
                        className="text-xs tracking-[0.15em] uppercase"
                        style={{ color: "rgba(232,224,208,0.2)", fontFamily: "var(--font-dm-sans)" }}
                      >
                        {item.period}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        className="py-32 md:py-48 px-6 md:px-12 border-t"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <FadeIn className="md:col-span-3">
              <p
                className="text-xs tracking-[0.25em] uppercase"
                style={{ color: "rgba(232,224,208,0.25)", fontFamily: "var(--font-dm-sans)" }}
              >
                Habilidades
              </p>
            </FadeIn>
            <StaggerContainer className="md:col-span-8 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <motion.span
                  key={skill}
                  variants={staggerItem}
                  className="skill-tag text-sm px-4 py-2"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>
    </>
  );
}

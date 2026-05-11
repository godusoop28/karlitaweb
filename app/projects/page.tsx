"use client";

import Link from "next/link";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, staggerItem } from "@/components/FadeIn";
import { projects } from "@/lib/projects";
import noMeChiflesImg from "@/app/gallery/no-me-chifles.jpeg";
import g3 from "@/app/gallery/3.jpeg";
import g8 from "@/app/gallery/8.jpeg";

const coverPhoto: Record<string, StaticImageData> = {
  "no-me-chifles": noMeChiflesImg,
  "8-de-marzo": g3,
  "despenalizacion-aborto": g8,
};

const EASE = [0.22, 1, 0.36, 1] as const;

export default function ProjectsPage() {
  return (
    <>
      {/* Header */}
      <section className="page-header-offset pb-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="overflow-hidden mb-3">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, delay: 0.1, ease: EASE }}
              className="font-display leading-none"
              style={{
                fontSize: "clamp(56px, 11vw, 140px)",
                color: "#e8e0d0",
                fontWeight: 300,
              }}
            >
              Proyectos
            </motion.h1>
          </div>
          <FadeIn delay={0.3}>
            <div className="flex gap-1.5 mt-4 mb-4">
              <div style={{ width: "48px", height: "1px", background: "rgba(130,80,210,0.55)" }} />
              <div style={{ width: "24px", height: "1px", background: "rgba(210,95,140,0.45)" }} />
              <div style={{ width: "14px", height: "1px", background: "rgba(70,165,120,0.4)" }} />
            </div>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p
              className="text-sm md:text-base leading-7 mt-4"
              style={{ color: "rgba(232,224,208,0.35)", fontFamily: "var(--font-dm-sans)", maxWidth: "480px" }}
            >
              Trabajo documental, social y artístico. Proyectos que nacen
              de la investigación, la escucha y la necesidad de visibilizar.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Projects list */}
      <section className="px-6 md:px-12 pb-32">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer>
            {projects.map((project, i) => (
              <motion.div key={project.slug} variants={staggerItem}>
                <Link href={`/projects/${project.slug}`} className="block group">
                  <div
                    className="project-item grid grid-cols-12 gap-4 md:gap-8 py-10 md:py-14 border-b"
                    style={{ borderColor: "rgba(255,255,255,0.07)" }}
                  >
                    {/* Number */}
                    <div className="col-span-1 flex items-start pt-2">
                      <span
                        className="text-xs"
                        style={{ color: "rgba(130,80,210,0.65)", fontFamily: "var(--font-dm-sans)" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Main content */}
                    <div className="col-span-7 md:col-span-6 flex flex-col justify-center">
                      {/* Category tag */}
                      <p
                        className="text-xs tracking-[0.2em] uppercase mb-3"
                        style={{ color: "rgba(140,95,210,0.6)", fontFamily: "var(--font-dm-sans)" }}
                      >
                        {project.category}
                      </p>

                      {/* Title */}
                      <h2
                        className="font-display leading-tight mb-3 transition-colors duration-500"
                        style={{
                          fontSize: "clamp(28px, 4vw, 60px)",
                          color: "#e8e0d0",
                          fontWeight: 300,
                        }}
                      >
                        {project.title}
                        {project.titleLine2 && (
                          <span
                            className="block"
                            style={{ color: "rgba(232,224,208,0.4)", fontStyle: "italic" }}
                          >
                            {project.titleLine2}
                          </span>
                        )}
                      </h2>

                      <p
                        className="text-sm leading-7 mt-2 hidden md:block"
                        style={{ color: "rgba(232,224,208,0.35)", fontFamily: "var(--font-dm-sans)", maxWidth: "420px" }}
                      >
                        {project.shortDescription}
                      </p>

                      {/* Year on mobile */}
                      <span
                        className="text-xs mt-3 md:hidden"
                        style={{ color: "rgba(232,224,208,0.2)", fontFamily: "var(--font-dm-sans)" }}
                      >
                        {project.year}
                      </span>
                    </div>

                    {/* Thumbnail */}
                    <div className="col-span-4 md:col-span-4 flex items-center">
                      {coverPhoto[project.slug] && (
                        <div
                          className="w-full overflow-hidden"
                          style={{
                            position: "relative",
                            aspectRatio: "3/4",
                            borderRadius: "2px",
                            boxShadow: "0 8px 32px rgba(130,80,210,0.12), 0 2px 12px rgba(0,0,0,0.5)",
                          }}
                        >
                          <Image
                            src={coverPhoto[project.slug]}
                            alt={project.title}
                            fill
                            sizes="(max-width: 768px) 33vw, 25vw"
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          />
                        </div>
                      )}
                    </div>

                    {/* Right side — year + arrow (desktop only) */}
                    <div className="hidden md:flex md:col-span-1 flex-col items-end justify-between">
                      <span
                        className="text-xs text-right"
                        style={{ color: "rgba(232,224,208,0.2)", fontFamily: "var(--font-dm-sans)" }}
                      >
                        {project.year}
                      </span>

                      <div className="flex items-center gap-2">
                        <span
                          className="text-2xl transition-all duration-500 group-hover:translate-x-2"
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
          </StaggerContainer>

          {/* Bottom border */}
          <div
            style={{ height: "1px", background: "rgba(255,255,255,0.07)" }}
          />
        </div>
      </section>

    </>
  );
}

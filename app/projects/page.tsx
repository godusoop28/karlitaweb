"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, staggerItem } from "@/components/FadeIn";
import { projects } from "@/lib/projects";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function ProjectsPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-44 md:pt-64 pb-16 px-6 md:px-12">
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
                    className="grid grid-cols-12 gap-4 md:gap-8 py-16 md:py-24 border-b transition-all duration-500"
                    style={{ borderColor: "rgba(255,255,255,0.07)" }}
                  >
                    {/* Number */}
                    <div className="col-span-1 flex items-start pt-2">
                      <span
                        className="text-xs"
                        style={{ color: "rgba(130,80,210,0.38)", fontFamily: "var(--font-dm-sans)" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Main content */}
                    <div className="col-span-10 md:col-span-7">
                      {/* Category tag */}
                      <p
                        className="text-xs tracking-[0.2em] uppercase mb-4"
                        style={{ color: "rgba(140,95,210,0.6)", fontFamily: "var(--font-dm-sans)" }}
                      >
                        {project.category}
                      </p>

                      {/* Title */}
                      <h2
                        className="font-display leading-tight mb-3 transition-colors duration-500"
                        style={{
                          fontSize: "clamp(36px, 5vw, 72px)",
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
                        className="text-sm md:text-base leading-7 mt-4"
                        style={{ color: "rgba(232,224,208,0.35)", fontFamily: "var(--font-dm-sans)", maxWidth: "520px" }}
                      >
                        {project.shortDescription}
                      </p>
                    </div>

                    {/* Right side — year + arrow */}
                    <div className="col-span-1 md:col-span-4 flex flex-col items-end justify-between">
                      <span
                        className="text-xs text-right"
                        style={{ color: "rgba(232,224,208,0.2)", fontFamily: "var(--font-dm-sans)" }}
                      >
                        {project.year}
                      </span>

                      <div className="flex items-center gap-2">
                        <span
                          className="text-xs tracking-[0.15em] uppercase hidden md:block transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                          style={{ color: "rgba(232,224,208,0.4)", fontFamily: "var(--font-dm-sans)" }}
                        >
                          Ver proyecto
                        </span>
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

"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/FadeIn";

const EASE = [0.22, 1, 0.36, 1] as const;

const contactItems = [
  {
    label: "Email",
    value: "karlaqrc201200@gmail.com",
    href: "mailto:karlaqrc201200@gmail.com",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-end px-6 md:px-12 pb-24 md:pb-32 pt-36 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 20% 80%, rgba(130,80,210,0.06) 0%, transparent 65%), radial-gradient(ellipse 40% 35% at 85% 30%, rgba(210,95,140,0.04) 0%, transparent 60%)" }} />
        <div className="max-w-7xl mx-auto w-full" style={{ position: "relative" }}>
          <FadeIn>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-8"
              style={{ color: "rgba(232,224,208,0.2)", fontFamily: "var(--font-dm-sans)" }}
            >
              Contacto
            </p>
          </FadeIn>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: EASE }}
              className="font-display leading-none"
              style={{
                fontSize: "clamp(56px, 12vw, 160px)",
                color: "#e8e0d0",
                fontWeight: 300,
              }}
            >
              Hablemos.
            </motion.h1>
          </div>

          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.1, delay: 0.8, ease: EASE }}
            className="my-8"
            style={{ height: "1px", background: "linear-gradient(to right, rgba(130,80,210,0.65), rgba(210,95,140,0.5), rgba(70,165,120,0.3), transparent)" }}
          />

          <FadeIn delay={0.9}>
            <p
              className="text-base leading-8 max-w-md"
              style={{ color: "rgba(232,224,208,0.4)", fontFamily: "var(--font-dm-sans)" }}
            >
              ¿Tienes un proyecto, una idea o una colaboración en mente?
              Escríbeme. Siempre estoy abierta a nuevas experiencias.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact info */}
      <section
        className="py-28 md:py-44 px-6 md:px-12 border-t"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8 md:col-start-3">
              <FadeIn>
                <p
                  className="text-xs tracking-[0.3em] uppercase mb-14"
                  style={{ color: "rgba(232,224,208,0.2)", fontFamily: "var(--font-dm-sans)" }}
                >
                  Información de contacto
                </p>
              </FadeIn>

              <div className="space-y-16 md:space-y-20">
                {contactItems.map((item, i) => (
                  <FadeIn key={item.label} delay={i * 0.1}>
                    <div>
                      <p
                        className="text-xs tracking-[0.2em] uppercase mb-3"
                        style={{ color: "rgba(140,95,210,0.4)", fontFamily: "var(--font-dm-sans)" }}
                      >
                        {item.label}
                      </p>
                      <a
                        href={item.href}
                        className="font-display link-hover block w-fit"
                        style={{ fontSize: "clamp(24px, 3.5vw, 48px)", color: "#e8e0d0", fontWeight: 300 }}
                      >
                        {item.value}
                      </a>
                    </div>
                  </FadeIn>
                ))}

                <FadeIn delay={0.2}>
                  <div>
                    <p
                      className="text-xs tracking-[0.2em] uppercase mb-3"
                      style={{ color: "rgba(232,224,208,0.2)", fontFamily: "var(--font-dm-sans)" }}
                    >
                      Ubicación
                    </p>
                    <p
                      className="font-display"
                      style={{ fontSize: "clamp(24px, 3.5vw, 48px)", color: "rgba(232,224,208,0.5)", fontWeight: 300 }}
                    >
                      Morelos, México
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial closing */}
      <section
        className="py-32 md:py-48 px-6 md:px-12 border-t text-center"
        style={{ borderColor: "rgba(255,255,255,0.04)" }}
      >
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="flex justify-center gap-1.5 mb-10">
              <div style={{ width: "14px", height: "1px", background: "rgba(70,165,120,0.4)" }} />
              <div style={{ width: "24px", height: "1px", background: "rgba(210,95,140,0.45)" }} />
              <div style={{ width: "48px", height: "1px", background: "rgba(130,80,210,0.55)" }} />
            </div>
            <blockquote
              className="font-display leading-tight"
              style={{
                fontSize: "clamp(24px, 4vw, 52px)",
                color: "rgba(232,224,208,0.2)",
                fontWeight: 300,
                fontStyle: "italic",
              }}
            >
              &ldquo;Aprender de otras personas es mi fuerte.&rdquo;
            </blockquote>
            <p
              className="text-xs tracking-[0.2em] uppercase mt-6"
              style={{ color: "rgba(232,224,208,0.12)", fontFamily: "var(--font-dm-sans)" }}
            >
              — Karlita Rodríguez
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import logoSrc from "@/app/logo.png";

const navLinks = [
  { href: "/projects", label: "Proyectos" },
  { href: "/gallery", label: "Galería" },
  { href: "/about", label: "Sobre mí" },
  { href: "/contact", label: "Contacto" },
];

// PNG 1536×1024 fondo blanco, líneas mauve oscuro.
// grayscale neutraliza el color.
// invert convierte fondo blanco → negro (invisible sobre #0a0a0a) y líneas → blancas.
// brightness(1.8) contrast(1.15) empuja las líneas a blanco puro y nítido.
const LOGO_FILTER = "grayscale(1) invert(1) brightness(1.8) contrast(1.15)";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Umbral bajo: la barra se vuelve opaca apenas el usuario empieza a scrollear.
    // Esto evita que el contenido de la página se lea detrás del nav.
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          // background siempre tiene un mínimo de opacidad para que el nav sea legible.
          // El blur activo siempre evita que el texto de la página se mezcle con el nav.
          background: scrolled ? "rgba(10,10,10,0.96)" : "rgba(10,10,10,0.15)",
          backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "blur(10px)",
          WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : "blur(10px)",
          borderBottom: scrolled
            ? "1px solid rgba(130,80,210,0.18)"
            : "1px solid rgba(255,255,255,0.02)",
        }}
      >
        <div className="flex items-center justify-between px-6 md:px-10 lg:px-14 py-3">

          {/* ── Logo — izquierda ──
              Container 3:2 (igual que el PNG 1536×1024) → PNG llena el frame perfectamente,
              sin espacios vacíos ni bordes.
              Desktop 220×147px: la ilustración ocupa ~138px de ancho — presencia real.
              Mobile  130×87px : legible y elegante sin dominar la barra. */}
          <Link href="/" className="relative z-10 flex-shrink-0 block group">
            {/* Mobile */}
            <div
              className="relative md:hidden"
              style={{ width: "130px", height: "87px" }}
            >
              <Image
                src={logoSrc}
                alt="Karlita Rodríguez"
                fill
                style={{
                  objectFit: "contain",
                  objectPosition: "left center",
                  filter: LOGO_FILTER,
                  transition: "opacity 0.4s ease",
                }}
                priority
              />
            </div>
            {/* Desktop */}
            <div
              className="relative hidden md:block"
              style={{ width: "170px", height: "113px" }}
            >
              <Image
                src={logoSrc}
                alt="Karlita Rodríguez"
                fill
                style={{
                  objectFit: "contain",
                  objectPosition: "left center",
                  filter: LOGO_FILTER,
                  transition: "opacity 0.4s ease",
                }}
                priority
              />
            </div>
          </Link>

          {/* ── Nav desktop — derecha ── */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-xs tracking-[0.2em] uppercase transition-colors duration-300"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    color: active ? "#e8e0d0" : "rgba(232,224,208,0.5)",
                  }}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0"
                      style={{ height: "1px", background: "rgba(232,224,208,0.45)" }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* ── Hamburger mobile — derecha ── */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative z-10 flex flex-col justify-center gap-[6px] p-2 -mr-2"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="block h-px"
              style={{ width: "22px", background: "#e8e0d0", transformOrigin: "center" }}
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
              className="block h-px"
              style={{ width: "22px", background: "#e8e0d0" }}
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="block h-px"
              style={{ width: "22px", background: "#e8e0d0", transformOrigin: "center" }}
            />
          </button>
        </div>
      </motion.header>

      {/* ── Menú fullscreen mobile ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center"
            style={{ background: "#09090b" }}
          >
            {/* Logo en el menú — alineado a la izquierda como en la barra */}
            <div className="absolute top-4 left-6">
              <div className="relative" style={{ width: "110px", height: "73px" }}>
                <Image
                  src={logoSrc}
                  alt="Karlita Rodríguez"
                  fill
                  style={{ objectFit: "contain", objectPosition: "left center", filter: LOGO_FILTER }}
                />
              </div>
            </div>

            <nav className="flex flex-col items-center gap-5">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={link.href}
                    className="font-display block text-center"
                    style={{
                      fontSize: "clamp(36px, 10vw, 56px)",
                      color: pathname === link.href ? "#e8e0d0" : "rgba(232,224,208,0.35)",
                      fontWeight: 300,
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="absolute bottom-10 flex flex-col items-center gap-2 text-center"
            >
              <p
                className="text-xs tracking-[0.22em] uppercase"
                style={{ color: "rgba(232,224,208,0.2)", fontFamily: "var(--font-dm-sans)" }}
              >
                Artista Visual · Morelos, México
              </p>
              <a
                href="mailto:karlaqrc201200@gmail.com"
                className="text-xs"
                style={{ color: "rgba(232,224,208,0.18)", fontFamily: "var(--font-dm-sans)" }}
              >
                karlaqrc201200@gmail.com
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

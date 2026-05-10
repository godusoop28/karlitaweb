import Link from "next/link";
import Image from "next/image";
import logoSrc from "@/app/logo.png";

// ── Iconos SVG inline ─────────────────────────────────────────────────────────

function IconMail() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2.5" />
      <path d="m2 8 10 6.5L22 8" />
    </svg>
  );
}

function IconWhatsApp() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

function IconArrow() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17 17 7M17 7H7M17 7v10" />
    </svg>
  );
}

// ── Data ──────────────────────────────────────────────────────────────────────

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/projects", label: "Proyectos" },
  { href: "/gallery", label: "Galería" },
  { href: "/about", label: "Sobre mí" },
  { href: "/contact", label: "Contacto" },
];

const projectLinks = [
  { href: "/projects/no-me-chifles", label: "No Me Chifles" },
  { href: "/projects/8-de-marzo", label: "8 de Marzo" },
  { href: "/projects/despenalizacion-aborto", label: "Por la Despenalización" },
];

// ── Component ─────────────────────────────────────────────────────────────────

export function Footer() {
  return (
    <footer
      className="mt-24 md:mt-40 border-t px-6 md:px-10 lg:px-14"
      style={{
        borderColor: "rgba(255,255,255,0.07)",
        background: "linear-gradient(to bottom, transparent, rgba(10,10,10,0.95))",
      }}
    >
      <div className="max-w-7xl mx-auto">

        {/* ── CTA editorial ── */}
        <div
          className="py-16 md:py-24 border-b"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        >
          {/* Color stripe */}
          <div className="flex gap-1.5 mb-10">
            <div style={{ width: "48px", height: "1px", background: "rgba(130,80,210,0.55)" }} />
            <div style={{ width: "24px", height: "1px", background: "rgba(210,95,140,0.45)" }} />
            <div style={{ width: "14px", height: "1px", background: "rgba(70,165,120,0.4)" }} />
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 md:gap-8">
            {/* Headline */}
            <h2
              className="font-display leading-[0.9] flex-shrink-0"
              style={{
                fontSize: "clamp(44px, 8vw, 108px)",
                color: "#e8e0d0",
                fontWeight: 300,
                letterSpacing: "-0.01em",
              }}
            >
              Trabajemos<br />
              <span style={{ color: "rgba(232,224,208,0.35)", fontStyle: "italic" }}>juntos.</span>
            </h2>

            {/* Contact buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:karlaqrc201200@gmail.com"
                className="footer-btn footer-btn-email flex items-center gap-3 px-5 py-3.5 border"
                style={{
                  borderColor: "rgba(255,255,255,0.1)",
                  color: "rgba(232,224,208,0.55)",
                  fontFamily: "var(--font-dm-sans)",
                }}
              >
                <span style={{ color: "rgba(130,80,210,0.7)" }}><IconMail /></span>
                <span className="text-sm tracking-wide">karlaqrc201200@gmail.com</span>
                <span className="footer-btn-arrow ml-1"><IconArrow /></span>
              </a>

              <a
                href="https://wa.me/527773749882"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-btn footer-btn-whatsapp flex items-center gap-3 px-5 py-3.5 border"
                style={{
                  borderColor: "rgba(255,255,255,0.1)",
                  color: "rgba(232,224,208,0.55)",
                  fontFamily: "var(--font-dm-sans)",
                }}
              >
                <span style={{ color: "rgba(70,165,120,0.7)" }}><IconWhatsApp /></span>
                <span className="text-sm tracking-wide">777 374 9882</span>
                <span className="footer-btn-arrow ml-1"><IconArrow /></span>
              </a>
            </div>
          </div>
        </div>

        {/* ── Links grid ── */}
        <div className="py-14 md:py-20 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">

          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="block mb-5">
              <div className="relative" style={{ height: "110px", width: "165px" }}>
                <Image
                  src={logoSrc}
                  alt="Karlita Rodríguez"
                  fill
                  style={{
                    objectFit: "contain",
                    objectPosition: "left center",
                    filter: "grayscale(1) invert(1) brightness(1.8) contrast(1.15)",
                  }}
                />
              </div>
            </Link>

            <p
              className="text-[10px] tracking-[0.22em] uppercase mb-4"
              style={{ color: "rgba(232,224,208,0.22)", fontFamily: "var(--font-dm-sans)" }}
            >
              Artista Visual · Fotógrafa Documental
            </p>

            <p
              className="text-sm leading-7 max-w-[260px]"
              style={{ color: "rgba(232,224,208,0.28)", fontFamily: "var(--font-dm-sans)" }}
            >
              Fotografía documental, movimientos sociales y arte contemporáneo
              desde Morelos, México.
            </p>
          </div>

          {/* Pages */}
          <div className="md:col-span-3 md:col-start-7">
            <p
              className="text-[10px] tracking-[0.25em] uppercase mb-6"
              style={{ color: "rgba(232,224,208,0.18)", fontFamily: "var(--font-dm-sans)" }}
            >
              Páginas
            </p>
            <nav className="flex flex-col gap-3.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm link-hover w-fit transition-colors duration-300"
                  style={{ color: "rgba(232,224,208,0.38)", fontFamily: "var(--font-dm-sans)" }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Projects */}
          <div className="md:col-span-3 md:col-start-10">
            <p
              className="text-[10px] tracking-[0.25em] uppercase mb-6"
              style={{ color: "rgba(232,224,208,0.18)", fontFamily: "var(--font-dm-sans)" }}
            >
              Proyectos
            </p>
            <nav className="flex flex-col gap-3.5">
              {projectLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm link-hover w-fit transition-colors duration-300"
                  style={{ color: "rgba(232,224,208,0.38)", fontFamily: "var(--font-dm-sans)" }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div style={{ height: "1px", background: "rgba(255,255,255,0.05)" }} />
        <div className="py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p
            className="text-xs"
            style={{ color: "rgba(232,224,208,0.16)", fontFamily: "var(--font-dm-sans)", letterSpacing: "0.07em" }}
          >
            © 2025 Karlita Rodríguez. Todos los derechos reservados.
          </p>
          <p
            className="text-xs"
            style={{ color: "rgba(232,224,208,0.1)", fontFamily: "var(--font-dm-sans)" }}
          >
            Lic. Artes Visuales · Centro Morelense de las Artes
          </p>
        </div>

      </div>
    </footer>
  );
}

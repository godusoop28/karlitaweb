import Link from "next/link";
import Image from "next/image";
import logoSrc from "@/app/logo.png";

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
  { href: "/projects/joe-t-hodo", label: "Joe T. Hodo" },
];

export function Footer() {
  return (
    <footer
      className="mt-24 md:mt-40 border-t px-6 md:px-10 lg:px-14 pt-14 md:pt-20 pb-8 md:pb-12"
      style={{
        borderColor: "rgba(255,255,255,0.07)",
        background: "linear-gradient(to bottom, transparent, rgba(12,12,12,0.8))",
      }}
    >
      {/* Top section */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-14 md:pb-20">

          {/* Brand column */}
          <div className="md:col-span-4">
            <Link href="/" className="block mb-6">
              <div className="relative" style={{ height: "120px", width: "180px" }}>
                <Image
                  src={logoSrc}
                  alt="Karlita Rodríguez"
                  fill
                  style={{ objectFit: "contain", objectPosition: "left center", filter: "grayscale(1) invert(1) brightness(1.8) contrast(1.15)" }}
                />
              </div>
            </Link>

            <p
              className="text-xs tracking-[0.18em] uppercase mb-5"
              style={{ color: "rgba(232,224,208,0.25)", fontFamily: "var(--font-dm-sans)" }}
            >
              Artista Visual · Fotógrafa Documental
            </p>

            <p
              className="text-sm leading-7 mb-8 max-w-xs"
              style={{ color: "rgba(232,224,208,0.3)", fontFamily: "var(--font-dm-sans)" }}
            >
              Fotografía documental, movimientos sociales y arte contemporáneo
              desde Morelos, México.
            </p>

            <div className="flex flex-col gap-2">
              <a
                href="mailto:karlaqrc201200@gmail.com"
                className="text-sm link-hover w-fit transition-colors duration-300"
                style={{ color: "rgba(232,224,208,0.4)", fontFamily: "var(--font-dm-sans)" }}
              >
                karlaqrc201200@gmail.com
              </a>
              <a
                href="tel:7773749882"
                className="text-sm link-hover w-fit transition-colors duration-300"
                style={{ color: "rgba(232,224,208,0.4)", fontFamily: "var(--font-dm-sans)" }}
              >
                777 374 9882
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2 md:col-start-6">
            <p
              className="text-xs tracking-[0.22em] uppercase mb-6"
              style={{ color: "rgba(232,224,208,0.2)", fontFamily: "var(--font-dm-sans)" }}
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
          <div className="md:col-span-3 md:col-start-9">
            <p
              className="text-xs tracking-[0.22em] uppercase mb-6"
              style={{ color: "rgba(232,224,208,0.2)", fontFamily: "var(--font-dm-sans)" }}
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

        {/* Divider */}
        <div style={{ height: "1px", background: "rgba(255,255,255,0.06)" }} />

        {/* Bottom row */}
        <div className="pt-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p
            className="text-xs"
            style={{ color: "rgba(232,224,208,0.18)", fontFamily: "var(--font-dm-sans)", letterSpacing: "0.08em" }}
          >
            © 2025 Karlita Rodríguez. Todos los derechos reservados.
          </p>
          <p
            className="text-xs"
            style={{ color: "rgba(232,224,208,0.12)", fontFamily: "var(--font-dm-sans)" }}
          >
            Lic. Artes Visuales · Centro Morelense de las Artes
          </p>
        </div>
      </div>
    </footer>
  );
}

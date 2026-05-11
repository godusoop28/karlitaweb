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


function IconArrow() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17 17 7M17 7H7M17 7v10" />
    </svg>
  );
}


// ── Component ─────────────────────────────────────────────────────────────────

export function Footer() {
  return (
    <footer
      className="mt-24 md:mt-40 px-6 md:px-10 lg:px-14"
      style={{ background: "linear-gradient(to bottom, transparent, rgba(8,8,8,0.6))" }}
    >
      <div className="max-w-7xl mx-auto">

        {/* ── Separator ── */}
        <div
          style={{
            height: "1px",
            background: "linear-gradient(to right, rgba(130,80,210,0.35), rgba(210,95,140,0.2), transparent)",
            marginBottom: "clamp(56px, 8vw, 100px)",
          }}
        />

        {/* ── CTA ── */}
        <div className="pb-14 md:pb-20">
          <h2
            className="font-display leading-tight"
            style={{
              fontSize: "clamp(30px, 4vw, 56px)",
              color: "#e8e0d0",
              fontWeight: 300,
              letterSpacing: "-0.01em",
            }}
          >
            Trabajemos<br />
            <span style={{ color: "rgba(232,224,208,0.35)", fontStyle: "italic" }}>juntos.</span>
          </h2>

          <div className="mt-7 md:mt-9">
            <a
              href="mailto:karlaqrc201200@gmail.com"
              className="footer-btn footer-btn-email group flex items-center gap-3.5 w-fit"
              style={{ color: "rgba(232,224,208,0.45)", fontFamily: "var(--font-dm-sans)" }}
            >
              <span style={{ color: "rgba(130,80,210,0.55)", flexShrink: 0 }}><IconMail /></span>
              <span className="text-sm tracking-wide link-hover">karlaqrc201200@gmail.com</span>
              <span className="footer-btn-arrow" style={{ color: "rgba(232,224,208,0.2)" }}><IconArrow /></span>
            </a>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div style={{ height: "1px", background: "rgba(255,255,255,0.04)" }} />
        <div className="py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <Link href="/" className="block">
            <div className="relative" style={{ height: "72px", width: "108px" }}>
              <Image
                src={logoSrc}
                alt="Karlita Rodríguez"
                fill
                style={{
                  objectFit: "contain",
                  objectPosition: "left center",
                  filter: "grayscale(1) invert(1) brightness(1.8) contrast(1.15)",
                  opacity: 0.55,
                }}
              />
            </div>
          </Link>
          <p
            className="text-xs"
            style={{ color: "rgba(232,224,208,0.14)", fontFamily: "var(--font-dm-sans)", letterSpacing: "0.07em" }}
          >
            © 2025 Karlita Rodríguez
          </p>
        </div>

      </div>
    </footer>
  );
}

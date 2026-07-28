import { useEffect, useState } from "react";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import { profile } from "../data/profile";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed-top"
      style={{
        background: scrolled ? "rgba(10, 15, 13, 0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        borderBottom: scrolled ? "1px solid var(--surface-border)" : "1px solid transparent",
        transition: "all 0.25s ease",
      }}
    >
      <div className="container d-flex align-items-center justify-content-between py-3">
        <a href="#home" className="d-flex align-items-center gap-2 fw-bold" style={{ color: "var(--text-hi)" }}>
          <span
            className="d-flex align-items-center justify-content-center mono"
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: "linear-gradient(135deg, var(--accent), #16a34a)",
              color: "#04140a",
              fontWeight: 700,
            }}
          >
            AB
          </span>
          <span>{profile.name}</span>
        </a>

        <div className="d-none d-lg-flex align-items-center gap-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="mono" style={{ fontSize: "0.9rem", color: "var(--text-mid)" }}>
              {l.label}
            </a>
          ))}
        </div>

        <div className="d-none d-lg-block">
          <a href={profile.resumeFile} download className="btn btn-accent d-inline-flex align-items-center gap-2">
            <FiDownload /> Resume
          </a>
        </div>

        <button
          className="btn d-lg-none"
          style={{ color: "var(--text-hi)", fontSize: "1.4rem" }}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {open && (
        <div
          className="d-lg-none"
          style={{ background: "var(--bg-1)", borderTop: "1px solid var(--surface-border)" }}
        >
          <div className="container d-flex flex-column py-3 gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="mono"
                style={{ color: "var(--text-mid)" }}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a href={profile.resumeFile} download className="btn btn-accent d-inline-flex align-items-center justify-content-center gap-2">
              <FiDownload /> Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

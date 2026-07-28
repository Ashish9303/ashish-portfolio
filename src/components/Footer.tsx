import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--surface-border)", background: "var(--bg-1)" }}>
      <div className="container py-4 d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
        <div className="text-center text-md-start">
          <div style={{ color: "var(--text-hi)", fontWeight: 700 }}>{profile.name}</div>
          <div className="mono" style={{ fontSize: "0.78rem", color: "var(--text-lo)" }}>
            Full Stack Developer · {profile.location}
          </div>
        </div>

        <div className="d-flex gap-3">
          <a href={profile.github} target="_blank" rel="noreferrer" style={{ color: "var(--text-mid)", fontSize: "1.1rem" }}>
            <FaGithub />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" style={{ color: "var(--text-mid)", fontSize: "1.1rem" }}>
            <FaLinkedin />
          </a>
          <a href={`mailto:${profile.email}`} style={{ color: "var(--text-mid)", fontSize: "1.1rem" }}>
            <FiMail />
          </a>
        </div>

        <div className="mono" style={{ fontSize: "0.78rem", color: "var(--text-lo)" }}>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

import { FiDownload, FiMail, FiMapPin } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "../data/profile";
import ashish from "../assets/ashish.png";

export default function Hero() {
  return (
    <section id="home" className="position-relative" style={{ paddingTop: "8.5rem", paddingBottom: "5rem" }}>
      <div
        className="glow-blob"
        style={{ width: 420, height: 420, background: "var(--accent)", top: -80, left: -120 }}
      />
      <div
        className="glow-blob"
        style={{ width: 360, height: 360, background: "var(--gold)", top: 120, right: -140 }}
      />

      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row align-items-center g-5">
          <div className="col-lg-7">
            <div className="eyebrow">Full Stack Developer</div>
            <h1 className="display-4 fw-bold mb-3" style={{ color: "var(--text-hi)", letterSpacing: "-0.03em" }}>
              Hi, I'm <span className="text-accent">{profile.firstName} Bhatt</span>
              <br />
              {profile.tagline}
            </h1>
            <p className="fs-5 mb-4" style={{ color: "var(--text-lo)", maxWidth: 560 }}>
              {profile.summary}
            </p>

            <div className="d-flex flex-wrap gap-3 mb-4" style={{ color: "var(--text-lo)" }}>
              <span className="d-inline-flex align-items-center gap-2 mono" style={{ fontSize: "0.9rem" }}>
                <span className="text-gold">◆</span> {profile.yearsExperience}
              </span>
              <span className="d-inline-flex align-items-center gap-2 mono" style={{ fontSize: "0.9rem" }}>
                <FiMapPin /> {profile.location}
              </span>
            </div>

            <div className="d-flex flex-wrap gap-3 mb-4">
              <a href={profile.resumeFile} download className="btn btn-accent d-inline-flex align-items-center gap-2">
                <FiDownload /> Download Resume
              </a>
              <a href="#contact" className="btn btn-outline-accent d-inline-flex align-items-center gap-2">
                <FiMail /> Contact Me
              </a>
            </div>

            <div className="d-flex gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="d-flex align-items-center justify-content-center card-surface"
                style={{ width: 42, height: 42, color: "var(--text-hi)", fontSize: "1.1rem" }}
              >
                <FaGithub />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="d-flex align-items-center justify-content-center card-surface"
                style={{ width: 42, height: 42, color: "var(--text-hi)", fontSize: "1.1rem" }}
              >
                <FaLinkedin />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="d-flex align-items-center justify-content-center card-surface"
                style={{ width: 42, height: 42, color: "var(--text-hi)", fontSize: "1.1rem" }}
              >
                <FiMail />
              </a>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="card-surface p-3 p-md-4 mx-auto" style={{ maxWidth: 420 }}>
              <div className="d-flex align-items-center gap-2 mb-3">
                <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#f87171" }} />
                <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#fbbf24" }} />
                <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#34d399" }} />
                <span className="mono ms-auto" style={{ fontSize: "0.75rem", color: "var(--text-lo)" }}>
                  developer.ts
                </span>
              </div>

              <div className="d-flex justify-content-center mb-3">
                <img
                  src={ashish}
                  alt={profile.name}
                  style={{
                    width: 132,
                    height: 132,
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "3px solid var(--accent)",
                  }}
                />
              </div>

              <pre className="mono mb-0" style={{ fontSize: "0.8rem", lineHeight: 1.7, color: "var(--text-mid)", whiteSpace: "pre-wrap" }}>
                <span style={{ color: "var(--gold)" }}>const</span> engineer = {"{"}
                {"\n"}  name: <span style={{ color: "var(--accent-2)" }}>"Ashish Bhatt"</span>,
                {"\n"}  role: <span style={{ color: "var(--accent-2)" }}>"Full Stack Developer"</span>,
                {"\n"}  stack: [<span style={{ color: "var(--accent-2)" }}>"React"</span>, <span style={{ color: "var(--accent-2)" }}>"NestJS"</span>, <span style={{ color: "var(--accent-2)" }}>"FastAPI"</span>],
                {"\n"}  experience: <span style={{ color: "var(--accent-2)" }}>"3+ years"</span>,
                {"\n"}  location: <span style={{ color: "var(--accent-2)" }}>"Jaipur, India"</span>,
                {"\n"}  shipsProduction: <span style={{ color: "var(--gold)" }}>true</span>,
                {"\n"}
                {"}"};
                {"\n\n"}
                <span style={{ color: "var(--gold)" }}>function</span> buildSomethingGreat() {"{"}
                {"\n"}  <span style={{ color: "var(--gold)" }}>return</span> <span style={{ color: "var(--accent-2)" }}>"Let's talk."</span>;
                {"\n"}
                {"}"}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { FiDownload, FiFileText } from "react-icons/fi";
import { profile } from "../data/profile";

export default function Resume() {
  return (
    <section id="resume" className="section section-alt">
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: 640 }}>
          <div className="eyebrow justify-content-center">Resume</div>
          <h2 className="section-title display-6 mb-3">Everything above, in one document.</h2>
          <p className="section-sub mx-auto">A quick summary, or grab the full PDF to keep on file.</p>
        </div>

        <div className="card-surface mx-auto p-4 p-md-5" style={{ maxWidth: 640 }}>
          <div className="d-flex align-items-center gap-3 mb-4">
            <div
              className="d-flex align-items-center justify-content-center flex-shrink-0"
              style={{
                width: 56,
                height: 56,
                borderRadius: 12,
                background: "rgba(34, 197, 94, 0.1)",
                color: "var(--accent-2)",
                fontSize: "1.4rem",
              }}
            >
              <FiFileText />
            </div>
            <div>
              <div style={{ color: "var(--text-hi)", fontWeight: 700 }}>{profile.name} — Resume</div>
              <div style={{ color: "var(--text-lo)", fontSize: "0.85rem" }}>
                Full Stack Developer with 3+ years of experience in Node.js, Python, React and NestJS — CRM
                platforms at scale, JWT/MFA authentication, and PayPal payment integrations. Includes work
                history, education, and projects.
              </div>
            </div>
          </div>
          <a href={profile.resumeFile} download className="btn btn-accent d-inline-flex align-items-center gap-2">
            <FiDownload /> Download PDF
          </a>
        </div>
      </div>
    </section>
  );
}

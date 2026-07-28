import { FiCode, FiDatabase, FiLayers, FiZap } from "react-icons/fi";
import { education, highlights, profile } from "../data/profile";

const icons = [FiLayers, FiDatabase, FiZap, FiCode];

export default function About() {
  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: 640 }}>
          <div className="eyebrow justify-content-center">About Me</div>
          <h2 className="section-title display-6 mb-3">An engineer who ships, not just code.</h2>
          <p className="section-sub mx-auto">
            A closer look at how I approach building backend-heavy full-stack software, and what I bring to a team.
          </p>
        </div>

        <div className="row g-4 align-items-stretch mb-5">
          <div className="col-lg-4">
            <div className="card-surface h-100 p-4 d-flex flex-column align-items-center justify-content-center text-center">
              <div
                className="mono fw-bold mb-2"
                style={{ fontSize: "2.5rem", color: "var(--accent-2)" }}
              >
                AB
              </div>
              <div className="mono" style={{ fontSize: "0.85rem", color: "var(--text-lo)" }}>
                {profile.yearsExperience}
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card-surface h-100 p-4">
              <p className="mb-4" style={{ color: "var(--text-mid)" }}>
                {profile.summary} I care about clean, documented, containerized services — and about making sure
                the API contract, the docs, and the deployment story are as solid as the feature itself.
              </p>
              <div className="row g-3">
                {education.map((e) => (
                  <div className="col-md-6" key={e.degree}>
                    <div
                      className="p-3 h-100"
                      style={{ background: "var(--bg-2)", borderRadius: 10, border: "1px solid var(--surface-border)" }}
                    >
                      <div style={{ color: "var(--text-hi)", fontWeight: 600, fontSize: "0.92rem" }}>{e.degree}</div>
                      <div className="mono" style={{ fontSize: "0.8rem", color: "var(--text-lo)" }}>
                        {e.school}
                      </div>
                      <div className="mono" style={{ fontSize: "0.78rem", color: "var(--accent-2)" }}>
                        {e.period}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {highlights.map((h, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div className="col-sm-6 col-lg-3" key={h.title}>
                <div className="card-surface h-100 p-4">
                  <div
                    className="d-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 10,
                      background: "rgba(34, 197, 94, 0.1)",
                      color: "var(--accent-2)",
                      fontSize: "1.2rem",
                    }}
                  >
                    <Icon />
                  </div>
                  <div style={{ color: "var(--text-hi)", fontWeight: 600, marginBottom: "0.4rem" }}>{h.title}</div>
                  <div style={{ color: "var(--text-lo)", fontSize: "0.9rem" }}>{h.description}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

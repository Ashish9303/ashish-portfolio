import { experience } from "../data/profile";

export default function Experience() {
  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: 640 }}>
          <div className="eyebrow justify-content-center">Experience</div>
          <h2 className="section-title display-6 mb-3">Where I've built production software.</h2>
          <p className="section-sub mx-auto">
            A track record of shipping backend-heavy full-stack features end-to-end, from first commit to
            production.
          </p>
        </div>

        <div className="mx-auto" style={{ maxWidth: 760 }}>
          {experience.map((job, idx) => (
            <div key={job.role + job.period} className="d-flex" style={{ gap: "1.25rem" }}>
              <div className="d-flex flex-column align-items-center">
                <span
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    background: job.current ? "var(--accent)" : "var(--surface-border)",
                    border: job.current ? "3px solid rgba(34,197,94,0.25)" : "none",
                    flexShrink: 0,
                    marginTop: 6,
                  }}
                />
                {idx !== experience.length - 1 && (
                  <span style={{ flex: 1, width: 2, background: "var(--surface-border)" }} />
                )}
              </div>

              <div className="card-surface p-4 mb-4 w-100">
                <div className="mono mb-1" style={{ fontSize: "0.8rem", color: "var(--accent-2)" }}>
                  {job.period}
                </div>
                <div style={{ color: "var(--text-hi)", fontWeight: 700, fontSize: "1.05rem" }}>{job.role}</div>
                <div className="mono mb-3" style={{ fontSize: "0.85rem", color: "var(--text-lo)" }}>
                  {job.company}
                </div>
                <ul className="mb-3" style={{ color: "var(--text-mid)", fontSize: "0.9rem", paddingLeft: "1.1rem" }}>
                  {job.bullets.map((b) => (
                    <li key={b} className="mb-1">
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="d-flex flex-wrap gap-2">
                  {job.tags.map((t) => (
                    <span key={t} className="badge-chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

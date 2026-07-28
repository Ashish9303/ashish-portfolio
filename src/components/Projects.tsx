import { FiCheck } from "react-icons/fi";
import { projects } from "../data/profile";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: 640 }}>
          <div className="eyebrow justify-content-center">Selected Work</div>
          <h2 className="section-title display-6 mb-3">Production modules, front-to-back.</h2>
          <p className="section-sub mx-auto">
            A sample of the platforms and services I've built at Pangrow Tech, spanning API architecture to
            deployment.
          </p>
        </div>

        <div className="row g-4">
          {projects.map((p) => (
            <div className="col-md-6 col-lg-4" key={p.title}>
              <div className="card-surface h-100 p-4 d-flex flex-column">
                <div style={{ color: "var(--text-hi)", fontWeight: 700, fontSize: "1.05rem" }} className="mb-2">
                  {p.title}
                </div>
                <p style={{ color: "var(--text-lo)", fontSize: "0.9rem" }}>{p.description}</p>
                <ul className="list-unstyled mb-3">
                  {p.points.map((pt) => (
                    <li key={pt} className="d-flex align-items-start gap-2 mb-1" style={{ color: "var(--text-mid)", fontSize: "0.85rem" }}>
                      <FiCheck className="text-accent mt-1 flex-shrink-0" /> {pt}
                    </li>
                  ))}
                </ul>
                <div className="d-flex flex-wrap gap-2 mt-auto">
                  {p.tags.map((t) => (
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

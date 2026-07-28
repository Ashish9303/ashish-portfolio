import { FiCloud, FiCode, FiDatabase, FiMonitor } from "react-icons/fi";
import { techStack } from "../data/profile";

const icons = [FiMonitor, FiCode, FiDatabase, FiCloud];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: 640 }}>
          <div className="eyebrow justify-content-center">What I Work With</div>
          <h2 className="section-title display-6 mb-3">
            Technologies I use to design, build, and ship <span className="text-accent">at scale.</span>
          </h2>
        </div>

        <div className="row g-4">
          {techStack.map((group, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div className="col-sm-6 col-lg-3" key={group.category}>
                <div className="card-surface h-100 p-4">
                  <div
                    className="d-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      background: "rgba(240, 180, 41, 0.12)",
                      color: "var(--gold)",
                      fontSize: "1.1rem",
                    }}
                  >
                    <Icon />
                  </div>
                  <div style={{ color: "var(--text-hi)", fontWeight: 600, marginBottom: "0.75rem" }}>
                    {group.category}
                  </div>
                  <ul className="list-unstyled mb-0" style={{ fontSize: "0.88rem" }}>
                    {group.items.map((item) => (
                      <li key={item} className="d-flex align-items-center gap-2 mb-2" style={{ color: "var(--text-mid)" }}>
                        <span className="text-accent">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

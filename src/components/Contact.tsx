import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import { profile } from "../data/profile";

const contactItems = [
  { icon: FiMail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: FiPhone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/[^+\d]/g, "")}` },
  { icon: FaLinkedin, label: "LinkedIn", value: "ashish-bhatt-061442106", href: profile.linkedin },
  { icon: FaGithub, label: "GitHub", value: "Ashish9303", href: profile.github },
  { icon: FiMapPin, label: "Location", value: profile.location, href: undefined },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    const subject = encodeURIComponent(form.subject || `Portfolio inquiry from ${form.name}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: 640 }}>
          <div className="eyebrow justify-content-center">Contact</div>
          <h2 className="section-title display-6 mb-3">Let's build something great together.</h2>
          <p className="section-sub mx-auto">
            Open to Full Stack, Backend, and Python/FastAPI Developer roles. Reach out any time.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-lg-5">
            <div className="d-flex flex-column gap-3 h-100">
              {contactItems.map((c) => {
                const Icon = c.icon;
                const content = (
                  <div className="card-surface p-3 d-flex align-items-center gap-3 h-100">
                    <div
                      className="d-flex align-items-center justify-content-center flex-shrink-0"
                      style={{
                        width: 42,
                        height: 42,
                        borderRadius: 10,
                        background: "rgba(34,197,94,0.1)",
                        color: "var(--accent-2)",
                      }}
                    >
                      <Icon />
                    </div>
                    <div>
                      <div className="mono" style={{ fontSize: "0.75rem", color: "var(--text-lo)" }}>
                        {c.label}
                      </div>
                      <div style={{ color: "var(--text-hi)", fontSize: "0.92rem", fontWeight: 500 }}>{c.value}</div>
                    </div>
                  </div>
                );
                return c.href ? (
                  <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                    {content}
                  </a>
                ) : (
                  <div key={c.label}>{content}</div>
                );
              })}
            </div>
          </div>

          <div className="col-lg-7">
            <form className="card-surface p-4" onSubmit={handleSubmit}>
              <div className="row g-3 mb-3">
                <div className="col-sm-6">
                  <input
                    required
                    type="text"
                    className="form-control bg-transparent"
                    placeholder="Your Name"
                    style={{ background: "var(--bg-2)", borderColor: "var(--surface-border)", color: "var(--text-hi)" }}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div className="col-sm-6">
                  <input
                    required
                    type="email"
                    className="form-control bg-transparent"
                    placeholder="Your Email"
                    style={{ background: "var(--bg-2)", borderColor: "var(--surface-border)", color: "var(--text-hi)" }}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control bg-transparent"
                  placeholder="Subject"
                  style={{ background: "var(--bg-2)", borderColor: "var(--surface-border)", color: "var(--text-hi)" }}
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                />
              </div>
              <div className="mb-3">
                <textarea
                  required
                  rows={5}
                  className="form-control bg-transparent"
                  placeholder="Tell me about your project..."
                  style={{ background: "var(--bg-2)", borderColor: "var(--surface-border)", color: "var(--text-hi)" }}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>
              <button type="submit" className="btn btn-accent w-100 d-inline-flex align-items-center justify-content-center gap-2">
                <FiSend /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

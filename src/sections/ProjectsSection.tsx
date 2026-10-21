import { useState } from 'react'
import { projects } from '../data/portfolio'
import Reveal from '../components/Reveal'
import { Github, ExternalLink, Terminal, Shield, Layers, Database, ArrowUpRight } from 'lucide-react'

export default function ProjectsSection() {
  const [activeProjectTab, setActiveProjectTab] = useState<'preview' | 'arch'>('preview')

  return (
    <section id="projects" className="section projects-editorial-section">
      <div className="container">
        <Reveal>
          <div className="section-label">
            <span className="eyebrow">05 // ENGINEERING &amp; TOOLING</span>
          </div>
          <div className="section-title-row">
            <h2 className="section-title">
              Selected projects<span className="title-accent-dot">.</span>
            </h2>
            <div className="section-counter-badge">SYSTEMS &amp; AUTOMATION</div>
          </div>
          <p className="section-subtitle">
            Tools, security platforms, and systems developed at the intersection of offensive security thinking and backend engineering.
          </p>
        </Reveal>

        <div className="projects-editorial-list" style={{ marginTop: '48px' }}>
          {/* Project 1: LOGify */}
          <Reveal delay={0.1}>
            <article className="project-dossier-card">
              <div className="project-dossier-header">
                <div className="dossier-project-id">
                  <span className="p-num">01</span>
                  <span className="p-sep">//</span>
                  <span className="p-badge">FEATURED SECURITY PLATFORM</span>
                </div>
                <div className="dossier-status-tag">STATUS: PRODUCTION-READY</div>
              </div>

              <div className="project-dossier-grid">
                <div className="project-info-side">
                  <h3 className="project-title-large">LOGify</h3>
                  <div className="project-tagline-text">
                    Unified log management — CLI agent to real-time cloud analytics dashboard.
                  </div>
                  <p className="project-desc-body">
                    A comprehensive log aggregation and anomaly monitoring architecture designed to eliminate blind spots in server fleets. Pairs a lightweight Python CLI collector with a cloud dashboard, automating log normalization, divergence tracking, and critical security event alerts.
                  </p>

                  <div className="project-specs-list">
                    <div className="spec-row">
                      <span className="spec-label">ARCHITECTURE:</span>
                      <span className="spec-val">Python CLI Agent + Cloud WebSocket Stream</span>
                    </div>
                    <div className="spec-row">
                      <span className="spec-label">SECURITY FOCUS:</span>
                      <span className="spec-val">Anomaly Detection &amp; Audit Trail Integrity</span>
                    </div>
                  </div>

                  <div className="project-tech-pills">
                    {['Python', 'CLI Agent', 'Log Analytics', 'Anomaly Detection', 'Cloud Dashboard'].map(
                      (tech) => (
                        <span key={tech} className="tech-pill">
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </div>

                <div className="project-interactive-preview">
                  <div className="mock-terminal-window">
                    <div className="mock-titlebar">
                      <div className="mock-dots">
                        <span className="m-dot red" />
                        <span className="m-dot yellow" />
                        <span className="m-dot green" />
                      </div>
                      <span className="mock-title">logify-daemon // stdout</span>
                    </div>

                    <div className="mock-body">
                      <div className="mock-line comment"># LOGify Telemetry Stream v1.4.2</div>
                      <div className="mock-line">[01:04:12] INFO  Collector connected to endpoint: stream.logify.net</div>
                      <div className="mock-line">[01:04:13] INFO  Parsing /var/log/auth.log [2,481 events ingested]</div>
                      <div className="mock-line warn">[01:04:14] WARN  Divergence: Multiple failed SSH attempts (IP: 194.26.29.x)</div>
                      <div className="mock-line alert">[01:04:15] CRIT  Brute-force pattern identified. Threshold exceeded.</div>
                      <div className="mock-line success">[01:04:16] OK    Automated incident alert dispatched to security team.</div>
                      <div className="mock-line prompt">&gt; logify status --detailed</div>
                      <div className="mock-line text-accent">Active streams: 4 | Latency: 18ms | Integrity: 100%</div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>

          {/* Project 2: Online Healthcare System 2.0 */}
          <Reveal delay={0.2}>
            <article className="project-dossier-card" style={{ marginTop: '36px' }}>
              <div className="project-dossier-header">
                <div className="dossier-project-id">
                  <span className="p-num">02</span>
                  <span className="p-sep">//</span>
                  <span className="p-badge">FULL-STACK SECURE APPLICATION</span>
                </div>
                <div className="dossier-status-tag">STATUS: COMPLETED</div>
              </div>

              <div className="project-dossier-grid">
                <div className="project-info-side">
                  <h3 className="project-title-large">Online Healthcare System 2.0</h3>
                  <div className="project-tagline-text">
                    Healthcare management platform built for operational security &amp; access control.
                  </div>
                  <p className="project-desc-body">
                    A centralized hospital workflow system consolidating patient medical histories, specialist scheduling, and appointment billing. Architected with strict role-based access control (RBAC), secure authentication session tokens, and input sanitization to safeguard sensitive patient records.
                  </p>

                  <div className="project-specs-list">
                    <div className="spec-row">
                      <span className="spec-label">SECURITY FOCUS:</span>
                      <span className="spec-val">RBAC, Data Privacy &amp; Token Authentication</span>
                    </div>
                    <div className="spec-row">
                      <span className="spec-label">DATABASE:</span>
                      <span className="spec-val">Firebase Cloud Firestore / Realtime DB</span>
                    </div>
                  </div>

                  <div className="project-tech-pills">
                    {['Firebase', 'Node.js', 'JavaScript', 'Role-Based Access Control', 'UI/UX'].map(
                      (tech) => (
                        <span key={tech} className="tech-pill">
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </div>

                <div className="project-interactive-preview">
                  <div className="mock-terminal-window">
                    <div className="mock-titlebar">
                      <div className="mock-dots">
                        <span className="m-dot red" />
                        <span className="m-dot yellow" />
                        <span className="m-dot green" />
                      </div>
                      <span className="mock-title">access-control // audit_log</span>
                    </div>

                    <div className="mock-body">
                      <div className="mock-line comment"># RBAC Policy Evaluation Engine</div>
                      <div className="mock-line">[AUTH] Patient session verified (UID: #8841-A)</div>
                      <div className="mock-line">[AUTH] Role: PATIENT // Permissions: [READ_SELF, BOOK]</div>
                      <div className="mock-line warn">[SECURITY] Intercepted attempt to access /admin/records</div>
                      <div className="mock-line alert">[SECURITY] HTTP 403 Forbidden: Insufficient clearance level</div>
                      <div className="mock-line success">[AUDIT] Incident logged to security compliance archive</div>
                      <div className="mock-line prompt">&gt; verify_integrity --patient-db</div>
                      <div className="mock-line text-accent">Records checked: 1,200 | Tampering: ZERO | Encr: AES-256</div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        </div>

        {/* GitHub Repository CTA */}
        <Reveal delay={0.3}>
          <div className="projects-github-cta">
            <div className="cta-left">
              <Github size={24} className="text-accent" />
              <div>
                <div className="cta-title">Explore Open Source &amp; Exploit Scripts on GitHub</div>
                <div className="cta-desc">Audit scripts, automation prototypes, and CTF writeups</div>
              </div>
            </div>
            <a
              href="https://github.com/dhruv-mulani"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-editorial-primary"
            >
              <span>View github.com/dhruv-mulani</span>
              <ArrowUpRight size={15} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

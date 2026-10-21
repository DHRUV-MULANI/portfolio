import { personal, education } from '../data/portfolio'
import Reveal from '../components/Reveal'
import { Shield, Award, Terminal, Code2, MapPin, CheckCircle } from 'lucide-react'

export default function AboutSection() {
  return (
    <section id="about" className="section about-editorial-section">
      <div className="container">
        <Reveal>
          <div className="section-label">
            <span className="eyebrow">02 // DOSSIER</span>
          </div>
          <h2 className="section-title">
            Curiosity is where security begins<span className="title-accent-dot">.</span>
          </h2>
          <p className="section-subtitle">
            Most people look at systems and ask: "Does it work?" I look at systems and ask: "What happens when an unhandled edge case breaks its core assumptions?"
          </p>
        </Reveal>

        <div className="about-editorial-grid">
          {/* Left Column: Dossier Card & Photo */}
          <Reveal delay={0.1}>
            <div className="dossier-card">
              <div className="dossier-badge-top">
                <span className="dossier-status-dot" />
                <span className="dossier-tag">IDENTITY // VERIFIED OPERATOR</span>
              </div>

              <div className="dossier-image-wrap">
                <img
                  src="/profile.jpg"
                  alt="Dhruv Mulani — Cybersecurity Researcher"
                  className="dossier-image"
                  loading="lazy"
                  width="360"
                  height="360"
                />
                <div className="dossier-overlay-scanline" />
                <div className="dossier-corners">
                  <span className="c-corner c-tl" />
                  <span className="c-corner c-tr" />
                  <span className="c-corner c-bl" />
                  <span className="c-corner c-br" />
                </div>
              </div>

              <div className="dossier-meta-footer">
                <div className="dossier-name">DHRUV MULANI</div>
                <div className="dossier-role">Cybersecurity Intern @ Cyber Octet</div>
                <div className="dossier-institution">IITRAM Ahmedabad · Comp Eng (2023–27)</div>

                <div className="dossier-pills-row">
                  <span className="dossier-pill">VAPT</span>
                  <span className="dossier-pill">Bug Bounty</span>
                  <span className="dossier-pill">AI Automation</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Narrative & Technical Grounding */}
          <div className="about-narrative-column">
            <Reveal delay={0.15}>
              <div className="editorial-quote-box">
                <p className="quote-lead">
                  "Security is never a product you install. It's the disciplined refusal to accept default trust boundaries."
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="about-text-paragraphs">
                <p>
                  I am a cybersecurity practitioner working at the crossroads of{' '}
                  <strong>offensive security</strong>, <strong>vulnerability research</strong>, and{' '}
                  <strong>AI-assisted security automation</strong>. Rather than treating security as an afterthought or checklist, I approach codebases and network protocols with an adversarial mindset: seeking out logic flaws, parameter tampering vectors, and authentication bypasses that automated scanners frequently overlook.
                </p>
                <p>
                  Currently in my second year pursuing a <strong>Bachelor of Engineering in Computer Engineering at IITRAM, Ahmedabad</strong> (2023–2027), I pair rigorous academic training in operating systems, networks, and low-level cryptography with live offensive testing in the field.
                </p>
              </div>
            </Reveal>

            {/* Principles Grid */}
            <Reveal delay={0.25}>
              <div className="principles-grid">
                <div className="principle-card">
                  <div className="principle-header">
                    <Shield size={16} className="text-accent" />
                    <span className="principle-title">Offensive Rigor</span>
                  </div>
                  <p className="principle-desc">
                    OWASP Top 10 mastery, API fuzzing, and manual business logic evaluation that finds high-impact vulnerabilities.
                  </p>
                </div>

                <div className="principle-card">
                  <div className="principle-header">
                    <Terminal size={16} className="text-accent" />
                    <span className="principle-title">Bespoke Tooling</span>
                  </div>
                  <p className="principle-desc">
                    Writing custom Python, Bash, and Docker automation to eliminate repetitive recon and streamline zero-day discovery.
                  </p>
                </div>

                <div className="principle-card">
                  <div className="principle-header">
                    <Award size={16} className="text-accent" />
                    <span className="principle-title">Proven Results</span>
                  </div>
                  <p className="principle-desc">
                    Winner at Cyber Shadez '26 Bug Bounty, top rankings on TryHackMe, and documented disclosures.
                  </p>
                </div>

                <div className="principle-card">
                  <div className="principle-header">
                    <CheckCircle size={16} className="text-accent" />
                    <span className="principle-title">Ethical Disclosure</span>
                  </div>
                  <p className="principle-desc">
                    100% adherence to coordinated disclosure timelines, high-quality reproduction PoCs, and remediation guidance.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

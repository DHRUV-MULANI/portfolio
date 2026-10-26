import { Trophy, Award, Zap, ShieldCheck, Flag, CheckCircle2, FileCheck2, Code2, ExternalLink, Github } from 'lucide-react'
import { achievementsAndCertificates } from '../data/portfolio'
import Reveal from '../components/Reveal'

export default function AchievementsSection() {
  return (
    <section id="achievements" className="section achievements-editorial-section">
      <div className="container">
        <Reveal>
          <div className="section-label">
            <span className="eyebrow">06 // PROVEN OUTCOMES &amp; CREDENTIALS</span>
          </div>
          <div className="section-title-row">
            <h2 className="section-title">
              Achievements &amp; Certificates<span className="title-accent-dot">.</span>
            </h2>
            <div className="section-counter-badge">VERIFIED MERIT &amp; WRITEUPS</div>
          </div>
          <p className="section-subtitle">
            National CTF podiums, top challenge writeups, forensic credentials, responsible disclosure appreciation, and competitive hackathon milestones.
          </p>
        </Reveal>

        {/* ============================================================ */}
        {/* 1. KEY CTF & SECURITY ACHIEVEMENTS (PODIUM GRID) */}
        {/* ============================================================ */}
        <div className="achievements-podium-grid" style={{ marginTop: '48px' }}>
          {achievementsAndCertificates.achievements.map((item, idx) => {
            const isGold = item.rank.toLowerCase().includes('winner') || item.rank.includes('1st')
            const isSilver = item.rank.includes('4th') || item.rank.includes('14th')
            const rankClass = isGold ? 'gold-rank' : isSilver ? 'silver-rank' : 'emerald-rank'

            return (
              <Reveal key={item.id} delay={idx * 0.08}>
                <div className={`achievement-podium-card ${rankClass}`}>
                  <div className="podium-badge-header">
                    <div className="podium-rank-tag">
                      {isGold ? (
                        <Trophy size={14} className="trophy-gold" />
                      ) : (
                        <Award size={14} className={isSilver ? 'award-silver' : 'zap-emerald'} />
                      )}
                      <span>{item.rank.toUpperCase()}</span>
                    </div>
                    <span className="podium-year">{item.year}</span>
                  </div>

                  <div className="podium-card-body">
                    <h3 className="podium-event-title">{item.title}</h3>
                    <div className="podium-category">{item.subtitle}</div>
                    <p className="podium-summary">{item.description}</p>
                  </div>

                  {/* Writeup / Certificate Action Row */}
                  {(item.writeupUrl || item.certUrl) && (
                    <div className="podium-action-links" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '16px' }}>
                      {item.writeupUrl && (
                        <a
                          href={item.writeupUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="podium-action-btn writeup-btn"
                          aria-label={`View writeup for ${item.title}`}
                        >
                          <Github size={12} />
                          <span>View Writeup</span>
                          <ExternalLink size={10} />
                        </a>
                      )}
                      {item.certUrl && (
                        <a
                          href={item.certUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="podium-action-btn cert-btn"
                          aria-label={`View official certificate for ${item.title}`}
                        >
                          <Award size={12} />
                          <span>Official Certificate</span>
                          <ExternalLink size={10} />
                        </a>
                      )}
                    </div>
                  )}

                  <div className="podium-footer-meta" style={{ marginTop: '16px' }}>
                    <span className="podium-cert-verified">
                      <CheckCircle2 size={12} />
                      VERIFIED OUTCOME
                    </span>
                    <span className="podium-domain">{item.issuer}</span>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* ============================================================ */}
        {/* 2. RESPONSIBLE DISCLOSURE APPRECIATION & CERTIFICATIONS */}
        {/* ============================================================ */}
        <div className="certs-appreciation-layout" style={{ marginTop: '40px' }}>
          {/* Certificate of Appreciation Callout */}
          <Reveal delay={0.25}>
            <div className="appreciation-spotlight-card">
              <div className="appreciation-icon-col">
                <ShieldCheck size={28} className="text-accent" />
              </div>
              <div className="appreciation-content-col">
                <div className="appreciation-eyebrow">RESPONSIBLE DISCLOSURE RECOGNITION</div>
                <h4 className="appreciation-title">Certificate of Appreciation — SarthiBus</h4>
                <p className="appreciation-desc">
                  Formally awarded for discovering and responsibly reporting a major financial tampering vulnerability in the platform's transaction logic, safeguarding customer data and payment integrity.
                </p>
              </div>
              <div className="appreciation-badge-col">
                <span className="security-honor-pill">VERIFIED IMPACT</span>
              </div>
            </div>
          </Reveal>

          {/* Certifications Grid */}
          <Reveal delay={0.3}>
            <div className="certs-showcase-wrap" style={{ marginTop: '24px' }}>
              <div className="certs-section-heading">
                <FileCheck2 size={16} className="text-accent" />
                <span>FORMAL CERTIFICATIONS &amp; WORKSHOPS:</span>
              </div>

              <div className="certs-cards-grid">
                {achievementsAndCertificates.certifications.map((cert, idx) => (
                  <div key={idx} className="cert-card-interactive">
                    <div className="cert-top-line">
                      <span className="cert-type-pill">{cert.type}</span>
                      <span className="cert-status-pill">{cert.badge}</span>
                    </div>
                    <div className="cert-main-title">{cert.title}</div>
                    <div className="cert-issuer-line">Issuer: {cert.issuer}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* ============================================================ */}
        {/* 3. COMPETITIONS & HACKATHONS */}
        {/* ============================================================ */}
        <div className="competitions-hackathons-dual-grid" style={{ marginTop: '36px' }}>
          {/* Competitions */}
          <Reveal delay={0.35}>
            <div className="roster-panel">
              <div className="roster-panel-header">
                <Flag size={15} className="text-accent" />
                <span>COMPETITIVE CTFS &amp; CHALLENGES</span>
              </div>
              <div className="roster-tag-list">
                {achievementsAndCertificates.competitions.map((comp, idx) => (
                  <div key={idx} className="roster-badge-item">
                    <span className="badge-bullet">■</span>
                    <span className="badge-text">{comp}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Hackathons */}
          <Reveal delay={0.4}>
            <div className="roster-panel">
              <div className="roster-panel-header">
                <Code2 size={15} className="text-accent" />
                <span>HACKATHONS &amp; SPRINTS</span>
              </div>
              <div className="roster-tag-list">
                {achievementsAndCertificates.hackathons.map((hack, idx) => (
                  <div key={idx} className="roster-badge-item hackathon-item">
                    <span className="badge-bullet">◆</span>
                    <span className="badge-text">{hack}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

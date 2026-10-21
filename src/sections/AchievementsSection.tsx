import { Trophy, Award, Zap, Shield, Flag, CheckCircle2 } from 'lucide-react'
import { achievements } from '../data/portfolio'
import Reveal from '../components/Reveal'

export default function AchievementsSection() {
  return (
    <section id="achievements" className="section achievements-editorial-section">
      <div className="container">
        <Reveal>
          <div className="section-label">
            <span className="eyebrow">06 // PROVEN OUTCOMES</span>
          </div>
          <div className="section-title-row">
            <h2 className="section-title">
              Competition &amp; CTF record<span className="title-accent-dot">.</span>
            </h2>
            <div className="section-counter-badge">VERIFIED ACHIEVEMENTS</div>
          </div>
          <p className="section-subtitle">
            Documented results from national-level cybersecurity competitions, vulnerability hunting sprints, and global hacking platforms.
          </p>
        </Reveal>

        {/* Primary 3 Highlights */}
        <div className="achievements-podium-grid" style={{ marginTop: '48px' }}>
          {/* 1st Place Winner */}
          <Reveal delay={0.1}>
            <div className="achievement-podium-card gold-rank">
              <div className="podium-badge-header">
                <div className="podium-rank-tag">
                  <Trophy size={14} className="trophy-gold" />
                  <span>WINNER // 1ST PLACE</span>
                </div>
                <span className="podium-year">2026</span>
              </div>

              <div className="podium-card-body">
                <h3 className="podium-event-title">Cyber Shadez '26 National TechFest</h3>
                <div className="podium-category">Bug Bounty Category</div>
                <p className="podium-summary">
                  Secured 1st place in the national Bug Bounty challenge, successfully uncovering and triaging high-severity vulnerabilities under strict time constraints.
                </p>
              </div>

              <div className="podium-footer-meta">
                <span className="podium-cert-verified">
                  <CheckCircle2 size={12} />
                  VERIFIED OUTCOME
                </span>
                <span className="podium-domain">Bug Bounty</span>
              </div>
            </div>
          </Reveal>

          {/* 14th Place IIT Madras */}
          <Reveal delay={0.15}>
            <div className="achievement-podium-card silver-rank">
              <div className="podium-badge-header">
                <div className="podium-rank-tag">
                  <Award size={14} className="award-silver" />
                  <span>14TH PLACE // NATIONAL</span>
                </div>
                <span className="podium-year">2026</span>
              </div>

              <div className="podium-card-body">
                <h3 className="podium-event-title">ISEA-ISAP CTF '26</h3>
                <div className="podium-category">IIT Madras — 1,613 Points</div>
                <p className="podium-summary">
                  Ranked 14th among hundreds of national collegiate teams in IIT Madras' premier cybersecurity competition, solving complex binary, forensics, and web challenges.
                </p>
              </div>

              <div className="podium-footer-meta">
                <span className="podium-cert-verified">
                  <CheckCircle2 size={12} />
                  1,613 PTS EARNED
                </span>
                <span className="podium-domain">National CTF</span>
              </div>
            </div>
          </Reveal>

          {/* TryHackMe Top 3% */}
          <Reveal delay={0.2}>
            <div className="achievement-podium-card emerald-rank">
              <div className="podium-badge-header">
                <div className="podium-rank-tag">
                  <Zap size={14} className="zap-emerald" />
                  <span>TOP 3% WORLDWIDE</span>
                </div>
                <span className="podium-year">LIVE</span>
              </div>

              <div className="podium-card-body">
                <h3 className="podium-event-title">TryHackMe Global Standing</h3>
                <div className="podium-category">Profile: Boss.Hack3r</div>
                <p className="podium-summary">
                  Maintained top 3% global rank through consistent offensive security challenges spanning Active Directory compromise, lateral movement, web exploits, and privilege escalation.
                </p>
              </div>

              <div className="podium-footer-meta">
                <span className="podium-cert-verified">
                  <CheckCircle2 size={12} />
                  ACTIVE RESEARCHER
                </span>
                <span className="podium-domain">Offensive Ops</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Secondary Competition Roster */}
        <Reveal delay={0.25}>
          <div className="competitions-roster-wrap" style={{ marginTop: '48px' }}>
            <div className="roster-header">
              <Flag size={14} className="text-accent" />
              <span>CONTINUOUS COMPETITION PARTICIPATION &amp; HACKATHONS:</span>
            </div>
            <div className="roster-grid">
              {achievements.secondary.map((comp, idx) => (
                <div key={idx} className="roster-item">
                  <span className="roster-bullet">■</span>
                  <span className="roster-name">{comp}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

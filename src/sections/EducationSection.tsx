import { education, certifications } from '../data/portfolio'
import Reveal from '../components/Reveal'
import { GraduationCap, Award, BookOpen, CheckCircle, ExternalLink } from 'lucide-react'

export default function EducationSection() {
  return (
    <section id="education" className="section education-editorial-section">
      <div className="container">
        <Reveal>
          <div className="section-label">
            <span className="eyebrow">07 // ACADEMICS &amp; CREDENTIALS</span>
          </div>
          <h2 className="section-title">
            Foundation &amp; certifications<span className="title-accent-dot">.</span>
          </h2>
          <p className="section-subtitle">
            Formal computer engineering education coupled with specialized forensics certifications and platform recognitions.
          </p>
        </Reveal>

        <div className="edu-certs-editorial-grid" style={{ marginTop: '48px' }}>
          {/* Left Column: Education */}
          <Reveal delay={0.1}>
            <div className="edu-card-editorial">
              <div className="edu-card-topbar">
                <div className="edu-tag">
                  <GraduationCap size={14} className="text-accent" />
                  <span>FORMAL EDUCATION</span>
                </div>
                <span className="edu-period-badge">{education.period}</span>
              </div>

              <h3 className="edu-degree-title">{education.degree}</h3>
              <div className="edu-inst-name">{education.institution}</div>
              <div className="edu-location-text">{education.location}</div>

              <div className="edu-divider" />

              <div className="edu-coursework-title">
                <BookOpen size={13} className="text-accent" />
                <span>RELEVANT TECHNICAL COURSEWORK:</span>
              </div>

              <div className="edu-coursework-tags">
                {education.coursework.map((course) => (
                  <span key={course} className="course-pill">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right Column: Certifications & Recognition */}
          <Reveal delay={0.15}>
            <div className="certs-card-editorial">
              <div className="certs-card-topbar">
                <div className="edu-tag">
                  <Award size={14} className="text-accent" />
                  <span>CREDENTIALS &amp; RECOGNITIONS</span>
                </div>
                <span className="edu-period-badge">VERIFIED</span>
              </div>

              <div className="certs-list-stack">
                {certifications.map((cert, i) => (
                  <div key={i} className="cert-item-editorial">
                    <div className="cert-meta-left">
                      <span className={`cert-type-badge type-${cert.type}`}>
                        {cert.type}
                      </span>
                    </div>
                    <div className="cert-info-right">
                      <div className="cert-title-bold">{cert.title}</div>
                      <div className="cert-issuer-sub">{cert.issuer}</div>
                    </div>
                    <div className="cert-check-icon">
                      <CheckCircle size={15} />
                    </div>
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

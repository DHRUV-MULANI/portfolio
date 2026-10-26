import { education } from '../data/portfolio'
import Reveal from '../components/Reveal'
import { GraduationCap, BookOpen, Building2, MapPin, Sparkles, CheckCircle2 } from 'lucide-react'

export default function EducationSection() {
  return (
    <section id="education" className="section education-editorial-section">
      <div className="container">
        <Reveal>
          <div className="section-label">
            <span className="eyebrow">07 // ACADEMICS</span>
          </div>
          <h2 className="section-title">
            Academic foundation<span className="title-accent-dot">.</span>
          </h2>
          <p className="section-subtitle">
            Formal computer engineering education grounding offensive security practice in systems architecture, network protocols, and cryptographic theory.
          </p>
        </Reveal>

        <div className="edu-single-editorial-card" style={{ marginTop: '48px' }}>
          <Reveal delay={0.1}>
            <div className="edu-card-editorial wide">
              <div className="edu-card-topbar">
                <div className="edu-tag">
                  <GraduationCap size={15} className="text-accent" />
                  <span>FORMAL ENGINEERING DEGREE</span>
                </div>
                <span className="edu-period-badge">{education.period}</span>
              </div>

              <div className="edu-body-grid">
                <div className="edu-main-info">
                  <h3 className="edu-degree-title">{education.degree}</h3>
                  <div className="edu-inst-name">
                    <Building2 size={14} className="text-muted" />
                    <span>{education.institution}</span>
                  </div>
                  <div className="edu-location-text">
                    <MapPin size={13} className="text-muted" />
                    <span>{education.location}</span>
                  </div>

                  <p className="edu-overview-para" style={{ marginTop: '16px' }}>
                    Rigorous multi-year computer engineering curriculum emphasizing core operating system internals, secure socket layer architectures, cryptographic implementations, and digital forensics laboratory practice.
                  </p>
                </div>

                <div className="edu-coursework-panel">
                  <div className="edu-coursework-title">
                    <BookOpen size={14} className="text-accent" />
                    <span>TECHNICAL COURSEWORK &amp; DISCIPLINES:</span>
                  </div>

                  <div className="edu-coursework-tags">
                    {education.coursework.map((course) => (
                      <span key={course} className="course-pill">
                        <CheckCircle2 size={11} className="text-accent" />
                        <span>{course}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

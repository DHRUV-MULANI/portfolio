import { experience } from '../data/portfolio'
import Reveal from '../components/Reveal'
import { Calendar, MapPin, CheckCircle2, Award, Clock } from 'lucide-react'

export default function ExperienceSection() {
  return (
    <section id="experience" className="section experience-editorial-section">
      <div className="container">
        <Reveal>
          <div className="section-label">
            <span className="eyebrow">04 // TRACK RECORD</span>
          </div>
          <h2 className="section-title">
            Operational experience<span className="title-accent-dot">.</span>
          </h2>
          <p className="section-subtitle">
            Field-tested across commercial web applications, infrastructure assessments, and coordinated vulnerability disclosure programs.
          </p>
        </Reveal>

        <div className="experience-log-list" style={{ marginTop: '48px' }}>
          {experience.map((job, idx) => (
            <Reveal key={job.id} delay={idx * 0.1}>
              <div className={`experience-card ${job.current ? 'current-engagement' : ''}`}>
                <div className="exp-card-left">
                  <div className="exp-time-badge">
                    <Calendar size={13} />
                    <span>{job.period}</span>
                  </div>

                  <div className="exp-duration-pill">
                    <Clock size={12} />
                    <span>TENURE: {job.duration}</span>
                  </div>

                  {job.current ? (
                    <div className="exp-status-live">
                      <span className="live-pulse-dot" />
                      <span>ACTIVE OPERATION</span>
                    </div>
                  ) : (
                    <div className="exp-status-completed">
                      <CheckCircle2 size={12} />
                      <span>MISSION COMPLETE</span>
                    </div>
                  )}

                  <div className="exp-location-tag">
                    <MapPin size={12} />
                    <span>{job.location}</span>
                  </div>
                </div>

                <div className="exp-card-right">
                  <div className="exp-header">
                    <div>
                      <h3 className="exp-company-name">{job.company}</h3>
                      <div className="exp-role-title">{job.role}</div>
                    </div>
                    {job.company === 'SarthiBus' && (
                      <div className="exp-award-pill">
                        <Award size={13} />
                        <span>Certificate Awarded</span>
                      </div>
                    )}
                  </div>

                  <ul className="exp-bullets">
                    {job.highlights.map((h, i) => (
                      <li key={i} className="exp-bullet-item">
                        <span className="bullet-arrow">›</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="exp-tags-row">
                    {job.tags.map((tag) => (
                      <span key={tag} className="exp-tag-chip">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'
import { ShieldAlert, Bug, Terminal, Search, Cpu, Code2, ArrowUpRight } from 'lucide-react'
import { expertise, languages } from '../data/portfolio'
import Reveal from '../components/Reveal'

const icons: Record<string, React.ReactNode> = {
  'shield-alert': <ShieldAlert size={20} />,
  'bug': <Bug size={20} />,
  'terminal': <Terminal size={20} />,
  'search': <Search size={20} />,
  'cpu': <Cpu size={20} />,
}

export default function ExpertiseSection() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null)

  return (
    <section id="expertise" className="section expertise-editorial-section">
      <div className="container">
        <Reveal>
          <div className="section-label">
            <span className="eyebrow">03 // CAPABILITY MATRIX</span>
          </div>
          <div className="section-title-row">
            <h2 className="section-title">
              Technical domains &amp; tooling<span className="title-accent-dot">.</span>
            </h2>
            <div className="section-counter-badge">5 CORE SPECIALIZATIONS</div>
          </div>
          <p className="section-subtitle">
            Offensive security is not about executing tools blindly; it is about knowing how each protocol operates under the hood and systematically probing for edge-case failures.
          </p>
        </Reveal>

        {/* Capability Table / Matrix */}
        <div className="capability-matrix" style={{ marginTop: '40px' }}>
          {expertise.map((item, index) => {
            const isHovered = activeIdx === index
            return (
              <Reveal key={item.id} delay={index * 0.08}>
                <div
                  className={`matrix-row ${isHovered ? 'hovered' : ''}`}
                  onMouseEnter={() => setActiveIdx(index)}
                  onMouseLeave={() => setActiveIdx(null)}
                >
                  <div className="matrix-col-index">
                    <span className="matrix-num">0{index + 1}</span>
                    <span className="matrix-slash">//</span>
                  </div>

                  <div className="matrix-col-title">
                    <div className="matrix-icon">{icons[item.icon]}</div>
                    <h3 className="matrix-title-text">{item.title}</h3>
                  </div>

                  <div className="matrix-col-desc">
                    <p className="matrix-desc-text">{item.description}</p>
                  </div>

                  <div className="matrix-col-tools">
                    <div className="matrix-tools-wrap">
                      {item.tools.map((t) => (
                        <span key={t} className="matrix-tool-pill">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* Programming Languages Strip */}
        <Reveal delay={0.3}>
          <div className="languages-console-strip">
            <div className="lang-strip-label">
              <Code2 size={15} className="text-accent" />
              <span>CORE PROGRAMMING &amp; SCRIPTING LANGUAGES:</span>
            </div>
            <div className="lang-pills-container">
              {languages.map((lang) => (
                <div key={lang} className="lang-cyber-badge">
                  <span className="badge-prefix">&gt;</span>
                  <span className="badge-name">{lang}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

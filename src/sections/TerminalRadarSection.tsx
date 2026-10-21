import { useState } from 'react'
import Reveal from '../components/Reveal'
import CyberRadar from '../components/CyberRadar'
import InteractiveTerminal from '../components/InteractiveTerminal'
import { Terminal, Radio, ShieldAlert, Cpu } from 'lucide-react'

export default function TerminalRadarSection() {
  const [activeTab, setActiveTab] = useState<'terminal' | 'radar'>('terminal')

  return (
    <section id="terminal-section" className="section terminal-radar-section">
      <div className="container">
        <Reveal>
          <div className="section-label">
            <span className="eyebrow">Interactive Operations</span>
          </div>
          <div className="section-title-row">
            <h2 className="section-title">
              Mission control &amp; telemetry<span className="title-accent-dot">.</span>
            </h2>
            <div className="motion-mode-toggle">
              <button
                onClick={() => setActiveTab('terminal')}
                className={`toggle-tab ${activeTab === 'terminal' ? 'active' : ''}`}
                aria-label="View interactive terminal"
              >
                <Terminal size={14} />
                <span>Command Terminal</span>
              </button>
              <button
                onClick={() => setActiveTab('radar')}
                className={`toggle-tab ${activeTab === 'radar' ? 'active' : ''}`}
                aria-label="View threat radar"
              >
                <Radio size={14} />
                <span>Attack Surface Radar</span>
              </button>
            </div>
          </div>
          <p className="section-subtitle">
            Execute real-time security queries, inspect disclosed vulnerabilities, or navigate the interactive threat vector radar.
          </p>
        </Reveal>

        {/* Viewport: Terminal or Radar */}
        <div className="terminal-radar-viewport" style={{ marginTop: '36px' }}>
          {activeTab === 'terminal' ? (
            <Reveal key="terminal" delay={0.1}>
              <InteractiveTerminal />
            </Reveal>
          ) : (
            <Reveal key="radar" delay={0.1}>
              <CyberRadar />
            </Reveal>
          )}
        </div>
      </div>
    </section>
  )
}

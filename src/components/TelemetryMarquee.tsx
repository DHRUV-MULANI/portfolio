import { Shield, Terminal, Zap, Bug, Cpu, Search, CheckCircle2 } from 'lucide-react'

const TELEMETRY_ITEMS = [
  { icon: Shield, text: 'ZERO-DAY & LOGIC RESEARCH' },
  { icon: Bug, text: 'FINANCIAL TAMPERING VULNERABILITY DISCLOSURE' },
  { icon: Terminal, text: 'OFFENSIVE SECURITY & VAPT' },
  { icon: Zap, text: 'TRYHACKME TOP 3% WORLDWIDE' },
  { icon: Cpu, text: 'AI-ASSISTED OFFENSIVE AUTOMATION' },
  { icon: Search, text: 'DIGITAL FORENSICS & OSINT' },
  { icon: CheckCircle2, text: 'CYBER SHADEZ 26 BUG BOUNTY WINNER' },
  { icon: Shield, text: 'IIT MADRAS ISEA-ISAP CTF 14TH PLACE' },
  { icon: Terminal, text: 'OWASP TOP 10 · BURP SUITE PRO · METASPLOIT' },
]

export default function TelemetryMarquee() {
  return (
    <div className="telemetry-marquee-wrapper" aria-hidden="true">
      <div className="telemetry-marquee-track">
        {/* Render 2 sets to make it seamless infinite loop */}
        {[...TELEMETRY_ITEMS, ...TELEMETRY_ITEMS].map((item, index) => {
          const Icon = item.icon
          return (
            <div key={index} className="telemetry-marquee-item">
              <span className="marquee-dot" />
              <Icon size={13} className="marquee-icon" />
              <span className="marquee-text">{item.text}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

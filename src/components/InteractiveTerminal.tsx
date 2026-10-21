import { useState, useRef, useEffect } from 'react'
import { Terminal, Shield, Play, CornerDownLeft, Maximize2, Minimize2, Trash2 } from 'lucide-react'

interface HistoryEntry {
  command: string
  output: React.ReactNode
  timestamp: string
}

const COMMAND_HELP = [
  { cmd: 'whoami', desc: 'Display researcher profile & clearance' },
  { cmd: 'skills', desc: 'Offensive toolchains, protocols & languages' },
  { cmd: 'cve', desc: 'Disclosed vulnerabilities & Bug Bounty findings' },
  { cmd: 'exp', desc: 'Internship history & ongoing operations' },
  { cmd: 'thm', desc: 'TryHackMe metrics & global standing' },
  { cmd: 'contact', desc: 'Direct encrypted communication channels' },
  { cmd: 'clear', desc: 'Flush terminal buffer' },
]

export default function InteractiveTerminal() {
  const [inputVal, setInputVal] = useState('')
  const [history, setHistory] = useState<HistoryEntry[]>([
    {
      command: 'sys.init --verbose',
      timestamp: '00:01:14',
      output: (
        <div className="terminal-init-output">
          <div className="term-line success">
            [+] SECURITY CORE INITIALIZED // OPERATOR: DHRUV MULANI
          </div>
          <div className="term-line info">
            [*] TARGET ENVIRONMENT: IITRAM CS / OFFENSIVE SECURITY LABS
          </div>
          <div className="term-line warning">
            [!] TYPE OR CLICK ANY QUICK COMMAND BELOW TO QUERY RESEARCH DATA
          </div>
        </div>
      ),
    },
  ])
  const [isExpanded, setIsExpanded] = useState(false)
  const viewportRef = useRef<HTMLDivElement | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const isInitialMount = useRef(true)

  useEffect(() => {
    // Prevent scrolling on initial mount so page always starts at top
    if (isInitialMount.current) {
      isInitialMount.current = false
      return
    }
    // Only scroll the internal terminal container, NEVER the browser window
    if (viewportRef.current) {
      viewportRef.current.scrollTop = viewportRef.current.scrollHeight
    }
  }, [history])

  const executeCommand = (cmdRaw: string) => {
    const cmd = cmdRaw.trim().toLowerCase()
    const now = new Date().toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })

    if (!cmd) return

    if (cmd === 'clear') {
      setHistory([])
      setInputVal('')
      return
    }

    let resultNode: React.ReactNode = null

    switch (cmd) {
      case 'help':
        resultNode = (
          <div className="term-output-block">
            <div className="term-subheading">AVAILABLE TERMINAL COMMANDS:</div>
            <div className="term-cmd-grid">
              {COMMAND_HELP.map((item) => (
                <div key={item.cmd} className="term-cmd-row">
                  <span className="term-cmd-name">{item.cmd}</span>
                  <span className="term-cmd-dots">..................</span>
                  <span className="term-cmd-desc">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        )
        break

      case 'whoami':
        resultNode = (
          <div className="term-output-block">
            <div className="term-line highlight">
              IDENTIFIER: Dhruv Mulani [Computer Engineering @ IITRAM, Final Year]
            </div>
            <div className="term-line">
              ROLE: Cybersecurity Practitioner & Vulnerability Researcher
            </div>
            <div className="term-line">
              FOCUS: Offensive Security, VAPT, Bug Bounty, AI Security Tooling
            </div>
            <div className="term-line text-muted">
              LOCATION: Ahmedabad, Gujarat, India // OPEN TO SECURITY ROLES
            </div>
          </div>
        )
        break

      case 'skills':
        resultNode = (
          <div className="term-output-block">
            <div className="term-subheading">ARSENAL & RECON TOOLS:</div>
            <div className="term-line">
              <span className="term-tag">OFFENSIVE:</span> Burp Suite Pro, Metasploit, Nmap, SQLMap, Nessus, Wireshark, OWASP ZAP
            </div>
            <div className="term-line">
              <span className="term-tag">FORENSICS:</span> Belkasoft Windows Forensics, Memory Dumping, Autopsy, Volatility
            </div>
            <div className="term-line">
              <span className="term-tag">AUTOMATION:</span> Python (Custom Scanners), Bash, Docker, Git, Linux Hardening
            </div>
            <div className="term-line">
              <span className="term-tag">LANGUAGES:</span> C, C++, Python, JavaScript, HTML, CSS, Shell
            </div>
          </div>
        )
        break

      case 'cve':
      case 'bounty':
      case 'vulns':
        resultNode = (
          <div className="term-output-block">
            <div className="term-subheading">SIGNIFICANT SECURITY FINDINGS:</div>
            <div className="term-box-critical">
              <div className="term-box-title">[CRITICAL] SarthiBus Platform — Financial Logic Tampering</div>
              <div className="term-box-desc">
                Identified client-server validation flaw permitting arbitrary transaction parameter modification.
                Reported responsibly with PoC. Assisted engineering team in patching. Awarded Certificate of Appreciation.
              </div>
            </div>
            <div className="term-box-highlight">
              <div className="term-box-title">[COMPETITION] Cyber Shadez '26 National TechFest</div>
              <div className="term-box-desc">
                1st Place Winner in Bug Bounty track — simulated corporate network compromise & vulnerability triage.
              </div>
            </div>
          </div>
        )
        break

      case 'exp':
      case 'experience':
        resultNode = (
          <div className="term-output-block">
            <div className="term-subheading">OPERATIONAL TRACK RECORD:</div>
            <div className="term-line">
              <span className="term-highlight">01. Cyber Octet</span> (Nov 2025 - Present) — Cybersecurity Intern [VAPT]
              <br />
              <span className="text-muted">
                └ Performing systematic web application penetration testing & vulnerability assessment via OWASP methodologies.
              </span>
            </div>
            <div className="term-line">
              <span className="term-highlight">02. SarthiBus</span> (Aug 2025 - Dec 2025) — Bug Hunter
              <br />
              <span className="text-muted">
                └ Discovered financial logic flaw, coordinated patch release, awarded recognition certificate.
              </span>
            </div>
            <div className="term-line">
              <span className="term-highlight">03. CodTech</span> (Jan 2025 - Mar 2025) — Ethical Hacking Intern
              <br />
              <span className="text-muted">
                └ Built file integrity monitoring daemon & performed API security audits.
              </span>
            </div>
          </div>
        )
        break

      case 'thm':
      case 'tryhackme':
        resultNode = (
          <div className="term-output-block">
            <div className="term-subheading">TRYHACKME METRICS:</div>
            <div className="term-line success">
              RANK: Top 3% Globally // USERNAME: Boss.Hack3r
            </div>
            <div className="term-line">
              PROFILE: https://tryhackme.com/p/Boss.Hack3r
            </div>
            <div className="term-line">
              ROOMS: Network Pivoting, Active Directory, Web App Security, Privilege Escalation
            </div>
          </div>
        )
        break

      case 'contact':
        resultNode = (
          <div className="term-output-block">
            <div className="term-subheading">COMMUNICATION ENDPOINTS:</div>
            <div className="term-line">
              EMAIL: <a href="mailto:dhruvkumarmulani@gmail.com" className="term-link">dhruvkumarmulani@gmail.com</a>
            </div>
            <div className="term-line">
              PHONE: <span className="term-highlight">+91 87588 21755</span>
            </div>
            <div className="term-line">
              LINKEDIN: <a href="https://linkedin.com/in/dhruv-mulani" target="_blank" rel="noreferrer" className="term-link">linkedin.com/in/dhruv-mulani</a>
            </div>
            <div className="term-line">
              GITHUB: <a href="https://github.com/dhruv-mulani" target="_blank" rel="noreferrer" className="term-link">github.com/dhruv-mulani</a>
            </div>
          </div>
        )
        break

      default:
        resultNode = (
          <div className="term-line error">
            [x] Command not recognized: '{cmdRaw}'. Type <span className="term-highlight">help</span> or click quick pills below.
          </div>
        )
    }

    setHistory((prev) => [
      ...prev,
      {
        command: cmdRaw,
        timestamp: now,
        output: resultNode,
      },
    ])
    setInputVal('')
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal)
    }
  }

  return (
    <div className={`cyber-terminal-card ${isExpanded ? 'expanded' : ''}`}>
      {/* Terminal Titlebar */}
      <div className="terminal-titlebar">
        <div className="titlebar-controls">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <div className="titlebar-center">
          <Terminal size={13} className="term-icon" />
          <span className="titlebar-text">dhruv@sec-ops:~ [BASH / VULN-RECON]</span>
        </div>
        <div className="titlebar-actions">
          <button
            onClick={() => setHistory([])}
            className="action-btn"
            title="Clear buffer"
            aria-label="Clear terminal"
          >
            <Trash2 size={13} />
          </button>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="action-btn"
            title={isExpanded ? 'Restore' : 'Maximize'}
            aria-label="Toggle size"
          >
            {isExpanded ? <Minimize2 size={13} /> : <Maximize2 size={13} />}
          </button>
        </div>
      </div>

      {/* Terminal Log Viewport */}
      <div
        ref={viewportRef}
        className="terminal-viewport"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((item, idx) => (
          <div key={idx} className="terminal-history-item">
            <div className="terminal-prompt-line">
              <span className="prompt-user">dhruv@sec-ops</span>
              <span className="prompt-colon">:</span>
              <span className="prompt-path">~</span>
              <span className="prompt-dollar">$</span>
              <span className="prompt-cmd">{item.command}</span>
              <span className="prompt-time">{item.timestamp}</span>
            </div>
            <div className="terminal-output-container">{item.output}</div>
          </div>
        ))}

        {/* Active Input Line */}
        <div className="terminal-input-line">
          <span className="prompt-user">dhruv@sec-ops</span>
          <span className="prompt-colon">:</span>
          <span className="prompt-path">~</span>
          <span className="prompt-dollar">$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="type 'help' or click quick pills..."
            className="terminal-text-input"
            spellCheck={false}
            autoComplete="off"
            aria-label="Terminal command input"
          />
          <button
            onClick={() => executeCommand(inputVal)}
            className="terminal-send-btn"
            aria-label="Execute command"
          >
            <CornerDownLeft size={13} />
          </button>
        </div>
      </div>

      {/* Quick Action Chips Bar */}
      <div className="terminal-chips-bar">
        <span className="chips-hint">QUICK EXEC:</span>
        <div className="chips-scroll">
          {['whoami', 'skills', 'cve', 'exp', 'thm', 'contact', 'help', 'clear'].map((c) => (
            <button
              key={c}
              onClick={() => executeCommand(c)}
              className="quick-cmd-chip"
            >
              <Play size={9} />
              {c}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

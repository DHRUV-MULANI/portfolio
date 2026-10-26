import { useState, FormEvent } from 'react'
import {
  Mail,
  ShieldCheck,
  MapPin,
  Github,
  Linkedin,
  Copy,
  Check,
  Send,
  Loader2,
  Terminal,
  Clock,
} from 'lucide-react'
import { personal, contactConfig } from '../data/portfolio'
import Reveal from '../components/Reveal'

export default function ContactSection() {
  const [copied, setCopied] = useState(false)
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [errorMsg, setErrorMsg] = useState('')

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {
      // Fallback
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setFormState('loading')
    setErrorMsg('')

    // 1. Prepare FormData payload for direct inbox delivery (no external email client opened)
    const payload = new FormData()
    payload.append('name', formData.name)
    payload.append('email', formData.email)
    payload.append('_replyto', formData.email)
    payload.append(
      '_subject',
      formData.subject
        ? `[Portfolio Dispatch] ${formData.subject}`
        : `[Portfolio Dispatch] Security Inquiry from ${formData.name}`
    )
    payload.append('message', formData.message)
    payload.append('_captcha', 'false')
    payload.append('_template', 'table')

    // Dispatch directly to FormSubmit endpoint via AJAX
    try {
      const res = await fetch(contactConfig.formEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: payload,
      })

      if (res.ok) {
        setFormState('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        return
      }
    } catch {
      // Proceed to PHP fallback if hosted on Apache/Hostinger
    }

    // 2. Try PHP mail handler fallback
    try {
      const phpRes = await fetch('/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      })

      if (phpRes.ok) {
        const result = await phpRes.json()
        if (result.success) {
          setFormState('success')
          setFormData({ name: '', email: '', subject: '', message: '' })
          return
        }
      }
    } catch {
      // Offline / blocked
    }

    // Direct background transmission failed (e.g. ad-blocker or offline)
    // Do NOT force mailto popup unexpectedly; provide clean in-form notification
    setFormState('error')
    setErrorMsg(
      `Direct dispatch could not connect. Please reach out directly at ${personal.email}`
    )
  }

  return (
    <section id="contact" className="section contact-editorial-section">
      <div className="container">
        <Reveal>
          <div className="section-label">
            <span className="eyebrow">08 // TRANSMISSION ENDPOINT</span>
          </div>
          <h2 className="section-title">
            Initiate connection<span className="title-accent-dot">.</span>
          </h2>
          <p className="section-subtitle">
            Whether for security engineering roles, vulnerability research engagements, penetration testing audits, or CTF collaboration — my channels are open.
          </p>
        </Reveal>

        <div className="contact-editorial-grid" style={{ marginTop: '48px' }}>
          {/* Left Column: Direct Channels & Telemetry */}
          <Reveal delay={0.1}>
            <div className="contact-channels-column">
              <div className="transmission-status-card">
                <div className="trans-header">
                  <span className="trans-dot" />
                  <span className="trans-label">SECURE_CHANNEL // STATUS: ACTIVE</span>
                </div>
                <p className="trans-text">
                  Direct communication channels are monitored daily. Inquiries regarding bug bounties, VAPT roles, CTF collaborations, or security engineering are prioritized.
                </p>
              </div>

              {/* Direct clickable contact cards */}
              <div className="contact-methods-stack">
                {/* Email card */}
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="contact-touchpoint-card"
                  aria-label={copied ? 'Email copied' : 'Click to copy email'}
                >
                  <div className="touchpoint-icon-box">
                    <Mail size={18} />
                  </div>
                  <div className="touchpoint-body">
                    <span className="touchpoint-label">DIRECT EMAIL (CLICK TO COPY)</span>
                    <span className="touchpoint-val">{personal.email}</span>
                  </div>
                  <div className="touchpoint-action-state">
                    {copied ? (
                      <span className="action-tag copied">
                        <Check size={12} /> COPIED
                      </span>
                    ) : (
                      <span className="action-tag">
                        <Copy size={12} /> COPY
                      </span>
                    )}
                  </div>
                </button>

                {/* Response SLA / Security Protocol Card */}
                <div className="contact-touchpoint-card static">
                  <div className="touchpoint-icon-box">
                    <Clock size={18} />
                  </div>
                  <div className="touchpoint-body">
                    <span className="touchpoint-label">RESPONSE SLA &amp; PROTOCOL</span>
                    <span className="touchpoint-val">&lt; 24h Turnaround Time</span>
                  </div>
                  <div className="touchpoint-action-state">
                    <span className="action-tag">FAST_DISPATCH</span>
                  </div>
                </div>

                {/* Location card */}
                <div className="contact-touchpoint-card static">
                  <div className="touchpoint-icon-box">
                    <MapPin size={18} />
                  </div>
                  <div className="touchpoint-body">
                    <span className="touchpoint-label">BASE LOCATION</span>
                    <span className="touchpoint-val">{personal.location}</span>
                  </div>
                  <div className="touchpoint-action-state">
                    <span className="action-tag">UTC+5:30</span>
                  </div>
                </div>
              </div>

              {/* Verified Profiles */}
              <div className="verified-profiles-strip">
                <span className="profiles-label">VERIFIED PROFILES:</span>
                <div className="profiles-links-row">
                  <a
                    href={personal.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="profile-link-chip"
                  >
                    <Linkedin size={13} />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={personal.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="profile-link-chip"
                  >
                    <Github size={13} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={personal.social.tryhackme}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="profile-link-chip"
                  >
                    <Terminal size={13} />
                    <span>TryHackMe</span>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Transmission Form */}
          <Reveal delay={0.15}>
            <div className="contact-form-panel">
              <div className="form-topbar">
                <span className="form-top-title">ENCRYPTED MESSAGE DISPATCH</span>
                <span className="form-top-protocol">PROTOCOL: DIRECT_MAIL</span>
              </div>

              <form onSubmit={handleSubmit} className="editorial-form">
                <div className="form-group-row">
                  <div className="form-field">
                    <label htmlFor="name" className="field-label">
                      OPERATOR / YOUR NAME *
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Dhruv Mulani"
                      className="field-input"
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="email" className="field-label">
                      RETURN ENDPOINT / EMAIL *
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. dhruvmulani.work@gmail.com"
                      className="field-input"
                    />
                  </div>
                </div>

                <div className="form-field" style={{ marginTop: '16px' }}>
                  <label htmlFor="subject" className="field-label">
                    SUBJECT / ENGAGEMENT TYPE *
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. VAPT Security Audit / Offensive Security Assessment"
                    className="field-input"
                  />
                </div>

                <div className="form-field" style={{ marginTop: '16px' }}>
                  <label htmlFor="message" className="field-label">
                    TRANSMISSION BODY / DETAILS *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="e.g. Namaste Dhruv, reviewed your Zero Trace CTF writeups and VAPT findings. We would like to collaborate on an offensive security assessment and penetration testing audit for our infrastructure..."
                    className="field-textarea"
                  />
                </div>

                {formState === 'error' && (
                  <div className="form-error-banner">
                    <div>{errorMsg}</div>
                    <a
                      href={`mailto:${personal.email}?subject=${encodeURIComponent(
                        formData.subject || 'Security Inquiry'
                      )}&body=${encodeURIComponent(
                        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
                      )}`}
                      className="form-fallback-action"
                      style={{
                        display: 'inline-block',
                        marginTop: '8px',
                        color: 'var(--neon-green)',
                        textDecoration: 'underline',
                        fontSize: '12px',
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      Click here to launch email client manually →
                    </a>
                  </div>
                )}

                {formState === 'success' && (
                  <div className="form-success-banner">
                    <Check size={16} />
                    <span>Direct transmission delivered! Message dispatched straight to {personal.email}.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formState === 'loading'}
                  className="btn btn-editorial-submit"
                >
                  {formState === 'loading' ? (
                    <>
                      <Loader2 size={16} className="btn-spinner" />
                      <span>DISPATCHING...</span>
                    </>
                  ) : (
                    <>
                      <span>TRANSMIT MESSAGE</span>
                      <Send size={15} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

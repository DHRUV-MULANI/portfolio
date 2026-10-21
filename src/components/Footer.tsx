import { Github, Linkedin, Mail, ArrowUp, Shield, Terminal } from 'lucide-react'
import { personal } from '../data/portfolio'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer-editorial" role="contentinfo">
      <div className="container">
        <div className="footer-top-grid">
          {/* Brand & Mission */}
          <div className="footer-brand-col">
            <div className="footer-logo">
              <span className="brand-dot-beacon" />
              <span className="brand-logo-text">
                <span className="brand-dh">DH</span>
                <span className="brand-ruvvv">ruvvv</span>
                <span className="brand-py">.py</span>
              </span>
            </div>
            <p className="footer-mission">
              Cybersecurity practitioner specializing in vulnerability research, penetration testing, and security automation tooling. Breaking assumptions to build unbreakable systems.
            </p>
            <div className="footer-location-text">
              Based in Ahmedabad, Gujarat, India · IITRAM Computer Engineering (Final Year)
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="footer-nav-col">
            <div className="footer-heading">NAVIGATION</div>
            <ul className="footer-links-list">
              <li><a href="#about">01 // Dossier</a></li>
              <li><a href="#terminal-section">02 // Mission Control</a></li>
              <li><a href="#expertise">03 // Capability Matrix</a></li>
              <li><a href="#experience">04 // Operational Track Record</a></li>
              <li><a href="#projects">05 // Systems &amp; Tooling</a></li>
              <li><a href="#achievements">06 // Competition Results</a></li>
              <li><a href="#education">07 // Academics &amp; Credentials</a></li>
              <li><a href="#contact">08 // Transmission Endpoint</a></li>
            </ul>
          </div>

          {/* Security Telemetry & Links */}
          <div className="footer-connect-col">
            <div className="footer-heading">COMMUNICATION ENDPOINTS</div>
            <div className="footer-social-row">
              <a
                href={personal.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={15} />
                <span>LinkedIn</span>
              </a>
              <a
                href={personal.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="GitHub Profile"
              >
                <Github size={15} />
                <span>GitHub</span>
              </a>
              <a
                href={personal.social.tryhackme}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="TryHackMe Profile"
              >
                <Terminal size={15} />
                <span>TryHackMe</span>
              </a>
            </div>

            <div className="footer-contact-direct">
              <span className="direct-label">ENCRYPTED EMAIL:</span>
              <a href={`mailto:${personal.email}`} className="direct-email">
                {personal.email}
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="footer-scroll-top-btn"
              aria-label="Scroll back to top"
            >
              <ArrowUp size={14} />
              <span>RETURN TO TOP</span>
            </button>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <div className="footer-copy">
            © {currentYear} Dhruv Mulani. All rights reserved. Built with precision and adversarial curiosity.
          </div>
          <div className="footer-specs">
            <span>REACT 18</span>
            <span>·</span>
            <span>THREE.JS 3D</span>
            <span>·</span>
            <span>FRAMER MOTION</span>
            <span>·</span>
            <span>HOSTINGER READY</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

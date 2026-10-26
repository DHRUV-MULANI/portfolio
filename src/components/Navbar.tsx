import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'
import { personal } from '../data/portfolio'

const navItems = [
  { label: 'Dossier', href: '#about' },
  { label: 'Terminal', href: '#terminal-section' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Academics', href: '#education' },
  { label: 'Contact', href: '#contact' },
  { label: 'Resume', href: '/resume.html', isExternal: true },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const target = document.querySelector(href)
    target?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header
        className={`editorial-navbar ${scrolled ? 'is-scrolled' : ''}`}
        role="banner"
      >
        <div className="navbar-container">
          {/* Brand Wordmark: DHruvvv.py with DH in distinct color */}
          <a
            href="#hero"
            className="navbar-brand-editorial"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('#hero')
            }}
            aria-label="Dhruvvv.py — Return to top"
          >
            <div className="brand-dot-beacon" />
            <span className="brand-logo-text">
              <span className="brand-dh">DH</span>
              <span className="brand-ruvvv">ruvvv</span>
              <span className="brand-py">.py</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="navbar-desktop-nav" role="navigation" aria-label="Main Navigation">
            {navItems.map((item) =>
              item.isExternal ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link-editorial resume-nav-pill-link"
                  aria-label="Open Dhruv Mulani Resume in new tab"
                >
                  <span>{item.label}</span>
                  <span className="nav-external-arrow">↗</span>
                </a>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  className="nav-link-editorial"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }}
                >
                  {item.label}
                </a>
              )
            )}
          </nav>

          {/* Right Action Buttons */}
          <div className="navbar-right-actions">
            <a
              href="/Dhruv_Mulani.pdf"
              download="Dhruv_Mulani.pdf"
              className="btn btn-editorial-nav-resume"
              aria-label="Direct Download Dhruv Mulani Resume PDF"
            >
              <Download size={13} />
              <span>Download PDF</span>
            </a>

            <button
              className="mobile-hamburger-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-editorial-drawer"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
          >
            <div className="drawer-header">
              <div className="brand-logo-text">
                <span className="brand-dh">DH</span>
                <span className="brand-ruvvv">ruvvv</span>
                <span className="brand-py">.py</span>
              </div>
              <button
                className="drawer-close-btn"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <div className="drawer-links-stack">
              {navItems.map((item, idx) =>
                item.isExternal ? (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="drawer-nav-item resume-highlight"
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.03 + 0.04 }}
                    onClick={() => setMobileOpen(false)}
                  >
                    <span className="drawer-index">0{idx + 1} //</span>
                    <span className="drawer-label">{item.label} (Dedicated Page ↗)</span>
                  </motion.a>
                ) : (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className="drawer-nav-item"
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.03 + 0.04 }}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(item.href)
                    }}
                  >
                    <span className="drawer-index">0{idx + 1} //</span>
                    <span className="drawer-label">{item.label}</span>
                  </motion.a>
                )
              )}
            </div>

            <div className="drawer-footer-actions">
              <a
                href="/Dhruv_Mulani.pdf"
                download="Dhruv_Mulani.pdf"
                className="btn btn-editorial-primary"
                style={{ width: '100%', justifyContent: 'center' }}
                onClick={() => setMobileOpen(false)}
              >
                <Download size={15} />
                <span>Direct Download Resume (PDF)</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

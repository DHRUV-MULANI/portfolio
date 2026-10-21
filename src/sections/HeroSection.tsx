import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Terminal, MapPin, ShieldCheck, Download } from 'lucide-react'
import { personal } from '../data/portfolio'

const HeroScene = lazy(() => import('../components/HeroScene'))

const variants = {
  container: {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  },
}

export default function HeroSection() {
  return (
    <section id="hero" className="hero-editorial">
      <div className="hero-ambient-glow" aria-hidden="true" />

      <div className="container">
        <div className="hero-main-layout">
          {/* Left Column: Title & Narrative */}
          <motion.div
            className="hero-editorial-content"
            variants={variants.container}
            initial="hidden"
            animate="show"
          >
            {/* Python Execution Badge */}
            <motion.div className="hero-exec-badge" variants={variants.item}>
              <span className="badge-prompt">&gt;</span>
              <span className="badge-cmd">python3</span>
              <span className="badge-file">
                <span className="brand-dh">DH</span>ruvvv<span className="brand-py">.py</span>
              </span>
              <span className="badge-status">--mode=offensive</span>
            </motion.div>

            {/* Main Title: DHruvvv.py with DH in distinct color */}
            <motion.h1 className="hero-display-title" variants={variants.item}>
              <span className="brand-dh">DH</span>
              <span className="brand-ruvvv">ruvvv</span>
              <span className="brand-py">.py</span>
            </motion.h1>

            {/* Real Name & Professional Title */}
            <motion.div className="hero-identity-line" variants={variants.item}>
              <span className="identity-name">Dhruv Mulani</span>
              <span className="identity-sep">/</span>
              <span className="identity-role">Cybersecurity Researcher &amp; Security Engineer</span>
            </motion.div>

            {/* Core Philosophy Statement */}
            <motion.div className="hero-statement" variants={variants.item}>
              <div className="statement-lead">
                Breaking assumptions. <em>Building resilience.</em>
              </div>
              <p className="statement-body">
                Exploring how software architectures and access controls fail in the wild — specializing in <strong>vulnerability research</strong>, <strong>penetration testing (VAPT)</strong>, and <strong>AI-assisted security automation</strong>.
              </p>
            </motion.div>

            {/* Call to Actions */}
            <motion.div className="hero-action-row" variants={variants.item}>
              <a
                href="#terminal-section"
                className="btn btn-editorial-primary"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#terminal-section')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <Terminal size={15} />
                <span>Launch Terminal</span>
              </a>

              <a
                href="#projects"
                className="btn btn-editorial-secondary"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <span>View Work</span>
                <ArrowRight size={15} />
              </a>

              <a
                href={personal.resumeUrl}
                download
                className="btn btn-editorial-ghost"
                aria-label="Download resume PDF"
              >
                <Download size={14} />
                <span>Resume</span>
              </a>
            </motion.div>

            {/* Clean Metrics Strip */}
            <motion.div className="hero-metrics-strip" variants={variants.item}>
              <div className="hero-metric-item">
                <span className="metric-num">01</span>
                <span className="metric-desc">Nat'l Bug Bounty Win</span>
              </div>
              <div className="metric-separator" />
              <div className="hero-metric-item">
                <span className="metric-num">Top 3%</span>
                <span className="metric-desc">TryHackMe Global</span>
              </div>
              <div className="metric-separator" />
              <div className="hero-metric-item">
                <span className="metric-num">3+</span>
                <span className="metric-desc">Security Internships</span>
              </div>
            </motion.div>

            {/* Location & Status Bar */}
            <motion.div className="hero-location-bar" variants={variants.item}>
              <span className="location-tag">
                <MapPin size={12} />
                {personal.location}
              </span>
              <span className="dot-sep">·</span>
              <span className="status-live">
                <span className="pulse-beacon" />
                {personal.availability}
              </span>
            </motion.div>
          </motion.div>

          {/* Right Column: Clean Interactive 3D Visual */}
          <div className="hero-visual-column">
            <div className="hero-visual-frame">
              <div className="frame-clean-bar">
                <span className="bar-tag">3D // CRYPTOGRAPHIC CORE</span>
                <span className="bar-status">
                  <ShieldCheck size={12} className="text-accent" />
                  INTERACTIVE
                </span>
              </div>

              <div className="frame-canvas-area" aria-hidden="true">
                <Suspense
                  fallback={
                    <div className="canvas-fallback-loader">
                      <div className="fallback-ring" />
                      <span className="fallback-text">INITIALIZING 3D...</span>
                    </div>
                  }
                >
                  <HeroScene />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

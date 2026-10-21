import { useEffect } from 'react'
import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import TelemetryMarquee from './components/TelemetryMarquee'
import Footer from './components/Footer'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import TerminalRadarSection from './sections/TerminalRadarSection'
import ExpertiseSection from './sections/ExpertiseSection'
import ExperienceSection from './sections/ExperienceSection'
import ProjectsSection from './sections/ProjectsSection'
import AchievementsSection from './sections/AchievementsSection'
import EducationSection from './sections/EducationSection'
import ContactSection from './sections/ContactSection'

export default function App() {
  useEffect(() => {
    // Ensure the website ALWAYS lands at the very top of the page on refresh or visit
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="portfolio-app-root">
      <ScrollProgress />
      <Navbar />

      <main id="main-content">
        {/* 01. Hero with 3D Security Artifact & Editorial Layout */}
        <HeroSection />

        {/* Kinetic Motion Typography & Telemetry Ticker */}
        <TelemetryMarquee />

        {/* 02. Dossier / About */}
        <AboutSection />

        {/* Motion Graphics Hub: Interactive Terminal Simulator & Threat Radar */}
        <TerminalRadarSection />

        {/* 03. Capability Matrix / Expertise */}
        <ExpertiseSection />

        {/* 04. Operational Track Record / Experience */}
        <ExperienceSection />

        {/* 05. Systems & Tooling / Projects */}
        <ProjectsSection />

        {/* 06. Competition Results / Achievements */}
        <AchievementsSection />

        {/* 07. Academics & Certifications / Education */}
        <EducationSection />

        {/* 08. Transmission Endpoint / Contact */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}

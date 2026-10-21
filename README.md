# Dhruv Mulani — Cybersecurity Portfolio Website

A bespoke, production-ready personal portfolio website for **Dhruv Mulani**, a cybersecurity practitioner specializing in vulnerability research, bug bounty, penetration testing (VAPT), security automation, and AI-assisted security tooling.

Built with **React 18 + Vite + TypeScript + Three.js (@react-three/fiber) + Framer Motion + Vanilla CSS**.

---

## Design System & Architecture

- **Rich Typography**:
  - **Display / Headings**: [Syne](https://fonts.google.com/specimen/Syne) (700/800 bold, editorial, distinctive)
  - **Body / Prose**: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) (modern, clean, highly readable)
  - **Technical / Terminal**: [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) (telemetry, audit logs, commands)
- **Palette**:
  - Deep Obsidian Void (`#06070a`, `#0a0c12`)
  - Phosphor Radar Emerald (`#00f59b`, `#05ffa1`)
  - Tactical Uranium Amber (`#ffb020`)
  - Architectural Hairline Grid (`rgba(255, 255, 255, 0.07)`)
- **Motion Graphics**:
  - **Attack Surface Radar (`CyberRadar.tsx`)**: Real-time canvas radar with rotating sweep beam, concentric range rings, interactive vulnerability nodes, and live coordinate telemetry.
  - **Interactive Terminal Simulator (`InteractiveTerminal.tsx`)**: Interactive console where users can execute commands (`whoami`, `skills`, `cve`, `exp`, `thm`, `contact`, `clear`) or click quick-run chips.
  - **Kinetic Telemetry Ticker (`TelemetryMarquee.tsx`)**: Infinite scrolling typography ticker with live research credentials.
  - **3D Cryptographic Artifact (`HeroScene.tsx`)**: Wireframe icosahedron cage, tactical rings, metallic obsidian core, and mouse-reactive particle cloud.
- **100% Responsive**: Tested across mobile (320px–480px), tablets (768px–1024px), laptops, and desktop ultra-wide displays.

---

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build for production (outputs to dist/)
npm run build
```

---

## Hostinger Deployment Guide

1. Run `npm run build` locally.
2. Log in to **Hostinger hPanel**.
3. Open **File Manager** for your domain (`public_html`).
4. Upload all contents inside the `dist/` directory into `public_html/`:
   - `assets/` folder
   - `index.html`
   - `Dhruv_Mulani.pdf`
   - `profile.jpg`
   - `favicon.svg`
   - `robots.txt`
   - `sitemap.xml`
5. Enable **SSL / HTTPS** in Hostinger hPanel.

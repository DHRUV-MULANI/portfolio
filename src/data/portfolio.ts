// ============================================================
// SINGLE SOURCE OF TRUTH — All portfolio data lives here
// Update this file to update the entire website
// ============================================================

export const personal = {
  name: 'Dhruv Mulani',
  tagline: 'I hack systems to secure them.',
  subTagline: 'I explore how systems fail — and how to make them stronger.',
  eyebrow: 'CYBERSECURITY · SECURITY RESEARCH · AUTOMATION',
  bio: `I'm a cybersecurity practitioner working across offensive security, vulnerability research, digital forensics, and security automation — with a growing focus on AI-assisted tools that streamline how we find and fix weaknesses.

Currently in my final year of Computer Engineering at IITRAM, Ahmedabad, while putting theory to work through internships, CTF competitions, and independent research on real-world vulnerabilities.`,
  location: 'Ahmedabad, India',
  email: 'dhruvmulani.work@gmail.com',
  availability: 'Open to opportunities',
  social: {
    linkedin: 'https://linkedin.com/in/dhruv-mulani',
    github: 'https://github.com/dhruv-mulani',
    tryhackme: 'https://tryhackme.com/p/Boss.Hack3r',
  },
  resumeUrl: '/Dhruv_Mulani.pdf',
  resumePageUrl: '/resume.html',
}

export const education = {
  degree: 'Bachelor of Engineering in Computer Engineering',
  institution: 'Institute of Infrastructure, Technology, Research, and Management (IITRAM)',
  location: 'Ahmedabad, India',
  period: 'Final Year Candidate (2023 – 2027)',
  coursework: [
    'Operating Systems',
    'Computer Networks',
    'Cybersecurity Fundamentals',
    'Data Structures',
    'Cryptography',
    'Digital Forensics',
    'Web Security',
  ],
}

export const experience = [
  {
    id: 'cyber-octet',
    company: 'Cyber Octet',
    role: 'Cybersecurity Intern — VAPT',
    period: 'Nov 2025 – Nov 2026',
    duration: '1 Year',
    location: 'Ahmedabad, Gujarat',
    highlights: [
      'Performed vulnerability assessment and basic penetration testing on web applications and systems to identify security weaknesses.',
      'Conducted reconnaissance, scanning, and analysis using Nmap and Burp Suite following OWASP testing methodologies.',
      'Documented findings and contributed to remediation guidance for identified vulnerabilities.',
    ],
    tags: ['VAPT', 'Nmap', 'Burp Suite', 'OWASP'],
    current: true,
  },
  {
    id: 'sarthi-bus',
    company: 'SarthiBus',
    role: 'Bug Hunter',
    period: 'Aug 2025 – Dec 2025',
    duration: '5 Months',
    location: 'Surat',
    highlights: [
      'Discovered and responsibly reported a financial tampering vulnerability in the platform.',
      'Assisted in implementing security fixes and recommending security best practices.',
      'Awarded a Certificate of Appreciation for the contribution to platform security.',
    ],
    tags: ['Bug Bounty', 'Financial Security', 'Responsible Disclosure'],
    current: false,
  },
  {
    id: 'codtech',
    company: 'CodTech',
    role: 'Cybersecurity & Ethical Hacking Intern',
    period: 'Jan 2025 – Mar 2025',
    duration: '3 Months',
    location: 'Ahmedabad',
    highlights: [
      'Developed a file integrity checking system to detect unauthorized modifications.',
      'Conducted penetration testing and API security audits on assigned targets.',
      'Implemented real-time threat detection mechanisms for system monitoring.',
    ],
    tags: ['Ethical Hacking', 'API Security', 'Python', 'Threat Detection'],
    current: false,
  },
]

export const expertise = [
  {
    id: 'offensive',
    title: 'Offensive Security & VAPT',
    description:
      'Hands-on vulnerability assessment and penetration testing on web applications, APIs, and systems. Proficient with industry-standard methodologies and tools.',
    tools: ['Metasploit', 'Burp Suite', 'Nmap', 'SQLMap', 'Nessus'],
    icon: 'shield-alert',
  },
  {
    id: 'bugbounty',
    title: 'Bug Bounty & Vulnerability Research',
    description:
      'Independent discovery and responsible disclosure of security vulnerabilities. Experience identifying real-world flaws including financial logic and authorization issues.',
    tools: ['Burp Suite', 'OWASP', 'Wireshark', 'Recon-ng'],
    icon: 'bug',
  },
  {
    id: 'automation',
    title: 'Security Automation & Scripting',
    description:
      'Building tools and scripts to automate reconnaissance, vulnerability scanning, and offensive workflows. Focused on practical efficiency gains.',
    tools: ['Python', 'Bash', 'Docker', 'Git', 'Linux'],
    icon: 'terminal',
  },
  {
    id: 'forensics',
    title: 'Digital Forensics & OSINT',
    description:
      'Windows forensics, memory analysis, and open-source intelligence gathering. Certified in Belkasoft Windows Forensics and Advanced Forensics.',
    tools: ['Belkasoft', 'Wireshark', 'OSINT Framework', 'IMINT'],
    icon: 'search',
  },
  {
    id: 'ai-security',
    title: 'AI-Assisted Security Tooling',
    description:
      'Developing AI-assisted security tools, exploit development scripts, and automated agents that streamline vulnerability discovery and offensive security workflows.',
    tools: ['Python', 'LLM APIs', 'Automation', 'Scripting'],
    icon: 'cpu',
  },
]

export const languages = ['C', 'C++', 'Python', 'HTML', 'CSS', 'JavaScript']

export const projects = [
  {
    id: 'logify',
    number: '01',
    title: 'LOGify',
    tagline: 'Unified log management — CLI to cloud.',
    description:
      'A complete log management platform combining a powerful CLI agent with a modern cloud dashboard. Automates log collection and organization, reducing manual monitoring effort while enabling faster system activity analysis and troubleshooting.',
    tags: ['Python', 'CLI', 'Cloud Dashboard', 'Log Analysis', 'Automation'],
    githubUrl: null,
    liveUrl: null,
    featured: true,
  },
  {
    id: 'healthcare',
    number: '02',
    title: 'Online Healthcare System 2.0',
    tagline: 'Full-stack healthcare platform built for clarity.',
    description:
      'A full-stack platform that streamlines appointment handling, patient records, and service management in a centralized system. Designed for operational efficiency and organized access to healthcare services.',
    tags: ['Firebase', 'Node.js', 'JavaScript', 'HTML', 'CSS'],
    githubUrl: null,
    liveUrl: null,
    featured: false,
  },
]

export const githubProjects = [
  {
    id: 'thm-autoflow',
    title: 'THM-AutoFlow',
    tagline: 'Automated Challenge & Request Orchestration Framework',
    description:
      'Python-based request automation framework designed for structured challenge interaction, automated task submission workflows, session management, and API-driven learning environments.',
    tags: ['Python', 'Requests', 'Automation', 'CLI', 'API Testing'],
    language: 'Python',
    githubUrl: 'https://github.com/DHRUV-MULANI/THM-AutoFlow',
    featured: true,
  },
  {
    id: 'cryptavault',
    title: 'CryptaVault',
    tagline: 'Zero-Knowledge Hybrid & Post-Quantum Cryptographic Framework',
    description:
      'Zero-knowledge hybrid cryptographic storage framework with adaptive classical and post-quantum encryption algorithms (CRYSTALS-Kyber, Dilithium) safeguarding high-assurance files against future quantum cryptanalysis.',
    tags: ['TypeScript', 'Post-Quantum Crypto', 'Kyber', 'Zero-Knowledge'],
    language: 'TypeScript',
    githubUrl: 'https://github.com/DHRUV-MULANI/CryptaVault',
    featured: true,
  },
  {
    id: 'oob-tunnels',
    title: 'oob-tunnels',
    tagline: 'Dual-Tunnel Out-of-Band (OOB) Callback Infrastructure',
    description:
      'Production-grade dual-tunnel OOB callback architecture combining Cloudflare Tunnels for HTTP/HTTPS callbacks and ngrok TCP for raw interactive reverse shells with automated DNS synchronization and systemd persistence.',
    tags: ['Shell', 'Red Teaming', 'Cloudflare Tunnels', 'Reverse Shells'],
    language: 'Shell',
    githubUrl: 'https://github.com/DHRUV-MULANI/oob-tunnels',
    featured: true,
  },
  {
    id: 'auroch-3d',
    title: 'auroch-3d',
    tagline: 'Interactive 3D Simulation of Auroch (ACM ASIA CCS \'24)',
    description:
      'Algorithmic simulation and 3D visualization of auction-based multipath routing for payment channel networks, modeling concurrent transactions and liquidity rebalancing.',
    tags: ['JavaScript', 'WebGL', 'Payment Channels', 'Algorithms'],
    language: 'JavaScript',
    githubUrl: 'https://github.com/DHRUV-MULANI/auroch-3d',
    featured: false,
  },
  {
    id: 'hashpic',
    title: 'hashpic',
    tagline: 'Cryptographic Hash Digest Pixel-Art Visualizer',
    description:
      'Generates deterministic pixel-art visual fingerprints from cryptographic hash digests (MD5, SHA-512, SHA3-512, BLAKE2b, SHAKE-256) as scalable SVGs and PNGs.',
    tags: ['Python', 'Cryptography', 'Pixel Art', 'SVG Generator'],
    language: 'Python',
    githubUrl: 'https://github.com/DHRUV-MULANI/hashpic',
    featured: false,
  },
]

// ============================================================
// CONSOLIDATED ACHIEVEMENTS & CERTIFICATES (Single Source)
// ============================================================
export const achievementsAndCertificates = {
  // Top CTF & Security Achievements
  achievements: [
    {
      id: 'zero-trace-ctf',
      rank: '4th Place',
      title: 'Zero Trace CTF 2026 — HackCTF',
      subtitle: '4th Place Overall · 18 Solves across Web, Pwn, Crypto, Forensics & OSINT',
      issuer: 'Hacklido / HackCTF',
      year: '2026',
      icon: 'trophy',
      highlight: true,
      writeupUrl: 'https://github.com/DHRUV-MULANI/zero-trace-ctf-writeups',
      certUrl: 'https://learn.hacklido.com/ctf-events/41162d1b4b3b8d35/certificate/12caf2bb88b80bc07e2b707bc731d1fb',
      description: 'Secured 4th place overall with 18 full exploitation chains documented with solve scripts, decoy bypasses, and published writeups.',
    },
    {
      id: 'kpmg-ctf',
      rank: '610 / 680 Pts',
      title: 'KPMG CTF 2026 — Campus Edition',
      subtitle: '610 / 680 Points · 33 Full Walkthroughs & 31 Flags Captured',
      issuer: 'KPMG / KICyb3r',
      year: '2026',
      icon: 'award',
      highlight: true,
      writeupUrl: 'https://github.com/DHRUV-MULANI/kpmg-ctf-2026-writeups',
      description: 'High-tier finish scoring 610/680 points across 10 categories including Web, API, Infra Privesc, Incident Response, Crypto, IoT, and Reverse Engineering.',
    },
    {
      id: 'ctf-winner',
      rank: 'Winner',
      title: 'Cyber Shadez’26 National TechFest: Bug Bounty',
      subtitle: '1st Place — National Bug Bounty Challenge',
      issuer: 'Cyber Shadez TechFest',
      year: '2026',
      icon: 'trophy',
      highlight: true,
      writeupUrl: null,
      description: 'Secured 1st place in the national Bug Bounty challenge, uncovering and triaging high-severity vulnerabilities under live time-boxed conditions.',
    },
    {
      id: 'ctf-14th',
      rank: '14th Place',
      title: 'ISEA-ISAP CTF’26 organized by IIT Madras',
      subtitle: 'With 1613 points earned',
      issuer: 'IIT Madras',
      year: '2026',
      icon: 'award',
      highlight: false,
      writeupUrl: null,
      description: 'Finished 14th nationally among premier teams, solving challenging tracks across binary analysis, network forensics, and web penetration.',
    },
    {
      id: 'thm-top3',
      rank: 'Top 3%',
      title: 'TryHackMe Global Standing',
      subtitle: 'Profile: Boss.Hack3r',
      issuer: 'TryHackMe',
      year: 'Live Rank',
      icon: 'zap',
      highlight: false,
      writeupUrl: 'https://tryhackme.com/p/Boss.Hack3r',
      description: 'Maintained top 3% ranking globally across offensive security rooms, active directory exploits, privilege escalation, and network pivots.',
    },
  ],

  // Official Certifications
  certifications: [
    {
      title: 'Belkasoft Windows Forensics',
      issuer: 'Belkasoft',
      type: 'Forensic Certification',
      badge: 'Certified',
    },
    {
      title: 'Belkasoft Advanced Forensics',
      issuer: 'Belkasoft',
      type: 'Advanced Forensics',
      badge: 'Certified',
    },
    {
      title: 'IIT Bombay Workshop',
      issuer: 'IIT Bombay',
      type: 'Technical Workshop',
      badge: 'Completed',
    },
    {
      title: 'TryHackMe — love_at_first_breach',
      issuer: 'TryHackMe',
      type: 'Specialized Track',
      badge: 'Credential',
    },
  ],

  // Formal Recognitions
  appreciation: [
    {
      title: 'Certificate of Appreciation',
      issuer: 'SarthiBus',
      reason: 'Discovered and responsibly reported a major financial tampering vulnerability',
      badge: 'Responsible Disclosure',
    },
  ],

  // CTF Competitions
  competitions: [
    'CybershadezCTF',
    'VishvaCTF',
    'Multiple CTF challenges on Hack The Box',
    'AsurCTF',
    'DoomsplayCTF',
  ],

  // Hackathons & Sprints
  hackathons: [
    'NeuraCode AI Innovation Sprint',
    'TryHackMe Hackfinity',
  ],
}

// Backward compatibility aliases if any component imports old names
export const achievements = {
  primary: achievementsAndCertificates.achievements.map((a) => ({
    id: a.id,
    label: a.rank,
    title: a.title,
    subtitle: a.subtitle,
    icon: a.icon,
    highlight: a.highlight,
  })),
  secondary: [
    ...achievementsAndCertificates.hackathons,
    ...achievementsAndCertificates.competitions,
  ],
}

export const certifications = [
  ...achievementsAndCertificates.certifications.map((c) => ({
    title: c.title,
    issuer: c.issuer,
    type: 'certification',
  })),
  ...achievementsAndCertificates.appreciation.map((a) => ({
    title: a.title,
    issuer: a.issuer,
    type: 'recognition',
  })),
]

export const contactConfig = {
  protocol: 'DIRECT_MAIL',
  dispatchService: 'WEB3FORMS_DIRECT_INBOX',
  email: 'dhruvmulani.work@gmail.com',
  // Web3Forms Direct Endpoint & Key:
  formEndpoint: 'https://api.web3forms.com/submit',
  accessKey:
    import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ||
    'c02ec53c-d737-4791-812a-398e6c4f429b',
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

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
  email: 'dhruvkumarmulani@gmail.com',
  phone: '+918758821755',
  phoneDisplay: '+91 87588 21755',
  availability: 'Open to opportunities',
  social: {
    linkedin: 'https://linkedin.com/in/dhruv-mulani',
    github: 'https://github.com/dhruv-mulani',
    tryhackme: 'https://tryhackme.com/p/Boss.Hack3r',
  },
  resumeUrl: '/Dhruv_Mulani.pdf',
}

export const education = {
  degree: 'Bachelor of Engineering in Computer Engineering',
  institution: 'Institute of Infrastructure, Technology, Research, and Management (IITRAM)',
  location: 'Ahmedabad, India',
  period: 'Final Year Candidate',
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

export const achievements = {
  primary: [
    {
      id: 'ctf-winner',
      label: 'Winner',
      title: 'Cyber Shadez\'26 National TechFest',
      subtitle: 'Bug Bounty Category',
      icon: 'trophy',
      highlight: true,
    },
    {
      id: 'ctf-14th',
      label: '14th Place',
      title: 'ISEA-ISAP CTF\'26',
      subtitle: 'IIT Madras — 1,613 Points',
      icon: 'award',
      highlight: false,
    },
    {
      id: 'thm-top3',
      label: 'Top 3%',
      title: 'TryHackMe',
      subtitle: 'Global Platform Ranking',
      icon: 'zap',
      highlight: false,
    },
  ],
  secondary: [
    'NeuraCode AI Innovation Sprint — Hackathon',
    'TryHackMe Hackfinity — Challenge',
    'CybershadezCTF — Participant',
    'VishvaCTF — Participant',
    'ASUR CTF — Participant',
    'DoomsplayCTF — Participant',
    'Hack The Box — Multiple Challenges',
  ],
}

export const certifications = [
  {
    title: 'Belkasoft Windows Forensics',
    issuer: 'Belkasoft',
    type: 'certification',
  },
  {
    title: 'Belkasoft Advanced Forensics',
    issuer: 'Belkasoft',
    type: 'certification',
  },
  {
    title: 'IIT Bombay Workshop',
    issuer: 'IIT Bombay',
    type: 'workshop',
  },
  {
    title: 'Certificate of Appreciation',
    issuer: 'SarthiBus',
    type: 'recognition',
  },
  {
    title: 'TryHackMe — love_at_first_breach',
    issuer: 'TryHackMe',
    type: 'achievement',
  },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

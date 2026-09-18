// ============================================================
// Portfolio Static Data — Single source of truth
// All content sourced from Dilhara's actual CV
// Edit this file to update all content on the site
// ============================================================

export const personalInfo = {
  name: 'Dilhara De Silva',
  title: 'Cybersecurity Undergraduate | Information Systems Undergraduate',
  tagline:
    'Passionate about cybersecurity, information systems, and solving real-world problems through secure and innovative solutions. Experienced in penetration testing, vulnerability assessment, and information security risk management.',
  location: 'Sri Lanka',
  email: 'desilvadilhara2002@gmail.com',
  phone: '070 169 5198',
  linkedin: 'https://www.linkedin.com/in/dilhara-de-silva-034718355',
  github: 'https://github.com/dilhara2002-cyber',
  githubUsername: 'dilhara2002-cyber',
};

export const aboutContent = {
  bio: [
    'I am an undergraduate pursuing a dual academic focus in Cybersecurity and Information Systems, with hands-on experience in penetration testing, vulnerability assessment, reverse engineering, and information security risk management.',
    'I have built a 4-level vulnerable web CTF, performed controlled Red/Blue/Purple Team security assessments, completed hands-on PortSwigger exploitation labs, and contributed to a real-world OCTAVE Allegro risk assessment. I bring strong technical reporting skills — with experience documenting evidence, risk, proof-of-concept findings, and remediation recommendations.',
    'My academic journey across SLIIT and Sabaragamuwa University of Sri Lanka has given me a strong foundation in both the technical depth of cybersecurity and the broader domain of information systems. I approach each challenge with curiosity, precision, and a problem-solving mindset.',
    'I am continuously growing my skills through academic projects, independent research, hands-on labs, and technical writing — and I look forward to contributing to secure, well-designed technology solutions that make a meaningful impact.',
  ],
};

export const education = [
  {
    id: 1,
    institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
    degree: 'BSc (Hons) in Cybersecurity',
    shortName: 'SLIIT',
    logo: '🏛️',
    period: '2023 – Present',
    status: 'Undergraduate — In Progress',
    description:
      'Focused on the technical and theoretical foundations of cybersecurity, including penetration testing, web application security, network security, secure software systems, and information security risk management.',
    topics: [
      'Penetration Testing',
      'Web Application Security',
      'Network Security',
      'Secure Software Systems',
      'Information Security Risk Management',
      'Cryptography',
      'Applied Information Assurance',
    ],
    color: 'blue' as const,
  },
  {
    id: 2,
    institution: 'Sabaragamuwa University of Sri Lanka',
    degree: 'BSc (Hons) in Information Systems',
    shortName: 'SUSL',
    logo: '🎓',
    period: '2024 – Present',
    status: 'Undergraduate — In Progress',
    description:
      'Providing a comprehensive understanding of information systems within organisational and business contexts, including systems analysis, database management, and IT governance.',
    topics: [
      'Information Systems',
      'Business Technology',
      'Systems Analysis & Design',
      'Database Systems',
      'IT Management',
      'Business Process Analysis',
      'Requirements Engineering',
    ],
    color: 'cyan' as const,
  },
  {
    id: 3,
    institution: "G/Sri Devananda College",
    degree: 'G.C.E. Advanced Level — Physical Science Stream',
    shortName: 'A/L',
    logo: '📚',
    period: '2021 – 2023',
    status: 'Completed',
    description:
      'Completed the G.C.E. Advanced Level examination in the Physical Science stream, building a strong analytical and scientific foundation.',
    topics: [
      'Physical Science Stream',
      'Mathematics',
      'Physics',
      'Analytical Thinking',
    ],
    color: 'purple' as const,
  },
];

export const skillCategories = [
  {
    id: 'security',
    title: 'Security',
    icon: '🔐',
    color: 'blue' as const,
    skills: [
      { name: 'Penetration Testing', level: 72 },
      { name: 'Vulnerability Assessment', level: 75 },
      { name: 'Web Application Security', level: 75 },
      { name: 'Network Security', level: 70 },
      { name: 'Security Risk Assessment', level: 72 },
      { name: 'Traffic Analysis', level: 65 },
      { name: 'TLS/SSL Assessment', level: 68 },
      { name: 'Reverse Engineering', level: 60 },
    ],
  },
  {
    id: 'tools',
    title: 'Security Tools',
    icon: '🛠️',
    color: 'cyan' as const,
    skills: [
      { name: 'Burp Suite', level: 72 },
      { name: 'Nmap', level: 75 },
      { name: 'Wireshark', level: 70 },
      { name: 'Metasploit', level: 65 },
      { name: 'OpenSSL', level: 65 },
      { name: 'x64dbg / GDB', level: 58 },
      { name: 'cURL', level: 72 },
      { name: 'Git / GitHub', level: 75 },
    ],
  },
  {
    id: 'web-security',
    title: 'Web Security',
    icon: '🌐',
    color: 'purple' as const,
    skills: [
      { name: 'SQL Injection', level: 72 },
      { name: 'Stored XSS', level: 72 },
      { name: 'Path Traversal', level: 70 },
      { name: 'Insecure File Upload', level: 70 },
      { name: 'HTTP Request Analysis', level: 68 },
      { name: 'OWASP Top 10', level: 70 },
    ],
  },
  {
    id: 'systems',
    title: 'Systems & Networking',
    icon: '💻',
    color: 'green' as const,
    skills: [
      { name: 'Kali Linux', level: 75 },
      { name: 'Ubuntu', level: 72 },
      { name: 'Windows', level: 70 },
      { name: 'VMware', level: 68 },
      { name: 'TCP/IP', level: 72 },
      { name: 'DNS / DHCP / NTP', level: 65 },
      { name: 'Shell Scripting (Bash)', level: 65 },
    ],
  },
  {
    id: 'programming',
    title: 'Scripting & Development',
    icon: '📝',
    color: 'blue' as const,
    skills: [
      { name: 'Python', level: 68 },
      { name: 'Bash', level: 65 },
      { name: 'PHP Fundamentals', level: 55 },
      { name: 'HTML / CSS', level: 75 },
      { name: 'JavaScript', level: 65 },
      { name: 'TypeScript', level: 62 },
      { name: 'SQL', level: 65 },
    ],
  },
  {
    id: 'frameworks',
    title: 'Frameworks & Standards',
    icon: '📋',
    color: 'cyan' as const,
    skills: [
      { name: 'OCTAVE Allegro', level: 68 },
      { name: 'ISO/IEC 27005', level: 65 },
      { name: 'NIST SP 800-30', level: 65 },
    ],
  },
];

// ── Real projects from CV ──────────────────────────────────
export const staticProjects = [
  {
    id: 'ctf-1',
    name: 'Web Vulnerabilities CTF',
    category: 'Web Security',
    filterCategory: 'cybersecurity',
    description:
      'Built and documented a 4-level intentionally vulnerable web application covering SQL Injection, Stored XSS, Path Traversal, and Insecure File Upload, with separate challenge pages and flags. Explained vulnerable code paths, exploitation workflows, and mitigation concepts, demonstrating practical understanding of common OWASP-style weaknesses.',
    tags: ['Web Security', 'SQL Injection', 'Stored XSS', 'Path Traversal', 'OWASP', 'PHP'],
    featured: true,
    githubUrl: undefined as string | undefined,
    liveUrl: undefined as string | undefined,
  },
  {
    id: 'pentest-1',
    name: 'Penetration Testing & Purple Team Security Assessment',
    category: 'Applied Information Assurance',
    filterCategory: 'cybersecurity',
    description:
      'Assessed a controlled Kali Linux / Metasploitable 2 environment using Nmap, Wireshark, and Metasploit for reconnaissance, service enumeration, vulnerability testing, and traffic analysis. Evaluated attack/defence gaps, documented technical findings and business impact, and produced prioritised remediation recommendations.',
    tags: ['Penetration Testing', 'Kali Linux', 'Metasploit', 'Nmap', 'Wireshark', 'Purple Team'],
    featured: true,
    githubUrl: undefined as string | undefined,
    liveUrl: undefined as string | undefined,
  },
  {
    id: 'risk-1',
    name: 'Cybersecurity Risk Assessment — Amra Leaf',
    category: 'Information Security Risk Management',
    filterCategory: 'information-systems',
    description:
      'Contributed to a real-business risk assessment covering POS, sales database, WordPress, social-media, and staff-communication assets using OCTAVE Allegro, ISO/IEC 27005, and NIST SP 800-30. Prioritised security risks, proposed practical controls, supported an implementation roadmap, and contributed to cybersecurity awareness training delivered to staff.',
    tags: ['OCTAVE Allegro', 'ISO/IEC 27005', 'NIST SP 800-30', 'Risk Assessment', 'Real Business'],
    featured: true,
    githubUrl: 'https://github.com/dilhara2002-cyber/Amra_Leaf',
    liveUrl: undefined as string | undefined,
  },
  {
    id: 'tls-1',
    name: 'Manual TLS Security Assessment',
    category: 'Web Security',
    filterCategory: 'cybersecurity',
    description:
      'Performed a non-invasive TLS assessment using OpenSSL, curl, and browser developer tools to inspect certificate metadata, SANs, chain completeness, protocol version, and negotiated ciphers. Prepared proof-of-concept evidence, severity analysis, and remediation guidance while avoiding invasive or automated scanning.',
    tags: ['TLS/SSL', 'OpenSSL', 'Web Security', 'Certificate Analysis', 'curl'],
    featured: false,
    githubUrl: undefined as string | undefined,
    liveUrl: undefined as string | undefined,
  },
  {
    id: 'portswigger-1',
    name: 'PortSwigger Web Security Academy Labs',
    category: 'Hands-on Training',
    filterCategory: 'cybersecurity',
    description:
      'Used Burp Suite to complete practical file path traversal and file upload vulnerability labs, including absolute-path, encoding, path-validation, extension, and Content-Type restriction bypass scenarios.',
    tags: ['Burp Suite', 'Path Traversal', 'File Upload', 'PortSwigger', 'Hands-on'],
    featured: false,
    githubUrl: undefined as string | undefined,
    liveUrl: undefined as string | undefined,
  },
  {
    id: 're-1',
    name: 'Reverse Engineering & Runtime Security Analysis',
    category: 'Secure Software Systems',
    filterCategory: 'cybersecurity',
    description:
      'Performed static/dynamic analysis of a legacy DOS application using x64dbg/DOSBox; inspected registers and memory, identified runtime variables, and modified assembly-level behaviour. Analysed missing protections and recommended integrity checks, anti-debugging, code obfuscation, ASLR, DEP, and secure coding practices.',
    tags: ['Reverse Engineering', 'x64dbg', 'Static Analysis', 'Dynamic Analysis', 'ASLR', 'DEP'],
    featured: false,
    githubUrl: undefined as string | undefined,
    liveUrl: undefined as string | undefined,
  },
];

export const additionalWork = [
  {
    icon: '🔬',
    title: 'Security Research',
    items: [
      'Deep Learning-Based Intrusion Detection System (IDS) for Secure Healthcare Networks',
      'Blockchain Security research',
    ],
  },
  {
    icon: '🐧',
    title: 'Linux & Networking',
    items: [
      'Configured Ubuntu virtual machines, DHCP/DNS/NTP services',
      'Linux environment administration, shell scripting, and debugging exercises',
    ],
  },
  {
    icon: '✍️',
    title: 'Technical Writing',
    items: [
      'Published cybersecurity learning content on Medium',
      'OverTheWire Bandit Wargame walkthrough (Levels 0–15)',
    ],
  },
];

export const cyberFocusAreas = [
  {
    id: 1,
    title: 'Web Application Security',
    description: 'OWASP vulnerabilities, exploitation, mitigation — including SQL Injection, XSS, Path Traversal, and File Upload attacks.',
    icon: '🌐',
  },
  {
    id: 2,
    title: 'Penetration Testing',
    description: 'Hands-on controlled environment pentesting using Kali Linux, Nmap, Wireshark, and Metasploit.',
    icon: '🔍',
  },
  {
    id: 3,
    title: 'Vulnerability Assessment',
    description: 'Identifying and analysing security weaknesses in systems and applications, with structured findings documentation.',
    icon: '🔬',
  },
  {
    id: 4,
    title: 'Security Risk Assessment',
    description: 'Applying OCTAVE Allegro, ISO/IEC 27005, and NIST SP 800-30 frameworks to real-world risk management.',
    icon: '📋',
  },
  {
    id: 5,
    title: 'Reverse Engineering',
    description: 'Static and dynamic binary analysis using x64dbg/DOSBox, inspecting registers, memory, and runtime variables.',
    icon: '⚙️',
  },
  {
    id: 6,
    title: 'Network Security',
    description: 'Traffic analysis, TLS/SSL assessment, TCP/IP fundamentals, and network-level security evaluation.',
    icon: '🛡️',
  },
  {
    id: 7,
    title: 'Security Operations',
    description: 'Monitoring, detecting, and responding to cybersecurity threats — including Purple Team assessment methodologies.',
    icon: '🖥️',
  },
  {
    id: 8,
    title: 'Digital Forensics',
    description: 'Investigating digital evidence, runtime behaviour, and applying secure coding recommendations.',
    icon: '🔎',
  },
];

export const careerGoalsContent = {
  headline: 'Building a Career in Cybersecurity & Information Security',
  body: [
    'I am continuously developing my technical and analytical skills through academic work, practical projects, hands-on labs, and independent learning — with the goal of contributing to secure and reliable technology solutions.',
    'My aim is to build a career at the intersection of cybersecurity and information systems — helping organisations protect their digital assets, design secure systems, and navigate the evolving threat landscape responsibly.',
    'I am particularly interested in roles in cybersecurity, information security, penetration testing, and network security — where I can apply both my technical knowledge and systems thinking to make a meaningful contribution.',
  ],
  goals: [
    { icon: '🎯', text: 'Secure a cybersecurity or IT internship to gain real-world professional experience' },
    { icon: '📚', text: 'Deepen expertise in penetration testing, threat modelling, and security operations' },
    { icon: '🏆', text: 'Pursue industry certifications such as CompTIA Security+, CEH, or OSCP' },
    { icon: '🤝', text: 'Collaborate on impactful cybersecurity and technology projects' },
    { icon: '🚀', text: 'Build a long-term career in cybersecurity or information security' },
  ],
};

// Certifications — Add certifications here when obtained
export const certifications: {
  id: number;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  badge?: string;
}[] = [
  // Example structure (uncomment and fill when certifications are obtained):
  // {
  //   id: 1,
  //   name: 'CompTIA Security+',
  //   issuer: 'CompTIA',
  //   date: 'Month Year',
  //   credentialId: 'XXXXXXXX',
  //   credentialUrl: 'https://...',
  //   badge: '🏅',
  // },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'GitHub', href: '#github' },
  { label: 'Contact', href: '#contact' },
];

// Project category filter labels
export const projectCategories = [
  { label: 'All', value: 'all' },
  { label: 'Cybersecurity', value: 'cybersecurity' },
  { label: 'Development', value: 'development' },
  { label: 'Information Systems', value: 'information-systems' },
  { label: 'Networking', value: 'networking' },
];

// Manual enrichment for GitHub repos
export const projectEnrichment: Record<string, {
  category: string;
  tags: string[];
  featured?: boolean;
}> = {
  'Amra_Leaf': {
    category: 'cybersecurity',
    tags: ['Cybersecurity', 'Risk Management', 'TypeScript', 'OCTAVE Allegro'],
    featured: true,
  },
  'password-strength-analyzer': {
    category: 'cybersecurity',
    tags: ['Cybersecurity', 'CLI', 'Entropy Analysis'],
    featured: true,
  },
  'MyProject': {
    category: 'development',
    tags: ['Web Development', 'HTML', 'Health & Wellness'],
  },
  'dilhara2002-cyber.github.io': {
    category: 'development',
    tags: ['Web Development', 'GitHub Pages', 'Portfolio'],
  },
  'Carenest': {
    category: 'information-systems',
    tags: ['Information Systems', 'TypeScript', 'Healthcare'],
  },
};

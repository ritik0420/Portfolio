/** Portfolio data — update `social.github` and project `source` URLs when ready. */

export const profile = {
  name: 'Ritik Kaintura',
  title: 'Full Stack Developer',
  heroTag: 'SOFTWARE DEVELOPER',
  heroHeadline: ['Crafting', 'Digital Masterpieces'],
  heroSub:
    "I'm Ritik Kaintura, a professional full-stack developer dedicated to building high-performance, user-centric web applications with React, Next.js, Node.js, and MongoDB — from REST APIs to Docker deployments.",
  aboutTitle: ['About', 'The Architect'],
  /** Short line for any legacy use; About uses `aboutIntro` + `expertiseAreas`. */
  aboutBio: `I'm Ritik Kaintura, a Full Stack Developer specializing in JavaScript, React, and Node.js ecosystems.`,
  location: 'Dehradun, Uttarakhand, India',
  email: 'ritik.kaintura007@gmail.com',
  phone: '+91-9068402175',
  social: {
    github: 'https://github.com/ritik0420',
    linkedin: 'https://www.linkedin.com/in/ritik-kaintura-27a564117/',
    twitter: 'https://twitter.com/',
  },
  cvPath: '/resume.pdf',
}

export const aboutIntro = {
  greeting: "Hi, I'm Ritik",
  summary:
    'Full-Stack Developer specializing in building scalable, high-performance web applications using modern technologies like React, Node.js, and MongoDB. I focus on creating seamless user experiences and production-ready solutions.',
}

/** Expertise boxes for the About section (titles + body + tag pills). */
export const expertiseAreas = [
  {
    title: 'Frontend Technologies',
    description:
      'Expert in React.js, Next.js, and JavaScript (ES6+) with React Router. Proficient in Tailwind CSS, Material UI, Framer Motion, and Chart.js for stunning interfaces.',
    tags: ['React.js', 'Next.js', 'Tailwind CSS', 'Material UI', 'Framer Motion', 'Chart.js'],
  },
  {
    title: 'Backend & Server Technologies',
    description:
      'Experienced with Node.js and Express.js for building robust RESTful APIs. Skilled in JWT Authentication, MongoDB, and MongoDB Atlas database management — server-side logic, middleware, security, and clean endpoints.',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'MongoDB Atlas', 'JWT Auth', 'REST API'],
  },
  {
    title: 'DevOps & Deployment',
    description:
      'Proficient in Docker containerization and Traefik reverse proxy. Experienced with VPS hosting (Hostinger, EasyPanel), SSL/TLS, and domain & DNS management — containerization, load balancing, and secure infrastructure.',
    tags: ['Docker', 'Traefik', 'VPS Hosting', 'SSL/TLS', 'EasyPanel', 'DNS'],
  },
  {
    title: 'UI/UX & Tools',
    description:
      'Responsive design, SEO optimization, Google Maps API, TipTap editor, Formik & Yup validation, and Git/GitHub for version control — polished UX with reliable tooling.',
    tags: [
      'Responsive Design',
      'SEO Optimization',
      'Google Maps API',
      'TipTap',
      'Formik',
      'Yup',
      'Git',
      'GitHub',
    ],
  },
]

/** Simple Icons slug → used as https://cdn.simpleicons.org/{slug}/ef4444 */
export const techStack = [
  { name: 'React', icon: 'react' },
  { name: 'Next.js', icon: 'nextdotjs' },
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'Node.js', icon: 'nodedotjs' },
  { name: 'Express', icon: 'express' },
  { name: 'MongoDB', icon: 'mongodb' },
  { name: 'Tailwind CSS', icon: 'tailwindcss' },
  { name: 'Docker', icon: 'docker' },
  { name: 'Git', icon: 'git' },
  { name: 'Framer Motion', icon: 'framer' },
  { name: 'REST APIs', icon: 'openapiinitiative' },
  { name: 'VPS / Traefik', icon: 'nginx' },
]

export const experience = [
  {
    role: 'Full Stack Developer & Trainer',
    company: 'InsureTech Skills',
    period: 'Dec 2025 — Present',
    location: 'Dehradun, India',
    highlights: [
      'Redeveloped the company WordPress site into a full-stack app with React, Next.js, Node.js, MongoDB, and REST APIs.',
      'Collaborated with UK clients on requirements for a MERN-based LMS platform.',
      'Delivered hands-on training and live sessions on frontend, backend, and full stack development.',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Paradise Yatra',
    period: 'Aug 2025 — Oct 2025',
    location: 'Dehradun, India',
    link: 'https://paradiseyatra.com',
    highlights: [
      'Built a travel platform with Next.js, Node.js, Express, MongoDB, and Docker; secure admin with CMS and SEO.',
      'Implemented 50+ REST APIs with JWT, validation, and MongoDB Atlas.',
      'Deployed with Docker, Traefik, SSL, DNS, and domain mapping on VPS.',
    ],
  },
  {
    role: 'MERN Stack Developer',
    company: 'Delonix Travels',
    period: 'May 2025 — Aug 2025',
    location: 'Dehradun, India',
    highlights: [
      'CRM dashboards with analytics, charts, and responsive layouts.',
      'TripBazaar.in frontend refactor with modular components and API-driven architecture.',
      'Booking features, GST, invoices; deployment on Hostinger VPS with Docker and EasyPanel.',
    ],
  },
]

export const projects = [
  {
    title: 'QuickBites',
    description:
      'Minimalist food ordering platform with dynamic meal filtering, reusable components, real-time cart, and optimized React structure — Tailwind CSS throughout.',
    url: 'https://quickbites-three.vercel.app',
    source: 'https://github.com/',
    tags: ['React', 'Tailwind CSS', 'Vite'],
    image: '/assets/projects/quickbites.png',
  },
  {
    title: 'Imagify',
    description:
      'AI-powered image generation app integrating the OpenAI API with a responsive Tailwind UI and optimized API handling for speed and reliability.',
    url: 'https://imagify-8z61.vercel.app',
    source: 'https://github.com/',
    tags: ['React', 'OpenAI API', 'Tailwind CSS'],
    image: '/assets/projects/imagify.png',
  },
  {
    title: 'Aether (Gemini Clone)',
    description:
      'Gemini-inspired AI chat interface with a modern responsive layout, focused on clean interactions and smooth frontend experience.',
    url: 'https://gemini-clone-pink-six.vercel.app/',
    source: 'https://github.com/',
    tags: ['React', 'AI UI', 'Frontend'],
    image: '/assets/projects/aether.png',
  },
  {
    title: 'Chatopia',
    description:
      'Real-time AI chat application with WebSocket-based messaging and a responsive Tailwind interface tuned for smooth performance across devices.',
    url: 'https://chatopia-frontend-black.vercel.app',
    source: 'https://github.com/',
    tags: ['React', 'WebSockets', 'Tailwind CSS'],
    image: '/assets/projects/chatopia.png',
  },
  {
    title: 'Streetwear Store Template',
    description:
      'Frontend-only online streetwear store template featuring collection sections, featured products, best sellers, and brand-focused landing design.',
    url: 'https://street-wear-sigma.vercel.app/',
    source: 'https://github.com/',
    tags: ['React', 'Ecommerce UI', 'Frontend Only'],
    image: '/assets/projects/streetwear-store-template.png',
  },
  {
    title: 'Medical Translator',
    description:
      'Medical translation web app concept for translating healthcare-related text with a simple interface built for quick, readable output.',
    url: 'https://medical-translator-sandy.vercel.app/',
    source: 'https://github.com/',
    tags: ['React', 'Healthcare', 'Translation'],
    image: '/assets/projects/medical-translator.png',
  },
]

export const stats = [
  { value: '1+', label: 'Years Experience' },
  { value: '5+', label: 'Live Projects' },
  { value: '50+', label: 'APIs & Features Built' },
]

export const education = [
  {
    degree: 'Master of Computer Applications',
    school: 'Graphic Era Deemed to be University, Dehradun',
    period: 'Jul 2022 — Jun 2024',
  },
  {
    degree: 'Bachelor of Computer Applications',
    school: 'Graphic Era Deemed to be University, Dehradun',
    period: 'Jul 2019 — Jun 2022',
  },
]

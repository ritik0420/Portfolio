export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Experience',
    href: '#experience',
  },
  {
    id: 4,
    name: 'Work',
    href: '#work',
  },
  {
    id: 5,
    name: 'Contact',
    href: '#contact',
  },
];

export const workExperiences = [
  {
    id: 1,
    company: 'InsureTech Skills',
    position: 'Full Stack Developer & Trainer',
    location: 'Dehradun, India',
    period: 'Dec 2025 – Present',
    description: 'Redesigned and redeveloped the company\'s existing WordPress website into a full-stack web application. Delivering hands-on training and live sessions on Frontend, Backend, and Full Stack development.',
    achievements: [
      'Redesigned and redeveloped the company\'s WordPress site into a full-stack app using React.js, Next.js, Node.js, MongoDB, and REST APIs',
      'Built and customized websites from scratch, including WordPress-based solutions',
      'Collaborated with UK clients, gathering requirements and contributing to a MERN-based LMS platform',
      'Supported ongoing development, bug fixes, and feature enhancements for live projects',
      'Delivered hands-on training and live sessions on Frontend, Backend, and Full Stack development'
    ],
    technologies: ['React.js', 'Next.js', 'Node.js', 'MongoDB', 'REST APIs', 'MERN', 'WordPress'],
    color: 'cyan'
  },
  {
    id: 2,
    company: 'Paradise Yatra',
    position: 'Full Stack Developer',
    location: 'Dehradun, India',
    period: 'Aug 2025 – Oct 2025',
    description: 'Full-stack travel platform with secure admin panel, 50+ REST APIs, and deployment on VPS using Docker and Traefik.',
    achievements: [
      'Built and maintained a full-stack travel platform using Next.js, Node.js, Express, MongoDB, and Docker',
      'Developed a secure admin panel with authentication, CMS, and SEO tools',
      'Designed and implemented 50+ REST APIs with JWT authentication, validation, and MongoDB Atlas',
      'Enhanced UI/UX using Framer Motion, responsive design, and reusable components',
      'Implemented smart search, calendar picker, rich text editor, and image proxy handling',
      'Optimized performance through lazy loading, code splitting, and caching',
      'Deployed applications on VPS using Docker, Traefik, SSL, DNS, and domain mapping'
    ],
    technologies: ['Next.js', 'Node.js', 'Express', 'MongoDB', 'Docker', 'Traefik', 'JWT', 'Framer Motion'],
    liveUrl: 'https://paradiseyatra.com',
    color: 'purple'
  },
  {
    id: 3,
    company: 'Delonix Travels',
    position: 'MERN Stack Developer',
    location: 'Dehradun, India',
    period: 'May 2025 – Aug 2025',
    description: 'CRM dashboards, TripBazaar.in frontend refactoring, and deployment on Hostinger VPS with Docker and EasyPanel.',
    achievements: [
      'Developed CRM dashboards with responsive layouts, analytics, and charts',
      'Implemented secure authentication, API integrations, and global state management',
      'Worked on TripBazaar.in frontend, refactoring code with modular components and API-driven architecture',
      'Improved UI/UX including responsive layouts, advanced filters, calendar fixes, and maps integration',
      'Implemented booking-related features: GST handling, invoice/voucher generation, room/meal selection',
      'Assisted in deployment on Hostinger VPS using Docker and EasyPanel',
      'Configured Traefik reverse proxy, SSL/HTTPS, domain mapping, DNS, and Docker Hub images'
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Docker', 'Traefik', 'Chart.js', 'Material-UI'],
    projects: ['CRM Frontend', 'TripBazaar.in'],
    liveUrl: 'https://tripbazaar.in/',
    color: 'pink'
  }
];
  
  export const myProjects = [
    {
      title: 'QuickBites - Food Ordering App',
      desc: 'QuickBites is a responsive and modern food ordering application that allows users to browse, select, and order meals with ease, offering a delightful UI and smooth user experience.',
      subdesc:
        'Developed using React and TailwindCSS, QuickBites ensures fast performance, clean design, and an intuitive interface for seamless food ordering. ',
      href: 'https://quickbites-three.vercel.app/',
      texture: '/textures/project/project1.mp4',
      logo: '/assets/project-logo1.png',
      logoStyle: {
        backgroundColor: '#1E1E2F',
        border: '0.2px solid #34344A',
        boxShadow: '0px 0px 60px 0px #FF7E5F4D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'MongoDB',
          path: '/assets/database-storage.png',
        },
        {
          id: 4,
          name: 'JavaScript',
          path: '/assets/java-script.png',
        },
      ],
    },
    {
      title: 'Imagify - AI Image Generator',
      desc: 'Imagify is an AI-powered image generation tool that lets users create stunning visuals from simple text prompts using advanced AI models.',
      subdesc:
        'Built with modern frontend technologies, Imagify offers an engaging user interface and smooth interactions for generating high-quality AI images instantly.',
      href: 'https://imagify-8z61.vercel.app/',
      texture: '/textures/project/project2.mp4',
      logo: '/assets/project-logo2.png',
      logoStyle: {
        backgroundColor: '#101820',
        border: '0.2px solid #1C2C38',
        boxShadow: '0px 0px 60px 0px #00D8FF4D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'JavaScript',
          path: '/assets/java-script.png',
        },
        {
          id: 4,
          name: 'Googles Generative AI API',
          path: '/assets/api.png',
        },
      ],
    },
    {
      title: 'Chatopia - Real-time chat application',
      desc: 'Chatopia is a real-time chat application designed to provide seamless communication between users with an intuitive interface and robust backend functionality',
      subdesc:
        'Built using modern web technologies, Chatopia focuses on delivering a fast, secure, and user-friendly chatting experience ',
      href: 'https://chatopia-frontend-black.vercel.app/',
      texture: '/textures/project/project3.mp4',
      logo: '/assets/project-logo3.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'MongoDB',
          path: '/assets/database-storage.png',
        },
        {
          id: 4,
          name: 'JavaScript',
          path: '/assets/java-script.png',
        },
      ],
    },


    {
      title: 'SkullAI -  AI within a modern React application',
      desc: 'Skull AI is a web-based cryptocurrency platform designed to mimic the features and functionalities of the popular Gemini exchange. It provides users with a modern interface to explore, trade, and manage cryptocurrencies, showcasing advanced web development skills and an understanding of financial technology.',
      subdesc:
        'The application utilizes Googles Generative AI API to generate responses to user prompts, offering services like travel suggestions, concept summaries, team bonding ideas, and code improvements.',
      href: 'https://gemini-clone-pink-six.vercel.app/',
      texture: '/textures/project/project4.mp4',
      logo: '/assets/project-logo4.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight4.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'JavaScript',
          path: '/assets/java-script.png',
        },
        {
          id: 4,
          name: 'Googles Generative AI API',
          path: '/assets/api.png',
        },
      ],
    },

    {
      title: 'Password Generator',
      desc: ' Password Generator is a lightweight web application designed to create secure, random passwords tailored to user preferences. The project highlights simplicity, usability, and the importance of strong password practices in the modern digital world.',
      subdesc:
        'This application is ideal for anyone needing secure, random passwords for personal or professional use. Its simplicity makes it suitable for users of all technical levels.',
      href: 'https://password-generator-sooty-beta.vercel.app/',
      texture: '/textures/project/project5.mp4',
      logo: '/assets/project-logo5.png',
      logoStyle: {
        backgroundColor: '#0E1F38',
        border: '0.2px solid #0E2D58',
        boxShadow: '0px 0px 60px 0px #2F67B64D',
      },
      spotlight: '/assets/spotlight4.png',
      tags: [
        {
          id: 1,
          name: 'HTML5',
          path: '/assets/html-5.png',
        },
        {
          id: 2,
          name: 'CSS',
          path: 'assets/css3.png',
        },
        {
          id: 3,
          name: 'JavaScript',
          path: '/assets/java-script.png',
        },
      ],
    },
  ];
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
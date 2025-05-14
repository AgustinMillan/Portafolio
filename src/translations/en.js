const enTranslations = {
  // Common
  loading: "Loading...",

  // Navigation
  nav: {
    home: "Home",
    projects: "Projects",
    about: "About Me",
    experience: "Experience",
    skills: "Skills",
    contact: "Contact",
  },

  // Home page
  home: {
    greeting: "Hi, my name is Agustin Millan",
    title: "Backend Developer.",
    subtitle: "I build robust server-side solutions.",
    description:
      "I'm a backend developer specialized in building efficient, scalable, and secure applications. With experience in databases, APIs, and server architecture, I create the backbone that powers modern applications.",
    cta: "See my work",
    whatIDo: "What I Do",
    services: {
      api: {
        title: "API Development",
        description:
          "I design and implement fast, secure REST and GraphQL APIs aligned with modern best practices.",
      },
      database: {
        title: "Database Design",
        description:
          "I create efficient schemas and apply optimization strategies for both SQL and NoSQL databases to ensure top performance.",
      },
      microservices: {
        title: "Microservices",
        description:
          "I develop scalable microservice architectures that enable independent deployment and maintenance of each component.",
      },
    },
  },

  // Projects page
  projects: {
    title: "My Projects",
    featuredTitle: "Featured Projects",
    otherTitle: "Other Notable Projects",
    types: {
      backend: "Backend Development",
      microservice: "Microservices Architecture",
      api: "API Development",
    },
    featured: {
      ecommerce: {
        title: "E-commerce for Pilot",
        description:
          "A fully custom project for Pilot, a pen manufacturer in Chile. Designed to feel like a game at every step, featuring drawing tools, interactive maps, points system, etc. Product, sales, and payment management are handled by a custom CMS I developed, also featured here.",
      },
      chat: {
        title: "Laundry System, APP Closr",
        description:
          "A complete and scalable microservices-based system for managing laundromats. Currently operational and available for purchase or a free demo.",
      },
      cms: {
        title: "CMS for Content and Payment Management",
        description:
          "Not just an API! A full-featured CMS with role-based access control, ideal for managing website and app content. Includes point systems, payment handling, sales reports, and user management.",
      },
    },
    other: {
      profession: {
        title: "API for a Professional-Oriented App",
        description:
          "Designed to connect clients with professionals from any field in their local area.",
      },
      asus: {
        title: "API for ASUS Warranty Lookup",
        description:
          "API to retrieve ASUS warranty information by serial number. Used by ASUS COLOMBIA.",
      },
      serieslm: {
        title: "Platform for [SOBRE LA MESA] Series",
        description:
          "This series, produced by the Chilean Ministry of Health, aims to raise youth awareness about sexual education and HIV/AIDS prevention.",
      },
      interactiveMap: {
        title: "Interactive Map",
        description:
          "An interactive map of Chile designed to handle large hydrographic datasets using shapefiles and geospatial data. Built fully frontend with a custom layer system for efficient data handling.",
      },
      belenusCL: {
        title: "Custom Solutions for BelenusCL",
        description:
          "Custom implementations for BelenusCL, Chile’s leading laser hair removal company. Integrated Shopify with FLOWWW for handling orders, clients, and bookings. Also customized Shopify's checkout to manage RUT, birth date, etc. via metafields.",
      },
      mysqlMigration: {
        title: "Database Maintenance for MetroGas Chile",
        description:
          "Automated system for monthly updates of over 650,000 records used for customer meter readings. Supporting the operations of Chile’s leading natural gas company.",
      },
    },
  },

  // About page
  about: {
    title: "About Me",
    paragraph1:
      "Hi! I'm a Backend Developer passionate about building robust and scalable applications. I stand out for being self-taught, proactive, and committed to continuous improvement.",
    paragraph2:
      "I have hands-on experience with Node.js, Express, TypeScript, and microservices, as well as with designing REST and GraphQL APIs.",
    paragraph3:
      "I've worked in international remote teams, closely collaborating with frontend developers and mentoring interns. I also manage cloud infrastructure with AWS and Linux servers.",
    paragraph4:
      "I enjoy constant learning, contributing solutions, and tackling technical challenges with curiosity and responsibility.",
    downloadResume: "Download Resume",
    valuesTitle: "My Values",
    values: {
      code: {
        title: "Quality Code",
        description:
          "I believe in writing clean, maintainable, and well-documented code that stands the test of time and is easily understood by others.",
      },
      learning: {
        title: "Continuous Learning",
        description:
          "Technology evolves fast, so I keep up to date with the latest trends, tools, and best practices.",
      },
      problem: {
        title: "Problem Solving",
        description:
          "I tackle each challenge methodically, breaking down complex problems into manageable parts to find efficient solutions.",
      },
      collaboration: {
        title: "Collaboration",
        description:
          "I thrive in team environments, valuing open communication and diverse perspectives that enhance software development.",
      },
    },
  },

  // Experience page
  experience: {
    title: "Experience (3 years)",
    educationTitle: "Education",
    companies: {
      bosquestudio: {
        title: "Freelance Professional",
        company: "Bosquestudio, Chile (remote)",
        duration: "September 2024 - Present",
        duties: [
          "Migrated WordPress sites to React with Node.js backend.",
          "Developed automation tools for WordPress.",
          "Managed projects and services on AWS and VPS with Linux servers.",
          "Led e-commerce development with React and Node.js.",
          "Developed automation tools for AWS and VPS services with Linux.",
          "Improved existing systems to enhance performance and scalability.",
          "Reduced production system errors by 90%.",
        ],
      },
      softwindev: {
        title: "Backend Engineer",
        company: "Softwindev, Argentina",
        duration: "May 2023 - June 2024",
        duties: [
          "Spoke with over 10 clients to plan projects.",
          "Developed over 7 projects using React and Node.js.",
          "Led projects with 2 frontend interns.",
          "Managed projects on AWS and VPS with Linux servers.",
          "Optimized processes to reduce costs and improve efficiency.",
        ],
      },
      nekodev: {
        title: "Backend Engineer",
        company: "Nekodev, Ecuador (remote)",
        duration: "February 2023 - September 2024",
        duties: [
          "Developed and maintained microservices and APIs.",
          "Proposed performance and scalability improvements.",
          "Documented APIs and supported frontend integration.",
          "Contributed to every stage to help launch their main application.",
        ],
      },
    },
    education: {
      utn: {
        degree: "Systems Engineering (incomplete)",
        institution:
          "National Technological University - Tucumán Regional Faculty",
        duration: "January 2023 - December 2024",
        description: "1st year completed.",
      },
      henry: {
        degree: "Full Stack Developer",
        institution: "Soy Henry",
        duration: "July 2022 - December 2022",
        description: "Certified.",
      },
    },
  },

  // Skills page
  skills: {
    title: "Skills and Experience",
    description:
      "As a backend-developer, I have built a diverse set of technical skills focused on creating robust server-side applications. I'm proficient in multiple languages, frameworks, and tools that allow me to build efficient and scalable solutions.",
    competencies: {
      backend: "Backend Development",
      api: "API Development",
      database: "Database Design",
      microservices: "Microservices Architecture",
      system: "Systems",
      cloud: "Cloud",
    },
    competenciesTitle: "Key Competencies",
    languagesTitle: "Programming Languages",
    frameworksTitle: "Frameworks and Libraries",
    databasesTitle: "Databases",
    devopsTitle: "DevOps and Tools",
  },

  // Contact page
  contact: {
    title: "Let's Talk",
    description:
      "I'm currently open to new opportunities. If you have a project in mind or want to collaborate, feel free to reach out via the form or on social media.",
    form: {
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      sending: "Sending...",
      submit: "Send Message",
      successMessage:
        "Thank you for your message! I’ll get back to you as soon as possible.",
      errorMessage: "There was an error sending the message. Please try again.",
    },
    info: {
      emailTitle: "Email",
      phoneTitle: "Phone",
      locationTitle: "Location",
      socialTitle: "Social Media",
      connect: "Connect with me on social media",
    },
  },

  // Footer
  footer: {
    rights: "All rights reserved.",
    portfolio: "Agustin Millan Portfolio",
  },

  // Language toggle
  languageToggle: {
    en: "EN",
    es: "ES",
  },
};

export default enTranslations;

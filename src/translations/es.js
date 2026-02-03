const esTranslations = {
  // Common
  loading: "Cargando...",
  // Navigation
  nav: {
    home: "Inicio",
    projects: "Proyectos",
    about: "Sobre mí",
    experience: "Experiencia",
    skills: "Habilidades",
    contact: "Contacto",
    portfolio: "Portafolio",
  },

  // Home page
  home: {
    greeting: "Hola, mi nombre es Agustin Millan",
    title: "Desarrollador Backend.",
    subtitle: "Construyo soluciones robustas del lado del servidor.",
    description:
      "Soy un desarrollador backend especializado en construir aplicaciones eficientes, escalables y seguras. Con experiencia en bases de datos, APIs y arquitectura de servidores, creo la columna vertebral que impulsa las aplicaciones modernas.",
    cta: "Mira mi trabajo",
    whatIDo: "Lo que hago",
    services: {
      api: {
        title: "Desarrollo de APIs",
        description:
          "Diseño e implemento APIs REST y GraphQL rápidas, seguras y alineadas con buenas prácticas modernas.",
      },
      database: {
        title: "Diseño de Bases de Datos",
        description:
          "Creo esquemas eficientes y aplico estrategias de optimización tanto para bases de datos SQL como NoSQL para lograr el mejor rendimiento.",
      },
      microservices: {
        title: "Microservicios",
        description:
          "Desarrollo arquitecturas de microservicios escalables que permiten un despliegue y mantenimiento independiente de cada componente.",
      },
    },
  },

  // Projects page
  projects: {
    title: "Mis Proyectos",
    featuredTitle: "Proyectos Destacados",
    otherTitle: "Otros Proyectos Relevantes",
    types: {
      backend: "Desarrollo Backend",
      microservice: "Arquitectura de Microservicios",
      api: "Desarrollo de APIs",
    },
    featured: {
      ecommerce: {
        title: "E-commerce para Pilot",
        description:
          "Este en un proyecto complentamente personalizado para Pilot, un fabricante de lapices en chile. Fue pensado de tal forma que parezca un juego en cada paso. Con sistemas pra dibujar, mapas interactivos, sistema de puntos, etc. Para la gestion de productos, ventas y pagos hemos utilizado un CMS creado por mi el cual pueden ver tambien como proyecto destacado.",
      },
      chat: {
        title: "Sistema de lavanderia, APP Closr",
        description:
          "Todo un sistema completo y escalable hecho con microservicios para la gestion de lavanderias. Actualmente se encuentra operativo y puedes contratarlo, incluso solicitar una demo gratuita.",
      },
      cms: {
        title: "CMS para gestionar contenidos y pagos",
        description:
          "No es solo una API! Es un CMS completo con control de acceso por roles, ideal para la gestión de contenidos de sitios web y aplicaciones. Con sistema de puntos y pagos, reportes de ventas, usuarios entre otros.",
      },
    },
    other: {
      profession: {
        title: "API para una aplicacion pensada para profesionales",
        description:
          "Pensada para conectar clientes con profesionales de cualquier rubro en su localidad.",
      },
      asus: {
        title: "API para la obtencion de garantias de ASUS",
        description:
          "API para la obtencion de garantias de ASUS, con la capacidad de buscar por numero de serie y obtener la informacion de la garantia. App usada por ASUS COLOMBIA.",
      },
      serieslm: {
        title: "Plataforma para ver la serie [SOBRE LA MESA]",
        description:
          "Esta serie realizada por el ministerio de salud de chile, fue realizada para consientizar a los jovenes sobre la importancia de educacion sexual y la prevencion del VIH/SIDA.",
      },
      interactiveMap: {
        title: "Mapa interactivo",
        description:
          "Mapa interactivo de Chile diseñado para manejar grandes cantidades de datos hidrograficos, manejando shapefiles y datos geoespaciales. El cliente queria que sea completamente Frontend, por lo que implementamos un sistema de capaz para manejar los datos de manera eficiente.",
      },
      belenusCL: {
        title: "Implementaciones para BelenusCL",
        description:
          "Implementaciones para BelenusCL, la empresa de depilcion laser lider en Chile. Actualmente usan shopify para funcionar lo que me dio la oportunidad de crear soluciones personalizadas para sus problemas. Creamos una app intermediaria para conectar Shopify con su sistema FLOWWW para manejar ordenes, clientes y reservas. Tambien logramos editar el CHECKOUT de shopify para poder manejar datos como RUT, FECHA DE NACIMIENTO, etc. y manejarlos a travez de los metacampos.",
      },
      mysqlMigration: {
        title: "Mantencion para MetroGas Chile",
        description:
          "Mantencion de la base de datos de MetroGas Chile, empresa de gas natural lider en Chile. Se creo un sistema automtizado para la actualizacion de más de 650 mil registros que deben ser aactualizado mes a mes para la toma de lectura en medidores de los clientes.",
      },
      gpsfleet: {
        title: "API para sistema de gestion de flotas GPS",
        description:
          "API para sistema de gestion de flotas GPS, con funcionalidades para manejar vehiculos, rutas, geocercas y reportes. La API fue diseñada para ser escalable y segura, permitiendo la integracion con diferentes dispositivos GPS y aplicaciones frontend.",
      },
    },
  },

  // About page
  about: {
    title: "Sobre Mí",
    paragraph1:
      "¡Hola! Soy un Desarrollador Backend apasionado por construir aplicaciones robustas y escalables. Me destaco por mi enfoque autodidacta, actitud proactiva y compromiso con la mejora continua.",
    paragraph2:
      "Tengo experiencia práctica en Node.js, Express, TypeScript y microservicios, así como en el diseño de bases de datos y APIs REST y GraphQL.",
    paragraph3:
      "He trabajado en equipos remotos internacionales, colaborando estrechamente con frontend y liderando pasantes en el desarrollo de proyectos. También gestiono infraestructura en la nube con AWS y servidores Linux.",
    paragraph4:
      "Disfruto aprender constantemente, contribuir con soluciones y asumir desafíos técnicos con responsabilidad y curiosidad.",
    downloadResume: "Descargar CV",
    valuesTitle: "Mis Valores",
    values: {
      code: {
        title: "Código de Calidad",
        description:
          "Creo en escribir código limpio, mantenible y bien documentado que perdure en el tiempo y pueda ser comprendido fácilmente por otros desarrolladores.",
      },
      learning: {
        title: "Aprendizaje Continuo",
        description:
          "La tecnología avanza rápido, por eso me mantengo al día con las últimas tendencias, herramientas y buenas prácticas.",
      },
      problem: {
        title: "Resolución de Problemas",
        description:
          "Abordo cada reto de forma metódica, descomponiendo problemas complejos en partes más manejables para encontrar soluciones eficientes.",
      },
      collaboration: {
        title: "Colaboración",
        description:
          "Me desenvuelvo bien en entornos de equipo, valorando la comunicación abierta y los distintos puntos de vista que enriquecen el desarrollo de software.",
      },
    },
  },

  // Experience page
  experience: {
    title: "Experiencia",
    educationTitle: "Educación",
    companies: {
      worldsys: {
        title: "Backend Engineer",
        company: "Worldsys, Argentina (remoto)",
        duration: "Julio 2025 - Enero 2026",
        duties: [
          "Migración de su aplicación principal a microservicios.",
          "Migré  la tecnología de Rabbit MQ a Nats para paralelizar sus procesos y mejorar el escalado horizontal.",
          "Gestión de ambientes de desarrollo en Azure.",
          "Mejorar algoritmos de validación y cola de mensajes.",
        ],
      },
      bosquestudio: {
        title: "Profesional Independiente",
        company: "Bosquestudio, Chile (remoto)",
        duration: "Septiembre 2024 - Enero 2026",
        duties: [
          "Migración de sitios WordPress a React con backend en Node.js.",
          "Desarrollo de herramientas de automatización para WordPress.",
          "Gestión de proyectos y servicios en AWS y VPS con servidores Linux.",
          "Lideré desarrollos de E-commerce con React y Node.js.",
          "Desarrollé herramientas de automatización para servicios en AWS y VPS con servidores Linux.",
          "Mejoré sistemas existentes para optimizar su rendimiento y escalabilidad.",
          "Reduje en un 90% los errores de sistemas en producción.",
        ],
      },
      softwindev: {
        title: "Backend Engineer",
        company: "Softwindev, Argentina",
        duration: "Mayo 2023 - Junio 2024",
        duties: [
          "Hable con más de 10 clientes para planificar proyectos.",
          "Desarrollé más de 7 proyectos con React y Node.js.",
          "Lideré proyectos con 2 pasantes de frontend.",
          "Gestioné proyectos en AWS y VPS con servidores Linux.",
          "Optimicé procesos para reducir costos y mejorar la eficiencia.",
        ],
      },
      nekodev: {
        title: "Backend Engineer",
        company: "Nekodev, Ecuador (remoto)",
        duration: "Febrero 2023 - Septiembre 2024",
        duties: [
          "Desarrollé y mantuve microservicios y APIs.",
          "Propuse mejoras de rendimiento y escalabilidad.",
          "Documenté APIs y soporte en integraciones con el equipo frontend.",
          "Contribuí en cada paso para que su aplicacion principal saliera al mercado.",
        ],
      },
    },
    education: {
      utn: {
        degree: "Ingeniería en Sistemas (incompleto)",
        institution:
          "Universidad Tecnológica Nacional - Facultad Regional Tucumán",
        duration: "Enero 2023 - Diciembre 2024",
        description: "1er año cursado.",
      },
      henry: {
        degree: "Full Stack Developer",
        institution: "Soy Henry",
        duration: "Julio 2022 - Diciembre 2022",
        description: "Certificado obtenido.",
      },
    },
  },

  // Skills page
  skills: {
    title: "Habilidades y Experiencia",
    description:
      "Como desarrollador backend, he desarrollado un conjunto diverso de habilidades técnicas enfocadas en crear aplicaciones robustas del lado del servidor. Domino diversos lenguajes, frameworks y herramientas que me permiten construir soluciones eficientes y escalables.",
    competencies: {
      backend: "Desarrollo Backend",
      api: "Desarrollo de APIs",
      database: "Diseño de Bases de Datos",
      microservices: "Arquitectura de Microservicios",
      system: "Sistemas",
      cloud: "Nube",
    },
    competenciesTitle: "Competencias Clave",
    languagesTitle: "Lenguajes de Programación",
    frameworksTitle: "Frameworks y Librerías",
    databasesTitle: "Bases de Datos",
    devopsTitle: "DevOps y Herramientas",
  },

  // Contact page
  contact: {
    title: "Hablemos",
    description:
      "Actualmente estoy abierto a nuevas oportunidades. Si tienes un proyecto en mente o deseas colaborar, no dudes en escribirme usando el formulario o por redes sociales.",
    form: {
      name: "Nombre",
      email: "Correo electrónico",
      subject: "Asunto",
      message: "Mensaje",
      sending: "Enviando...",
      submit: "Enviar mensaje",
      successMessage:
        "¡Gracias por tu mensaje! Me pondré en contacto lo antes posible.",
      errorMessage:
        "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.",
    },
    info: {
      emailTitle: "Correo",
      phoneTitle: "Teléfono",
      locationTitle: "Ubicación",
      socialTitle: "Redes Sociales",
      connect: "Conéctate conmigo en redes",
    },
  },

  // Footer
  footer: {
    rights: "Todos los derechos reservados.",
    portfolio: "Portafolio de Agustin Millan",
  },

  // Language toggle
  languageToggle: {
    en: "EN",
    es: "ES",
  },
};

export default esTranslations;

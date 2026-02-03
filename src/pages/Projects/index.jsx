import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { theme } from "../../styles/theme";
import { useLanguage } from "../../context/LanguageContext";
import PILOT from "../../assets/images/pilotlovers.png";
import CMS from "../../assets/images/cms.png";
import CLOSR from "../../assets/images/closr.png";

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xxl};
`;

const PageTitle = styled.h1`
  font-size: ${theme.fontSizes.xxxl};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.lg};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 80px;
    height: 4px;
    background-color: ${theme.colors.secondary};
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: ${theme.spacing.xl};
`;

const FeaturedProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xl};
`;

const SectionTitle = styled.h2`
  font-size: ${theme.fontSizes.xxl};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.md};
`;

const FeaturedProject = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.xxl};

  @media (min-width: ${theme.breakpoints.lg}) {
    grid-template-columns: ${({ reverse }) =>
      reverse ? "1fr 1.5fr" : "1.5fr 1fr"};
  }
`;

const ProjectImageContainer = styled.div`
  position: relative;
  border-radius: ${theme.borderRadius.md};
  overflow: hidden;
  height: 300px;
  order: ${({ reverse }) => (reverse ? 2 : 1)};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.secondary};
    opacity: 0.2;
    transition: ${theme.transitions.default};
  }

  &:hover::before {
    opacity: 0;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(30%);
    transition: ${theme.transitions.default};
  }

  &:hover img {
    filter: grayscale(0%);
    transform: scale(1.05);
  }
`;

const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  order: ${({ reverse }) => (reverse ? 1 : 2)};
`;

const ProjectType = styled.p`
  color: ${theme.colors.secondary};
  font-size: ${theme.fontSizes.sm};
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: ${theme.spacing.sm};
`;

const ProjectTitle = styled.h3`
  font-size: ${theme.fontSizes.xl};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.md};
`;

const ProjectDescription = styled.div`
  background-color: ${theme.colors.primaryLight};
  padding: ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.md};
  margin-bottom: ${theme.spacing.md};
  color: ${theme.colors.textSecondary};
  box-shadow: 0 10px 30px -15px rgba(0, 0, 0, 0.7);
`;

const TechStack = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.md};
  list-style: none;
`;

const TechItem = styled.li`
  color: ${theme.colors.textSecondary};
  font-size: ${theme.fontSizes.sm};
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  background-color: ${theme.colors.primary};
  border-radius: ${theme.borderRadius.sm};
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
`;

const ProjectLink = styled.a`
  color: ${theme.colors.text};
  font-size: ${theme.fontSizes.lg};
  transition: ${theme.transitions.default};

  &:hover {
    color: ${theme.colors.secondary};
    transform: translateY(-3px);
  }
`;

const OtherProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xl};
`;

const ProjectCard = styled(motion.div)`
  background-color: ${theme.colors.primaryLight};
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.lg};
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: ${theme.transitions.default};

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px -15px rgba(0, 0, 0, 0.7);
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing.md};
`;

const FolderIcon = styled.div`
  color: ${theme.colors.secondary};
  font-size: 2rem;
`;

const CardLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.sm};
`;

const CardLink = styled.a`
  color: ${theme.colors.textSecondary};
  font-size: ${theme.fontSizes.md};
  transition: ${theme.transitions.default};

  &:hover {
    color: ${theme.colors.secondary};
  }
`;

const CardTitle = styled.h3`
  font-size: ${theme.fontSizes.lg};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.md};
  transition: ${theme.transitions.default};

  &:hover {
    color: ${theme.colors.secondary};
  }
`;

const CardDescription = styled.p`
  color: ${theme.colors.textSecondary};
  font-size: ${theme.fontSizes.md};
  margin-bottom: ${theme.spacing.lg};
  flex-grow: 1;
`;

const CardTechStack = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.sm};
  list-style: none;
`;

const CardTechItem = styled.li`
  color: ${theme.colors.textSecondary};
  font-size: ${theme.fontSizes.xs};
`;

const Projects = () => {
  const { t } = useLanguage();
  // Sample data for featured projects
  const featuredProjects = [
    {
      id: 1,
      title: t("projects.featured.ecommerce.title"),
      description: t("projects.featured.ecommerce.description"),
      image: PILOT,
      techStack: [
        "Node.js",
        "TypeScript",
        "React",
        "Redux",
        "Express",
        "MongoDB",
        "JWT",
        "Getnet API",
      ],
      liveLink: "https://pilotlover.cl",
      reverse: false,
    },
    {
      id: 2,
      title: t("projects.featured.chat.title"),
      description: t("projects.featured.chat.description"),
      image: CLOSR,
      type: t("projects.featured.chat.type"),
      techStack: [
        "Microservices",
        "Nest.js",
        "TypeScript",
        "MongoDB",
        "JWT",
        "Redis",
        "Docker",
        "Socket.io",
        "Notifications",
      ],
      liveLink: "https://www.closr-app.com/",
      reverse: true,
    },
    {
      id: 3,
      title: t("projects.featured.cms.title"),
      description: t("projects.featured.cms.description"),
      image: CMS,
      type: t("projects.featured.cms.type"),
      techStack: ["Node.js", "Express", "MongoDB", "JWT", "Getnet API"],
      reverse: false,
    },
  ];

  // Sample data for other projects
  const otherProjects = [
    {
      id: 1,
      title: t("projects.other.profession.title"),
      description: t("projects.other.profession.description"),
      techStack: ["Node.js", "Express", "MongoDB", "JWT"],
      githubLink: "https://github.com/AgustinMillan/PROFESSION-BE-PUBLIC",
    },
    {
      id: 2,
      title: t("projects.other.asus.title"),
      description: t("projects.other.asus.description"),
      techStack: ["Python", "Django", "Vue.js", "PostgreSQL"],
      liveLink: "https://asuscarecolombia.com/user-guide",
    },
    {
      id: 3,
      title: t("projects.other.serieslm.title"),
      description: t("projects.other.serieslm.description"),
      techStack: ["React", "Tailwind CSS", "node.js", "MySQL"],
      liveLink: "https://seriesobrelamesa.cl/",
    },
    {
      id: 4,
      title: t("projects.other.interactiveMap.title"),
      description: t("projects.other.interactiveMap.description"),
      techStack: ["React", "Leaflet", "Tailwind CSS"],
      liveLink: "https://accarps-maipo.cl/",
    },
    {
      id: 5,
      title: t("projects.other.belenusCL.title"),
      description: t("projects.other.belenusCL.description"),
      techStack: [
        "Node.js",
        "Shopify",
        "Flowww",
        "Metacampos",
        "Shopify Extensions",
        "Graphql API Shopify",
      ],
      liveLink: "https://belenus.cl/",
    },
    {
      id: 6,
      title: t("projects.other.mysqlMigration.title"),
      description: t("projects.other.mysqlMigration.description"),
      techStack: ["MySQL", "Automatized", "Node.js", "MigrateDB", "Sequelize"],
      liveLink: "https://www.metrogas.cl/",
    },
    {
      id: 7,
      title: t("projects.other.gpsfleet.title"),
      description: t("projects.other.gpsfleet.description"),
      techStack: [
        "Node.js",
        "Express",
        "Postgressql",
        "Sequelize",
        "Traccar API",
        "geolocation",
      ],
      githubLink: "https://github.com/AgustinMillan/TRACCAR-GPS-BE",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <ProjectsContainer>
      <PageTitle
        as={motion.h1}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {t("projects.title")}
      </PageTitle>

      <FeaturedProjectsSection>
        <SectionTitle>{t("projects.featuredTitle")}</SectionTitle>

        {featuredProjects.map((project, index) => (
          <FeaturedProject
            key={project.id}
            reverse={project.reverse}
            as={motion.div}
            {...(index === 0
              ? {}
              : {
                  initial: { opacity: 0, y: 50 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { duration: 0.6 },
                })}
          >
            <ProjectImageContainer reverse={project.reverse}>
              <img src={project.image} alt={project.title} />
            </ProjectImageContainer>

            <ProjectContent reverse={project.reverse}>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>
                <p>{project.description}</p>
              </ProjectDescription>

              <TechStack>
                {project.techStack.map((tech, index) => (
                  <TechItem key={index}>{tech}</TechItem>
                ))}
              </TechStack>

              <ProjectLinks>
                {project.liveLink && (
                  <ProjectLink
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live Demo"
                  >
                    <FaExternalLinkAlt />
                  </ProjectLink>
                )}
              </ProjectLinks>
            </ProjectContent>
          </FeaturedProject>
        ))}
      </FeaturedProjectsSection>

      <OtherProjectsSection>
        <SectionTitle>{t("projects.otherTitle")}</SectionTitle>

        <ProjectsGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {otherProjects.map((project) => (
            <ProjectCard key={project.id} variants={itemVariants}>
              <CardHeader>
                <FolderIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  </svg>
                </FolderIcon>

                <CardLinks>
                  {project.githubLink && (
                    <CardLink
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Repository"
                    >
                      <FaGithub />
                    </CardLink>
                  )}
                  {project.liveLink && (
                    <CardLink
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live Demo"
                    >
                      <FaExternalLinkAlt />
                    </CardLink>
                  )}
                </CardLinks>
              </CardHeader>

              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>

              <CardTechStack>
                {project.techStack.map((tech, index) => (
                  <CardTechItem key={index}>
                    {index !== project.techStack.length - 1
                      ? `${tech} • `
                      : tech}
                  </CardTechItem>
                ))}
              </CardTechStack>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </OtherProjectsSection>
    </ProjectsContainer>
  );
};

export default Projects;

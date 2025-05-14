import React, { useRef } from "react";
import { useLanguage } from "../../context/LanguageContext";
import styled from "styled-components";
import { motion, useInView } from "framer-motion";
import {
  FaNodeJs,
  FaPython,
  FaDocker,
  FaAws,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaLinux,
  FaHtml5,
  FaCss3,
} from "react-icons/fa";
import {
  SiExpress,
  SiDjango,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiGraphql,
  SiKubernetes,
  SiJenkins,
  SiNginx,
  SiApache,
  SiTypescript,
  SiNestjs,
  SiSwagger,
  SiSocketdotio,
  SiJest,
  SiMongoose,
  SiSequelize,
  SiMariadb,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiFramer,
  SiStorybook,
  SiZod,
  SiJira,
  SiGitlab,
  SiSonarqube,
  SiCpanel,
} from "react-icons/si";
import { theme } from "../../styles/theme";

const SkillsContainer = styled.div`
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

const SkillsSection = styled.section`
  margin-bottom: ${theme.spacing.xxl};
`;

const SectionTitle = styled.h2`
  font-size: ${theme.fontSizes.xxl};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.xl};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 4px;
    background-color: ${theme.colors.secondary};
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: ${theme.spacing.lg};

  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

const SkillCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.primaryLight};
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.lg};
  transition: ${theme.transitions.default};

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px -15px rgba(0, 0, 0, 0.7);
    background-color: ${theme.colors.primary};
  }
`;

const SkillIcon = styled.div`
  font-size: 3rem;
  color: ${theme.colors.secondary};
  margin-bottom: ${theme.spacing.md};
`;

const SkillName = styled.h3`
  font-size: ${theme.fontSizes.md};
  color: ${theme.colors.text};
  text-align: center;
`;

const ProgressBarsSection = styled.section`
  margin-bottom: ${theme.spacing.xxl};
`;

const ProgressBar = styled.div`
  margin-bottom: ${theme.spacing.lg};
`;

const ProgressHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${theme.spacing.sm};
`;

const ProgressTitle = styled.h3`
  font-size: ${theme.fontSizes.lg};
  color: ${theme.colors.text};
`;

const ProgressPercentage = styled.span`
  font-size: ${theme.fontSizes.md};
  color: ${theme.colors.secondary};
`;

const ProgressTrack = styled.div`
  width: 100%;
  height: 8px;
  background-color: ${theme.colors.primaryLight};
  border-radius: ${theme.borderRadius.sm};
  overflow: hidden;
`;

const ProgressFill = styled(motion.div)`
  height: 100%;
  background-color: ${theme.colors.secondary};
  border-radius: ${theme.borderRadius.sm};
`;

const SkillsDescription = styled.p`
  color: ${theme.colors.textSecondary};
  font-size: ${theme.fontSizes.lg};
  line-height: 1.7;
  margin-bottom: ${theme.spacing.xl};
  max-width: 800px;
`;

const Highlight = styled.span`
  color: ${theme.colors.secondary};
  font-weight: 500;
`;

const Skills = () => {
  const { t } = useLanguage();
  // Programming Languages
  const languages = [
    { name: "JavaScript", icon: <FaNodeJs /> },
    { name: "Python", icon: <FaPython /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3 /> },
  ];

  // Frameworks & Libraries
  const frameworks = [
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "Django", icon: <SiDjango /> },
    { name: "GraphQL", icon: <SiGraphql /> },
    { name: "NestJS", icon: <SiNestjs /> },
    { name: "Swagger", icon: <SiSwagger /> },
    { name: "Socket.io", icon: <SiSocketdotio /> },
    { name: "Zod", icon: <SiZod /> },
    { name: "Jest", icon: <SiJest /> },
    { name: "React", icon: <SiReact /> },
    { name: "Redux", icon: <SiRedux /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Framer Motion", icon: <SiFramer /> },
    { name: "Storybook", icon: <SiStorybook /> },
  ];

  // Databases
  const databases = [
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Redis", icon: <SiRedis /> },
    { name: "SQL", icon: <FaDatabase /> },
    { name: "MariaDB", icon: <SiMariadb /> },
    { name: "Mongoose", icon: <SiMongoose /> },
    { name: "Sequelize", icon: <SiSequelize /> },
  ];

  // DevOps & Tools
  const devops = [
    { name: "Docker", icon: <FaDocker /> },
    { name: "AWS", icon: <FaAws /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Gitlab", icon: <SiGitlab /> },
    { name: "Linux", icon: <FaLinux /> },
    { name: "Nginx", icon: <SiNginx /> },
    { name: "Apache", icon: <SiApache /> },
    { name: "Jira", icon: <SiJira /> },
    { name: "SonarQube", icon: <SiSonarqube /> },
    { name: "CPanel", icon: <SiCpanel /> },
  ];

  // Core competencies with percentages
  const coreCompetencies = [
    { name: t("skills.competencies.backend"), percentage: 95 },
    { name: t("skills.competencies.api"), percentage: 95 },
    { name: t("skills.competencies.database"), percentage: 85 },
    { name: t("skills.competencies.microservices"), percentage: 90 },
    { name: t("skills.competencies.system"), percentage: 85 },
    { name: t("skills.competencies.cloud"), percentage: 80 },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <SkillsContainer>
      <PageTitle
        as={motion.h1}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {t("skills.title")}
      </PageTitle>

      <SkillsDescription>
        {t("skills.description")
          .split("backend developer")
          .map((part, i) =>
            i === 0 ? <React.Fragment key={i}>{part}</React.Fragment> : part
          )}
      </SkillsDescription>

      <ProgressBarsSection>
        <SectionTitle>{t("skills.competenciesTitle")}</SectionTitle>

        {coreCompetencies.map((skill, index) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { once: true });

          return (
            <ProgressBar key={index}>
              <ProgressHeader>
                <ProgressTitle>{skill.name}</ProgressTitle>
                <ProgressPercentage>{skill.percentage}%</ProgressPercentage>
              </ProgressHeader>
              <ProgressTrack>
                <ProgressFill
                  ref={ref}
                  animate={{ width: isInView ? `${skill.percentage}%` : 0 }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </ProgressTrack>
            </ProgressBar>
          );
        })}
      </ProgressBarsSection>

      <SkillsSection>
        <SectionTitle>{t("skills.languagesTitle")}</SectionTitle>

        <SkillsGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {languages.map((skill, index) => (
            <SkillCard key={index} variants={itemVariants}>
              <SkillIcon>{skill.icon}</SkillIcon>
              <SkillName>{skill.name}</SkillName>
            </SkillCard>
          ))}
        </SkillsGrid>
      </SkillsSection>

      <SkillsSection>
        <SectionTitle>{t("skills.frameworksTitle")}</SectionTitle>

        <SkillsGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {frameworks.map((skill, index) => (
            <SkillCard key={index} variants={itemVariants}>
              <SkillIcon>{skill.icon}</SkillIcon>
              <SkillName>{skill.name}</SkillName>
            </SkillCard>
          ))}
        </SkillsGrid>
      </SkillsSection>

      <SkillsSection>
        <SectionTitle>{t("skills.databasesTitle")}</SectionTitle>

        <SkillsGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {databases.map((skill, index) => (
            <SkillCard key={index} variants={itemVariants}>
              <SkillIcon>{skill.icon}</SkillIcon>
              <SkillName>{skill.name}</SkillName>
            </SkillCard>
          ))}
        </SkillsGrid>
      </SkillsSection>

      <SkillsSection>
        <SectionTitle>{t("skills.devopsTitle")}</SectionTitle>

        <SkillsGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {devops.map((skill, index) => (
            <SkillCard key={index} variants={itemVariants}>
              <SkillIcon>{skill.icon}</SkillIcon>
              <SkillName>{skill.name}</SkillName>
            </SkillCard>
          ))}
        </SkillsGrid>
      </SkillsSection>
    </SkillsContainer>
  );
};

export default Skills;

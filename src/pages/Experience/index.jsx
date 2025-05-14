import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { theme } from "../../styles/theme";
import { useLanguage } from "../../context/LanguageContext";

const ExperienceContainer = styled.div`
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

const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${theme.breakpoints.md}) {
    flex-direction: row;
    gap: ${theme.spacing.xl};
  }
`;

const TabList = styled.div`
  display: flex;
  overflow-x: auto;
  margin-bottom: ${theme.spacing.lg};
  border-bottom: 2px solid ${theme.colors.primaryLight};

  @media (min-width: ${theme.breakpoints.md}) {
    flex-direction: column;
    border-bottom: none;
    border-left: 2px solid ${theme.colors.primaryLight};
    min-width: 200px;
    margin-bottom: 0;
  }
`;

const Tab = styled.button`
  padding: ${theme.spacing.md};
  background-color: transparent;
  color: ${({ active }) =>
    active ? theme.colors.secondary : theme.colors.textSecondary};
  border: none;
  cursor: pointer;
  font-size: ${theme.fontSizes.md};
  text-align: left;
  white-space: nowrap;
  position: relative;
  transition: ${theme.transitions.default};

  &:hover {
    color: ${theme.colors.secondary};
    background-color: rgba(100, 255, 218, 0.1);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${({ active }) =>
      active ? theme.colors.secondary : "transparent"};
    transition: ${theme.transitions.default};

    @media (min-width: ${theme.breakpoints.md}) {
      bottom: auto;
      top: 0;
      left: -2px;
      width: 2px;
      height: 100%;
    }
  }
`;

const TabContent = styled(motion.div)`
  flex: 1;
  padding: ${theme.spacing.lg};
`;

const JobTitle = styled.h3`
  font-size: ${theme.fontSizes.xl};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.sm};
`;

const CompanyName = styled.h4`
  font-size: ${theme.fontSizes.lg};
  color: ${theme.colors.secondary};
  margin-bottom: ${theme.spacing.md};

  a {
    color: ${theme.colors.secondary};

    &:hover {
      text-decoration: underline;
    }
  }
`;

const JobDuration = styled.p`
  font-size: ${theme.fontSizes.md};
  color: ${theme.colors.textSecondary};
  margin-bottom: ${theme.spacing.lg};
`;

const JobDescription = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const JobDuty = styled.li`
  color: ${theme.colors.textSecondary};
  font-size: ${theme.fontSizes.md};
  margin-bottom: ${theme.spacing.md};
  padding-left: ${theme.spacing.lg};
  position: relative;

  &::before {
    content: "▹";
    position: absolute;
    left: 0;
    color: ${theme.colors.secondary};
  }
`;

const EducationSection = styled.section`
  margin-top: ${theme.spacing.xxl};
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

const EducationCard = styled(motion.div)`
  background-color: ${theme.colors.primaryLight};
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.lg};
  border-left: 4px solid ${theme.colors.secondary};
  transition: ${theme.transitions.default};

  &:hover {
    transform: translateX(10px);
    box-shadow: 0 10px 30px -15px rgba(0, 0, 0, 0.7);
  }
`;

const DegreeName = styled.h3`
  font-size: ${theme.fontSizes.xl};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.sm};
`;

const InstitutionName = styled.h4`
  font-size: ${theme.fontSizes.lg};
  color: ${theme.colors.secondary};
  margin-bottom: ${theme.spacing.md};
`;

const EducationDuration = styled.p`
  font-size: ${theme.fontSizes.md};
  color: ${theme.colors.textSecondary};
  margin-bottom: ${theme.spacing.md};
`;

const EducationDescription = styled.p`
  color: ${theme.colors.textSecondary};
  font-size: ${theme.fontSizes.md};
  line-height: 1.6;
`;

const Experience = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);

  // Work experience data
  const workExperience = [
    {
      id: 1,
      company: t("experience.companies.bosquestudio.company"),
      title: t("experience.companies.bosquestudio.title"),
      url: "https://example.com",
      duration: t("experience.companies.bosquestudio.duration"),
      duties: [
        t("experience.companies.bosquestudio.duties.0"),
        t("experience.companies.bosquestudio.duties.1"),
        t("experience.companies.bosquestudio.duties.2"),
        t("experience.companies.bosquestudio.duties.3"),
        t("experience.companies.bosquestudio.duties.4"),
        t("experience.companies.bosquestudio.duties.5"),
        t("experience.companies.bosquestudio.duties.6"),
      ],
    },
    {
      id: 2,
      company: t("experience.companies.softwindev.company"),
      title: t("experience.companies.softwindev.title"),
      url: "https://example.com",
      duration: t("experience.companies.softwindev.duration"),
      duties: [
        t("experience.companies.softwindev.duties.0"),
        t("experience.companies.softwindev.duties.1"),
        t("experience.companies.softwindev.duties.2"),
        t("experience.companies.softwindev.duties.3"),
        t("experience.companies.softwindev.duties.4"),
      ],
    },
    {
      id: 3,
      company: t("experience.companies.nekodev.company"),
      title: t("experience.companies.nekodev.title"),
      url: "https://example.com",
      duration: t("experience.companies.nekodev.duration"),
      duties: [
        t("experience.companies.nekodev.duties.0"),
        t("experience.companies.nekodev.duties.1"),
        t("experience.companies.nekodev.duties.2"),
        t("experience.companies.nekodev.duties.3"),
      ],
    },
  ];

  // Education data
  const education = [
    {
      id: 1,
      degree: t("experience.education.utn.degree"),
      institution: t("experience.education.utn.institution"),
      duration: t("experience.education.utn.duration"),
      description: t("experience.education.utn.description"),
    },
    {
      id: 2,
      degree: t("experience.education.henry.degree"),
      institution: t("experience.education.henry.institution"),
      duration: t("experience.education.henry.duration"),
      description: t("experience.education.henry.description"),
    },
  ];

  // Animation variants
  const contentVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
    exit: {
      opacity: 0,
      x: 20,
      transition: { duration: 0.3 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: custom * 0.2,
      },
    }),
  };

  return (
    <ExperienceContainer>
      <PageTitle
        as={motion.h1}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {t("experience.title")}
      </PageTitle>

      <TabsContainer>
        <TabList>
          {workExperience.map((job, index) => (
            <Tab
              key={job.id}
              active={activeTab === index}
              onClick={() => setActiveTab(index)}
            >
              {job.company}
            </Tab>
          ))}
        </TabList>

        <TabContent
          key={activeTab}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={contentVariants}
        >
          <JobTitle>{workExperience[activeTab].title}</JobTitle>
          <CompanyName>
            <a
              href={workExperience[activeTab].url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {workExperience[activeTab].company}
            </a>
          </CompanyName>
          <JobDuration>{workExperience[activeTab].duration}</JobDuration>

          <JobDescription>
            {workExperience[activeTab].duties.map((duty, index) => (
              <JobDuty key={index}>{duty}</JobDuty>
            ))}
          </JobDescription>
        </TabContent>
      </TabsContainer>

      <EducationSection>
        <SectionTitle>{t("experience.educationTitle")}</SectionTitle>

        {education.map((edu, index) => (
          <EducationCard
            key={edu.id}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
          >
            <DegreeName>{edu.degree}</DegreeName>
            <InstitutionName>{edu.institution}</InstitutionName>
            <EducationDuration>{edu.duration}</EducationDuration>
            <EducationDescription>{edu.description}</EducationDescription>
          </EducationCard>
        ))}
      </EducationSection>
    </ExperienceContainer>
  );
};

export default Experience;

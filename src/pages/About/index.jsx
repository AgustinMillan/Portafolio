import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import { theme } from "../../styles/theme";
import { useLanguage } from "../../context/LanguageContext";
import image from "../../assets/images/agustin-millan.webp";
import PDF from "../../assets/CV_Agustin_Millan.pdf";

const AboutContainer = styled.div`
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

const AboutSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.xl};

  @media (min-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 3fr 2fr;
  }
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.lg};
`;

const Paragraph = styled.p`
  color: ${theme.colors.textSecondary};
  font-size: ${theme.fontSizes.lg};
  line-height: 1.7;
  margin-bottom: ${theme.spacing.md};
`;

const Highlight = styled.span`
  color: ${theme.colors.secondary};
  font-weight: 500;
`;

const ProfileImageContainer = styled(motion.div)`
  position: relative;
  max-width: 300px;
  margin: 0 auto;

  &::before {
    content: "";
    position: absolute;
    top: 15px;
    left: 15px;
    width: 100%;
    height: 100%;
    border: 2px solid ${theme.colors.secondary};
    border-radius: ${theme.borderRadius.md};
    z-index: -1;
    transition: ${theme.transitions.default};
  }

  &:hover::before {
    top: 10px;
    left: 10px;
  }

  img {
    border-radius: ${theme.borderRadius.md};
    filter: grayscale(100%);
    transition: ${theme.transitions.default};
    border: 2px solid ${theme.colors.primary};
    max-width: 100%;
  }

  &:hover img {
    filter: grayscale(0%);
  }
`;

const ResumeButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  background-color: transparent;
  color: ${theme.colors.secondary};
  border: 1px solid ${theme.colors.secondary};
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  font-size: ${theme.fontSizes.md};
  font-weight: 500;
  transition: ${theme.transitions.default};
  margin-top: ${theme.spacing.lg};
  width: fit-content;

  &:hover {
    background-color: rgba(100, 255, 218, 0.1);
    transform: translateY(-3px);
  }
`;

const ValuesSection = styled.section`
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

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: ${theme.spacing.lg};
`;

const ValueCard = styled(motion.div)`
  background-color: ${theme.colors.primaryLight};
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.lg};
  border-top: 4px solid ${theme.colors.secondary};
  transition: ${theme.transitions.default};

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px -15px rgba(0, 0, 0, 0.7);
  }
`;

const ValueTitle = styled.h3`
  font-size: ${theme.fontSizes.xl};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.md};
`;

const ValueDescription = styled.p`
  color: ${theme.colors.textSecondary};
  font-size: ${theme.fontSizes.md};
  line-height: 1.6;
`;

const About = () => {
  const { t } = useLanguage();
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

  // Values data
  const values = [
    {
      id: 1,
      title: t("about.values.code.title"),
      description: t("about.values.code.description"),
    },
    {
      id: 2,
      title: t("about.values.learning.title"),
      description: t("about.values.learning.description"),
    },
    {
      id: 3,
      title: t("about.values.problem.title"),
      description: t("about.values.problem.description"),
    },
    {
      id: 4,
      title: t("about.values.collaboration.title"),
      description: t("about.values.collaboration.description"),
    },
  ];

  return (
    <AboutContainer>
      <PageTitle
        as={motion.h1}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {t("about.title")}
      </PageTitle>

      <AboutSection>
        <AboutContent>
          <Paragraph>
            {t("about.paragraph1")
              .split("Backend Developer")
              .map((part, i) =>
                i === 0 ? <React.Fragment key={i}>{part}</React.Fragment> : part
              )}
          </Paragraph>

          <Paragraph>
            {t("about.paragraph2")
              .replace("RESTful APIs", "<h1>")
              .replace("database architectures", "<h2>")
              .split("<h1>")
              .map((part, i) =>
                i === 0 ? (
                  <React.Fragment key={i}>{part}</React.Fragment>
                ) : (
                  part.split("<h2>").map((subPart, j) =>
                    j === 0 ? (
                      <React.Fragment key={`${i}-${j}`}>
                        <Highlight>RESTful APIs</Highlight>
                        {subPart}
                      </React.Fragment>
                    ) : (
                      subPart.split("<h3>").map((subSubPart, k) =>
                        k === 0 ? (
                          <React.Fragment key={`${i}-${j}-${k}`}>
                            <Highlight> database architectures</Highlight>
                            {subSubPart}
                          </React.Fragment>
                        ) : (
                          <React.Fragment key={`${i}-${j}-${k}`}>
                            <Highlight>microservices</Highlight>
                            {subSubPart}
                          </React.Fragment>
                        )
                      )
                    )
                  )
                )
              )}
          </Paragraph>

          <Paragraph>{t("about.paragraph3")}</Paragraph>

          <Paragraph>{t("about.paragraph4")}</Paragraph>

          <ResumeButton
            href={PDF}
            target="_blank"
            rel="noopener noreferrer"
            as={motion.a}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload /> {t("about.downloadResume")}
          </ResumeButton>
        </AboutContent>

        <ProfileImageContainer
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img src={image} alt="Profile" />
        </ProfileImageContainer>
      </AboutSection>

      <ValuesSection>
        <SectionTitle>{t("about.valuesTitle")}</SectionTitle>

        <ValuesGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {values.map((value, index) => (
            <ValueCard key={value.id} variants={itemVariants} custom={index}>
              <ValueTitle>{value.title}</ValueTitle>
              <ValueDescription>{value.description}</ValueDescription>
            </ValueCard>
          ))}
        </ValuesGrid>
      </ValuesSection>
    </AboutContainer>
  );
};

export default About;

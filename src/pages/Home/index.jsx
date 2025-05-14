import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaArrowRight, FaCode, FaServer, FaDatabase } from "react-icons/fa";
import { Link } from "react-router-dom";
import { theme } from "../../styles/theme";
import { useLanguage } from "../../context/LanguageContext";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xxl};
`;

const HeroSection = styled.section`
  min-height: calc(100vh - 200px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: ${theme.spacing.lg};
`;

const Greeting = styled(motion.p)`
  color: ${theme.colors.secondary};
  font-size: ${theme.fontSizes.lg};
  font-weight: 500;
`;

const Title = styled(motion.h1)`
  font-size: clamp(40px, 8vw, 80px);
  font-weight: 700;
  color: ${theme.colors.text};
  line-height: 1.1;
  margin: 0;
`;

const Subtitle = styled(motion.h2)`
  font-size: clamp(30px, 5vw, 50px);
  font-weight: 600;
  color: ${theme.colors.textSecondary};
  line-height: 1.1;
  margin: 0;
`;

const Description = styled(motion.p)`
  max-width: 540px;
  color: ${theme.colors.textSecondary};
  font-size: ${theme.fontSizes.lg};
  margin-top: ${theme.spacing.lg};
`;

const CTAButton = styled(motion.div)`
  margin-top: ${theme.spacing.lg};

  a {
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

    &:hover {
      background-color: rgba(100, 255, 218, 0.1);
      transform: translateY(-3px);

      svg {
        transform: translateX(5px);
      }
    }

    svg {
      transition: ${theme.transitions.default};
    }
  }
`;

const ServicesSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xl};
`;

const SectionTitle = styled.h2`
  font-size: ${theme.fontSizes.xxl};
  color: ${theme.colors.text};
  position: relative;
  margin-bottom: ${theme.spacing.lg};

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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacing.lg};
`;

const ServiceCard = styled(motion.div)`
  background-color: ${theme.colors.primaryLight};
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.lg};
  transition: ${theme.transitions.default};
  border-left: 4px solid ${theme.colors.secondary};

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px -15px rgba(0, 0, 0, 0.7);
  }
`;

const ServiceIcon = styled.div`
  font-size: 2.5rem;
  color: ${theme.colors.secondary};
  margin-bottom: ${theme.spacing.md};
`;

const ServiceTitle = styled.h3`
  font-size: ${theme.fontSizes.xl};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.md};
`;

const ServiceDescription = styled.p`
  color: ${theme.colors.textSecondary};
  font-size: ${theme.fontSizes.md};
`;

const Home = () => {
  const { t } = useLanguage();

  // Variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const serviceVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2,
        duration: 0.5,
      },
    }),
  };

  return (
    <HomeContainer>
      <HeroSection
        as={motion.section}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Greeting variants={itemVariants}>{t("home.greeting")}</Greeting>
        <Title variants={itemVariants}>{t("home.title")}</Title>
        <Subtitle variants={itemVariants}>{t("home.subtitle")}</Subtitle>
        <Description variants={itemVariants}>
          {t("home.description")}
        </Description>
        <CTAButton variants={itemVariants}>
          <Link to="/projects">
            {t("home.cta")} <FaArrowRight />
          </Link>
        </CTAButton>
      </HeroSection>

      <ServicesSection>
        <SectionTitle>{t("home.whatIDo")}</SectionTitle>
        <ServicesGrid>
          <ServiceCard
            as={motion.div}
            variants={serviceVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            <ServiceIcon>
              <FaServer />
            </ServiceIcon>
            <ServiceTitle>{t("home.services.api.title")}</ServiceTitle>
            <ServiceDescription>
              {t("home.services.api.description")}
            </ServiceDescription>
          </ServiceCard>

          <ServiceCard
            as={motion.div}
            variants={serviceVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            <ServiceIcon>
              <FaDatabase />
            </ServiceIcon>
            <ServiceTitle>{t("home.services.database.title")}</ServiceTitle>
            <ServiceDescription>
              {t("home.services.database.description")}
            </ServiceDescription>
          </ServiceCard>

          <ServiceCard
            as={motion.div}
            variants={serviceVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
          >
            <ServiceIcon>
              <FaCode />
            </ServiceIcon>
            <ServiceTitle>
              {t("home.services.microservices.title")}
            </ServiceTitle>
            <ServiceDescription>
              {t("home.services.microservices.description")}
            </ServiceDescription>
          </ServiceCard>
        </ServicesGrid>
      </ServicesSection>
    </HomeContainer>
  );
};

export default Home;

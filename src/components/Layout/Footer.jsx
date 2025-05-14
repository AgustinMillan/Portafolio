import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { theme } from "../../styles/theme";
import { useLanguage } from "../../context/LanguageContext";

const FooterContainer = styled.footer`
  background-color: ${theme.colors.primary};
  padding: ${theme.spacing.lg} 0;
  margin-top: ${theme.spacing.xxl};
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.md};
  padding: 0 ${theme.spacing.md};
  width: 100%;
  box-sizing: border-box;

  @media (min-width: ${theme.breakpoints.md}) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 ${theme.spacing.lg};
  }
`;

const Copyright = styled.p`
  color: ${theme.colors.textSecondary};
  font-size: ${theme.fontSizes.sm};
  text-align: center;

  span {
    color: ${theme.colors.secondary};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
`;

const SocialIcon = styled.a`
  color: ${theme.colors.textSecondary};
  font-size: ${theme.fontSizes.lg};
  transition: ${theme.transitions.default};

  &:hover {
    color: ${theme.colors.secondary};
    transform: translateY(-3px);
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <FooterContainer>
      <FooterContent>
        <Copyright>
          © {currentYear} <span>{t("footer.portfolio")}</span>.{" "}
          {t("footer.rights")}
        </Copyright>

        <SocialLinks>
          <SocialIcon
            href="https://github.com/AgustinMillan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </SocialIcon>
          <SocialIcon
            href="https://www.linkedin.com/in/agustin-millan-415752244/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </SocialIcon>
          <SocialIcon
            href="mailto:victor.agustin.millan@gmail.com"
            aria-label="Email"
          >
            <FaEnvelope />
          </SocialIcon>
        </SocialLinks>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;

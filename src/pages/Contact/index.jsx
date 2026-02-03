import React, { useState, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import { theme } from "../../styles/theme";
import { useLanguage } from "../../context/LanguageContext";
import emailjs from "@emailjs/browser";
import { EMAIL_CONFIG } from "../../config/emailConfig";

const ContactContainer = styled.div`
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

const ContactDescription = styled.p`
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

const ContactContent = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Label = styled.label`
  color: ${theme.colors.text};
  font-size: ${theme.fontSizes.md};
`;

const Input = styled.input`
  padding: ${theme.spacing.md};
  background-color: ${theme.colors.primary};
  border: 1px solid ${theme.colors.primaryLight};
  border-radius: ${theme.borderRadius.sm};
  color: ${theme.colors.text};
  font-size: ${theme.fontSizes.md};
  transition: ${theme.transitions.default};

  &:focus {
    outline: none;
    border-color: ${theme.colors.secondary};
    box-shadow: 0 0 0 2px rgba(100, 255, 218, 0.2);
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xl};
`;

const ContactInfoItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
  padding: ${theme.spacing.lg};
  background-color: ${theme.colors.primaryLight};
  border-radius: ${theme.borderRadius.md};
  transition: ${theme.transitions.default};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px -15px rgba(0, 0, 0, 0.7);
  }
`;

const ContactIcon = styled.div`
  font-size: 1.5rem;
  color: ${theme.colors.secondary};
  margin-top: ${theme.spacing.xs};
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactTitle = styled.h3`
  font-size: ${theme.fontSizes.lg};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.sm};
`;

const ContactText = styled.p`
  color: ${theme.colors.textSecondary};
  font-size: ${theme.fontSizes.md};

  a {
    color: ${theme.colors.secondary};
    transition: ${theme.transitions.default};

    &:hover {
      text-decoration: underline;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.lg};
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${theme.borderRadius.round};
  background-color: ${theme.colors.primary};
  color: ${theme.colors.textSecondary};
  font-size: ${theme.fontSizes.lg};
  transition: ${theme.transitions.default};

  &:hover {
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.primary};
    transform: translateY(-5px);
  }
`;

const StatusMessage = styled(motion.div)`
  padding: ${theme.spacing.md};
  border-radius: ${theme.borderRadius.sm};
  margin-top: ${theme.spacing.md};
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  font-weight: 500;

  &.success {
    background-color: rgba(39, 174, 96, 0.1);
    color: #27ae60;
  }

  &.error {
    background-color: rgba(231, 76, 60, 0.1);
    color: #e74c3c;
  }
`;

const LoadingSpinner = styled.div`
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top: 3px solid ${theme.colors.secondary};
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;
  margin-right: ${theme.spacing.sm};

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

// Utilizamos la configuración del archivo emailConfig.js

const Contact = () => {
  const { t } = useLanguage();
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({
    submitting: false,
    message: null,
    type: null,
  });

  // Definición de variantes de animación
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ submitting: true, message: null, type: null });

    // Inicializamos EmailJS con la clave pública
    emailjs.init(EMAIL_CONFIG.PUBLIC_KEY);

    // Preparamos los parámetros para la plantilla de correo
    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      message: formData.subject + "\n\n" + formData.message,
      reply_to: formData.email,
      to_name: "Agustín Millán",
      to_email: EMAIL_CONFIG.SMTP_USER,
    };

    // Enviamos el correo usando EmailJS
    emailjs
      .send(EMAIL_CONFIG.SERVICE_ID, EMAIL_CONFIG.TEMPLATE_ID, templateParams)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setStatus({
          submitting: false,
          message: t("contact.form.successMessage"),
          type: "success",
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((err) => {
        console.error("FAILED...", err);
        setStatus({
          submitting: false,
          message: t("contact.form.errorMessage"),
          type: "error",
        });
      });
  };

  return (
    <ContactContainer>
      <PageTitle
        as={motion.h1}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {t("contact.title")}
      </PageTitle>

      <ContactDescription>
        {t("contact.description")
          .split("open to new opportunities")
          .map((part, i) =>
            i === 0 ? <React.Fragment key={i}>{part}</React.Fragment> : part,
          )}
      </ContactDescription>

      <ContactContent>
        {/* <ContactForm ref={formRef} onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">{t("contact.form.name")}</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">{t("contact.form.email")}</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="subject">{t("contact.form.subject")}</Label>
            <Input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="message">{t("contact.form.message")}</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <SubmitButton type="submit" disabled={status.submitting}>
            {status.submitting ? (
              <>
                <LoadingSpinner />
                {t("contact.form.sending")}
              </>
            ) : (
              t("contact.form.submit")
            )}
          </SubmitButton>

          {status.message && (
            <StatusMessage
              className={status.type}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {status.type === "success" ? (
                <FaCheckCircle />
              ) : (
                <FaExclamationCircle />
              )}
              {status.message}
            </StatusMessage>
          )}
        </ContactForm> */}

        <ContactInfo
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <ContactInfoItem variants={itemVariants}>
            <ContactIcon>
              <FaEnvelope />
            </ContactIcon>
            <ContactDetails>
              <ContactTitle>{t("contact.info.emailTitle")}</ContactTitle>
              <ContactText>
                <a
                  href="mailto:victor.agustin.millan@gmail.com"
                  target="_blank"
                >
                  victor.agustin.millan@gmail.com
                </a>
              </ContactText>
            </ContactDetails>
          </ContactInfoItem>

          <ContactInfoItem variants={itemVariants}>
            <ContactIcon>
              <FaPhone />
            </ContactIcon>
            <ContactDetails>
              <a href="https://wa.me/+5493812094990" target="_blank">
                <ContactTitle>{t("contact.info.phoneTitle")}</ContactTitle>
                <ContactText>+54 9 381 209-4990</ContactText>
              </a>
            </ContactDetails>
          </ContactInfoItem>

          <ContactInfoItem variants={itemVariants}>
            <ContactIcon>
              <FaMapMarkerAlt />
            </ContactIcon>
            <ContactDetails>
              <ContactTitle>{t("contact.info.locationTitle")}</ContactTitle>
              <ContactText>CABA, Buenos Aires, Argentina</ContactText>
            </ContactDetails>
          </ContactInfoItem>

          <ContactInfoItem variants={itemVariants}>
            <ContactIcon>
              <FaLinkedin />
            </ContactIcon>
            <ContactDetails>
              <ContactTitle>{t("contact.info.socialTitle")}</ContactTitle>
              <SocialLinks>
                <SocialLink
                  href="https://www.linkedin.com/in/agustin-millan-415752244/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </SocialLink>
                <SocialLink
                  href="https://github.com/AgustinMillan"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </SocialLink>
              </SocialLinks>
            </ContactDetails>
          </ContactInfoItem>
        </ContactInfo>
      </ContactContent>
    </ContactContainer>
  );
};

export default Contact;

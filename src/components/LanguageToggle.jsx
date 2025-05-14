import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { theme } from '../styles/theme';

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: ${theme.spacing.md};
`;

const ToggleButton = styled.button`
  background-color: ${({ active }) => active ? theme.colors.secondary : 'transparent'};
  color: ${({ active }) => active ? theme.colors.primary : theme.colors.textSecondary};
  border: 1px solid ${theme.colors.secondary};
  border-radius: ${({ position }) => 
    position === 'left' 
      ? `${theme.borderRadius.md} 0 0 ${theme.borderRadius.md}` 
      : `0 ${theme.borderRadius.md} ${theme.borderRadius.md} 0`
  };
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  font-size: ${theme.fontSizes.sm};
  font-weight: 500;
  cursor: pointer;
  transition: ${theme.transitions.default};
  
  &:hover {
    background-color: ${({ active }) => active ? theme.colors.secondary : 'rgba(100, 255, 218, 0.1)'};
  }
`;

const LanguageToggle = () => {
  const { language, toggleLanguage, t } = useLanguage();
  
  return (
    <ToggleContainer>
      <ToggleButton 
        position="left"
        active={language === 'en'}
        onClick={() => language !== 'en' && toggleLanguage()}
        as={motion.button}
        whileTap={{ scale: 0.95 }}
      >
        {t('languageToggle.en')}
      </ToggleButton>
      <ToggleButton 
        position="right"
        active={language === 'es'}
        onClick={() => language !== 'es' && toggleLanguage()}
        as={motion.button}
        whileTap={{ scale: 0.95 }}
      >
        {t('languageToggle.es')}
      </ToggleButton>
    </ToggleContainer>
  );
};

export default LanguageToggle;

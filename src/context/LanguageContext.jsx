import React, { createContext, useState, useContext, useEffect } from 'react';
import { translations } from '../translations';

// Create the language context
const LanguageContext = createContext();

// Custom hook to use the language context
export const useLanguage = () => useContext(LanguageContext);

// Language provider component
export const LanguageProvider = ({ children }) => {
  // Get the initial language from localStorage or default to English
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage || 'en';
  });

  // Update localStorage when language changes
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // Toggle between languages
  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'en' ? 'es' : 'en');
  };

  // Get the translation for a specific key
  const t = (key) => {
    const keys = key.split('.');
    let translation = translations[language];
    
    for (const k of keys) {
      if (!translation[k]) {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
      translation = translation[k];
    }
    
    return translation;
  };

  // Value to be provided by the context
  const value = {
    language,
    toggleLanguage,
    t,
    isEnglish: language === 'en',
    isSpanish: language === 'es'
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;

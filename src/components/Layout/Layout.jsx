import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { theme } from "../../styles/theme";
import { useLanguage } from "../../context/LanguageContext";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  box-sizing: border-box;
`;

const MainContent = styled.main`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px; /* Account for fixed navbar */
  box-sizing: border-box;

  > * {
    max-width: 1200px;
    width: 100%;
    padding: ${theme.spacing.lg} ${theme.spacing.md};
    box-sizing: border-box;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    > * {
      padding: ${theme.spacing.xl} ${theme.spacing.lg};
    }
  }
`;

const Layout = () => {
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    // Simulate loading for a smoother initial experience
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  
  // Efecto para resetear el scroll a 0 cuando cambia la ruta
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (loading) {
    return (
      <LoadingScreen>
        <LoadingSpinner />
        <LoadingText>{t("loading") || "Loading..."}</LoadingText>
      </LoadingScreen>
    );
  }

  return (
    <LayoutContainer>
      <Navbar />
      <MainContent>
        <AnimatePresence mode="wait" initial={false}>
          <Outlet key={location.pathname} />
        </AnimatePresence>
      </MainContent>
      <Footer />
    </LayoutContainer>
  );
};

const LoadingScreen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${theme.colors.background};
`;

const LoadingSpinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid ${theme.colors.primaryLight};
  border-top: 5px solid ${theme.colors.secondary};
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LoadingText = styled.p`
  margin-top: ${theme.spacing.md};
  color: ${theme.colors.secondary};
  font-size: ${theme.fontSizes.lg};
`;

export default Layout;

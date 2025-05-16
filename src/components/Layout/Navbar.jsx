import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { theme } from "../../styles/theme";
import { useLanguage } from "../../context/LanguageContext";
import LanguageToggle from "../LanguageToggle";

const NavbarContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background-color: ${({ scrolled }) =>
    scrolled ? theme.colors.background : "transparent"};
  box-shadow: ${({ scrolled }) =>
    scrolled ? "0 4px 20px rgba(0, 0, 0, 0.2)" : "none"};
  transition: ${theme.transitions.default};
  backdrop-filter: ${({ scrolled }) => (scrolled ? "blur(10px)" : "none")};
`;

const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(NavLink)`
  font-size: ${theme.fontSizes.xl};
  font-weight: bold;
  color: ${theme.colors.text};
  display: flex;
  align-items: center;

  span {
    color: ${theme.colors.secondary};
  }

  &:hover {
    color: ${theme.colors.text};
    transform: scale(1.05);
  }
`;

const NavLinks = styled.nav`
  display: none;

  @media (min-width: ${theme.breakpoints.md}) {
    display: flex;
    align-items: center;
    gap: ${theme.spacing.lg};
  }
`;

const NavItem = styled(NavLink)`
  color: ${theme.colors.textSecondary};
  font-size: ${theme.fontSizes.md};
  position: relative;
  padding: ${theme.spacing.xs} ${theme.spacing.sm};

  &:hover {
    color: ${theme.colors.secondary};
  }

  &.active {
    color: ${theme.colors.secondary};

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: ${theme.colors.secondary};
    }
  }
`;

const MobileMenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.text};
  font-size: ${theme.fontSizes.xl};
  z-index: 101;

  @media (min-width: ${theme.breakpoints.md}) {
    display: none;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background-color: ${theme.colors.primary};
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing.xl};
  padding: ${theme.spacing.xl};
`;

const MobileNavItem = styled(NavLink)`
  color: ${theme.colors.textSecondary};
  font-size: ${theme.fontSizes.xl};
  position: relative;

  &:hover,
  &.active {
    color: ${theme.colors.secondary};
  }
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { path: "/", label: t("nav.home") },
    { path: "/projects", label: t("nav.projects") },
    { path: "/about", label: t("nav.about") },
    { path: "/experience", label: t("nav.experience") },
    { path: "/skills", label: t("nav.skills") },
    { path: "/contact", label: t("nav.contact") },
  ];

  return (
    <NavbarContainer scrolled={scrolled}>
      <NavbarContent>
        <Logo to="/">
          Agustin Millan
          <span style={{ marginLeft: "5px" }}>{t("nav.portfolio")}</span>
        </Logo>

        <NavLinks>
          {navItems.map((item) => (
            <NavItem
              key={item.path}
              to={item.path}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {item.label}
            </NavItem>
          ))}
          <LanguageToggle />
        </NavLinks>

        <MobileMenuButton onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>
      </NavbarContent>

      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenu
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            {navItems.map((item) => (
              <MobileNavItem
                key={item.path}
                to={item.path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {item.label}
              </MobileNavItem>
            ))}
            <div style={{ marginTop: theme.spacing.xl }}>
              <LanguageToggle />
            </div>
          </MobileMenu>
        )}
      </AnimatePresence>
    </NavbarContainer>
  );
};

export default Navbar;

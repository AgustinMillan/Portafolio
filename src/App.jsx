import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { theme } from "./styles/theme";
import { LanguageProvider } from "./context/LanguageContext";

// Layout
import Layout from "./components/Layout/Layout";

// Pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="projects" element={<Projects />} />
              <Route path="about" element={<About />} />
              <Route path="experience" element={<Experience />} />
              <Route path="skills" element={<Skills />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<Home />} />
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;

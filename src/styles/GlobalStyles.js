import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif;
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
    line-height: 1.6;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: ${theme.colors.secondary};
    transition: ${theme.transitions.default};
    
    &:hover {
      color: ${theme.colors.secondaryDark};
    }
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    font-family: inherit;
  }

  ul, ol {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ::selection {
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.background};
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${theme.colors.background};
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.primary};
    border-radius: ${theme.borderRadius.md};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.primaryLight};
  }

  /* For smooth animations */
  .page-transition-enter {
    opacity: 0;
    transform: translateY(20px);
  }

  .page-transition-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 400ms, transform 400ms;
  }

  .page-transition-exit {
    opacity: 1;
    transform: translateY(0);
  }

  .page-transition-exit-active {
    opacity: 0;
    transform: translateY(-20px);
    transition: opacity 400ms, transform 400ms;
  }
`;

export default GlobalStyles;

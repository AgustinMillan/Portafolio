# Backend Developer Portfolio

A modern, responsive portfolio website built with React and Vite to showcase backend development skills and projects.

## Features

- **Modern Dark Theme**: Sleek design with a dark color scheme using black, blue, green, and red accents
- **Responsive Layout**: Fully responsive design that works on all device sizes
- **Smooth Animations**: Page transitions and element animations using Framer Motion
- **Multiple Pages**: Home, Projects, About Me, Experience, Skills, and Contact pages
- **Component-Based Architecture**: Modular React components for easy maintenance
- **Styled Components**: CSS-in-JS styling solution for component-scoped styles

## Technologies Used

- React 18
- Vite
- React Router DOM
- Styled Components
- Framer Motion
- React Icons

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd portafolio
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

To create a production build:

```bash
npm run build
```

The build files will be located in the `dist` directory.

## Customization

- **Theme Colors**: Edit the color variables in `src/styles/theme.js`
- **Content**: Update the content in each page component under `src/pages/`
- **Images**: Replace images in the `public` directory
- **Resume**: Add your resume PDF to the `public` directory

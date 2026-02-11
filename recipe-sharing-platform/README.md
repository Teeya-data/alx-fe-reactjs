# Recipe Sharing Platform

A modern web application for discovering, sharing, and managing recipes, built with React and styled with Tailwind CSS.

## Project Overview

The Recipe Sharing Platform allows users to:
- Browse a collection of recipes
- View detailed recipe information
- Add and share their own recipes
- Connect with other cooking enthusiasts

## Technology Stack

- **React 18** - JavaScript library for building user interfaces
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS v3** - Utility-first CSS framework
- **PostCSS** - CSS transformation tool
- **Autoprefixer** - CSS vendor prefixing

## Setup Instructions

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:5173`

## Tailwind CSS Configuration

### tailwind.config.cjs
```javascript
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### src/index.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure
```
recipe-sharing-platform/
 src/
    App.jsx
    main.jsx
    index.css
 index.html
 vite.config.js
 tailwind.config.cjs
 postcss.config.cjs
 package.json
```

## License

This project is part of the ALX Frontend React course.

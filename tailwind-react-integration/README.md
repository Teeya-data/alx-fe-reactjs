# Tailwind React Integration

A React application demonstrating the integration of Tailwind CSS with React and Vite.

## Project Setup

This project was created following these steps:

### Step 1: Create New React Project with Vite
```bash
npm create vite@latest tailwind-react-integration -- --template react
cd tailwind-react-integration
```

### Step 2: Install Tailwind CSS and Dependencies
```bash
npm install tailwindcss @tailwindcss/vite
```

### Step 3: Configure Vite Plugin
Updated `vite.config.js` to include the Tailwind CSS plugin:
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```

### Step 4: Include Tailwind in CSS
Added to `src/index.css`:
```css
@import "tailwindcss";
```

### Step 5: Verify Installation
```bash
npm run dev
```

## Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Features

- ✅ React 18
- ✅ Vite for fast development
- ✅ Tailwind CSS v4 (alpha) integrated
- ✅ ESLint configured
- ✅ Hot Module Replacement (HMR)

## Project Structure

```
tailwind-react-integration/
├── src/
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Tailwind CSS import
├── index.html           # HTML template
├── vite.config.js       # Vite configuration with Tailwind plugin
├── package.json         # Dependencies and scripts
└── README.md           # Project documentation
```

## Tailwind CSS Configuration

This project uses the new Tailwind CSS v4 (alpha) which has a simplified setup:
- No `tailwind.config.js` file needed
- No PostCSS configuration required
- Simply import Tailwind in your CSS file
- Vite plugin handles everything automatically

## Usage

The application includes a demonstration of Tailwind CSS utility classes:
- Responsive design
- Gradients and colors
- Shadows and transitions
- Flexbox and spacing utilities
- Typography utilities

## Technologies Used

- **React** - JavaScript library for building user interfaces
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting and quality

## Development

To start developing:

1. Clone the repository
2. Run `npm install`
3. Run `npm run dev`
4. Open `http://localhost:5173`

Edit `src/App.jsx` to start building your application with Tailwind CSS!

## License

This project is part of the ALX Frontend React course.

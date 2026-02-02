# GitHub User Search - Setup Guide

## Project Setup Checklist

This guide walks through setting up the GitHub User Search Application from scratch.

### ✅ Step 1: Create New React Project

The project has been set up using Vite with React template. The following command would typically be used:

```bash
npm create vite@latest github-user-search -- --template react
cd github-user-search
```

**Files Created:**
- `package.json` - Project dependencies and scripts
- `vite.config.js` - Vite configuration
- `index.html` - HTML entry point

### ✅ Step 2: Install Necessary Packages

The following dependencies are included in `package.json`:

**Main Dependencies:**
- `react` - React library
- `react-dom` - React DOM rendering
- `axios` - HTTP client for API requests

**Dev Dependencies:**
- `vite` - Build tool and dev server
- `@vitejs/plugin-react` - React plugin for Vite
- ESLint packages for code quality

To install all dependencies, run:
```bash
npm install
```

### ✅ Step 3: Application Structure

The following directory structure has been created:

```
github-user-search/
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   │   └── Search.jsx    # Search component (placeholder)
│   ├── services/         # API services
│   │   └── githubService.js  # GitHub API integration
│   ├── App.jsx           # Main application component
│   ├── App.css           # Application styles
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── .env                   # Environment variables
├── .gitignore            # Git ignore rules
├── index.html            # HTML template
├── package.json          # Dependencies
├── README.md             # Project documentation
└── vite.config.js        # Vite configuration
```

### ✅ Step 4: Environment Configuration

**Environment Variables (.env file):**

```env
# GitHub API Configuration
VITE_GITHUB_API_URL=https://api.github.com
# VITE_APP_GITHUB_API_KEY=your_token_here (optional)
```

**Usage in Code:**

```javascript
const API_URL = import.meta.env.VITE_GITHUB_API_URL;
const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;
```

**Important Notes:**
- Environment variables in Vite must be prefixed with `VITE_`
- Use `import.meta.env.VARIABLE_NAME` to access them (NOT `process.env`)
- Never commit `.env` files with sensitive tokens to Git
- GitHub API works without authentication but has rate limits (60 requests/hour)
- With authentication: 5,000 requests/hour

### ✅ Step 5: Initial Test Run

To start the development server:

```bash
npm run dev
```

Expected output:
```
VITE v5.4.1  ready in XXX ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

**What You Should See:**
- Application loads without errors
- Header displays "GitHub User Search Application"
- Basic layout is visible
- No console errors

### Available Commands

```bash
# Development
npm run dev          # Start dev server (with hot reload)

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
```

## Next Steps

Now that the foundation is set up, you can:

1. **Implement Search Functionality** - Connect the Search component to GitHub API
2. **Create User Display Component** - Show user results
3. **Add Error Handling** - Handle API errors gracefully
4. **Implement Loading States** - Show loading indicators
5. **Add Styling** - Improve UI/UX with CSS

## API Service Structure

The `githubService.js` file includes:

```javascript
// Search users
searchUsers(username) - Search for GitHub users

// Get user details
getUserDetails(username) - Get detailed user information
```

## Troubleshooting

**Issue: Module not found errors**
- Solution: Run `npm install` to ensure all dependencies are installed

**Issue: Port already in use**
- Solution: Vite will automatically use the next available port, or specify one in `vite.config.js`

**Issue: Environment variables not working**
- Solution: Make sure they're prefixed with `VITE_` and restart the dev server

**Issue: API rate limit exceeded**
- Solution: Add a GitHub Personal Access Token to `.env`

## GitHub Repository Setup

To push this to the `alx-fe-reactjs` repository:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial setup of GitHub User Search application"

# Add remote (replace with your repository URL)
git remote add origin https://github.com/yourusername/alx-fe-reactjs.git

# Push to the github-user-search directory
git push -u origin main
```

## Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [GitHub API Documentation](https://docs.github.com/en/rest)
- [Axios Documentation](https://axios-http.com/)

---

**Project Status:** ✅ Setup Complete - Ready for Development

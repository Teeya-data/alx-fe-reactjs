# GitHub User Search Application

A React application that allows users to search for GitHub profiles using the GitHub API.

## Features

- Search for GitHub users by username
- Display user information including avatar, name, and profile link
- Clean and responsive user interface
- Integration with GitHub API

## Project Structure

```
github-user-search/
├── src/
│   ├── components/      # React components
│   ├── services/        # API services (GitHub API integration)
│   ├── App.jsx          # Main application component
│   ├── App.css          # Application styles
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── .env                 # Environment variables
├── index.html           # HTML template
├── package.json         # Project dependencies
└── vite.config.js       # Vite configuration
```

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd github-user-search
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables (optional):
   - Copy `.env` file and add your GitHub Personal Access Token if you want to increase API rate limits
   - The application will work without a token but with limited requests (60/hour)

4. Run the development server:
```bash
npm run dev
```

5. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code quality checks

## GitHub API

This application uses the GitHub REST API v3:
- Unauthenticated requests: 60 requests/hour
- Authenticated requests: 5,000 requests/hour

To use authenticated requests, add your GitHub Personal Access Token to the `.env` file.

## Technologies Used

- React 18
- Vite
- Axios
- GitHub API

## License

This project is part of the ALX Frontend React course.

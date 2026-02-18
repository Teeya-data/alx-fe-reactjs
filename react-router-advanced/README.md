# React Router Advanced

Demonstrating advanced routing techniques with React Router.

## Features

- **Nested Routes**: Profile with Details and Settings sub-routes
- **Dynamic Routing**: Blog posts with variable IDs
- **Protected Routes**: Authentication-required pages
- **Navigation**: Seamless routing between pages

## Setup
```bash
npm install
npm run dev
```

## Routes

- `/` - Home page
- `/login` - Login page
- `/profile` - Protected profile page (requires login)
  - `/profile` - Profile details (nested)
  - `/profile/settings` - Profile settings (nested)
- `/blog/:id` - Dynamic blog post pages

## Testing

1. Visit home page
2. Try accessing `/profile` - redirects to login
3. Login with any credentials
4. Access profile with nested routes
5. Navigate to blog posts with different IDs

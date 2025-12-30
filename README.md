# User Profile Project

A personal profile website built with React, showcasing user information, astrological profile details, and interactive components.

## Technology Stack

### Core Framework
- **React 19.2.0** - JavaScript library for building user interfaces
- **React DOM 19.2.0** - React renderer for web applications
- **React Router DOM 7.11.0** - Declarative routing for React applications

### Build Tools
- **Vite 7.2.4** - Next generation frontend build tool and development server
- **@vitejs/plugin-react 5.1.1** - Official Vite plugin for React support

### Styling
- **Tailwind CSS 4.1.18** - Utility-first CSS framework
- **@tailwindcss/vite 4.1.18** - Vite plugin for Tailwind CSS integration
- Custom CSS with utility classes for colors, fonts, and glassmorphism effects

### Animation
- **Motion 12.23.26** - Animation library for React (formerly Framer Motion)

### Icons
- **Lucide React 0.562.0** - Icon library with React components

### Code Quality
- **ESLint 9.39.1** - JavaScript and JSX linter
- **@eslint/js 9.39.1** - Core ESLint rules
- **eslint-plugin-react-hooks 7.0.1** - ESLint rules for React Hooks
- **eslint-plugin-react-refresh 0.4.24** - ESLint plugin for React Fast Refresh
- **globals 16.5.0** - Global variables for ESLint

### Type Definitions
- **@types/react 19.2.5** - TypeScript definitions for React
- **@types/react-dom 19.2.3** - TypeScript definitions for React DOM

## Project Structure

```
src/
├── App.jsx                 # Main application component with routing
├── main.jsx                # Application entry point
├── index.css               # Global styles and utility classes
├── components/             # Reusable components
│   ├── Navbar.jsx         # Navigation bar component
│   ├── bodytop.jsx        # Top section container
│   ├── herosec.jsx        # Hero section container
│   ├── modal.jsx          # Modal dialog component
│   ├── socials.jsx        # Social media links component
│   └── freesp.jsx         # Spacing component
├── pages/                  # Page components
│   ├── page1.jsx          # Main profile page
│   └── page2.jsx          # Playlist page (placeholder)
├── Navbar/                 # Navbar subcomponents
│   ├── Searchbar.jsx      # Search bar with user profile
│   └── Welcome.jsx        # Welcome message component
├── bodytop/                # Top section components
│   ├── clock.jsx          # Real-time clock component
│   ├── weather.jsx        # Weather display component (OpenWeatherMap API)
│   └── bday.jsx           # Birthday display component
└── hero section/           # Hero section components
    ├── basicinfo.jsx      # Basic user information
    ├── card.jsx           # Profile card with zodiac signs
    └── techstack.jsx      # Technology stack display
```

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints
- **Interactive Modals**: Clickable zodiac sign icons that open detailed modal dialogs
- **Real-time Clock**: Displays current time in Asia/Kolkata timezone
- **Weather Integration**: Fetches and displays weather data using OpenWeatherMap API
- **Animations**: Smooth page transitions and hover effects using Motion library
- **Routing**: Multiple pages with React Router DOM
- **Touch Support**: Mobile-optimized click handlers with touch event support
- **Custom Styling**: Glassmorphism effects, custom color palette, and multiple Google Fonts

## External APIs

- **OpenWeatherMap API**: Used for weather data display (requires VITE_WEATHER_API_KEY environment variable)

## Fonts

The project uses multiple Google Fonts:
- Poppins (default)
- Inter
- Rubik
- Lexend
- Crimson Text
- DM Serif Text
- Radley
- Comic Relief
- Patrick Hand SC
- Instrument Sans
- Google Sans
- Playwrite US Trad Guides

## Environment Variables

Create a `.env` file in the root directory with:
```
VITE_WEATHER_API_KEY=your_openweathermap_api_key
```

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## Build Configuration

- **Vite Config**: Configured with React plugin and Tailwind CSS plugin
- **Tailwind Config**: Custom theme extensions for font families
- **ESLint Config**: Flat config format with React-specific rules and browser globals


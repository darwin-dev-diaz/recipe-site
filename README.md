# Recipe Site

A dynamic and feature-rich recipe website built with React, React Router, and Tailwind CSS. This project provides users with a platform to explore recipes, create personalized meal plans, and save their favorite dishes. It incorporates a seamless UI with advanced state management using React Context.

---

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Recipe Browsing:** Explore the latest and featured recipes.
- **Favorites Management:** Add or remove recipes from your favorites list.
- **Meal Planning:** Plan meals for specific dates with options for breakfast, lunch, and dinner.
- **Responsive Design:** Fully responsive for desktop and mobile devices.
- **Error Handling:** Custom error boundaries and error screens for robust navigation.
- **API Integration:** Dynamically fetches data from a recipe API, with fallback to pre-filled data for development.

---

## Technologies Used

- **Frontend:**
  - React (with React Router for routing)
  - Tailwind CSS (for styling)
- **State Management:**
  - React Context API
- **Testing:**
  - React Testing Library
  - Vitest
- **Utilities:**
  - @svgr/cli for handling SVGs
  - ESLint and Prettier for code linting and formatting
- **Build Tool:**
  - Vite (for fast development and production builds)

---

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm (version 7 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/recipe-site.git
   ```
2. Navigate to the project directory:
   ```bash
   cd recipe-site
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

To start the development server, run:
```bash
npm run dev
```

The application will be accessible at `http://localhost:5173`.

---

## Available Scripts

- **`npm run dev`**: Start the development server.
- **`npm run build`**: Build the app for production.
- **`npm run preview`**: Preview the production build locally.
- **`npm run test`**: Run unit tests with Vitest.
- **`npm run lint`**: Lint the codebase with ESLint.

---

## Project Structure

```
src/
├── assets/           # Static assets (e.g., images, icons)
├── components/       # Reusable UI components
├── data/             # Pre-filled data for development
├── hooks/            # Custom React hooks
├── pages/            # Page-level components
├── util/             # Utility functions and helpers
├── styles/           # Global styles and Tailwind configuration
├── App.jsx           # Main application component
├── routes.js         # Routing configuration
└── index.css         # Tailwind base styles
```

---

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and submit a pull request. Ensure that your code adheres to the project's linting and formatting rules.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Future Enhancements

- Add user authentication for personalized meal plans and favorites.
- Include advanced search and filtering options.
- Support recipe uploads from users.

---

Happy Cooking! 🥗🍲🍴
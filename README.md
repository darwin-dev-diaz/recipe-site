# HotPot : Recipe Planner App

A React-based Recipe Planner application for food enthusiasts to explore recipes, plan meals, and manage their favorite dishes. The app integrates with the Spoonacular API to fetch recipe data, providing a smooth and feature-rich experience for users.

![App Screenshot](./scr/assests/screenshots/screenshot-1.png "App Screenshot")

### Design Inspiration

- [Pinch of Yum](https://pinchofyum.com/) - Beautifully crafted recipes and food photography.
- [Budget Bytes](https://www.budgetbytes.com/) - Simple, affordable recipes with an easy-to-navigate design.

---

## Features

- **Latest Recipes:** View the most recently added recipes with quick summaries.
- **Recipe Categories:** Browse by categories like desserts, main courses, appetizers, and soups.
- **Favorites:** Save your favorite recipes for quick access.
- **Meal Planning:** Plan your meals with a calendar-based interface, allowing you to add recipes to specific days and meals.
- **Detailed Recipe View:** Get complete information about a recipe, including nutritional values, ingredients, and preparation steps.
- **Error Handling:** Comprehensive error screens to guide users when issues arise.

---

## Technologies Used

- **Frontend:** React, React Router, Tailwind CSS
- **State Management:** React Context
- **API:** Spoonacular Recipe API
- **Tooling:** Vite for fast builds, ESLint for code linting
- **Icons & SVGs:** Custom assets for UI components

---

## Project Structure

```

src/
├── assets/ # Images and icons
├── components/ # Reusable components like buttons and headers
├── data/ # Prefilled static data
├── hooks/ # Custom hooks for managing data and state
├── pages/ # Main screens/pages of the application
├── util/ # Utility functions for various tasks
├── App.jsx # Main App component
├── routes.jsx # Route definitions
└── index.jsx # Entry point for the React app

```

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-github-username/recipe-planner.git
   cd recipe-planner
   ```

````

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

---

## How It Works

1. **API Integration:** The app makes multiple API calls to fetch data for different recipe categories (main courses, soups, etc.).
2. **Data Management:** Data is cached and deduplicated to optimize performance.
3. **Navigation:** React Router handles navigation between pages.
4. **Customization:** The app allows dynamic sorting, filtering, and favoriting of recipes.

---

## Key Files

- **`src/hooks/useData.jsx`:** Custom hook to fetch and manage recipe data.
- **`src/pages/AllRecipesScreen.jsx`:** Displays all available recipes with sorting and filtering options.
- **`src/util/apiKeyTester.js`:** Cycles through API keys to ensure valid requests.
- **`src/util/fetchRecipeData.js`:** Fetches detailed data for individual recipes.
- **`tailwind.config.js`:** Tailwind CSS configuration for custom styling.

---

## Preview

[Insert relevant screenshots or GIFs showing the app functionality.]

---

## Future Enhancements

- **User Authentication:** Allow users to log in and save their plans across devices.
- **Backend Integration:** Add a backend service for persistent storage.
- **Notifications:** Notify users about meal plans or newly added recipes.

---

## Contributing

Contributions are welcome! Feel free to fork this repository and submit a pull request. Follow the [contribution guidelines](CONTRIBUTING.md).

---

## License

This project is licensed under the MIT License.

---

## Contact

For questions or feedback, reach out via [darwin.diaz.ut@gmail.com](mailto:darwin.diaz.ut@gmail.com).

```


````

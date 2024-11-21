import App from "./App.jsx";
import HomeScreen from "./pages/HomeScreen.jsx";
import AllRecipesScreen from "./pages/AllRecipesScreen.jsx";
import FavoritesScreen from "./pages/FavoritesScreen.jsx";
import MonthlyPlanScreen from "./pages/MonthlyPlanScreen.jsx";
import RecipeScreenWrapper from "./util/RecipeScreenWrapper.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import ErrorScreen from "./pages/ErrorScreen.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomeScreen /> },
      { path: "allrecipes", element: <AllRecipesScreen /> },
      { path: "allrecipes/:category", element: <AllRecipesScreen /> },
      { path: "recipe/:recipeID", element: <RecipeScreenWrapper /> },
      { path: "favorites", element: <FavoritesScreen /> },
      { path: "plan", element: <MonthlyPlanScreen /> },
      { path: "error", element: <ErrorScreen /> }, // handles 404 errors included in the route
    ],
    errorElement: <ErrorBoundary />, // handles 404 errors not included in the route
  },
];

export default routes;

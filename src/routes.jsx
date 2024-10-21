import App from "./App.jsx";
import HomeScreen from "./pages/HomeScreen.jsx";
import AllRecipesScreen from "./pages/AllRecipesScreen.jsx";
import RecipeScreen from "./pages/RecipeScreen.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomeScreen /> },
      { path: "allrecipes", element: <AllRecipesScreen /> },
      { path: "recipe/:item", element: <RecipeScreen /> },
      //   { path: "product/:item", element: <ProductPage /> },
    ],
  },
];

export default routes;
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import useData from "./util/useData";
// import useRecipeData from "./util/useRecipeData";
// import fetchRecipeData from "./util/fetchRecipeData";
import { useState, createContext } from "react";
import { latestRecipes, featuredRecipes } from "./data/prefilledData";
import ScrollToTop from "./util/ScrollToTop";

export const RecipeContext = createContext({
  data: [], // this will be all the recipes and their 'simple' information
  error: null,
  loading: true,
  expandedData: {}, // this will be the recipes "expanded" information. Populates as needed
  addExpandedData: () => {},
  favoriteRecipes: [],
  latestRecipes: [],
  featuredRecipes: [],
  removeFavorite: () => {},
  addFavorite: () => {},
  planner: {},
  addToPlanner: () => {},
  removeFromPlanner: () => {},
});

function App() {
  // data and expandedDataStuff
  const { data, error, loading } = useData(true);
  const [expandedData, setExpandedData] = useState({});
  const addExpandedData = (id, data) => {
    setExpandedData((prev) => ({ ...prev, [id]: data }));
  };

  // favorite recipe stuff
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const removeFavorite = (id) => {
    setFavoriteRecipes((prevFavorites) =>
      prevFavorites.filter((recipeID) => recipeID !== id),
    );
  };
  const addFavorite = (id) => {
    setFavoriteRecipes((prevFavorites) => prevFavorites.concat([id]));
  };

  // planner stuff
  const [planner, setPlanner] = useState({
    "1November2024": { breakfast: 641111, lunch: 641908, dinner: 1096250 },
    "2November2024": { breakfast: 641111, lunch: 641908 },
  });
  const addToPlanner = (plannerID, mealID, meal) => {
    setPlanner((prevPlanner) => ({
      ...prevPlanner,
      [plannerID]: { ...prevPlanner[plannerID], [meal]: mealID },
    }));
  };
  const removeFromPlanner = (plannerID, meal) => {
    // if removing but there are other mealIDs
    if (Object.keys(planner[plannerID]).length > 1) {
      const newPlanner = planner;
      delete newPlanner[plannerID][meal];
      setPlanner(() => ({ ...newPlanner }));
    } else {
      // if removing the last mealID, remove the whole planner id
      const newPlanner = planner;
      delete newPlanner[plannerID];
      setPlanner(() => ({ ...newPlanner }));
    }
  };

  // set the latestRecipes and populate expandedData
  // maybe move to homeScreen
  latestRecipes.forEach((recipe) => {
    const newExpandedData = expandedData;
    if (!newExpandedData[recipe.id]) {
      newExpandedData[recipe.id] = recipe;
      setExpandedData(newExpandedData);
    }
  });

  // set the featuredRecipes and populate expandedData
  // maybe move to homeScreen
  featuredRecipes.forEach((recipe) => {
    const newExpandedData = expandedData;
    if (!newExpandedData[recipe.id]) {
      newExpandedData[recipe.id] = recipe;
      setExpandedData(newExpandedData);
    }
  });

  return (
    <RecipeContext.Provider
      value={{
        data,
        error,
        loading,
        expandedData,
        addExpandedData,
        favoriteRecipes,
        latestRecipes,
        featuredRecipes,
        removeFavorite,
        addFavorite,
        planner,
        addToPlanner,
        removeFromPlanner,
      }}
    >
      <ScrollToTop />
      <Header></Header>
      <div className="body w-full">
        <Outlet context={[]} />
      </div>
      <Footer></Footer>
    </RecipeContext.Provider>
  );
}

export default App;

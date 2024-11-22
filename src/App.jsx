import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import useData from "./hooks/useData";
import { useState, createContext, useEffect } from "react";
import { latestRecipes, featuredRecipes } from "./data/prefilledData";
import ScrollToTop from "./util/ScrollToTop";

export const RecipeContext = createContext({
  data: [],
  error: null,
  loading: true,
  expandedData: {},
  addExpandedData: () => {},
  favoriteRecipes: [],
  latestRecipes: [],
  featuredRecipes: [],
  removeFavorite: () => {},
  addFavorite: () => {},
  planner: {},
  addToPlanner: () => {},
  removeFromPlanner: () => {},
  setCanScroll: () => {},
});

function App() {
  // to toggle if the user can scroll or not
  const [canScroll, setCanScroll] = useState(true);

  // data and expandedDataStuff
  // useData(true) = use fakeData (devlopment)
  // useData(false) = use realData (production)
  // useData(false, true) = throw an error
  const { data, error, loading } = useData(true);
  const [expandedData, setExpandedData] = useState({});
  const addExpandedData = (id, data) => {
    setExpandedData((prev) => ({ ...prev, [id]: data }));
  };

  // favorite recipe stuff
  const [favoriteRecipes, setFavoriteRecipes] = useState([
    641908, 641111, 1096250,
  ]);
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
    "1November2024": { lunch: 641908, breakfast: 641111, dinner: 1096250 },
    "2November2024": { breakfast: 641111, lunch: 641908 },
  });
  const addToPlanner = (plannerID, meal, mealID) => {
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

  // add or remove scroll depending on canScroll state
  useEffect(() => {
    if (canScroll) document.body.style.overflow = "auto";
    else document.body.style.overflow = "hidden";
  }, [canScroll]);

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
        setCanScroll,
      }}
    >
      <ScrollToTop /> {/* scroll to top on each page */}
      <Header></Header>
      <div className="body w-full">
        <Outlet context={[]} />
      </div>
      <Footer></Footer>
    </RecipeContext.Provider>
  );
}

export default App;

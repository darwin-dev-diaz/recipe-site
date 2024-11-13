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
  favoriteRecipes: [],
  latestRecipes: [],
  featuredRecipes: [],
  removeRecipe: () => {},
});

function App() {
  const { data, error, loading } = useData(true);
  const [expandedData, setExpandedData] = useState({});
  const [favoriteRecipes, setFavoriteRecipes] = useState([641111]);
  const removeFavorite = (id) => {

    const newFavoriteRecipes = favoriteRecipes;
    const removeIndex = newFavoriteRecipes.indexOf(id);
    newFavoriteRecipes.splice(removeIndex, 1);
    console.log({newFavoriteRecipes})
    setFavoriteRecipes(newFavoriteRecipes);
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
        favoriteRecipes,
        latestRecipes,
        featuredRecipes,
        removeFavorite,
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

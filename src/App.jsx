import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import useData from "./util/useData";
import useRecipeData from "./util/useRecipeData";
import fetchRecipeData from "./util/fetchRecipeData";
import { useState, createContext, useEffect } from "react";

export const RecipeContext = createContext({
  data: [],
  error: null,
  loading: true,
  expandedData: [],
  favoriteRecipes: [],
});

function App() {
  const { data, error, loading } = useData(true);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [expandedData, setExpandedData] = useState({});

  // once the data is loaded, set the favoriteRecipes and populate expandedData
  // maybe move to homeScreen
  useEffect(() => {
    const func = async () => {
      const tempArr = await Promise.all(
        [716311, 646043, 644826].map((recipeID) =>
          fetchRecipeData(recipeID, true),
        ),
      );
      tempArr.forEach((recipe) => {
        const newExpandedData = expandedData;
        if (!newExpandedData[recipe.id]) {
          newExpandedData[recipe.id] = recipe;
          setExpandedData(newExpandedData);
        }
      });
      setFavoriteRecipes(tempArr);
    };

    func();
  }, []);

  return (
    <RecipeContext.Provider
      value={{ data, error, loading, expandedData, favoriteRecipes }}
    >
      <Header></Header>
      <div className="body w-full">
        <Outlet context={[]} />
      </div>
      <Footer></Footer>
    </RecipeContext.Provider>
  );
}

export default App;

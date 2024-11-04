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

  // once the data is loaded, set the favorite recipes arr
  useEffect(() => {
    const func = async () => {
      const tempArr = await Promise.all(
        data.slice(0, 3).map((recipe) => fetchRecipeData(recipe.id, true)),
      );
      console.log(tempArr);
      setFavoriteRecipes(tempArr);
    };

    if (data.length > 0) func();
  }, [data]);

  const [expandedData, setExpandedData] = useState([]);
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

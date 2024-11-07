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
  latestRecipes: [],
  featuredRecipes: [],
});

function App() {
  const { data, error, loading } = useData(true);
  const [latestRecipes, setLatestRecipes] = useState([]);
  const [featuredRecipes, setFeaturedRecipes] = useState([]);
  const [expandedData, setExpandedData] = useState({});

  // set the latestRecipes and populate expandedData
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
      setLatestRecipes(tempArr);
    };

    func();
  }, []);

  // set the featuredRecipes and populate expandedData
  // maybe move to homeScreen
  useEffect(() => {
    const func = async () => {
      const tempArr = await Promise.all(
        [638649, 641111, 641908, 648506, 638642].map((recipeID) =>
          fetchRecipeData(recipeID, true),
        ),
      );
      // set expandedData so you dont have to call it again
      tempArr.forEach((recipe) => {
        const newExpandedData = expandedData;
        if (!newExpandedData[recipe.id]) {
          newExpandedData[recipe.id] = recipe;
          setExpandedData(newExpandedData);
        }
      });
      setFeaturedRecipes(tempArr);
    };

    func();
  }, []);

  return (
    <RecipeContext.Provider
      value={{
        data,
        error,
        loading,
        expandedData,
        latestRecipes,
        featuredRecipes,
      }}
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

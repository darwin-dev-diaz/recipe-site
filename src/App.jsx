import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import useData from "./util/useData";
import useRecipeData from "./util/useRecipeData";
import { useState, createContext, useEffect } from "react";

export const RecipeContext = createContext({
  data: [],
  error: null,
  loading: true,
  expandedData: [],
});

function App() {
  const { data, error, loading } = useData(true);
  const { recipeData, recipeError, recipeLoading } = useRecipeData(660959, false);

  const [expandedData, setExpandedData] = useState([]);

  return (
    <RecipeContext.Provider value={{ data, error, loading, expandedData }}>
      <Header></Header>
      <div className="body w-full">
        <Outlet context={[]} />
      </div>
      <Footer></Footer>
    </RecipeContext.Provider>
  );
}

export default App;

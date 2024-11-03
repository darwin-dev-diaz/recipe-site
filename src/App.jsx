import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import useData from "./util/useData";
// import useRecipeData from "./util/useRecipeData";
import { useState, createContext } from "react";

export const RecipeContext = createContext({
  recipes: [],
  expandedRecipes: [],
});

function App() {
  const { data, error, loading } = useData(true);
  const [expandedData, setExpandedData] = useState([]);

  return (
    <RecipeContext.Provider value={{ data, expandedData }}>
      <Header></Header>
      <div className="body w-full">
        <Outlet context={[]} />
      </div>
      <Footer></Footer>
    </RecipeContext.Provider>
  );
}

export default App;

import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import useData from "./util/useData";
// import useRecipeData from "./util/useRecipeData";
import { useState } from "react";

function App() {
  const { data, error, loading } = useData(true);
  const [expandedData, setExpandedData] = useState([]);
  // const { recipeData, recipeError, recipeLoading } = useRecipeData(660959);
  console.log(data);

  return (
    <>
      <Header></Header>
      <div className="body w-full">
        <Outlet context={[]} />
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;

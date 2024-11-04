import { useState, useEffect } from "react";
import fetchRecipeData from "./fetchRecipeData";
const useRecipeData = (id, test = false) => {
  const [recipeData, setData] = useState([]);
  const [recipeLoading, setLoading] = useState(true);
  const [recipeError, setError] = useState(null);

  useEffect(() => {
    fetchRecipeData(id, test, setData, setLoading, setError);
  }, []);

  return { recipeData, recipeError, recipeLoading };
};

export default useRecipeData;

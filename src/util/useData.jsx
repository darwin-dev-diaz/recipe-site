import { useState, useEffect } from "react";
import { removeDuplicateObjs } from "./returnUniqueArrOfObj";
import key from "../../apiKey";
const exampleResponse = {
  results: [
    {
      id: 638717,
      title: "Chinese Steamed Flan",
      image: "https://img.spoonacular.com/recipes/638717-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 665484,
      title: "Xocai Oatmeal Dark Chocolate No-Bake Cookies",
      image: "https://img.spoonacular.com/recipes/665484-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 663176,
      title: "Thai-Style Sticky Rice & Mango Dessert Shots",
      image: "https://img.spoonacular.com/recipes/663176-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 649056,
      title: "Korean Honey Citron Tea Cheesecake",
      image: "https://img.spoonacular.com/recipes/649056-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 658177,
      title: "Repost - Japanese Cotton Cheesecake",
      image: "https://img.spoonacular.com/recipes/658177-312x231.jpg",
      imageType: "jpg",
    },
  ],
  offset: 0,
  number: 5,
  totalResults: 8,
};

const useData = (test = false) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const link = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&cuisine=asian&number=25&type=`;
  const dishTypes = ["main%20course", "dessert", "soup", "appetizer"];

  useEffect(() => {
    if (test) {
      setData(exampleResponse.results);
      setLoading(false);
    } else {
      const fetchPromises = dishTypes.map((dish) =>
        fetch(link + dish, { mode: "cors" })
          .then(
            (result) =>
              new Promise((resolve) => {
                setTimeout(() => resolve(result), 0);
              }),
          )
          .then((response) => {
            if (response.status >= 400) {
              throw new Error("Server Error");
            }
            return response.json();
          })
          .then((json) => {
            return json.results.map((item) => ({
              ...item,
              myDishType: dish.replace("%20", " "),
            }));
          }),
      );

      Promise.all(fetchPromises)
        .then((results) => {
          const output = removeDuplicateObjs(results.flat());
          setData(output);
        })
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    }
  }, []);

  return { data, error, loading };
};

export default useData;

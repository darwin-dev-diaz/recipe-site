import { useState, useEffect } from "react";
import { removeDuplicateObjs } from "./returnUniqueArrOfObj";
import key from "../../apiKey";
const exampleResponse = {
  results: [
    {
      id: 641111,
      title: "Curry Beef Over Rice Noodles",
      image: "https://img.spoonacular.com/recipes/638717-312x231.jpg",
      imageType: "jpg",
      myDishType: "main courses",
    },
    {
      id: 641908,
      title: "Easy Chicken Tikka Masala",
      image: "https://img.spoonacular.com/recipes/665484-312x231.jpg",
      imageType: "jpg",
      myDishType: "appetizers",
    },
    {
      id: 638642,
      title: "Chinese Chicken Salad With Chipotle Dressing",
      image: "https://img.spoonacular.com/recipes/663176-312x231.jpg",
      imageType: "jpg",
      myDishType: "desserts",
    },
    {
      id: 1096250,
      title: "Pho With Zucchini Noodles",
      image: "https://img.spoonacular.com/recipes/649056-312x231.jpg",
      imageType: "jpg",
      myDishType: "soups",
    },
    {
      id: 632983,
      title: "Assam Fish Curry",
      image: "https://img.spoonacular.com/recipes/632983-312x231.jpg",
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
            const myDishType = dish.replace("%20", " ") + "s";
            return json.results.map((item) => ({
              ...item,
              myDishType: myDishType,
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

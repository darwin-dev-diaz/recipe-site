import { useState, useEffect } from "react";
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

  const link =
    "https://api.spoonacular.com/recipes/complexSearch?apiKey=33bb8b680cd84aaeb85140ac36dc42dd&cuisine=asian&number=1&type=dessert";

  useEffect(() => {
    if (test) {
      setData(exampleResponse);
      setLoading(true);
    } else {
      fetch(link, { mode: "cors" })
        .then((result) => {
          return new Promise((resolve) => {
            setTimeout(() => resolve(result), 1000);
          });
        })
        .then((response) => {
          if (response.status >= 400) {
            throw new Error("Server Error");
          }
          return response.json();
        })
        .then((json) => {
          setData(json);
        })
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    }
  }, []);

  return { data, error, loading };
};

export default useData;

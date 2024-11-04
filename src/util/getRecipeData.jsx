const fetchRecipeData = async (id, test, setData, setLoading, setError) => {
  const exampleData = {
    "vegetarian": true,
    "vegan": false,
    "glutenFree": true,
    "dairyFree": false,
    "veryHealthy": false,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "lowFodmap": false,
    "weightWatcherSmartPoints": 1,
    "gaps": "no",
    "preparationMinutes": null,
    "cookingMinutes": null,
    "aggregateLikes": 1,
    "healthScore": 5,
    "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
    "license": "CC BY 3.0",
    "sourceName": "Foodista",
    "pricePerServing": 47.38,
    "extendedIngredients": [
        {
            "id": 1117,
            "aisle": "Milk, Eggs, Other Dairy",
            "image": "plain-yogurt.jpg",
            "consistency": "LIQUID",
            "name": "yogurt",
            "nameClean": "low fat plain yogurt",
            "original": "200 milliliters low-fat yogurt",
            "originalName": "low-fat yogurt",
            "amount": 200.0,
            "unit": "milliliters",
            "meta": [
                "low-fat"
            ],
            "measures": {
                "us": {
                    "amount": 7.004,
                    "unitShort": "fl. oz",
                    "unitLong": "fl. ozs"
                },
                "metric": {
                    "amount": 200.0,
                    "unitShort": "ml",
                    "unitLong": "milliliters"
                }
            }
        },
        {
            "id": 14412,
            "aisle": "Beverages",
            "image": "water.png",
            "consistency": "LIQUID",
            "name": "water",
            "nameClean": "water",
            "original": "200 milliliters water",
            "originalName": "water",
            "amount": 200.0,
            "unit": "milliliters",
            "meta": [],
            "measures": {
                "us": {
                    "amount": 6.764,
                    "unitShort": "fl. oz",
                    "unitLong": "fl. ozs"
                },
                "metric": {
                    "amount": 200.0,
                    "unitShort": "ml",
                    "unitLong": "milliliters"
                }
            }
        },
        {
            "id": 31015,
            "aisle": "Produce",
            "image": "chili-peppers-green.jpg",
            "consistency": "SOLID",
            "name": "chilli",
            "nameClean": "green chili pepper",
            "original": "1 piece green chilli (chopped)",
            "originalName": "green chilli (chopped)",
            "amount": 1.0,
            "unit": "piece",
            "meta": [
                "green",
                "chopped",
                "()"
            ],
            "measures": {
                "us": {
                    "amount": 1.0,
                    "unitShort": "",
                    "unitLong": ""
                },
                "metric": {
                    "amount": 1.0,
                    "unitShort": "",
                    "unitLong": ""
                }
            }
        },
        {
            "id": 11677,
            "aisle": "Produce",
            "image": "shallots.jpg",
            "consistency": "SOLID",
            "name": "shallot",
            "nameClean": "shallot",
            "original": "1 piece shallot (chopped)",
            "originalName": "shallot (chopped)",
            "amount": 1.0,
            "unit": "piece",
            "meta": [
                "chopped",
                "()"
            ],
            "measures": {
                "us": {
                    "amount": 1.0,
                    "unitShort": "",
                    "unitLong": ""
                },
                "metric": {
                    "amount": 1.0,
                    "unitShort": "",
                    "unitLong": ""
                }
            }
        },
        {
            "id": 2014,
            "aisle": "Spices and Seasonings",
            "image": "ground-cumin.jpg",
            "consistency": "SOLID",
            "name": "roasted cumin seeds",
            "nameClean": "cumin seeds",
            "original": "teaspoon dry roasted cumin seeds",
            "originalName": "dry roasted cumin seeds",
            "amount": 1.0,
            "unit": "teaspoon",
            "meta": [
                "dry"
            ],
            "measures": {
                "us": {
                    "amount": 1.0,
                    "unitShort": "tsp",
                    "unitLong": "teaspoon"
                },
                "metric": {
                    "amount": 1.0,
                    "unitShort": "tsp",
                    "unitLong": "teaspoon"
                }
            }
        },
        {
            "id": 2004,
            "aisle": "Spices and Seasonings",
            "image": "bay-leaves.jpg",
            "consistency": "SOLID",
            "name": "corriander leaves",
            "nameClean": "bay leaves",
            "original": "1 tablespoon corriander leaves (chopped)",
            "originalName": "corriander leaves (chopped)",
            "amount": 1.0,
            "unit": "tablespoon",
            "meta": [
                "chopped",
                "()"
            ],
            "measures": {
                "us": {
                    "amount": 1.0,
                    "unitShort": "Tbsp",
                    "unitLong": "Tbsp"
                },
                "metric": {
                    "amount": 1.0,
                    "unitShort": "Tbsp",
                    "unitLong": "Tbsp"
                }
            }
        },
        {
            "id": 2047,
            "aisle": "Spices and Seasonings",
            "image": "salt.jpg",
            "consistency": "SOLID",
            "name": "salt",
            "nameClean": "table salt",
            "original": "a dash of salt",
            "originalName": "salt",
            "amount": 1.0,
            "unit": "dash",
            "meta": [],
            "measures": {
                "us": {
                    "amount": 1.0,
                    "unitShort": "dash",
                    "unitLong": "dash"
                },
                "metric": {
                    "amount": 1.0,
                    "unitShort": "dash",
                    "unitLong": "dash"
                }
            }
        },
        {
            "id": 10014412,
            "aisle": "Frozen",
            "image": "ice-cubes.png",
            "consistency": "SOLID",
            "name": "ice cubes",
            "nameClean": "ice",
            "original": "ice cubes",
            "originalName": "ice cubes",
            "amount": 4.0,
            "unit": "servings",
            "meta": [],
            "measures": {
                "us": {
                    "amount": 4.0,
                    "unitShort": "servings",
                    "unitLong": "servings"
                },
                "metric": {
                    "amount": 4.0,
                    "unitShort": "servings",
                    "unitLong": "servings"
                }
            }
        }
    ],
    "id": 660959,
    "title": "Spiced Lassi",
    "readyInMinutes": 45,
    "servings": 4,
    "sourceUrl": "https://www.foodista.com/recipe/468J2KYB/spiced-lassi",
    "image": "https://img.spoonacular.com/recipes/660959-556x370.jpg",
    "imageType": "jpg",
    "summary": "You can never have too many beverage recipes, so give Spiced Lassi a try. One portion of this dish contains roughly <b>3g of protein</b>, <b>1g of fat</b>, and a total of <b>44 calories</b>. For <b>47 cents per serving</b>, this recipe <b>covers 3%</b> of your daily requirements of vitamins and minerals. This recipe serves 4. Not a lot of people really liked this Indian dish. This recipe from Foodista requires yogurt, water, corriander leaves, and ice cubes. 1 person has made this recipe and would make it again. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. It is a good option if you're following a <b>gluten free, lacto ovo vegetarian, and primal</b> diet. Overall, this recipe earns a <b>not so spectacular spoonacular score of 36%</b>. Try <a href=\"https://spoonacular.com/recipes/lassi-sweet-punjabi-lassi-how-to-make-lassi-488422\">lassi , sweet punjabi lassi | how to make lassi</a>, <a href=\"https://spoonacular.com/recipes/spiced-lollipop-lamb-with-green-lassi-16346\">Spiced Lollipop Lamb With Green Lassi</a>, and <a href=\"https://spoonacular.com/recipes/mango-lassi-or-aam-ki-lassi-how-to-make-mango-lassi-487676\">Mango Lassi or Aam ki Lassi, How to make Mango Lassi</a> for similar recipes.",
    "cuisines": [
        "Indian",
        "Asian"
    ],
    "dishTypes": [
        "beverage",
        "drink"
    ],
    "diets": [
        "gluten free",
        "lacto ovo vegetarian",
        "primal"
    ],
    "occasions": [],
    "instructions": "Whisk yogurt with water until well-mixed.\nAdd chopped green chillis, shallots), dry-roasted cumin seeds, chopped corriander leaves, and a dash of salt. Mix.\nPour in glasses, add ice cubes. Serve!",
    "analyzedInstructions": [
        {
            "name": "",
            "steps": [
                {
                    "number": 1,
                    "step": "Whisk yogurt with water until well-mixed.",
                    "ingredients": [
                        {
                            "id": 1116,
                            "name": "yogurt",
                            "localizedName": "yogurt",
                            "image": "plain-yogurt.jpg"
                        },
                        {
                            "id": 14412,
                            "name": "water",
                            "localizedName": "water",
                            "image": "water.png"
                        }
                    ],
                    "equipment": [
                        {
                            "id": 404661,
                            "name": "whisk",
                            "localizedName": "whisk",
                            "image": "https://spoonacular.com/cdn/equipment_100x100/whisk.png"
                        }
                    ]
                },
                {
                    "number": 2,
                    "step": "Add chopped green chillis, shallots), dry-roasted cumin seeds, chopped corriander leaves, and a dash of salt.",
                    "ingredients": [
                        {
                            "id": 31015,
                            "name": "green chili pepper",
                            "localizedName": "green chili pepper",
                            "image": "chili-peppers-green.jpg"
                        },
                        {
                            "id": 2014,
                            "name": "cumin seeds",
                            "localizedName": "cumin seeds",
                            "image": "ground-cumin.jpg"
                        },
                        {
                            "id": 11677,
                            "name": "shallot",
                            "localizedName": "shallot",
                            "image": "shallots.jpg"
                        },
                        {
                            "id": 2047,
                            "name": "salt",
                            "localizedName": "salt",
                            "image": "salt.jpg"
                        }
                    ],
                    "equipment": []
                },
                {
                    "number": 3,
                    "step": "Mix.",
                    "ingredients": [],
                    "equipment": []
                },
                {
                    "number": 4,
                    "step": "Pour in glasses, add ice cubes.",
                    "ingredients": [
                        {
                            "id": 10014412,
                            "name": "ice cubes",
                            "localizedName": "ice cubes",
                            "image": "ice-cubes.png"
                        }
                    ],
                    "equipment": []
                },
                {
                    "number": 5,
                    "step": "Serve!",
                    "ingredients": [],
                    "equipment": []
                }
            ]
        }
    ],
    "originalId": null,
    "spoonacularScore": 0.3635493814945221,
    "spoonacularSourceUrl": "https://spoonacular.com/spiced-lassi-660959"
};
  const link = `https://api.spoonacular.com/recipes/${id}/information?apiKey=33bb8b680cd84aaeb85140ac36dc42dd`;
  if (test) {
    setData(exampleData);
    setLoading(false);
    console.log("testing")
  }
  try {
    const response = await fetch(link, { mode: "cors" });
    if (response.status >= 400) throw new Error("Server Error");
    const json = await response.json();
    setData(json);
  } catch (error) {
    setError(error);
  } finally {
    setLoading(false);
  }
};

export default fetchRecipeData;

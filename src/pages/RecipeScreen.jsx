import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { RecipeContext } from "../App";
import { idToImage } from "../util/idToImage";
import fetchRecipeData from "../util/fetchRecipeData";

import Button from "../components/primatives/Button";
import SvgDownArrow from "../assets/icons/DownArrow";
import SvgFavorite from "../assets/icons/Favorite";
import SvgStar from "../assets/icons/Star";

function RecipeScreen() {
  const { expandedData, favoriteRecipes, removeFavorite, addFavorite } =
    useContext(RecipeContext);
  const { recipeID } = useParams();
  const isFavorite = favoriteRecipes.includes(Number(recipeID));

  // Initial state as null or an empty object to prevent undefined errors
  const [recipeData, setRecipeData] = useState(expandedData[recipeID] || null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      await fetchRecipeData(
        recipeID,
        false,
        setRecipeData,
        setLoading,
        setError,
      );
    };

    if (!recipeData) {
      fetch();
    }
  }, [expandedData, recipeID, recipeData]);

  let stepsArr = [];
  if (recipeData) {
    const analyzedInstructions = recipeData
      ? recipeData.analyzedInstructions
      : [];

    analyzedInstructions.forEach((block) => {
      block.name && stepsArr.push(block.name);
      if (block.steps.length)
        stepsArr = stepsArr.concat(block.steps.map((stepObj) => stepObj.step));
    });
  }

  const scrollToRecipe = (offset) => {
    const recipe = document.getElementById("recipe");
    window.scrollTo({
      behavior: "smooth",
      top:
        recipe.getBoundingClientRect().top -
        document.body.getBoundingClientRect().top -
        offset,
    });
  };

  return (
    <div>
      {/* top section start */}
      <div className="section px-6">
        <h1 className="mt-10 text-3xl font-extrabold uppercase">
          {loading ? "Loading" : recipeData.title}
        </h1>
        <p className="mb-6 font-semibold text-dark-light-grey">
          {loading
            ? "Loading"
            : `${Math.round(recipeData.nutrition.nutrients[0].amount)} Calories / ${Math.round(recipeData.nutrition.nutrients[10].amount)}g Protien`}
        </p>

        <p
          className="line mb-5 uppercase leading-6"
          dangerouslySetInnerHTML={
            loading
              ? {
                  __html: "Loading",
                }
              : {
                  __html: recipeData.summary,
                }
          }
        ></p>
        <Button
          width="w-full"
          height="h-[50px]"
          color="orange"
          textColor="dark-grey"
          text="Jump to recipe"
          extraCss="mx-auto mb-8 border-black border-4 shadow-[6px_6px_0px_rgba(0,0,0,1)]"
          onClick={() => scrollToRecipe(100)}
        >
          <SvgDownArrow color=""></SvgDownArrow>
        </Button>

        <div>
          <div
            className="mb-1 h-[500px] w-full bg-black bg-cover bg-center"
            style={{ backgroundImage: `url(${idToImage(recipeID)})` }}
          ></div>
          <Button
            width="w-full"
            height="h-[50px]"
            color={isFavorite ? "black" : "white"}
            textColor={isFavorite ? "white" : "dark-grey"}
            text={
              isFavorite ? "Un-favorite this recipe" : "Favorite this recipe"
            }
            extraCss="mx-auto border-black border-4 mb-36"
            onClick={
              isFavorite
                ? () => removeFavorite(Number(recipeID))
                : () => addFavorite(Number(recipeID))
            }
          >
            <SvgFavorite color={isFavorite ? "white" : "black"}></SvgFavorite>
          </Button>
        </div>
      </div>

      {/*bottom section start  */}
      <div
        // id="recipe"
        className="section relative flex h-80 w-full flex-col items-center gap-3 bg-very-dark-orange bg-cover bg-center px-6 pt-20 font-medium uppercase text-white"
      >
        <div
          id="recipe"
          className="absolute left-[50%] top-0 h-32 w-32 translate-x-[-50%] translate-y-[-50%] rounded-full border-[6px] border-very-dark-orange bg-dark-orange bg-cover bg-center"
          style={{ backgroundImage: `url(${idToImage(recipeID)})` }}
        ></div>
        <h3 className="tracking mb-12 text-center text-2xl font-extrabold">
          {loading ? "Loading" : recipeData.title}
        </h3>
        <div className="mx-auto flex">
          <SvgStar fill="#F2B955"></SvgStar>
          <SvgStar fill="#F2B955"></SvgStar>
          <SvgStar fill="#F2B955"></SvgStar>
          <SvgStar fill="#F2B955"></SvgStar>
          <SvgStar fill="#F2B955"></SvgStar>
        </div>
        <span>
          {loading
            ? "Loading"
            : `${Math.round(recipeData.nutrition.nutrients[0].amount)} Calories / serving`}
        </span>
        <div className="flex gap-4">
          <span>
            Ready in: {loading ? "Loading" : recipeData.readyInMinutes} MINS
          </span>
          <span>
            Yields: {loading ? "Loading" : recipeData.servings} servings
          </span>
        </div>
      </div>

      <div className="section px-6">
        <Button
          width="w-full"
          height="h-[50px]"
          color={isFavorite ? "black" : "white"}
          textColor={isFavorite ? "white" : "dark-grey"}
          text={isFavorite ? "Un-favorite this recipe" : "Favorite this recipe"}
          extraCss={`mx-auto border-black border-4 mb-14 mt-4`}
          onClick={
            isFavorite
              ? () => removeFavorite(Number(recipeID))
              : () => addFavorite(Number(recipeID))
          }
        >
          <SvgFavorite color={isFavorite ? "white" : "black"}></SvgFavorite>
        </Button>

        {/* ingredients start */}
        <h3 className="mb-9 text-2xl font-extrabold uppercase">Ingredients</h3>
        <ul className="mb-9 ml-6 flex list-disc flex-col gap-2">
          {loading
            ? "Loading"
            : recipeData.nutrition.ingredients.map((ingredient, i) => (
                <li key={i} className="text-sm font-semibold uppercase">
                  {`${ingredient.amount} ${ingredient.unit} ${ingredient.name}`}
                </li>
              ))}
        </ul>
        {/* instructions start */}
        <h3 className="mb-9 text-2xl font-extrabold uppercase">Instructions</h3>

        <div className="mb-8 flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            {stepsArr.map((instruction, i) => (
              <div key={i}>
                <div className="flex gap-4">
                  <div className="flex h-8 w-11 items-center justify-center border-2 border-black bg-orange text-center text-xl font-extrabold shadow-[3px_3px_0px_rgba(0,0,0,1)]">
                    {i + 1}
                  </div>
                  <span className="w-full">{instruction}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeScreen;

import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { RecipeContext } from "../App";
import { idToImage } from "../util/idToImage";

import fetchRecipeData from "../util/fetchRecipeData";
import Loading from "../components/primatives/Loading";
import Error from "../components/primatives/Error";

import ScrollableCalendar from "../components/ScrollableCalendar";
import AllRecipesRecipe from "../components/AllRecipesRecipe";
import Button from "../components/primatives/Button";
import SvgDownArrow from "../assets/icons/DownArrow";
import SvgFavorite from "../assets/icons/Favorite";
import SvgStar from "../assets/icons/Star";
import SvgCalendar from "../assets/icons/Calendar";
import getDayAsPlannerKey from "../util/getDayAsPlannerKey";

function RecipeScreen() {
  const {
    data,
    expandedData,
    addExpandedData,
    favoriteRecipes,
    removeFavorite,
    addFavorite,
    planner,
    removeFromPlanner,
    addToPlanner,
    loading,
  } = useContext(RecipeContext);
  const navigate = useNavigate();
  const { recipeID } = useParams();
  const isFavorite = favoriteRecipes.includes(Number(recipeID));
  const isRecipe = data.some((recipe) => recipe.id === Number(recipeID));
  const [calendarOpen, setCalendarOpen] = useState(false);

  // if recipeId is not in the data, then go to the error page
  if (!isRecipe)
    navigate("/error", {
      replace: true,
      state: {
        statusText: `/recipe/${recipeID} not found`,
        status: 404,
        data: "You are trying to search for a recipe that doesn't exist",
      },
    });

  // variables for scrollable calendar
  const [selectedDate, setSelectedDate] = useState({
    month: null,
    day: null,
    year: null,
  });
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // initial state as null or an empty object to prevent undefined errors
  const [recipeData, setRecipeData] = useState(expandedData[recipeID] || null);
  const [recipeLoading, setRecipeLoading] = useState(true);
  const [recipeError, setRecipeError] = useState(false);

  // for disabling recipeLoading if recipe is already in expandedRecipes
  useEffect(() => {
    if (recipeData) setRecipeLoading(false);
  }, [recipeData]);

  // if the recipe isn't already in expandedData, fetch the recipe
  // and add it to expandedData
  useEffect(() => {
    const fetchRecipe = async () => {
      const result = await fetchRecipeData(
        recipeID,
        false,
        undefined,
        setRecipeLoading,
        setRecipeError,
      );
      setRecipeData(result);
      addExpandedData(Number(recipeID), result);
    };

    if (!recipeData && isRecipe && !recipeError) {
      console.log("called fetchRecipe");
      fetchRecipe();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expandedData, recipeID, isRecipe]);

  // build the array of instruction steps
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

  if (recipeError) return <Error />;
  if (recipeLoading || loading) return <Loading />;
  console.log(recipeData.summary);
  return (
    <div>
      {/* top section start */}
      <div className="section px-6">
        <h1 className="mt-10 text-3xl font-extrabold uppercase">
          {recipeLoading ? "Loading" : recipeData.title}
        </h1>
        <p className="mb-6 font-semibold text-dark-light-grey">
          {recipeLoading
            ? "Loading"
            : `${Math.round(recipeData.nutrition.nutrients[0].amount)} Calories / ${Math.round(recipeData.nutrition.nutrients[10].amount)}g Protien`}
        </p>

        <p
          className="summary line mb-5 uppercase leading-6"
          dangerouslySetInnerHTML={
            recipeLoading
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
            extraCss="mx-auto border-black border-4 mb-3"
            onClick={
              isFavorite
                ? () => removeFavorite(Number(recipeID))
                : () => addFavorite(Number(recipeID))
            }
          >
            <SvgFavorite color={isFavorite ? "white" : "black"}></SvgFavorite>
          </Button>

          <Button
            width="w-full"
            height="h-[50px]"
            color={calendarOpen ? "black" : "white"}
            textColor={calendarOpen ? "white" : "dark-grey"}
            text={calendarOpen ? "Close Plan Recipe" : "Plan Recipe"}
            extraCss={`mx-auto border-black border-4 ${calendarOpen ? "" : "mb-36"}`}
            onClick={() => setCalendarOpen(!calendarOpen)}
          >
            <SvgCalendar color={calendarOpen ? "white" : "black"}></SvgCalendar>
          </Button>
          {calendarOpen ? (
            <div>
              <div className="calendar h-fit w-full bg-very-light-grey">
                <ScrollableCalendar
                  setSelectedDate={setSelectedDate}
                  selectedDate={selectedDate}
                />

                <div className="z-40 mx-auto mb-8 flex h-12 w-full max-w-96 items-center bg-orange">
                  <h2 className="text-stroke-black text-stroke-2 stroke-text smooth-16 relative w-fit pl-3 text-3xl font-extrabold uppercase text-white">
                    {`day ${selectedDate.day} meal plan`}
                  </h2>
                </div>
                <div className="PLANBOX flex w-full gap-2 overflow-auto">
                  {["breakfast", "lunch", "dinner"].map((meal, i) => {
                    const selectedPlanAsKey = getDayAsPlannerKey(
                      selectedDate.year,
                      months[selectedDate.month - 1],
                      selectedDate.day,
                    );

                    const todaysPlanner = planner[selectedPlanAsKey];
                    const mealID = todaysPlanner ? todaysPlanner[meal] : null;

                    return (
                      <div key={i} className="PLAN">
                        <p className="mb-2 text-xl font-bold uppercase">
                          {meal}
                        </p>
                        <AllRecipesRecipe
                          title={mealID ? expandedData[mealID].title : "empty"}
                          id={mealID ? mealID : ""}
                          image={idToImage(mealID)}
                          buttonColor={mealID ? "light-grey" : "orange"}
                          buttonText={mealID ? "remove plan" : "add plan"}
                          onClick={
                            mealID
                              ? () =>
                                  removeFromPlanner(
                                    selectedPlanAsKey,
                                    meal,
                                    mealID,
                                  )
                              : () =>
                                  addToPlanner(
                                    selectedPlanAsKey,
                                    meal,
                                    recipeID,
                                  )
                          }
                        ></AllRecipesRecipe>
                      </div>
                    );
                  })}
                </div>
              </div>
              <Button
                width="w-full"
                height="h-[50px]"
                color={calendarOpen ? "black" : "white"}
                textColor={calendarOpen ? "white" : "dark-grey"}
                text="Close Plan recipe"
                extraCss={`mx-auto border-black border-4 mb-36 mt-5`}
                onClick={() => setCalendarOpen(!calendarOpen)}
              >
                <SvgCalendar
                  color={calendarOpen ? "white" : "black"}
                ></SvgCalendar>
              </Button>
            </div>
          ) : null}
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
          {recipeLoading ? "Loading" : recipeData.title}
        </h3>
        <div className="mx-auto flex">
          <SvgStar fill="#F2B955"></SvgStar>
          <SvgStar fill="#F2B955"></SvgStar>
          <SvgStar fill="#F2B955"></SvgStar>
          <SvgStar fill="#F2B955"></SvgStar>
          <SvgStar fill="#F2B955"></SvgStar>
        </div>
        <span>
          {recipeLoading
            ? "Loading"
            : `${Math.round(recipeData.nutrition.nutrients[0].amount)} Calories / serving`}
        </span>
        <div className="flex gap-4">
          <span>
            Ready in: {recipeLoading ? "Loading" : recipeData.readyInMinutes}{" "}
            MINS
          </span>
          <span>
            Yields: {recipeLoading ? "Loading" : recipeData.servings} servings
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
          {recipeLoading
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

import { useContext } from "react";
import { RecipeContext } from "../App";

import RecipeDisplayOne from "../components/RecipeDisplayOne";
import RecipeDisplayCircle from "../components/RecipeDisplayCircle";
import RecipeDisplayTwo from "../components/RecipeDisplayTwo";
import image from "../assets/images/pancake.jpg";
import Button from "../components/primatives/Button";
import SvgAdd from "../assets/icons/Add";

function HomeScreen() {
  const { data, error, loading, latestRecipes, featuredRecipes } =
    useContext(RecipeContext);

  return (
    <div className="px-6">
      <div className="section mb-16">
        <div className="relative mb-8 mt-10 flex flex-col gap-4">
          <div className="absolute left-[50%] z-40 flex h-12 w-full max-w-96 translate-x-[-50%] translate-y-[-50%] items-center bg-orange">
            <h2 className="text-stroke-black text-stroke-2 stroke-text smooth-16 relative w-fit pl-3 text-3xl font-extrabold uppercase text-white">
              Lastest Recipes
            </h2>
          </div>
          <div className="grid grid-cols-1 grid-rows-3 gap-4">
            {latestRecipes.map((recipe, i) => (
              <RecipeDisplayOne
                key={i}
                image={
                  loading
                    ? null
                    : `https://img.spoonacular.com/recipes/${recipe.id}-636x393.jpg`
                }
                title={loading ? "Loading" : recipe.title}
                subtitle={`${Math.round(recipe.nutrition.nutrients[0].amount)} kCal | ${Math.round(recipe.nutrition.nutrients[3].amount)} Carbs`}
              ></RecipeDisplayOne>
            ))}
          </div>
        </div>
        <Button
          width="max-w-[400px] w-full"
          height="h-[50px]"
          color="orange"
          textColor="white"
          text="View all recipes"
          extraCss="mx-auto"
        >
          <SvgAdd color="white"></SvgAdd>
        </Button>
      </div>

      <div className="section mb-16">
        <h2 className="mb-6 text-lg font-bold uppercase">
          Swipe to browse categories
        </h2>
        <div
          className="flex gap-4 overflow-scroll"
          style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
        >
          <RecipeDisplayCircle image={image}></RecipeDisplayCircle>
          <RecipeDisplayCircle image={image}></RecipeDisplayCircle>
          <RecipeDisplayCircle image={image}></RecipeDisplayCircle>
          <RecipeDisplayCircle image={image}></RecipeDisplayCircle>
          <RecipeDisplayCircle image={image}></RecipeDisplayCircle>
          <RecipeDisplayCircle image={image}></RecipeDisplayCircle>
          <RecipeDisplayCircle image={image}></RecipeDisplayCircle>
        </div>
      </div>

      <div className="section mb-24">
        <div className="grid grid-cols-1 gap-8">
          {featuredRecipes.map((recipe, i) => (
            <RecipeDisplayTwo
              key={i}
              image={
                loading
                  ? null
                  : `https://img.spoonacular.com/recipes/${recipe.id}-636x393.jpg`
              }
              title={loading ? "Loading" : recipe.title}
              text={loading ? "Loading" : recipe.summary}
            ></RecipeDisplayTwo>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;

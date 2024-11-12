import { useParams } from "react-router-dom";
import { useContext } from "react";
import { RecipeContext } from "../App";
import { idToImage } from "../util/idToImage";

import Button from "../components/primatives/Button";
import SvgDownArrow from "../assets/icons/DownArrow";
import SvgFavorite from "../assets/icons/Favorite";
import SvgStar from "../assets/icons/Star";

function RecipeScreen() {
  const { expandedData } = useContext(RecipeContext);
  const { recipeID } = useParams();

  // this is if we already have it stored
  const recipeData = expandedData[recipeID];
  console.log({ expandedData });

  // determine if the recipe text is html or plain, then break the recipe text into a list
  let isHtml = recipeData.instructions.includes("<ol>", 0);
  let items;
  let instructionsArr;
  if (isHtml) {
    items = recipeData.instructions
      .replace(/<ol>|<\/ol>|<\/li>/g, "")
      .trim()
      .split("<li>")
      .filter((item) => item);

    instructionsArr = [];
    items.forEach((item) => {
      if (item.match(/^For .*:$/gi) || item.match(/.*:$/)) {
        instructionsArr.push([]);
        instructionsArr[instructionsArr.length - 1].push(item);
        return;
      }

      if (instructionsArr.length) {
        instructionsArr[instructionsArr.length - 1].push(item);
      }
    });

    if (!instructionsArr.length) {
      instructionsArr = items;
      isHtml = false;
    }
  } else {
    instructionsArr = recipeData.instructions.split("\n");
  }

  return (
    <>
      {/* top section start */}
      <div className="section px-6">
        <h1 className="mt-10 text-3xl font-extrabold uppercase">
          {recipeData.title}
        </h1>
        <p className="mb-6 font-semibold text-dark-light-grey">
          $5.00 Recipe / $0.50 Serving
        </p>

        <p
          className="line mb-5 uppercase leading-6"
          dangerouslySetInnerHTML={{
            __html: recipeData.summary,
          }}
        ></p>
        <Button
          width="w-full"
          height="h-[50px]"
          color="orange"
          textColor="dark-grey"
          text="Jump to recipe"
          extraCss="mx-auto mb-8 border-black border-4 shadow-[6px_6px_0px_rgba(0,0,0,1)]"
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
            color="white"
            textColor="dark-grey"
            text="Favorite this recipe"
            extraCss="mx-auto border-black border-4 mb-36"
          >
            <SvgFavorite color="black"></SvgFavorite>
          </Button>
        </div>
      </div>

      {/*bottom section start  */}
      <div className="section relative flex h-80 w-full flex-col items-center gap-3 bg-very-dark-orange bg-cover bg-center px-6 pt-20 font-medium uppercase text-white">
        <div
          className="absolute left-[50%] top-0 h-32 w-32 translate-x-[-50%] translate-y-[-50%] rounded-full border-[6px] border-very-dark-orange bg-dark-orange bg-cover bg-center"
          style={{ backgroundImage: `url(${idToImage(recipeID)})` }}
        ></div>
        <h3 className="tracking mb-12 text-center text-2xl font-extrabold">
          {recipeData.title}
        </h3>
        <div className="mx-auto flex">
          <SvgStar fill="#F2B955"></SvgStar>
          <SvgStar fill="#F2B955"></SvgStar>
          <SvgStar fill="#F2B955"></SvgStar>
          <SvgStar fill="#F2B955"></SvgStar>
          <SvgStar fill="#F2B955"></SvgStar>
        </div>
        <span>$5.00 Recipe / $0.50 Serving</span>
        <div className="flex gap-4">
          <span>Ready in: {recipeData.readyInMinutes} MINS</span>
          <span>Yields: {recipeData.servings} servings</span>
        </div>
      </div>

      <div className="section px-6">
        <Button
          width="w-full"
          height="h-[50px]"
          color="white"
          textColor="dark-grey"
          text="Favorite this recipe"
          extraCss="mx-auto border-black border-4 mb-14 mt-4"
        >
          <SvgFavorite color="black"></SvgFavorite>
        </Button>

        {/* ingredients start */}
        <h3 className="mb-9 text-2xl font-extrabold uppercase">Ingredients</h3>
        <ul className="mb-9 ml-6 flex list-disc flex-col gap-2">
          {recipeData.nutrition.ingredients.map((ingredient, i) => (
            <li key={i} className="text-sm font-semibold uppercase">
              {`${ingredient.amount} ${ingredient.unit} ${ingredient.name}`}
            </li>
          ))}
        </ul>
        {/* instructions start */}
        <h3 className="mb-9 text-2xl font-extrabold uppercase">Instructions</h3>

        <div className="mb-8 flex flex-col gap-4">
          {isHtml ? (
            instructionsArr.map((arr, i) => (
              <div key={i} className="flex flex-col gap-4">
                <h4 className="mb-2 text-xl font-extrabold uppercase text-dark-grey">
                  {arr[0]}
                </h4>

                {arr.slice(1).map((instruction, ii) => (
                  <div key={(i + 1) * 100 + ii + 1}>
                    <div className="flex gap-4">
                      <div className="flex h-8 w-11 items-center justify-center border-2 border-black bg-orange text-center text-xl font-extrabold shadow-[3px_3px_0px_rgba(0,0,0,1)]">
                        {ii + 1}
                      </div>
                      <span className="w-full">{instruction}</span>
                    </div>
                  </div>
                ))}
              </div>
            ))
          ) : (
            <div className="flex flex-col gap-4">
              {instructionsArr.map((instruction, i) => (
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
          )}
        </div>
      </div>
    </>
  );
}

export default RecipeScreen;

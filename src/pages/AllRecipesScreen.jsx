import { RecipeContext } from "../App";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { idToImage } from "../util/idToImage";
import { useState } from "react";
import Loading from "../components/primatives/Loading";
import Button from "../components/primatives/Button";
import SvgFilterList from "../assets/icons/FilterList";
import AllRecipesRecipe from "../components/AllRecipesRecipe";

function AllRecipesScreen() {
  const { data, loading } = useContext(RecipeContext);
  const [sortOpen, setSortOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  const { category } = useParams();
  const dishTypes = ["none", "main courses", "soups", "appetizers", "desserts"];

  useEffect(() => {
    if (category && dishTypes.includes(category)) {
      setSelected(dishTypes.indexOf(category));
    }
  }, [category]);

  const selectedData =
    selected === 0
      ? data
      : data.filter((recipe) => recipe.myDishType === dishTypes[selected]);

  if (loading) return <Loading />;
  return (
    <div className="px-6">
      <div className="z-40 mx-auto mb-6 mt-4 flex h-12 w-full max-w-96 items-center bg-orange">
        <h2 className="text-stroke-black text-stroke-2 stroke-text smooth-16 relative w-fit pl-3 text-3xl font-extrabold uppercase text-white">
          All Recipes
        </h2>
      </div>
      <div className="mx-auto mb-6 flex w-[11rem] cursor-pointer flex-col items-center">
        <Button
          height="h-[50px]"
          color="very-light-grey"
          textColor="dark-grey"
          text="Sort by..."
          extraCss="mx-auto"
          onClick={() => setSortOpen(!sortOpen)}
        >
          <SvgFilterList color=""></SvgFilterList>
        </Button>

        {sortOpen ? (
          <div className="flex h-fit w-[11rem] flex-col justify-center gap-4 bg-very-light-grey p-4">
            {dishTypes.map((item, i) => (
              <div
                key={i}
                // to={`./${item.replace(" ", "-")}`}
                // to={`./`}
                className="justify-left flex items-center gap-2"
                onClick={() => setSelected(i)}
              >
                <div
                  className={`h-[15px] w-[15px] rounded-full`}
                  style={{
                    backgroundColor: `${selected === -1 ? "lightgrey" : selected === i ? "var(--black)" : "lightgrey"}`,
                  }}
                ></div>
                <div className="text-sm font-bold uppercase text-black">
                  {item}
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>

      <div className="section mb-16 grid w-full grid-cols-2 items-center justify-center gap-y-3">
        {selectedData.map((recipe, i) => (
          <AllRecipesRecipe
            key={i}
            image={idToImage(recipe.id)}
            title={recipe.title}
            to={`/recipe/${recipe.id}`}
          ></AllRecipesRecipe>
        ))}
      </div>
    </div>
  );
}

export default AllRecipesScreen;

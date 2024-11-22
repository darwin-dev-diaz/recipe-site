import { RecipeContext } from "../App";
import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { idToImage } from "../util/idToImage";
import { useState } from "react";

import Loading from "../components/primatives/Loading";
import Error from "../components/primatives/Error";
import Button from "../components/primatives/Button";
import AllRecipesRecipe from "../components/AllRecipesRecipe";

import SvgFilterList from "../assets/icons/FilterList";

function AllRecipesScreen() {
  const { data, loading, error } = useContext(RecipeContext);
  const [sortOpen, setSortOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  const { category } = useParams();
  const dishTypes = ["none", "main courses", "soups", "appetizers", "desserts"];
  const navigate = useNavigate();

  // make sure the category is valid. If not throw erre
  if (!dishTypes.includes(category) && category) {
    navigate("/error", {
      replace: true,
      state: {
        statusText: `/allrecipes/${category} not found`,
        status: 404,
        data: "You are trying to filter by a category that doesn't exist",
      },
    });
  }

  // if the parameter category is set, set the selected state right away
  useEffect(() => {
    if (category && dishTypes.includes(category)) {
      setSelected(dishTypes.indexOf(category));
    }
  }, [category]);

  // the data to display
  const selectedData =
    selected === 0
      ? data
      : data.filter((recipe) => recipe.myDishType === dishTypes[selected]);

  if (error) return <Error />;
  if (loading) return <Loading />;
  return (
    <div className="flex w-full items-center justify-center px-6">
      <div className="max-w-[72rem]">
        <div className="z-40 mx-auto mb-6 mt-4 flex h-12 w-full max-w-96 items-center bg-orange">
          <h2 className="text-stroke-black text-stroke-2 stroke-text smooth-16 relative w-fit pl-3 text-2xl font-extrabold uppercase text-white md:text-3xl">
            All Recipes
          </h2>
        </div>
        <div className="mx-auto mb-6 flex w-full max-w-xs cursor-pointer flex-col items-center md:max-w-sm">
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
            <div className="flex h-fit w-full flex-col justify-center gap-4 bg-very-light-grey p-4">
              {dishTypes.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2"
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

        <div className="section mb-16 grid grid-cols-2 items-center justify-center gap-x-4 gap-y-3 justify-self-center sm:gap-x-0 md:grid-cols-3 md:gap-y-20 lg:w-[70%]">
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
    </div>
  );
}

export default AllRecipesScreen;

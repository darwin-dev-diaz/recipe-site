import RemoveableRecipe from "../components/RemoveableRecipe";
import { RecipeContext } from "../App";
import { useContext } from "react";
import { idToImage } from "../util/idToImage";
import Loading from "../components/primatives/Loading";
import Error from "../components/primatives/Error";

function FavoritesScreen() {
  const { favoriteRecipes, expandedData, loading, error, removeFavorite } =
    useContext(RecipeContext);

  if (error) return <Error />;
  if (loading) return <Loading />;

  return (
    <div className="flex w-full items-center justify-center px-6">
      <div className="max-w-[72rem]">
        <div className="z-40 mx-auto mb-6 mt-4 flex h-12 w-full max-w-96 items-center bg-orange">
          <h2 className="text-stroke-black text-stroke-2 stroke-text smooth-16 relative w-fit pl-3 text-2xl font-extrabold uppercase text-white md:text-3xl">
            Favorite Recipes
          </h2>
        </div>

        <div className="section mb-16 grid grid-cols-2 items-center justify-center gap-x-4 gap-y-3 justify-self-center sm:gap-x-0 md:grid-cols-3 md:gap-x-3 md:gap-y-20 lg:w-[70%]">
          {favoriteRecipes.length
            ? favoriteRecipes.map((recipeID, i) => {
                const title = expandedData[recipeID].title;
                const removeFavoriteClick = () => {
                  removeFavorite(recipeID);
                  window.scrollTo(0, 0);
                };
                return (
                  <RemoveableRecipe
                    title={title}
                    key={i}
                    to={`/recipe/${recipeID}`}
                    id={recipeID}
                    image={idToImage(recipeID)}
                    onClick={removeFavoriteClick}
                  ></RemoveableRecipe>
                );
              })
            : "No favorites yet"}
        </div>
      </div>
    </div>
  );
}

export default FavoritesScreen;

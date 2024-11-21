import RemoveableRecipe from "../components/RemoveableRecipe";
import { RecipeContext } from "../App";
import { useContext } from "react";
import { idToImage } from "../util/idToImage";
import Loading from "../components/primatives/Loading";
import Error from "../components/primatives/Error";

function FavoritesScreen() {
  const { favoriteRecipes, expandedData, loading, error, removeFavorite } =
    useContext(RecipeContext);

  if (error) return <Error/>;
  if (loading) return <Loading />;

  return (
    <div className="px-6">
      <div className="z-40 mx-auto mb-6 mt-4 flex h-12 w-full max-w-96 items-center bg-orange">
        <h2 className="text-stroke-black text-stroke-2 stroke-text smooth-16 relative w-fit pl-3 text-3xl font-extrabold uppercase text-white">
          Favorite recipes
        </h2>
      </div>
      <div className="section mb-16 grid w-full grid-cols-2 items-center justify-center gap-y-3 text-center">
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
  );
}

export default FavoritesScreen;

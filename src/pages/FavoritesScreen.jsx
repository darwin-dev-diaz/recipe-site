import image from "../assets/images/pancake.jpg";
import FavoriteRecipe from "../components/FavoriteRecipe";

function FavoritesScreen() {
  return (
    <div className="px-6">
      <div className="z-40 mx-auto mb-6 mt-4 flex h-12 w-full max-w-96 items-center bg-orange">
        <h2 className="text-stroke-black text-stroke-2 stroke-text smooth-16 relative w-fit pl-3 text-3xl font-extrabold uppercase text-white">
          Favorite recipes
        </h2>
      </div>
      <div className="section mb-16 grid w-full grid-cols-2 items-center justify-center gap-y-3">
        <FavoriteRecipe image={image}></FavoriteRecipe>
        <FavoriteRecipe image={image}></FavoriteRecipe>
        <FavoriteRecipe image={image}></FavoriteRecipe>
        <FavoriteRecipe image={image}></FavoriteRecipe>
        <FavoriteRecipe image={image}></FavoriteRecipe>
        <FavoriteRecipe image={image}></FavoriteRecipe>
      </div>
    </div>
  );
}

export default FavoritesScreen;

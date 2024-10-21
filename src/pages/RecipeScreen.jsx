import image from "../assets/images/pancake.jpg";
import Button from "../components/primatives/Button";
import SvgDownArrow from "../assets/icons/DownArrow";
import SvgFavorite from "../assets/icons/Favorite";
import AllRecipesRecipe from "../components/AllRecipesRecipe";

function RecipeScreen() {
  return (
    <>
      <h1 className="mt-10 text-3xl font-extrabold uppercase">
        Pumpkin Pancake
      </h1>
      <p className="mb-6 font-semibold text-dark-light-grey">
        $5.00 Recipe / $0.50 Serving
      </p>

      <p className="mb-5 uppercase leading-5">
        Crispy golden tofu bathen in a 5-ingredient peanut gochujang sauce that
        is spicy, sweet tangy and so delicious
      </p>
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
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <Button
          width="w-full"
          height="h-[50px]"
          color="white"
          textColor="dark-grey"
          text="Favorite this recipe"
          extraCss="mx-auto mb-8 border-black border-4 mb-36"
        >
          <SvgFavorite color="black"></SvgFavorite>
        </Button>
      </div>
    </>
  );
}

export default RecipeScreen;

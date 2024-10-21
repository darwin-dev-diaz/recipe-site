import image from "../assets/images/pancake.jpg";
import Button from "../components/primatives/Button";
import SvgFilterList from "../assets/icons/FilterList";
import AllRecipesRecipe from "../components/AllRecipesRecipe";

function AllRecipesScreen() {
  return (
    <>
      <div className="z-40 mx-auto mb-6 mt-4 flex h-12 w-full max-w-96 items-center bg-orange">
        <h2 className="text-stroke-black text-stroke-2 stroke-text smooth-16 relative w-fit pl-3 text-3xl font-extrabold uppercase text-white">
          All Recipes
        </h2>
      </div>
      <Button
        width="w-fit"
        height="h-[50px]"
        color="very-light-grey"
        textColor="dark-grey"
        text="Sort by..."
        extraCss="mx-auto mb-8"
      >
        <SvgFilterList color=""></SvgFilterList>
      </Button>
      <div className="section mb-16 grid w-full grid-cols-2 items-center justify-center gap-y-3">
        <AllRecipesRecipe image={image}></AllRecipesRecipe>
        <AllRecipesRecipe image={image}></AllRecipesRecipe>
        <AllRecipesRecipe image={image}></AllRecipesRecipe>
        <AllRecipesRecipe image={image}></AllRecipesRecipe>
        <AllRecipesRecipe image={image}></AllRecipesRecipe>
        <AllRecipesRecipe image={image}></AllRecipesRecipe>
      </div>
    </>
  );
}

export default AllRecipesScreen;

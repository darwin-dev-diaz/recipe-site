import image from "../assets/images/pancake.jpg";
import Button from "../components/primatives/Button";
import SvgDownArrow from "../assets/icons/DownArrow";
import SvgFavorite from "../assets/icons/Favorite";
import SvgStar from "../assets/icons/Star";
import SvgHalfStar from "../assets/icons/HalfStar";
// import AllRecipesRecipe from "../components/AllRecipesRecipe";

function RecipeScreen() {
  return (
    <>
      {/* top section start */}
      <div className="section px-6">
        <h1 className="mt-10 text-3xl font-extrabold uppercase">
          Pumpkin Pancake
        </h1>
        <p className="mb-6 font-semibold text-dark-light-grey">
          $5.00 Recipe / $0.50 Serving
        </p>

        <p className="mb-5 uppercase leading-5">
          Crispy golden tofu bathen in a 5-ingredient peanut gochujang sauce
          that is spicy, sweet tangy and so delicious
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
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <h3 className="tracking mb-12 text-center text-2xl font-extrabold">
          Pumpkin Pancake word with ham and cheese
        </h3>
        <div className="mx-auto flex">
          <SvgStar fill="#F2B955"></SvgStar>
          <SvgStar fill="#F2B955"></SvgStar>
          <SvgStar fill="#F2B955"></SvgStar>
          <SvgStar fill="#F2B955"></SvgStar>
          <SvgHalfStar fill="#F2B955"></SvgHalfStar>
        </div>
        <span>$5.00 Recipe / $0.50 Serving</span>
        <div className="flex gap-4">
          <span>Total time: 40 minutes</span>
          <span>Yields: 3-4 servings</span>
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
          <li className="text-sm font-semibold uppercase">
            1 Tbsp cooking oil
          </li>
          <li className="text-sm font-semibold uppercase">
            1 lb. Italian sausage
          </li>
          <li className="text-sm font-semibold uppercase">
            1 yellow onion, diced
          </li>
          <li className="text-sm font-semibold uppercase">
            1 red bell pepper, diced
          </li>
          <li className="text-sm font-semibold uppercase">
            4 cloves of garlic, minced
          </li>
          <li className="text-sm font-semibold uppercase">
            2 Tbsp tomato paste
          </li>
          <li className="text-sm font-semibold uppercase">
            1 15oz. can crushed tomatoes
          </li>
          <li className="text-sm font-semibold uppercase">
            1 14oz. can diced tomatoes
          </li>
          <li className="text-sm font-semibold uppercase">
            2 tsp Italian seasoning
          </li>
          <li className="text-sm font-semibold uppercase">3/4 tsp salt</li>
          <li className="text-sm font-semibold uppercase">
            1/4 tsp freshly cracked black pepper
          </li>
          <li className="text-sm font-semibold uppercase">2 tsp sugar</li>
          <li className="text-sm font-semibold uppercase">
            1/4 tsp red pepper flakes
          </li>
          <li className="text-sm font-semibold uppercase">
            5 cups chicken broth
          </li>
          <li className="text-sm font-semibold uppercase">8 lasagna noodles</li>
        </ul>
        <h4 className="mb-9 text-xl font-extrabold uppercase text-dark-grey">
          Cheese topping
        </h4>
        <ul className="mb-9 ml-6 flex list-disc flex-col gap-2">
          <li className="text-sm font-semibold uppercase">
            1 Tbsp cooking oil
          </li>
          <li className="text-sm font-semibold uppercase">
            1 lb. Italian sausage
          </li>
          <li className="text-sm font-semibold uppercase">
            1 yellow onion, diced
          </li>
          <li className="text-sm font-semibold uppercase">
            1 red bell pepper, diced
          </li>
          <li className="text-sm font-semibold uppercase">
            4 cloves of garlic, minced
          </li>
          <li className="text-sm font-semibold uppercase">
            2 Tbsp tomato paste
          </li>
          <li className="text-sm font-semibold uppercase">
            1 15oz. can crushed tomatoes
          </li>
        </ul>
        {/* instructions start */}
        <h3 className="mb-9 text-2xl font-extrabold uppercase">Instructions</h3>
        <div className="mb-8 flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="flex h-8 w-11 items-center justify-center border-2 border-black bg-orange text-center text-xl font-extrabold shadow-[3px_3px_0px_rgba(0,0,0,1)]">
              1
            </div>
            <span>
              Heat a large dutch oven or soup pot over medium heat and add the
              oil. Crumble and brown the Italian sausage.
            </span>
          </div>
          <div className="flex gap-4">
            <div className="flex h-8 w-11 items-center justify-center border-2 border-black bg-orange text-center text-xl font-extrabold shadow-[3px_3px_0px_rgba(0,0,0,1)]">
              1
            </div>
            <span>
              Heat a large dutch oven or soup pot over medium heat and add the
              oil. Crumble and brown the Italian sausage.
            </span>
          </div>
          <div className="flex gap-4">
            <div className="flex h-8 w-11 items-center justify-center border-2 border-black bg-orange text-center text-xl font-extrabold shadow-[3px_3px_0px_rgba(0,0,0,1)]">
              1
            </div>
            <span>
              Heat a large dutch oven or soup pot over medium heat and add the
              oil. Crumble and brown the Italian sausage.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecipeScreen;

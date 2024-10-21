import RecipeDisplayOne from "../components/RecipeDisplayOne";
import RecipeDisplayCircle from "../components/RecipeDisplayCircle";
import RecipeDisplayTwo from "../components/RecipeDisplayTwo";
import image from "../assets/images/pancake.jpg";
import Button from "../components/primatives/Button";
import SvgAdd from "../assets/icons/Add";

function HomeScreen() {
  return (
    <>
      <div className="section mb-16">
        <div className="relative mb-8 mt-10 flex flex-col gap-4">
          <div className="absolute left-[50%] z-40 flex h-12 w-full max-w-96 translate-x-[-50%] translate-y-[-50%] items-center bg-orange">
            <h2 className="text-stroke-black text-stroke-2 stroke-text smooth-16 relative w-fit pl-3 text-3xl font-extrabold uppercase text-white">
              All Recipes
            </h2>
          </div>
          <div className="grid grid-cols-1 grid-rows-3 gap-4">
            <RecipeDisplayOne
              image={image}
              title="Pumpking pancakes"
              subtitle="$5.00 Recipe / $0.50 Serving"
            ></RecipeDisplayOne>
            <RecipeDisplayOne
              image={image}
              title="Pumpking pancakes"
              subtitle="$5.00 Recipe / $0.50 Serving"
            ></RecipeDisplayOne>
            <RecipeDisplayOne
              image={image}
              title="Pumpking pancakes"
              subtitle="$5.00 Recipe / $0.50 Serving"
            ></RecipeDisplayOne>
          </div>
        </div>
        <Button
          width="max-w-[400px] w-full"
          height="h-[50px]"
          color="dark-orange"
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
          style={{ "-ms-overflow-style": "none", "scrollbar-width": "none" }}
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

        <RecipeDisplayTwo image={image}></RecipeDisplayTwo>
        <RecipeDisplayTwo image={image}></RecipeDisplayTwo>
        <RecipeDisplayTwo image={image}></RecipeDisplayTwo>
        <RecipeDisplayTwo image={image}></RecipeDisplayTwo>
        </div>
      </div>
    </>
  );
}

export default HomeScreen;

import RecipeDisplayOne from "../components/RecipeDisplayOne";
import image from "../assets/images/pancake.jpg";

function HomeScreen() {
  return (
    <>
      <div className="relative mt-10 flex flex-col gap-4">
        <div className="absolute z-40 h-10 w-96 bg-orange">
          <h2 className="text-stroke-black text-stroke-2 text-3xl font-extrabold uppercase text-white">
            All Recipes
          </h2>
        </div>
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
    </>
  );
}

export default HomeScreen;

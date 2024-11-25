import { useContext } from "react";
import { RecipeContext } from "../App";
import { Link } from "react-router-dom";
import { idToImage } from "../util/idToImage";
import SvgAdd from "../assets/icons/Add";
import RecipeDisplayOne from "../components/RecipeDisplayOne";
import RecipeDisplayCircle from "../components/RecipeDisplayCircle";
import RecipeDisplayTwo from "../components/RecipeDisplayTwo";
import OrangeHeader from "../components/OrangeHeader";
import Button from "../components/primatives/Button";
import Loading from "../components/primatives/Loading";
import image from "../assets/images/forward-arrow.jpg";
import TextInputField from "../components/primatives/InputField";
import SocialIcon from "../components/primatives/SocialIcon";
import SvgInstagram from "../assets/icons/Instagram";
import SvgTwitter from "../assets/icons/Twitter";
import SvgSkillet from "../assets/icons/Skillet";

function HomeScreen() {
  const { latestRecipes, featuredRecipes } = useContext(RecipeContext);

  return (
    <div className="mx-auto flex max-w-[72rem] flex-col px-6">
      <div className="section mb-16">
        <div className="relative mb-8 mt-10 flex flex-col items-center gap-4">
          <OrangeHeader text="latest recipes" float={true}></OrangeHeader>
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
            {latestRecipes.map((recipe, i) => (
              <RecipeDisplayOne
                key={i}
                image={idToImage(recipe.id)}
                title={recipe.title}
                id={recipe.id}
                subtitle={`${Math.round(recipe.nutrition.nutrients[0].amount)} kCal | ${Math.round(recipe.nutrition.nutrients[3].amount)} Carbs`}
                extraCss={
                  i === 0 ? "sm:col-span-2 lg:row-span-2 lg:h-full" : ""
                }
                cssobj={i === 0 ? {} : {}}
              />
            ))}
          </div>
        </div>
        <Link to="/allrecipes">
          <Button
            width="max-w-[400px] w-full"
            height="h-[50px]"
            color="orange"
            textColor="white"
            text="View all recipes"
            extraCss="mx-auto"
          >
            <SvgAdd color="white" />
          </Button>
        </Link>
      </div>

      <div className="section mb-16">
        <h2 className="mb-6 text-center text-lg font-bold uppercase">
          browse categories
        </h2>
        <div
          className="flex gap-4 overflow-x-auto"
          style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
        >
          <RecipeDisplayCircle
            image={idToImage(716364)}
            title="entrée"
            to="/allrecipes/main%20courses"
          />
          <RecipeDisplayCircle
            image={idToImage(638717)}
            title="dessert"
            to="/allrecipes/desserts"
          />
          <RecipeDisplayCircle
            image={idToImage(642129)}
            title="appetizers"
            to="/allrecipes/appetizers"
          />
          <RecipeDisplayCircle
            image={idToImage(1096250)}
            title="soups"
            to="/allrecipes/soups"
          />
          <RecipeDisplayCircle
            image={idToImage(716364)}
            title="entrée"
            to="/allrecipes/main%20courses"
          />
          <RecipeDisplayCircle
            image={idToImage(638717)}
            title="dessert"
            to="/allrecipes/desserts"
          />
          <RecipeDisplayCircle
            image={idToImage(642129)}
            title="appetizers"
            to="/allrecipes/appetizers"
          />
          <RecipeDisplayCircle
            image={image}
            title="All Recipes"
            to="/allrecipes"
          />
        </div>
      </div>

      <div className="section mb-24 md:flex md:gap-3">
        <div className="md:w-[70%]">
          <h2 className="mb-6 text-lg font-bold uppercase">
            Read our favorite recipes
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-1">
            {featuredRecipes.map((recipe, i) => (
              <RecipeDisplayTwo
                id={recipe.id}
                key={i}
                image={idToImage(recipe.id)}
                title={recipe.title}
                text={recipe.summary}
              />
            ))}
          </div>
        </div>

        <div className="mt-[3.25rem] hidden h-fit w-[30%] flex-col items-center gap-4 bg-dark-grey p-6 md:flex">
          <p className="text-sm font-bold uppercase tracking-wider text-white">
            Follow Along
          </p>
          <div className="flex gap-4">
            <SocialIcon>
              <SvgInstagram />
            </SocialIcon>
            <SocialIcon>
              <SvgTwitter />
            </SocialIcon>
            <SocialIcon>
              <SvgSkillet />
            </SocialIcon>
          </div>
          <p className="text-xl font-extrabold uppercase text-white">
            Discover More Recipes
          </p>
          <p className="text-center text-sm text-white">
            Stay updated with the latest recipes, tips, and kitchen hacks. Join
            our community!
          </p>
          <TextInputField text="Your Name..." />
          <TextInputField text="Your Email..." />
          <Button color="light-orange" text={"Sign Me Up"} />
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;

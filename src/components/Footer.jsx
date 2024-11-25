import SocialIcon from "./primatives/SocialIcon";
import SvgInstagram from "../assets/icons/Instagram";
import SvgTwitter from "../assets/icons/Twitter";
import SvgSkillet from "../assets/icons/Skillet";
import TextInputField from "./primatives/InputField";
import Button from "./primatives/Button";

function Footer() {
  return (
    <footer className="flex w-full flex-col items-center bg-dark-grey text-white">
      {/* Follow Along Section */}
      <div className="flex max-w-[72rem] flex-col items-center justify-center gap-4 px-6 py-8 sm:py-12 lg:py-16">
        <p className="text-sm font-bold uppercase tracking-wider text-white sm:text-base">
          follow along
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
        <p className="text-2xl font-extrabold uppercase text-white sm:text-3xl lg:text-4xl">
          Eat more. Spend less.
        </p>
        <p className="max-w-md pb-3 text-center text-sm text-white sm:text-base lg:text-lg">
          Join our community and get exclusive recipes, tips, and offers sent
          straight to your inbox. Learn how to cook delicious meals that save
          time and money, perfect for busy weeknights!
        </p>
        <div className="w-full sm:max-w-md">
          <TextInputField text="first and last name . . ." />
        </div>
        <div className="w-full sm:max-w-md">
          <TextInputField text="email address . . ." />
        </div>
        <Button
          color="light-orange"
          extraCss="text-dark-grey max-w-md"
          text={"Sign Me Up"}
        />
      </div>

      {/* Navigation Section */}
      <div className="flex flex-col items-center justify-center gap-4 px-6 py-8 sm:py-12">
        <button className="flex items-center gap-2 text-2xl font-semibold uppercase text-white sm:text-3xl">
          <SvgSkillet height="40" width="40" fill="white" />
          hotpan
        </button>
        <p className="max-w-prose text-center text-base font-bold uppercase sm:text-lg lg:text-xl">
          Simple recipes that make you feel good
        </p>
        <hr className="mx-0 my-4 h-[3.5px] w-full bg-black" />
        <div className="grid grid-cols-2 gap-3 text-center sm:grid-cols-3 sm:gap-6">
          <a href="" className="text-sm font-semibold uppercase sm:text-base">
            Recipes
          </a>
          <a href="" className="text-sm font-semibold uppercase sm:text-base">
            Cookbook
          </a>
          <a href="" className="text-sm font-semibold uppercase sm:text-base">
            Shop
          </a>
          <a href="" className="text-sm font-semibold uppercase sm:text-base">
            About
          </a>
          <a href="" className="text-sm font-semibold uppercase sm:text-base">
            Privacy Policy
          </a>
          <a href="" className="text-sm font-semibold uppercase sm:text-base">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

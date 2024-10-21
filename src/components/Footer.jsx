import SocialIcon from "./primatives/SocialIcon";
import SvgInstagram from "../assets/icons/Instagram";
import SvgTwitter from "../assets/icons/Twitter";
import SvgSkillet from "../assets/icons/Skillet";
import TextInputField from "./primatives/InputField";
import Button from "./primatives/Button";

function Footer() {
  return (
    <footer className="flex flex-col">
      <div className="flex h-128 flex-col items-center justify-center gap-4 bg-dark-grey px-6">
        <p className="text-sm font-bold uppercase tracking-wider text-white">
          follow along
        </p>
        <div className="flex gap-4">
          <SocialIcon>
            <SvgInstagram></SvgInstagram>
          </SocialIcon>
          <SocialIcon>
            <SvgTwitter></SvgTwitter>
          </SocialIcon>
          <SocialIcon>
            <SvgTwitter></SvgTwitter>
          </SocialIcon>
        </div>
        <p className="text-2xl font-extrabold uppercase text-white">
          Eat more. Spend less.
        </p>
        <p className="text-center text-sm text-white">
          Join our community and get exclusive recipes, tips, and offers sent
          straight to your inbox. Learn how to cook delicious meals that save
          time and money, perfect for busy weeknights!
        </p>
        <TextInputField text="first and last name . . ."></TextInputField>
        <TextInputField text="email address . . ."></TextInputField>
        <Button color="light-orange" text={"Sign Me Up"}></Button>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 px-6 py-10">
        <button className="justify-item-center flex items-center gap-2 text-2xl font-semibold uppercase text-black">
          <SvgSkillet height="40" width="40" fill="black"></SvgSkillet>
          Skillpot
        </button>
        <p className="text-l w-52 text-center font-bold uppercase">
          simple recipes that make you feel good
        </p>
        <hr className="mx-0 my-0 h-[3.5px] w-full bg-black" />
        <div className="flex flex-col items-center gap-3">
          <a href="" className="text-[20px] font-semibold uppercase">
            Recipes
          </a>
          <a href="" className="text-[20px] font-semibold uppercase">
            Cookbook
          </a>
          <a href="" className="text-[20px] font-semibold uppercase">
            Shop
          </a>
          <a href="" className="text-[20px] font-semibold uppercase">
            About
          </a>
          <a href="" className="text-[20px] font-semibold uppercase">
            Privacy Policy
          </a>
          <a href="" className="text-[20px] font-semibold uppercase">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

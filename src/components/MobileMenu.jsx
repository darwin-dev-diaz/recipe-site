import SvgAdd from "../assets/icons/Add";
import { useState } from "react";

function MobileMenu() {


  return (
    <ul className="absolute top-16 flex w-full flex-col gap-4 bg-white py-8 shadow-lg">
      <li className="cursor-pointer">
        <a href="" className="text-xl font-extrabold uppercase pl-6">
          Home
        </a>
      </li>
      <hr className="mx-auto h-[1.78px] w-[95%] border-0 bg-light-grey" />
      <li className="cursor-pointer">
        <a href="" className="text-xl font-extrabold uppercase pl-6">
          All recipes
        </a>
      </li>
      <hr className="mx-auto h-[1.78px] w-[95%] border-0 bg-light-grey" />
      <ul className="cursor-pointer">
        <div className="flex justify-between px-6">
        <a href="" className="text-xl font-extrabold uppercase ">
          Most popular
        </a>
        <SvgAdd className="fill-orange stroke-black stroke-10"></SvgAdd>
        </div>
      </ul>
      <hr className="mx-auto h-[1.78px] w-[95%] border-0 bg-light-grey" />
      <li className="cursor-pointer">
        <a href="" className="text-xl font-extrabold uppercase pl-6">
          Favorites
        </a>
      </li>
      <hr className="mx-auto h-[1.78px] w-[95%] border-0 bg-light-grey" />
      <li className="cursor-pointer">
        <a href="" className="text-xl font-extrabold uppercase pl-6">
          Monthly planner
        </a>
      </li>
    </ul>
  );
}

export default MobileMenu;

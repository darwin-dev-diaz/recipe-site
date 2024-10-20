import SvgAdd from "../assets/icons/Add";
import SvgRemove from "../assets/icons/Remove";
import { useState } from "react";

function MobileMenu() {
  const [favoritesOpen, setFavoritesOpen] = useState(false);
  return (
    <nav className="absolute top-16 w-full bg-white py-8 shadow-lg">
      <ul className="flex w-full flex-col gap-4">
        <li className="cursor-pointer">
          <a href="" className="pl-6 text-xl font-extrabold uppercase">
            Home
          </a>
        </li>
        <hr className="mx-auto h-[1.78px] w-[95%] border-0 bg-light-grey" />
        <li className="cursor-pointer">
          <a href="" className="pl-6 text-xl font-extrabold uppercase">
            All recipes
          </a>
        </li>
        <hr className="mx-auto h-[1.78px] w-[95%] border-0 bg-light-grey" />
        <ul className="cursor-pointer">
          <div
            className="flex justify-between px-6"
            onClick={() => setFavoritesOpen(!favoritesOpen)}
          >
            <li href="" className="text-xl font-extrabold uppercase">
              Most popular
              {favoritesOpen ? (
                <ul className="flex flex-col gap-3 py-3 pl-3">
                  <li className="text-[1rem] font-semibold uppercase">
                    Pumpkin Pasta
                  </li>
                  <li className="text-[1rem] font-semibold uppercase">
                    Pumpkin Noodles
                  </li>
                  <li className="text-[1rem] font-semibold uppercase">
                    Pumpkin Steak
                  </li>
                  <li className="text-[1rem] font-semibold uppercase">
                    Pumpkin Beef
                  </li>
                </ul>
              ) : null}
            </li>
            {favoritesOpen ? (
              <SvgRemove className="fill-orange"></SvgRemove>
            ) : (
              <SvgAdd className="fill-orange"></SvgAdd>
            )}
          </div>
        </ul>
        <hr className="mx-auto h-[1.78px] w-[95%] border-0 bg-light-grey" />
        <li className="cursor-pointer">
          <a href="" className="pl-6 text-xl font-extrabold uppercase">
            Favorites
          </a>
        </li>
        <hr className="mx-auto h-[1.78px] w-[95%] border-0 bg-light-grey" />
        <li className="cursor-pointer">
          <a href="" className="pl-6 text-xl font-extrabold uppercase">
            Monthly planner
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default MobileMenu;

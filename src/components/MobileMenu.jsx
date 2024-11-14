import SvgAdd from "../assets/icons/Add";
import SvgRemove from "../assets/icons/Remove";
import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function MobileMenu(props) {
  const [favoritesOpen, setFavoritesOpen] = useState(false);

  return (
    <nav className="absolute top-16 w-full bg-white py-8 shadow-lg">
      <ul className="flex w-full flex-col gap-4">
        <li onClick={props.closeMenu} className="cursor-pointer">
          <Link to="/" className="pl-6 text-xl font-extrabold uppercase">
            Home
          </Link>
        </li>
        <hr className="mx-auto h-[1.78px] w-[95%] border-0 bg-light-grey" />
        <li onClick={props.closeMenu} className="cursor-pointer">
          <Link
            to="allrecipes"
            className="pl-6 text-xl font-extrabold uppercase"
          >
            All recipes
          </Link>
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
                  <Link
                    onClick={props.closeMenu}
                    to="/recipe/638642"
                    className="text-[1rem] font-semibold uppercase"
                  >
                    Chinese Chicken Salad
                  </Link>
                  <Link
                    onClick={props.closeMenu}
                    to="/recipe/1096250"
                    className="text-[1rem] font-semibold uppercase"
                  >
                    Pho With Zucchini Noodles
                  </Link>
                  <Link
                    onClick={props.closeMenu}
                    to="/recipe/638717"
                    className="text-[1rem] font-semibold uppercase"
                  >
                    Chinese Steamed Flan
                  </Link>
                  <Link
                    onClick={props.closeMenu}
                    to="/recipe/660290"
                    className="text-[1rem] font-semibold uppercase"
                  >
                    Slow Cooker Lamb Curry
                  </Link>
                </ul>
              ) : null}
            </li>
            {favoritesOpen ? (
              <SvgRemove className="fill-orange"></SvgRemove>
            ) : (
              <SvgAdd className="fill-orange" color="orange"></SvgAdd>
            )}
          </div>
        </ul>
        <hr className="mx-auto h-[1.78px] w-[95%] border-0 bg-light-grey" />
        <li onClick={props.closeMenu} className="cursor-pointer">
          <Link
            to="favorites"
            className="pl-6 text-xl font-extrabold uppercase"
          >
            Favorites
          </Link>
        </li>
        <hr className="mx-auto h-[1.78px] w-[95%] border-0 bg-light-grey" />
        <li onClick={props.closeMenu} className="cursor-pointer">
          <Link to="plan" className="pl-6 text-xl font-extrabold uppercase">
            Monthly planner
          </Link>
        </li>
      </ul>
    </nav>
  );
}

MobileMenu.propTypes = {
  closeMenu: PropTypes.func,
};

export default MobileMenu;

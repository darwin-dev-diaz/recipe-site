import PropTypes from "prop-types";
import IconButton from "./primatives/IconButton";
import SvgSearch from "../assets/icons/Search";
import SvgMenu from "../assets/icons/Menu";
import SvgSkillet from "../assets/icons/Skillet";
import MobileMenu from "./MobileMenu";

function Header(props) {
  return (
    <header className="flex justify-between bg-[var(--black)]">
      <IconButton>
        <SvgMenu></SvgMenu>
      </IconButton>
      <button className="justify-item-center relative flex items-center gap-2 text-2xl font-semibold uppercase text-white">
        <SvgSkillet height="40" width="40" fill="white"></SvgSkillet>
        Skillpot
      </button>
      <IconButton>
        <SvgSearch></SvgSearch>
      </IconButton>
      <MobileMenu></MobileMenu>
    </header>
  );
}
Header.propTypes = {
  children: PropTypes.node,
};

export default Header;

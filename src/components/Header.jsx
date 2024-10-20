import PropTypes from "prop-types";
import IconButton from "./primatives/IconButton";
import SvgSearch from "../assets/icons/Search";
import SvgMenu from "../assets/icons/Menu";
import SvgSkillet from "../assets/icons/Skillet";
import MobileMenu from "./MobileMenu";
import { useState } from "react";

function Header(props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 flex justify-between bg-[var(--black)]">
      <IconButton
        aria-label="Menu"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <SvgMenu></SvgMenu>
      </IconButton>
      <button aria-label="Home" className="justify-item-center relative flex items-center gap-2 text-2xl font-semibold uppercase text-white">
        <SvgSkillet height="40" width="40" fill="white"></SvgSkillet>
        Skillpot
      </button>
      <IconButton aria-label="Search">
        <SvgSearch></SvgSearch>
      </IconButton>
      {mobileMenuOpen ? <MobileMenu></MobileMenu> : null}
    </header>
  );
}
Header.propTypes = {
  children: PropTypes.node,
};

export default Header;

import IconButton from "./primatives/IconButton";
import SvgSearch from "../assets/icons/Search";
import SvgMenu from "../assets/icons/Menu";
import SvgSkillet from "../assets/icons/Skillet";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 flex justify-between bg-[var(--black)]">
      <IconButton
        aria-label="Menu"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <SvgMenu></SvgMenu>
      </IconButton>

      <Link
        to="/"
        onClick={()=>setMobileMenuOpen(false)}
        aria-label="Home"
        className="justify-item-center relative flex items-center gap-2 text-2xl font-semibold uppercase text-white"
      >
        <SvgSkillet height="40" width="40" fill="white"></SvgSkillet>
        Skillpot
      </Link>
      <IconButton aria-label="Search">
        <SvgSearch></SvgSearch>
      </IconButton>
      {mobileMenuOpen ? (
        <MobileMenu closeMenu={() => setMobileMenuOpen(false)}></MobileMenu>
      ) : null}
    </header>
  );
}

export default Header;

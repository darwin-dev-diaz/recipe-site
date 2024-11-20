import IconButton from "./primatives/IconButton";
import SvgSearch from "../assets/icons/Search";
import SvgMenu from "../assets/icons/Menu";
import SvgSkillet from "../assets/icons/Skillet";
import MobileMenu from "./MobileMenu";
import SvgClose from "../assets/icons/Close";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e) => {
    e ? e.preventDefault() : null;
    setSearchText("");
  };
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
        onClick={() => setMobileMenuOpen(false)}
        aria-label="Home"
        className="justify-item-center relative flex items-center gap-2 text-2xl font-semibold uppercase text-white"
      >
        <SvgSkillet height="40" width="40" fill="white"></SvgSkillet>
        Skillpot
      </Link>
      <div className="z-40">
        <IconButton
          aria-label="Search"
          cssobj={searchOpen ? { backgroundColor: "var(--orange)" } : {}}
          onClick={
            searchOpen ? () => handleSubmit() : () => setSearchOpen(true)
          }
        >
          <SvgSearch></SvgSearch>
        </IconButton>
      </div>

      {mobileMenuOpen ? (
        <MobileMenu closeMenu={() => setMobileMenuOpen(false)}></MobileMenu>
      ) : null}

      <div
        className={`absolute ${searchOpen ? "left-0" : "left-[-100%]"} top-0 z-40 flex h-full w-full`}
        style={{
          width: "calc(100% - 64px)",
          transition: "left 0.3s ease-in-out",
        }}
      >
        <IconButton
          aria-label="Close Search"
          onClick={() => setSearchOpen(false)}
        >
          <SvgClose></SvgClose>
        </IconButton>
        <form className="upper h-full w-full text-lg" onSubmit={handleSubmit}>
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="upper h-full w-full pl-3 text-lg"
            type="text"
            placeholder="Chicken tikka masala..."
          />
        </form>
      </div>

      <div
        className={`absolute ${
          searchOpen ? "translate-y-0" : "translate-y-full"
        } top-0 z-10 h-screen w-full bg-black opacity-50`}
        style={{
          transition: "transform 0.3s ease-in-out",
        }}
      ></div>
    </header>
  );
}

export default Header;

import IconButton from "./primatives/IconButton";
import SvgSearch from "../assets/icons/Search";
import SvgMenu from "../assets/icons/Menu";
import SvgSkillet from "../assets/icons/Skillet";
import MobileMenu from "./MobileMenu";
import SvgClose from "../assets/icons/Close";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { RecipeContext } from "../App";
import SearchResult from "./SearchResult";
import { idToImage } from "../util/idToImage";
import Error from "./primatives/Error";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const { data, loading, setCanScroll, error } = useContext(RecipeContext);

  const handleSubmit = (e) => {
    e ? e.preventDefault() : null;
    // setSearchText("");
    // setSearchOpen(false);
  };

  const handleOnChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
    returnSearchResults(value);
  };

  const handleCloseSearch = () => {
    setSearchOpen(false);
    setSearchText("");
    setSearchResults([]);
    setCanScroll(true);
  };
  const handleOpenSearch = () => {
    setSearchOpen(true);
    setCanScroll(false);
    setMobileMenuOpen(false);
  };

  const handleOpenMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setCanScroll(false);
  };
  const handleCloseMenu = () => {
    setMobileMenuOpen(false);
    setCanScroll(true);
  };


  const returnSearchResults = (search) => {
    const r =
      !loading && search
        ? data.filter((recipe) =>
            recipe.title.toLowerCase().trim().includes(search),
          )
        : null;
    if (r) setSearchResults(r);
    else setSearchResults([]);
  };

  return (
    <header className="sticky top-0 z-50 flex justify-between bg-[var(--black)]">
      <IconButton aria-label="Menu" onClick={handleOpenMenu}>
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
          onClick={searchOpen ? () => handleSubmit() : () => handleOpenSearch()}
        >
          <SvgSearch></SvgSearch>
        </IconButton>
      </div>

      {mobileMenuOpen ? (
        <MobileMenu closeMenu={handleCloseMenu}></MobileMenu>
      ) : null}

      {/* search bar  */}
      <div
        className={`absolute ${searchOpen ? "left-0" : "left-[-100%]"} top-0 z-40 flex h-full w-full`}
        style={{
          width: "calc(100% - 64px)",
        }}
      >
        <IconButton
          aria-label="Close Search"
          onClick={() => handleCloseSearch()}
        >
          <SvgClose></SvgClose>
        </IconButton>
        <form className="upper h-full w-full text-lg" onSubmit={handleSubmit}>
          <input
            value={searchText}
            onChange={handleOnChange}
            className="upper h-full w-full pl-3 text-lg"
            type="text"
            placeholder="Chicken tikka masala..."
          />
        </form>
      </div>

      {/* black blur */}
      <div
        className={`absolute ${
          searchOpen || mobileMenuOpen ? "translate-y-0" : "translate-y-full"
        } top-full z-10 h-screen w-full bg-black bg-opacity-50 backdrop-blur-sm`}
        onClick={() => {
          setSearchOpen(false);
          setMobileMenuOpen(false);
          setCanScroll(true);
        }}
      ></div>

      {/* search results box */}
      {searchOpen && searchResults.length ? (
        <div className="absolute top-full z-40 flex max-h-[90vh] w-full flex-col gap-4 overflow-y-auto bg-white px-6 py-5">
          {Array.from(searchResults).map((recipe, i) => {
            return (
              <SearchResult
                key={i}
                image={idToImage(recipe.id)}
                title={recipe.title}
                to={`/recipe/${recipe.id}`}
                onClick={handleCloseSearch}
              />
            );
          })}
        </div>
      ) : null}

      {searchOpen && error ? (
        <div className="absolute top-full z-40 flex h-fit max-h-[90vh] w-full flex-col gap-4 overflow-y-auto bg-white px-6 py-5">
          <Error />
        </div>
      ) : null}
    </header>
  );
}

export default Header;

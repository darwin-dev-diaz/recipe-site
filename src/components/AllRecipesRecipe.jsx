import PropTypes from "prop-types";
import Button from "./primatives/Button";
import { Link } from "react-router-dom";
function AllRecipesRecipe(props) {
  return (
    <div
      className="flex h-[20rem] max-h-[28rem] w-[100%] flex-col justify-between place-self-center justify-self-center sm:h-[24rem] sm:w-[80%] md:h-[26rem] md:w-full lg:w-full"
      style={props.cssObj ? props.cssObj : {}}
    >
      <div
        className="h-[21rem] w-full self-center bg-black bg-cover bg-center sm:h-[18rem] md:h-[20rem]"
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
      <p className="my-3 h-[25%] w-full truncate text-wrap text-center text-base font-extrabold uppercase sm:text-lg md:text-xl">
        {props.title}
      </p>
      <Link to={props.to ? props.to : null}>
        <Button
          width="w-full"
          height="h-[45px] sm:h-[50px] md:h-[55px]"
          color={props.buttonColor ? props.buttonColor : "orange"}
          textColor="white"
          text={props.buttonText ? props.buttonText : "view recipe"}
          extraCss="mx-auto text-[.8rem]"
          cssobj={{ fontSize: "1rem" }}
          onClick={props.onClick ? props.onClick : null}
        ></Button>
      </Link>
    </div>
  );
}

AllRecipesRecipe.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  to: PropTypes.string,
  buttonColor: PropTypes.string,
  buttonText: PropTypes.string,
  onClick: PropTypes.func,
  cssObj: PropTypes.object,
};
export default AllRecipesRecipe;

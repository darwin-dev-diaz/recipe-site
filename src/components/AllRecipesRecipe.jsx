import PropTypes from "prop-types";
import Button from "./primatives/Button";
import { Link } from "react-router-dom";
function AllRecipesRecipe(props) {
  return (
    <div
      className="flex h-[28rem] max-h-[28rem] w-[13.5rem] flex-col justify-between place-self-center justify-self-center sm:h-[24rem] sm:w-[80%] md:h-[26rem]"
      style={props.cssObj ? props.cssObj : {}}
    >
      <div
        className="h-[21rem] w-full self-center bg-black bg-cover bg-center sm:h-[18rem] md:h-[20rem]"
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
      <span className="my-3 text-center text-base font-extrabold uppercase sm:text-lg md:text-xl">
        {props.title}
      </span>
      <Link to={props.to ? props.to : null}>
        <Button
          width="w-full"
          height="h-[40px] sm:h-[45px] md:h-[50px]"
          color={props.buttonColor ? props.buttonColor : "orange"}
          textColor="white"
          text={props.buttonText ? props.buttonText : "view recipe"}
          extraCss="mx-auto"
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

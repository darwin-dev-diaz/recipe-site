import PropTypes from "prop-types";
import Button from "./primatives/Button";
import { Link } from "react-router-dom";
function AllRecipesRecipe(props) {
  return (
    <div className="flex max-h-[28rem] min-h-[28rem] w-[13.5rem] flex-col justify-between place-self-center justify-self-center">
      <div
        className="h-[21rem] w-full self-center bg-black bg-cover bg-center"
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
      <span className="my-3 text-center text-xl font-extrabold uppercase">
        {props.title}
      </span>
      {/* <span className="text-sm font-semibold uppercase text-dark-light-grey">
        $5.00 Recipe / $0.50 Serving
      </span> */}
      <Link to={props.to ? props.to : null}>
        <Button
          width="w-full"
          height="h-[50px]"
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
};
export default AllRecipesRecipe;

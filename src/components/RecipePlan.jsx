import PropTypes from "prop-types";
import Button from "./primatives/Button";
import { Link } from "react-router-dom";
function RecipePlan(props) {
  return (
    <div
      className="flex max-h-[20rem] h-[15rem] w-[10rem] justify-between flex-col place-self-center justify-self-center"
      style={props.cssObj ? props.cssObj : {}}
    >
      <div
        className="h-[10rem] w-full self-center bg-black bg-cover bg-center"
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
      <span className="my-3 text-center text-base font-extrabold uppercase">
        {props.title}
      </span>
      <Link to={props.to ? props.to : null}>
        <Button
          width="w-full"
          height="h-[50px]"
          color={props.buttonColor ? props.buttonColor : "orange"}
          textColor="white"
          text={props.buttonText ? props.buttonText : "view recipe"}
          extraCss="mx-auto"
          cssobj={{fontSize: ".85rem"}}
          onClick={props.onClick ? props.onClick : null}
        ></Button>
      </Link>
    </div>
  );
}

RecipePlan.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  to: PropTypes.string,
  buttonColor: PropTypes.string,
  buttonText: PropTypes.string,
  onClick: PropTypes.func,
  cssObj: PropTypes.object,
};
export default RecipePlan;

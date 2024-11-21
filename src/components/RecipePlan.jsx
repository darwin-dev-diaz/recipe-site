import PropTypes from "prop-types";
import Button from "./primatives/Button";
import { Link } from "react-router-dom";
function RecipePlan(props) {
  return (
    <div
      className="flex h-fit max-h-[28rem] w-full gap-5 items-center place-self-center justify-self-center"
      style={props.cssObj ? props.cssObj : {}}
    >
      <div
        className="h-[10rem] w-[10rem] self-center bg-black bg-cover bg-center"
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
      <div className="h-fit">
        <span className="my-3 text-center text-xl font-extrabold uppercase">
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
            onClick={props.onClick ? props.onClick : null}
          ></Button>
        </Link>
      </div>
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

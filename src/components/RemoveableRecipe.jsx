import PropTypes from "prop-types";
import Button from "./primatives/Button";
import { Link } from "react-router-dom";
function RemoveableRecipe(props) {
  return (
    <div className="flex h-[20rem] max-h-[28rem] w-[100%] flex-col justify-between place-self-center justify-self-center sm:h-[24rem] sm:w-[80%] md:h-[26rem] md:w-full lg:w-full">
      <div
        className="h-[21rem] w-full self-center bg-black bg-cover bg-center sm:h-[18rem] md:h-[20rem]"
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
      <span className="my-3 text-center text-base font-extrabold uppercase sm:text-lg md:text-xl">
        {props.title}
      </span>

      <Link to={props.to}>
        <Button
          width="w-full"
          height="h-[45px] sm:h-[50px] md:h-[55px]"
          color="orange"
          textColor="white"
          text="view recipe"
          extraCss="mx-auto mb-2"
          cssobj={{ fontSize: "1rem" }}
        ></Button>
      </Link>

      <Button
        width="w-full"
        height="h-[45px] sm:h-[50px] md:h-[55px]"
        color="light-grey"
        textColor="white"
        text="remove"
        extraCss="mx-auto"
        onClick={props.onClick}
        cssobj={{ fontSize: "1rem" }}
      ></Button>
    </div>
  );
}

RemoveableRecipe.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.number,
  subtitle: PropTypes.string,
  to: PropTypes.string,
  removeFavorite: PropTypes.func,
  onClick: PropTypes.func,
};
export default RemoveableRecipe;

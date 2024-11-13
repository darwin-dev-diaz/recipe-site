import PropTypes from "prop-types";
import Button from "./primatives/Button";
import { Link } from "react-router-dom";

import { RecipeContext } from "../App";
import { useContext } from "react";
function RemoveableRecipe(props) {
  const { removeFavorite } = useContext(RecipeContext);
  return (
    <div className="flex max-h-[28rem] min-h-[28rem] w-[13.5rem] flex-col place-self-center justify-self-center">
      <div
        className="h-[21rem] w-full self-center bg-black bg-cover bg-center"
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
      <span className="my-3 text-center text-xl font-extrabold uppercase">
        {props.title}
      </span>

      <Link to={props.to}>
        <Button
          width="w-full"
          height="h-[50px]"
          color="orange"
          textColor="white"
          text="view recipe"
          extraCss="mx-auto mb-2"
        ></Button>
      </Link>
      <Button
        width="w-full"
        height="h-[50px]"
        color="light-grey"
        textColor="white"
        text="remove"
        extraCss="mx-auto"
        onClick={() => removeFavorite(props.id)}
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
};
export default RemoveableRecipe;

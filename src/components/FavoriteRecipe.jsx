import PropTypes from "prop-types";
import Button from "./primatives/Button";
function FavoriteRecipe(props) {
  return (
    <div className="flex w-[13.5rem] flex-col place-self-center justify-self-center">
      <div
        className="h-[21rem] w-full self-center bg-black bg-cover bg-center"
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
      <span className="text-xl font-extrabold uppercase">Pumpkin Pasta</span>
      <span className="text-sm font-semibold uppercase text-dark-light-grey">
        $5.00 Recipe / $0.50 Serving
      </span>
      <Button
        width="w-full"
        height="h-[50px]"
        color="orange"
        textColor="white"
        text="view recipe"
        extraCss="mx-auto mb-2"
      ></Button>
      <Button
        width="w-full"
        height="h-[50px]"
        color="light-grey"
        textColor="white"
        text="remove"
        extraCss="mx-auto"
      ></Button>
    </div>
  );
}

FavoriteRecipe.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};
export default FavoriteRecipe;

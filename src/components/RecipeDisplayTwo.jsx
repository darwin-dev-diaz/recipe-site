import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function RecipeDisplayTwo(props) {
  return (
    <div className="flex flex-col">
      <div
        className="aspect-square w-full bg-black bg-cover bg-center mb-4"
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
      <div className="flex flex-col gap-4">
        <span className="text-sm font-bold uppercase text-dark-light-grey">
          October 3, 2001
        </span>
        <span className="text-2xl font-extrabold uppercase">
          Sticky Gochujang tofu with herbs and peanuts
        </span>
        <span className="text-sm font-medium uppercase">
          Crispy golden tofu bathen in a 5-ingredient peanut gochujang sauce
          that is spic, sweet tangy and so delicious
        </span>
        <Link className="font-bold uppercase tracking-wider text-orange">
          Continue Reading
        </Link>
      </div>
    </div>
  );
}

RecipeDisplayTwo.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};
export default RecipeDisplayTwo;

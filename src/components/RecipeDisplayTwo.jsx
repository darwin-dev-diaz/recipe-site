import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function RecipeDisplayTwo(props) {
  return (
    <div className="flex flex-col">
      <div
        className="mb-4 aspect-square w-full bg-black bg-cover bg-center"
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
      <div className="flex flex-col gap-4">
        <span className="text-sm font-bold uppercase text-dark-light-grey">
          October 3, 2001
        </span>
        <span className="text-2xl font-extrabold uppercase">{props.title}</span>
        <span
          className="h-16 truncate text-wrap text-sm font-medium uppercase"
          dangerouslySetInnerHTML={{
            __html: props.text,
          }}
        ></span>
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
  text: PropTypes.string,
};
export default RecipeDisplayTwo;

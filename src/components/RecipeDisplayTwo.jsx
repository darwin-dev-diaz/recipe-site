import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function RecipeDisplayTwo(props) {
  return (
    <div className="mx-auto flex max-w-[50rem] flex-col md:flex-row md:gap-3">
      <div
        className="mb-4 aspect-square w-full bg-black bg-cover bg-center md:max-h-36 md:min-h-full md:min-w-36 md:max-w-full"
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
      <div className="flex flex-col gap-4 md:max-w-[70%]">
        <span className="text-xs font-bold uppercase text-dark-light-grey md:text-sm">
          October 3, 2001
        </span>
        <span className="text-lg font-extrabold uppercase md:text-2xl">
          {props.title}
        </span>
        <span
          className="h-12 truncate text-wrap text-xs font-medium uppercase md:h-16 md:text-sm"
          dangerouslySetInnerHTML={{
            __html: props.text,
          }}
        ></span>
        <Link
          to={`/recipe/${props.id}`}
          className="text-xs font-bold uppercase tracking-wider text-orange md:text-sm"
        >
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
  id: PropTypes.number,
};
export default RecipeDisplayTwo;

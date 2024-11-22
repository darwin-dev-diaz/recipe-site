import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function RecipeDisplayOne(props) {
  return (
    <Link
      to={`/recipe/${props.id}`}
      className={`relative h-64 w-full cursor-pointer bg-orange bg-cover bg-center md:h-80 ${props.extraCss}`}
      style={
        props.cssobj
          ? { ...props.cssobj, backgroundImage: `url(${props.image})` }
          : { backgroundImage: `url(${props.image})` }
      }
    >
      <div className="absolute bottom-6 left-6 flex flex-col gap-2 md:bottom-10 md:left-10">
        <h3 className="bg-white px-3 py-2 text-lg font-extrabold uppercase md:text-2xl">
          {props.title}
        </h3>
        <p className="md:text-l w-fit bg-white p-2 text-xs font-semibold uppercase tracking-tighter text-dark-light-grey">
          {props.subtitle}
        </p>
      </div>
    </Link>
  );
}

RecipeDisplayOne.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  id: PropTypes.number,
  extraCss: PropTypes.string,
  cssobj: PropTypes.object,
};
export default RecipeDisplayOne;

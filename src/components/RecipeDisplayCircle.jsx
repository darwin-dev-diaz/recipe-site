import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function RecipeDisplayCircle(props) {
  return (
    <Link to={props.to}>
      <div className="flex w-24 flex-col items-center gap-3 md:w-32">
        <div
          className="h-24 w-24 rounded-full bg-black bg-cover bg-center md:h-32 md:w-32"
          style={{ backgroundImage: `url(${props.image})` }}
        ></div>
        <h3 className="text-center text-sm font-bold uppercase md:text-lg">
          {props.title}
        </h3>
      </div>
    </Link>
  );
}

RecipeDisplayCircle.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  to: PropTypes.string,
};
export default RecipeDisplayCircle;

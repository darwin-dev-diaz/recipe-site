import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function RecipeDisplayCircle(props) {
  return (
    <Link to={props.to}>
      <div className="flex w-32 cursor-pointer flex-col items-center gap-3">
        <div
          className="h-32 w-32 rounded-full bg-black bg-cover bg-center"
          style={{ backgroundImage: `url(${props.image})` }}
        ></div>
        <h3 className="text-center text-lg font-bold uppercase">
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

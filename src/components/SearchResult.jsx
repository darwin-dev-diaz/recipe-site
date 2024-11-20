import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function SearchResult(props) {
  return (
    <Link to={props.to} onClick={props.onClick}>
      <div className="two flex h-fit w-full cursor-pointer gap-2">
        <div
          className="max-h-32 min-h-32 min-w-32 max-w-32 bg-black"
          style={{
            backgroundImage: `url(${props.image})`,
            backgroundSize: "cover", // Ensures the image covers the div while maintaining aspect ratio
            backgroundPosition: "center", // Centers the image
            backgroundRepeat: "no-repeat", // Prevents tiling if the image is smaller
          }}
        ></div>
        <div className="one items-left flex max-h-32 min-h-32 flex-col justify-center overflow-hidden">
          <h3 className="text-lg font-extrabold uppercase">{props.title}</h3>
          {/* <p className="line-clamp-style text-base uppercase">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
          facere rerum nesciunt doloremque quaerat eligendi, recusandae ipsa
          expedita et blanditiis quam explicabo numquam, delectus molestiae.
          Aperiam dolor cupiditate harum voluptatum!
        </p> */}
        </div>
      </div>
    </Link>
  );
}

SearchResult.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  to: PropTypes.string,
  onClick: PropTypes.func,
};

export default SearchResult;

import PropTypes from "prop-types";

function IconButton(props) {
  return (
    <button className="flex content-center bg-black p-4 text-white">
      <img src={props.svg} alt={props.alt} />
    </button>
  );
}

IconButton.propTypes = {
    svg: PropTypes.string,
    alt: PropTypes.string,
}

export default IconButton;

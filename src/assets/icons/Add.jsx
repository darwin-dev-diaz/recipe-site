import PropTypes from "prop-types";

const SvgAdd = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill={props.color}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path
      d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80z"
      fill={props.color}
      stroke={props.color}
      strokeWidth="50"
    />
  </svg>
);

SvgAdd.propTypes = {
  color: PropTypes.string.isRequired,
};
export default SvgAdd;

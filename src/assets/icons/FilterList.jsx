import PropTypes from "prop-types";
const SvgFilterList = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill={props.color}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path
      d="M400-240v-80h160v80zM240-440v-80h480v80zM120-640v-80h720v80z"
      fill={props.color}
      stroke={props.color}
      strokeWidth="50"
    />
  </svg>
);

SvgFilterList.propTypes = {
  color: PropTypes.string.isRequired,
};
export default SvgFilterList;

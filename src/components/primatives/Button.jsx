import PropTypes from "prop-types";
import React from "react";

function Button(props) {
  const svg = props.children
    ? React.cloneElement(props.children, {
        height: props.svgWidth ? props.svgWidth : "25px",
        width: props.svgWidth ? props.svgWidth : "25px",
      })
    : null;
  return (
    <button
      className={`flex items-center ${props.width ? props.width : "w-full"} ${props.height ? props.height : ""} justify-center gap-2 p-5 text-lg font-bold uppercase text-${props.textColor} ${props.extraCss}`}
      style={
        props.cssobj
          ? { ...props.cssobj, backgroundColor: `var(--${props.color}` }
          : { backgroundColor: `var(--${props.color}` }
      }
      onClick={props.onClick}
    >
      {svg}
      {props.text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.node,
  color: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  svgWidth: PropTypes.string,
  extraCss: PropTypes.string,
  cssobj: PropTypes.object,
  onClick: PropTypes.func,
};

export default Button;

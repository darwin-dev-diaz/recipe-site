import PropTypes from "prop-types";
import React from "react";

function Button(props) {
  const svg = React.cloneElement(props.children, {
    height: "auto",
    width: "25px",
    fill: "black",
  });

  return (
    <button className="bg-light-orange center-center flex w-full justify-center gap-2 p-5 text-lg font-bold uppercase">
      {svg}
      {props.text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node,
};

export default Button;

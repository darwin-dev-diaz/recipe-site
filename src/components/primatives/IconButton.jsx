import PropTypes from "prop-types";
import React from "react";

function IconButton(props) {
  const clonedElement = React.cloneElement(props.children, {
    height: "40px",
    width: "40px",
    fill: "white",
  });
  return (
    <button
      {...props}
      className="flex content-center bg-[var(--black)] p-3 text-white"
      style={props.cssobj ? props.cssobj : {}}
    >
      {clonedElement}
    </button>
  );
}

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  cssobj: PropTypes.object,
};

export default IconButton;

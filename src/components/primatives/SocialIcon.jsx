import PropTypes from "prop-types";
import React from "react";

function SocialIcon(props) {
  const clonedElement = React.cloneElement(props.children, {
    height: "100%",
    width: "30px",
    fill: "white",
  });
  return (
    <button className="h-14 w-14 flex content-center justify-center rounded-full bg-[var(--light-orange)] p-1 text-white">
      {clonedElement}
    </button>
  );
}

SocialIcon.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SocialIcon;

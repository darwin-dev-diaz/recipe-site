import PropTypes from "prop-types";
import React from "react";

function SocialIcon(props) {
  const clonedElement = React.cloneElement(props.children, {
    height: "100%",
    width: "35px",
    fill: "black",
  });
  return (
    <button
      className={`${props.extraCss ? props.extraCss : ""} flex h-14 w-14 content-center justify-center rounded-full bg-[var(--light-orange)] p-1 text-white`}
    >
      {clonedElement}
    </button>
  );
}

SocialIcon.propTypes = {
  children: PropTypes.node.isRequired,
  extraCss: PropTypes.string,
};

export default SocialIcon;

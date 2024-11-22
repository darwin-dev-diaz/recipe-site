import PropTypes from "prop-types";

function TextInputField(props) {
  return (
    <input
      className={`${props.extraCss ? props.extraCss : ""} text-m min-h-[36px] w-full rounded-[2px] bg-white px-5 py-4 align-middle text-sm font-bold uppercase leading-[18px] text-[var(--dark-grey)] [transition:all_0.2s_ease-in-out_0s]`}
      placeholder={props.text}
    ></input>
  );
}

TextInputField.propTypes = {
  text: PropTypes.string,
  backgroundColor: PropTypes.string,
  width: PropTypes.number,
  extraCss: PropTypes.string,
};

export default TextInputField;

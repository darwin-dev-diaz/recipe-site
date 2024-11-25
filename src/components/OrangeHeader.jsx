import PropTypes from "prop-types";
function OrangeHeader(props) {
  return (
    <>
      {props.float ? (
        <div className="absolute left-[50%] z-40 flex h-12 w-full max-w-96 translate-x-[-50%] translate-y-[-50%] items-center bg-orange">
          <h2 className="text-stroke-black text-stroke-2 stroke-text smooth-16 relative w-fit pl-3 text-xl font-extrabold uppercase text-white md:text-2xl lg:text-3xl">
            Latest Recipes
          </h2>
        </div>
      ) : (
        <div className="z-40 mx-auto mb-6 mt-4 flex h-12 w-full max-w-96 items-center bg-orange">
          <h2 className="text-stroke-black text-stroke-2 stroke-text smooth-16 relative w-fit pl-3 text-2xl font-extrabold uppercase text-white md:text-3xl">
            {props.text}
          </h2>
        </div>
      )}
    </>
  );
}
OrangeHeader.propTypes = {
  text: PropTypes.string,
  float: PropTypes.bool,
};
export default OrangeHeader;

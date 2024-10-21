import PropTypes from "prop-types";

function RecipeDisplayOne(props) {
  return (
    <div
      className="relative h-80 w-full cursor-pointer bg-orange bg-cover bg-center"
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <div className="absolute bottom-10 left-10 flex flex-col gap-2">
        <h3 className="w-fit bg-white px-[14px] py-[8px] text-2xl font-extrabold uppercase">
          {props.title}
        </h3>
        <p className="text-l w-fit bg-white p-[6px] font-semibold uppercase tracking-tighter text-dark-light-grey">
          {props.subtitle}
        </p>
      </div>
    </div>
  );
}

RecipeDisplayOne.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};
export default RecipeDisplayOne;
import SvgError from "../../assets/icons/ErrorSVG";

function Error() {
  return (
    <div className="flex h-[75vh] w-full flex-col items-center justify-center">
      <SvgError
        color={"orange"}
        style={{ width: "130px", height: "130px" }}
        className="shake"
      />
      <span className="text-2xl font-semibold uppercase">Oops...</span>
      <span className="text-2xl font-semibold uppercase">An Error Occurred</span>
      <span className="text-2xl font-semibold uppercase">
        Please Try again later
      </span>
    </div>
  );
}

Error.propTypes = {};

export default Error;

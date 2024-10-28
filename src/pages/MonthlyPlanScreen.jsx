import SvgArrowLeft from "../assets/icons/ArrowLeft";
import SvgArrowRight from "../assets/icons/ArrowRight";

function MonthlyPlanScreen() {
  return (
    <>
      <div className="flex items-center">
        <SvgArrowLeft className></SvgArrowLeft>
        <div className="z-40 mx-auto mb-6 mt-4 flex h-12 w-full max-w-96 items-center bg-orange">
          <h2 className="text-stroke-black text-stroke-2 stroke-text smooth-16 relative w-fit pl-3 text-3xl font-extrabold uppercase text-white">
            October's recipes
          </h2>
        </div>
        <SvgArrowRight></SvgArrowRight>
      </div>
    </>
  );
}

export default MonthlyPlanScreen;

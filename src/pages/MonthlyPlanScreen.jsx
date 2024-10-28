import SvgArrowLeft from "../assets/icons/ArrowLeft";
import SvgArrowRight from "../assets/icons/ArrowRight";
import RemoveableRecipe from "../components/RemoveableRecipe";
import image from "../assets/images/pancake.jpg";

function MonthlyPlanScreen() {
  const startDay = 7;
  const selected = 30;
  const styles = {
    selectedStylesItem: {
      borderRadius: "0.5rem",
      backgroundColor: "black",
      padding: "1.5rem",
    },
    selectedStylesText: { color: "white" },
    selectedStylesDot: { backgroundColor: "white", color: "white" },
  };

  return (
    <>
      <div className="mb-8 mt-4 flex items-center justify-center">
        <SvgArrowLeft className="h-10 w-10"></SvgArrowLeft>
        <div className="z-40 mx-auto flex h-12 w-full max-w-96 items-center bg-orange">
          <h2 className="text-stroke-black text-stroke-2 stroke-text smooth-16 relative w-fit pl-3 text-3xl font-extrabold uppercase text-white">
            October&apos;s recipes
          </h2>
        </div>
        <SvgArrowRight className="h-10 w-10"></SvgArrowRight>
      </div>
      <div className="mb-20 px-0">
        <div className="grid h-auto grid-cols-7 grid-rows-[auto] items-center justify-items-center bg-white px-7">
          <span className="row-span-1 mb-4 text-xl font-bold">S</span>
          <span className="row-span-1 mb-4 text-xl font-bold">M</span>
          <span className="row-span-1 mb-4 text-xl font-bold">T</span>
          <span className="row-span-1 mb-4 text-xl font-bold">W</span>
          <span className="row-span-1 mb-4 text-xl font-bold">T</span>
          <span className="row-span-1 mb-4 text-xl font-bold">F</span>
          <span className="row-span-1 mb-4 text-xl font-bold">S</span>
        </div>
        <div className="grid h-auto grid-cols-7 grid-rows-5 items-center justify-items-center gap-y-8 bg-very-light-grey px-7 py-4">
          {Array.from({ length: 30 }, (_, i) => i + 1).map((i) => (
            <div
              key={i}
              className="flex h-12 w-10 flex-col items-center justify-center"
              style={
                ({
                  gridColumnStart: `${i === 1 ? startDay : ""}`,
                },
                i === selected ? styles.selectedStylesItem : null)
              }
            >
              <span
                className="text-3xl font-bold"
                style={i === selected ? styles.selectedStylesText : null}
              >
                {i}
              </span>
              <div className="flex h-[10px] gap-1">
                {Array.from(Array(i % 3).keys()).map((x) => (
                  <div
                    key={x}
                    className="h-[10px] w-[10px] rounded-full bg-black"
                    style={i === selected ? styles.selectedStylesDot : null}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <h3 className="px-6 text-center text-3xl font-bold uppercase mb-8">
        Month {selected} meal plan
      </h3>

      <div className="flex w-full gap-4 overflow-x-auto px-2 mb-14">
        <div>
          <p className="mb-2 text-xl font-bold uppercase">Breakfast</p>
          <RemoveableRecipe image={image}></RemoveableRecipe>
        </div>
        <div>
          <p className="mb-2 text-xl font-bold uppercase">Lunch</p>
          <RemoveableRecipe image={image}></RemoveableRecipe>
        </div>
        <div>
          <p className="mb-2 text-xl font-bold uppercase">Dinner</p>
          <RemoveableRecipe image={image}></RemoveableRecipe>
        </div>
      </div>
    </>
  );
}

export default MonthlyPlanScreen;

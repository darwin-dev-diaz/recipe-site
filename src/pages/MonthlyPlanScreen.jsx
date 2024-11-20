/* eslint-disable no-extra-boolean-cast */
import SvgArrowLeft from "../assets/icons/ArrowLeft";
import SvgArrowRight from "../assets/icons/ArrowRight";
import RemoveableRecipe from "../components/RemoveableRecipe";
import { useState, useContext } from "react";
import { RecipeContext } from "../App";
import { idToImage } from "../util/idToImage";
import Loading from "../components/primatives/Loading";

function MonthlyPlanScreen() {
  const { planner, removeFromPlanner, expandedData, loading } =
    useContext(RecipeContext);

  console.log(planner);
  const today = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const todaysYear = today.getFullYear();
  const todaysMonth = today.getMonth() + 1;
  const todaysDay = today.getDate();
  const [selectedDate, setSelectedDate] = useState({
    month: todaysMonth,
    day: todaysDay,
    year: todaysYear,
  });
  const getMonthInfo = (y, m) => {
    const numDays = new Date(y, m, 0).getDate();
    const startDate = new Date(y, m - 1).getDay() + 1;
    return { numDays, startDate };
  };
  const getDayAsPlannerKey = (y, m, d) => `${d}${m}${y}`;
  const selectedPlanAsKey = getDayAsPlannerKey(
    selectedDate.year,
    months[selectedDate.month - 1],
    selectedDate.day,
  );
  const selectedPlan = planner[selectedPlanAsKey];
  const styles = {
    selectedStylesItem: {
      borderRadius: "0.5rem",
      backgroundColor: "black",
      padding: "1.5rem",
    },
    selectedStylesText: { color: "white" },
    selectedStylesDot: { backgroundColor: "white", color: "white" },
    startDayStyle: {
      gridColumnStart: getMonthInfo(selectedDate.year, selectedDate.month)
        .startDate,
    },
  };

  if (loading) return <Loading />;
  return (
    <>
      <div className="mb-8 mt-4 flex items-center justify-center">
        <SvgArrowLeft
          onClick={() => {
            const date = new Date(selectedDate.year, selectedDate.month - 1);
            const lastMonth = new Date(date.getFullYear(), date.getMonth() - 1);
            lastMonth.setDate(1);
            setSelectedDate({
              month: lastMonth.getMonth() + 1,
              day: 1,
              year: lastMonth.getFullYear(),
            });
          }}
          className="h-10 w-10 cursor-pointer"
        ></SvgArrowLeft>
        <div className="z-40 mx-auto flex h-12 w-full max-w-96 items-center bg-orange">
          <h2 className="text-stroke-black text-stroke-2 stroke-text smooth-16 relative w-fit pl-3 text-3xl font-extrabold uppercase text-white">
            {`${months[selectedDate.month - 1]}, ${selectedDate.year}`}
          </h2>
        </div>
        <SvgArrowRight
          onClick={() => {
            const date = new Date(selectedDate.year, selectedDate.month - 1);
            const nextMonth = new Date(date.getFullYear(), date.getMonth() + 1);
            nextMonth.setDate(1);
            setSelectedDate({
              month: nextMonth.getMonth() + 1,
              day: 1,
              year: nextMonth.getFullYear(),
            });
          }}
          className="h-10 w-10 cursor-pointer"
        ></SvgArrowRight>
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
          {Array.from(
            { length: getMonthInfo(todaysYear, todaysMonth).numDays },
            (_, i) => i + 1,
          ).map((i) => {
            const plan =
              planner[
                getDayAsPlannerKey(
                  selectedDate.year,
                  months[selectedDate.month - 1],
                  i,
                )
              ];

            let style;
            switch (true) {
              case i === 1 && selectedDate.day === 1:
                style = { ...styles.selectedStylesItem };
                return (
                  <div
                    onClick={() => {
                      setSelectedDate((prev) => ({ ...prev, day: i }));
                    }}
                    key={i}
                    className="flex h-12 w-10 cursor-pointer flex-col items-center justify-center"
                    style={{
                      ...style,
                      gridColumnStart: getMonthInfo(
                        selectedDate.year,
                        selectedDate.month,
                      ).startDate,
                    }}
                  >
                    <span
                      className="text-3xl font-bold"
                      style={styles.selectedStylesText}
                    >
                      {i}
                    </span>
                    <div className="flex h-[10px] gap-1">
                      {!!plan
                        ? Object.keys(plan).map((entry, ii) => (
                            <div
                              key={ii}
                              className="h-[10px] w-[10px] rounded-full bg-black"
                              style={
                                1 === selectedDate.day
                                  ? styles.selectedStylesDot
                                  : null
                              }
                            ></div>
                          ))
                        : null}
                    </div>
                  </div>
                );
              case i === 1:
                style = styles.startDayStyle;
                break;
              case i === selectedDate.day:
                style = styles.selectedStylesItem;
                break;
              default:
                style = {};
            }
            return (
              <div
                onClick={() => {
                  setSelectedDate((prev) => ({ ...prev, day: i }));
                }}
                key={i}
                className="flex h-12 w-10 cursor-pointer flex-col items-center justify-center"
                style={style}
              >
                <span
                  className="text-3xl font-bold"
                  style={
                    i === selectedDate.day ? styles.selectedStylesText : null
                  }
                >
                  {i}
                </span>
                <div className="flex h-[10px] gap-1">
                  {plan
                    ? Object.keys(plan).map((x) => (
                        <div
                          key={x}
                          className="h-[10px] w-[10px] rounded-full bg-black"
                          style={
                            i === selectedDate.day
                              ? styles.selectedStylesDot
                              : null
                          }
                        ></div>
                      ))
                    : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <h3 className="mb-8 px-6 text-center text-3xl font-bold uppercase">
        {`${months[selectedDate.month - 1]} ${selectedDate.day}, ${selectedDate.year}`}{" "}
        Meal Plan
      </h3>
      {selectedPlan ? (
        <div className="mb-14 flex w-full gap-4 overflow-x-auto px-2">
          {Object.entries(selectedPlan).map(([meal, recipeID], iii) => {
            const title = expandedData[recipeID].title;
            const removeFromPlannerClick = () => {
              removeFromPlanner(selectedPlanAsKey, meal);
            };
            return (
              <div key={iii}>
                <p className="mb-2 text-xl font-bold uppercase">{meal}</p>
                <RemoveableRecipe
                  title={title}
                  to={`/recipe/${recipeID}`}
                  id={recipeID}
                  image={idToImage(recipeID)}
                  onClick={removeFromPlannerClick}
                ></RemoveableRecipe>
              </div>
            );
          })}
        </div>
      ) : (
        "No plans logged"
      )}
    </>
  );
}

export default MonthlyPlanScreen;

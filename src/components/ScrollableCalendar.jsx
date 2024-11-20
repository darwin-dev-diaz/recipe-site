/* eslint-disable no-extra-boolean-cast */
import SvgArrowLeft from "../assets/icons/ArrowLeft";
import SvgArrowRight from "../assets/icons/ArrowRight";
import { useContext, useEffect } from "react";
import { RecipeContext } from "../App";
import PropTypes from "prop-types";

function ScrollableCalendar(props) {
  const { planner } = useContext(RecipeContext);

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
  useEffect(() => {
    props.setSelectedDate({
      month: todaysMonth,
      day: todaysDay,
      year: todaysYear,
    });
  }, []);
  const getMonthInfo = (y, m) => {
    const numDays = new Date(y, m, 0).getDate();
    const startDate = new Date(y, m - 1).getDay() + 1;
    return { numDays, startDate };
  };
  const getDayAsPlannerKey = (y, m, d) => `${d}${m}${y}`;
  const styles = {
    selectedStylesItem: {
      borderRadius: "0.5rem",
      backgroundColor: "black",
      padding: "1.5rem",
    },
    selectedStylesText: { color: "white" },
    selectedStylesDot: { backgroundColor: "white", color: "white" },
    startDayStyle: {
      gridColumnStart: getMonthInfo(
        props.selectedDate.year,
        props.selectedDate.month,
      ).startDate,
    },
  };

  return (
    <>
      <div className="mb-8 flex items-center justify-center pt-4">
        <SvgArrowLeft
          onClick={() => {
            const date = new Date(
              props.selectedDate.year,
              props.selectedDate.month - 1,
            );
            const lastMonth = new Date(date.getFullYear(), date.getMonth() - 1);
            lastMonth.setDate(1);
            props.setSelectedDate({
              month: lastMonth.getMonth() + 1,
              day: 1,
              year: lastMonth.getFullYear(),
            });
          }}
          className="h-10 w-10 cursor-pointer"
        ></SvgArrowLeft>
        <div className="z-40 mx-auto flex h-12 w-full max-w-96 items-center bg-orange">
          <h2 className="text-stroke-black text-stroke-2 stroke-text smooth-16 relative w-fit pl-3 text-3xl font-extrabold uppercase text-white">
            {`${months[props.selectedDate.month - 1]}, ${props.selectedDate.year}`}
          </h2>
        </div>
        <SvgArrowRight
          onClick={() => {
            const date = new Date(
              props.selectedDate.year,
              props.selectedDate.month - 1,
            );
            const nextMonth = new Date(date.getFullYear(), date.getMonth() + 1);
            nextMonth.setDate(1);
            props.setSelectedDate({
              month: nextMonth.getMonth() + 1,
              day: 1,
              year: nextMonth.getFullYear(),
            });
          }}
          className="h-10 w-10 cursor-pointer"
        ></SvgArrowRight>
      </div>
      <div className={`${props.calendarMb} px-0`}>
        <div
          className={`grid h-auto grid-cols-7 grid-rows-[auto] items-center justify-items-center ${props.weekBGColor} px-7`}
        >
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
                  props.selectedDate.year,
                  months[props.selectedDate.month - 1],
                  i,
                )
              ];

            let style;
            switch (true) {
              case i === 1 && props.selectedDate.day === 1:
                style = { ...styles.selectedStylesItem };
                return (
                  <div
                    onClick={() => {
                      props.setSelectedDate((prev) => ({ ...prev, day: i }));
                    }}
                    key={i}
                    className="flex h-12 w-10 cursor-pointer flex-col items-center justify-center"
                    style={{
                      ...style,
                      gridColumnStart: getMonthInfo(
                        props.selectedDate.year,
                        props.selectedDate.month,
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
                                1 === props.selectedDate.day
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
              case i === props.selectedDate.day:
                style = styles.selectedStylesItem;
                break;
              default:
                style = {};
            }
            return (
              <div
                onClick={() => {
                  props.setSelectedDate((prev) => ({ ...prev, day: i }));
                }}
                key={i}
                className="flex h-12 w-10 cursor-pointer flex-col items-center justify-center"
                style={style}
              >
                <span
                  className="text-3xl font-bold"
                  style={
                    i === props.selectedDate.day
                      ? styles.selectedStylesText
                      : null
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
                            i === props.selectedDate.day
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
    </>
  );
}

ScrollableCalendar.propTypes = {
  weekBGColor: PropTypes.string,
  calendarMb: PropTypes.string,
  selectedDate: PropTypes.object,
  setSelectedDate: PropTypes.func,
};
export default ScrollableCalendar;

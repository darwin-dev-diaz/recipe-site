import RemoveableRecipe from "../components/RemoveableRecipe";
import { useState, useContext } from "react";
import { RecipeContext } from "../App";
import { idToImage } from "../util/idToImage";
import Loading from "../components/primatives/Loading";
import Error from "../components/primatives/Error";
import ScrollableCalendar from "../components/ScrollableCalendar";
import Button from "../components/primatives/Button";
import { Link } from "react-router-dom";
import getDayAsPlannerKey from "../util/getDayAsPlannerKey";

function MonthlyPlanScreen() {
  const { planner, removeFromPlanner, expandedData, loading, error } =
    useContext(RecipeContext);

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

  const today = new Date();

  // when component loads, setSelectedDate to today
  const [selectedDate, setSelectedDate] = useState({
    month: today.getMonth() + 1,
    day: today.getDate(),
    year: today.getFullYear(),
  });

  // get the selectedDate as a key compatiable with the data obj
  const selectedDateAsKey = getDayAsPlannerKey(
    selectedDate.year,
    months[selectedDate.month - 1],
    selectedDate.day,
  );

  const selectedPlan = planner[selectedDateAsKey];

  if (error) return <Error />;
  if (loading) return <Loading />;
  return (
    <>
      <ScrollableCalendar
        setSelectedDate={setSelectedDate}
        selectedDate={selectedDate}
        calendarMb="mb-20"
      />

      <h3 className="mb-8 px-6 text-center text-3xl font-bold uppercase">
        {`${months[selectedDate.month - 1]} ${selectedDate.day}, ${selectedDate.year}`}{" "}
        Meal Plan
      </h3>
      {selectedPlan ? (
        <div className="mb-14 flex w-full gap-4 overflow-x-auto px-2">
          {Object.entries(selectedPlan)
            .sort((a, b) => {
              const order = ["breakfast", "lunch", "dinner"];
              const aOrder = order.indexOf(a[0]);
              const bOrder = order.indexOf(b[0]);
              return aOrder - bOrder;
            })
            .map(([meal, recipeID], iii) => {
              const title = expandedData[recipeID].title;

              return (
                <div key={iii}>
                  <p className="mb-2 text-xl font-bold uppercase">{meal}</p>
                  <RemoveableRecipe
                    title={title}
                    to={`/recipe/${recipeID}`}
                    id={recipeID}
                    image={idToImage(recipeID)}
                    onClick={() => removeFromPlanner(selectedDateAsKey, meal)}
                  ></RemoveableRecipe>
                </div>
              );
            })}
        </div>
      ) : (
        <div className="w-full">
          <p className="mx-auto mb-4 text-center text-xl font-bold uppercase text-dark-grey">
            No recipes planned
          </p>
          <Link to="/allrecipes">
            <Button
              width="w-fit"
              height="h-[50px]"
              color="orange"
              textColor="white"
              text="View All Recipes"
              extraCss="mx-auto mb-10"
            ></Button>
          </Link>
        </div>
      )}
    </>
  );
}

export default MonthlyPlanScreen;

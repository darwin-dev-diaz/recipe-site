import RemoveableRecipe from "../components/RemoveableRecipe";
import { useState, useContext } from "react";
import { RecipeContext } from "../App";
import { idToImage } from "../util/idToImage";
import Loading from "../components/primatives/Loading";
import ScrollableCalendar from "../components/ScrollableCalendar";
import Button from "../components/primatives/Button";
import { Link } from "react-router-dom";

function MonthlyPlanScreen() {
  const { planner, removeFromPlanner, expandedData, loading } =
    useContext(RecipeContext);

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
  const getDayAsPlannerKey = (y, m, d) => `${d}${m}${y}`;
  const selectedPlanAsKey = getDayAsPlannerKey(
    selectedDate.year,
    months[selectedDate.month - 1],
    selectedDate.day,
  );
  const selectedPlan = planner[selectedPlanAsKey];

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

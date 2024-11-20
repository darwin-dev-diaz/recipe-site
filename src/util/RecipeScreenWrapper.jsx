import { useParams } from "react-router-dom";
import RecipeScreen from "../pages/RecipeScreen";
// The purpose of this wrapper is to rerender RecipeScreen
// If the user were to navigate to different recipe screens back to back without this component
// (Like if they used search within a recipeScreen)
// The only thing that would update would be the useParams() but the states that are already set
// wouldn't change.

// ....
// ....
// ....
// ....

// I spent over and hour figuring that out
function RecipeScreenWrapper() {
  const { recipeID } = useParams();
  return <RecipeScreen key={recipeID} />;
}

export default RecipeScreenWrapper;

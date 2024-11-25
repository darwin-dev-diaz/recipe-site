import { useLocation } from "react-router-dom";
import Error from "../components/primatives/Error";

function ErrorScreen() {
  // this is to get custom error messages RecipeScreen or AllRecipesScreen
  const location = useLocation();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <Error cssobj={{ height: "25rem" }} />
      <div className="mt-6 w-full max-w-lg rounded-lg border border-red-400 bg-red-100 p-6 text-red-800">
        <h1 className="mb-4 text-2xl font-bold">Error</h1>
        <p className="mb-2 font-medium">
          <strong>Something went wrong:</strong>
        </p>
        <pre className="overflow-y-auto whitespace-pre-wrap break-words rounded-lg bg-gray-200 p-4 text-left text-sm">
          {`${location.state?.status}: ${location.state?.statusText}\n\n${location.state?.data}`}
        </pre>
        <p className="mt-4">Please get good.</p>
      </div>
    </div>
  );
}

export default ErrorScreen;

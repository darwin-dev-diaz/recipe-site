import { useRouteError } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Error from "./primatives/Error";

function RouteError() {
  let error = useRouteError();
  console.error(error);

  return (
    <div>
      <Header />
      <Error cssobj={{ height: "25rem" }} />
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          margin: "20px auto",
          padding: "20px",
          border: "1px solid #ff4d4d",
          borderRadius: "10px",
          backgroundColor: "#ffe6e6",
          color: "#b30000",
          maxWidth: "600px",
        }}
      >
        <h1>Error</h1>
        <p>
          <strong>Something went wrong:</strong>
        </p>
        <pre
          style={{
            textAlign: "left",
            backgroundColor: "#f9f9f9",
            padding: "10px",
            borderRadius: "5px",
            overflow: "auto",
            fontSize: "14px",
          }}
        >
          {`${error.status} ${error.statusText}\n${error.data}`}
        </pre>
        <p>Please get good.</p>
      </div>
      <Footer />
    </div>
  );
}

export default RouteError;

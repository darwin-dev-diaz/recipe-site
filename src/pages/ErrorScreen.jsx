import { useLocation } from "react-router-dom";
import Error from "../components/primatives/Error";

function ErrorScreen() {
  const location = useLocation();

  return (
    <div>
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
            overflowY: "auto", // Enable vertical scrolling
            whiteSpace: "pre-wrap", // Wrap text to avoid horizontal scrolling
            wordWrap: "break-word", // Ensure long words break correctly
            fontSize: "14px",
          }}
        >
          {`${location.state.status}: ${location.state.statusText}\n\n${location.state.data}`}
        </pre>
        <p>Please get good.</p>
      </div>
    </div>
  );
}

export default ErrorScreen;

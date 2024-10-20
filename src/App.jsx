import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header></Header>
      <body className="body w-full px-6">
        <Outlet context={[]} />
      </body>
      <Footer></Footer>
    </>
  );
}

export default App;

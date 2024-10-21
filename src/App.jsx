import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header></Header>
      <div className="body w-full px-6">
        <Outlet context={[]} />
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;

import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { useState, useContext, useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("This should only happen once");
    console.log(new Date());
  }, []);

  return (
    <>
      <Header></Header>
      <div className="body w-full">
        <Outlet context={[]} />
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;

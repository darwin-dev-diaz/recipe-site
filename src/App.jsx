import SvgInstagram from "./assets/icons/Instagram";
import Header from "./components/Header";
import SocialIcon from "./components/primatives/SocialIcon";

function App() {
  return (
    <>
      <Header></Header>
      <SocialIcon>
        <SvgInstagram></SvgInstagram>
      </SocialIcon>
    </>
  );
}

export default App;

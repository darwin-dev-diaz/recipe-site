import SvgInstagram from "./assets/icons/Instagram";
import SvgDownArrow from "./assets/icons/DownArrow";
import Header from "./components/Header";
import SocialIcon from "./components/primatives/SocialIcon";
import InputField from "./components/primatives/InputField";
import Button from "./components/primatives/Button";

function App() {
  return (
    <>
      <Header></Header>
      <SocialIcon>
        <SvgInstagram></SvgInstagram>
      </SocialIcon>
      <InputField placeholder="Enter your email"
      width={10}
      backgroundColor='light-grey'></InputField>
      <Button text="test button text">

        <SvgDownArrow></SvgDownArrow>
      </Button>
    </>
  );
}

export default App;

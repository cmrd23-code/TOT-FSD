import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import MyCounter from "./components/MyCounter";
import ImageManipulation from "./components/ImageManipulation";
import Login from "./components/Login";
//  import Gallary from "./components/Gallary";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [count, setCount] = useState(0);
  let a = 10;
  return (
    <div>
      <h2 style={{ color: "red" }}>Welcome to MERN Stack Development</h2>
      <h1
        style={{
          backgroundColor: "green",
          color: "red",
          height: "60px",
          padding: "10px",
          alignContent: "center",
        }}
      >
        value of a={a}
      </h1>
      {/* <Gallary /> */}
      {/* <MyCounter/> */}
      {/* <ImageManipulation/> */}
      <Login />
    </div>
  );
}

export default App;

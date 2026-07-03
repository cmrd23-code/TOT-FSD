import React from "react";
import cat from "../assets/cat.jpeg";
import { useState } from "react";

const ImageManipulation = () => {
  const [increaseHeight, setIncreaseHeight] = useState(200);
  const [increaseWidth, setIncreaseWidth] = useState(200);
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [rotateCat, setRotatecat] = useState(0);
  function setColor() {
    setRed(Math.random() * 255);
    setBlue(Math.random() * 255);
    setGreen(Math.random() * 255);
  }
  return (
    <div style={{ border: "2px solid black" }}>
      ImageManipulation
      <div
        style={{
          border: "1px solid red",
          background: `rgb(${red},${green},${blue})`,
        }}
      >
        <div
          style={{
            height: "fit-content",
            width: "fit-content",
            transform: `rotate(${rotateCat}deg)`,
            display:"inline-flex"
          }}
        >
          <img src={cat} height={increaseHeight} width={increaseWidth}></img>
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            setIncreaseHeight(increaseHeight + 20);
          }}
        >
          Increase Height
        </button>
        <button
          onClick={() => {
            setIncreaseHeight(increaseHeight - 20);
          }}
        >
          Decrease Height
        </button>
        <button
          onClick={() => {
            setIncreaseWidth(increaseWidth + 20);
          }}
        >
          Increase Width
        </button>
        <button
          onClick={() => {
            setIncreaseWidth(increaseWidth - 20);
          }}
        >
          Decrease Width
        </button>
        <button onClick={setColor}>ChangeBackGroundColor</button>
        <button onClick={()=>{setRotatecat(rotateCat+45)}}>Rotate Image</button>
      </div>
    </div>
  );
};

export default ImageManipulation;

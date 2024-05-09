import { useEffect, useState } from "react";
import "./Ui.css";
import {
  letteraImg,
  letterdImg,
  letterwImg,
  lettersImg,
  spacebarImg,
  glassImg,
  dirtImg,
  grassImg,
  woodImg,
  logImg,
  key0,
  key1,
  key2,
  key3,
  key4,
} from "../images/images";

const UI = () => {
  const [pressedKeys, setPressedKeys] = useState([]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!pressedKeys.includes(event.key)) {
        setPressedKeys((prevState) => [...prevState, event.key]);
      }
    };

    const handleKeyUp = (event) => {
      setPressedKeys((prevState) =>
        prevState.filter((key) => key !== event.key)
      );
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [pressedKeys]);

  return (
    <div className="ui-div">
      <div className="controls-div">
        <div className="row">
          <p className="control-heading">Movement</p>
        </div>
        <div className="row">
          <div className="image-container">
            <img
              className={
                "button-image" + (pressedKeys.includes("w") ? " pressed" : "")
              }
              src={letterwImg}
              alt="W"
            />
          </div>
        </div>
        <div className="row">
          <div className="image-container">
            <img
              className={
                "button-image" + (pressedKeys.includes("a") ? " pressed" : "")
              }
              src={letteraImg}
              alt="A"
            />
            <img
              className={
                "button-image" + (pressedKeys.includes("s") ? " pressed" : "")
              }
              src={lettersImg}
              alt="S"
            />
            <img
              className={
                "button-image" + (pressedKeys.includes("d") ? " pressed" : "")
              }
              src={letterdImg}
              alt="D"
            />
          </div>
        </div>
        <div className="row">
          <div className="image-container">
            <img
              className={
                "button-image spacebar" +
                (pressedKeys.includes(" ") ? " pressed" : "")
              }
              src={spacebarImg}
              alt="Spacebar"
            />
          </div>
        </div>
      </div>
      <div className="vertical-line"></div>
      <div className="materials-div">
        <div className="row">
          <p className="control-heading">Materials</p>
        </div>
        <div className="row">
          <div className="materials-container">
            <img
              className={
                "materials-image" +
                (pressedKeys.includes("3") ? " pressed" : "")
              }
              src={glassImg}
              alt="glassImg"
            />
            <img
              className={
                "button-image" + (pressedKeys.includes("3") ? " pressed" : "")
              }
              src={key3}
              alt="3"
            />
          </div>
          <div className="materials-container">
            <img
              className={
                "materials-image" +
                (pressedKeys.includes("2") ? " pressed" : "")
              }
              src={grassImg}
              alt="grassImg"
            />
            <img
              className={
                "button-image" + (pressedKeys.includes("2") ? " pressed" : "")
              }
              src={key2}
              alt="2"
            />
          </div>
        </div>
        <div className="row">
          <div className="materials-container">
            <img
              className={
                "materials-image" +
                (pressedKeys.includes("1") ? " pressed" : "")
              }
              src={dirtImg}
              alt="dirtImg"
            />
            <img
              className={
                "button-image" + (pressedKeys.includes("1") ? " pressed" : "")
              }
              src={key1}
              alt="1"
            />
          </div>
          <div className="materials-container">
            <img
              className={
                "materials-image" +
                (pressedKeys.includes("4") ? " pressed" : "")
              }
              src={woodImg}
              alt="woodImg"
            />
            <img
              className={
                "button-image" + (pressedKeys.includes("4") ? " pressed" : "")
              }
              src={key4}
              alt="4"
            />
          </div>
        </div>
        <div className="row">
          <div className="materials-container">
            <img
              className={
                "materials-image" +
                (pressedKeys.includes("0") ? " pressed" : "")
              }
              src={logImg}
              alt="logImg"
            />
            <img
              className={
                "button-image" + (pressedKeys.includes("0") ? " pressed" : "")
              }
              src={key0}
              alt="0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UI;

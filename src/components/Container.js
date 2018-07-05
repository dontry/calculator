import React from "react";
import Screen from "./Screen";
import Keypad from "./Keypad";
import "./style.css";

const Container = () => {
  return (
    <div className="container">
      <Screen />
      <Keypad />
    </div>
  );
};

export default Container;

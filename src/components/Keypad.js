import React from "react";
import "./style.css";
import Key from "./Key";
import {
  TYPE_OPERATOR,
  TYPE_NUMBER,
  TYPE_CHANGE_SIGN,
  TYPE_CLEAR,
  TYPE_DECIMAL,
  TYPE_EQUAL,
  TYPE_PERCENT
} from "../actions";

const Keypad = () => {
  return (
    <div className="keypad">
      <Key position="head" keyType={TYPE_CLEAR} keySymbol="C" value="clear" />
      <Key position="head" keyType={TYPE_CHANGE_SIGN} keySymbol="±" value="+/-" />
      <Key position="head" keyType={TYPE_PERCENT} keySymbol="%" value="%" />
      <Key position="aside" keyType={TYPE_OPERATOR} keySymbol="÷" value="/" />
      <Key keyType={TYPE_NUMBER} keySymbol="7" value="7" />
      <Key keyType={TYPE_NUMBER} keySymbol="8" value="8" />
      <Key keyType={TYPE_NUMBER} keySymbol="9" value="9" />
      <Key position="aside" keyTyoe={TYPE_OPERATOR} keySymbol="×" value="*" />
      <Key keyType={TYPE_NUMBER} keySymbol="4" value="4" />
      <Key keyType={TYPE_NUMBER} keySymbol="5" value="5" />
      <Key keyType={TYPE_NUMBER} keySymbol="6" value="6" />
      <Key position="aside" keyType={TYPE_NUMBER} keySymbol="-" value="-" />
      <Key keyType={TYPE_NUMBER} keySymbol="1" value="1" />
      <Key keyType={TYPE_NUMBER} keySymbol="2" value="2" />
      <Key keyType={TYPE_NUMBER} keySymbol="3" value="3" />
      <Key position="aside" keyType={TYPE_OPERATOR} keySymbol="+" value="+" />
      <Key position="bottomLeft" keyType={TYPE_NUMBER} keySymbol="0" value="0" />
      <Key keyType={TYPE_OPERATOR} keySymbol="." value="." />
      <Key position="aside" keyType={TYPE_EQUAL} keySymbol="=" value="=" />
    </div>
  );
};

export default Keypad;

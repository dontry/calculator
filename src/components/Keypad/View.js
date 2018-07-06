import React from "react";
import Key, { ClearKey } from "../Key";
import {
  TYPE_OPERATOR,
  TYPE_NUMBER,
  TYPE_CHANGE_SIGN,
  TYPE_CLEAR,
  TYPE_DECIMAL,
  TYPE_EQUAL,
  TYPE_PERCENTAGE
} from "../../actions/actionTypes";

const Keypad = () => {
  return (
    <div className="keypad">
      <ClearKey position="head" keyType={TYPE_CLEAR} keyValue="clear" />
      <Key
        position="head"
        keyType={TYPE_CHANGE_SIGN}
        keySymbol="±"
        keyValue="change_sign"
      />
      <Key
        position="head"
        keyType={TYPE_PERCENTAGE}
        keySymbol="%"
        keyValue="percentage"
      />
      <Key
        position="aside"
        keyType={TYPE_OPERATOR}
        keySymbol="÷"
        keyValue="divide"
      />
      <Key keyType={TYPE_NUMBER} keySymbol="7" keyValue="7" />
      <Key keyType={TYPE_NUMBER} keySymbol="8" keyValue="8" />
      <Key keyType={TYPE_NUMBER} keySymbol="9" keyValue="9" />
      <Key
        position="aside"
        keyType={TYPE_OPERATOR}
        keySymbol="×"
        keyValue="multiply"
      />
      <Key keyType={TYPE_NUMBER} keySymbol="4" keyValue="4" />
      <Key keyType={TYPE_NUMBER} keySymbol="5" keyValue="5" />
      <Key keyType={TYPE_NUMBER} keySymbol="6" keyValue="6" />
      <Key
        position="aside"
        keyType={TYPE_OPERATOR}
        keySymbol="-"
        keyValue="subtract"
      />
      <Key keyType={TYPE_NUMBER} keySymbol="1" keyValue="1" />
      <Key keyType={TYPE_NUMBER} keySymbol="2" keyValue="2" />
      <Key keyType={TYPE_NUMBER} keySymbol="3" keyValue="3" />
      <Key
        position="aside"
        keyType={TYPE_OPERATOR}
        keySymbol="+"
        keyValue="plus"
      />
      <Key
        position="bottomLeft"
        keyType={TYPE_NUMBER}
        keySymbol="0"
        keyValue="0"
      />
      <Key keyType={TYPE_DECIMAL} keySymbol="." keyValue="decimal" />
      <Key position="aside" keyType={TYPE_EQUAL} keySymbol="=" keyValue="equal" />
    </div>
  );
};

export default Keypad;

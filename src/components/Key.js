import React from "react";

const Key = ({ position, keySymbol, keyValue, keyType }) => {
  function handleClick() {
    console.log(keyValue);
  }
  return <div className={`key ${keyType} ${position}`} onClick={handleClick.bind(this)}>{keySymbol}</div>;
};

export default Key;

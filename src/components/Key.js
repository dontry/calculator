import React from "react";

type PropTypes = {
  position: string,
  keySymbol: string,
  keyValue: string,
  keyType: string
};

const Key = ({ position, keySymbol, keyValue, keyType }: PropTypes) => {
  function handleClick() {
    console.log(keyValue);
  }
  return (
    <div
      className={`key ${keyType} ${position}`}
      onClick={handleClick.bind(this)}
    >
      {keySymbol}
    </div>
  );
};

export default Key;

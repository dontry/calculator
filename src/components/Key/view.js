import React from "react";

type PropTypes = {
  position: string,
  keySymbol: string,
  keyType: string,
  onClick: Function
};

const Key = ({ position, keySymbol, keyType, onClick }: PropTypes) => (
  <div
    className={`key ${keyType} ${position}`}
    onClick={e => {
      e.preventDefault();
      onClick();
    }}
  >
    {keySymbol}
  </div>
);

export default Key;

import React from "react";

type PropTypes = {
  position: string,
  keySymbol: string,
  keyType: string,
  keyValue: string,
  onClick: Function
};

const BaseView = ({
  position,
  keySymbol,
  keyType,
  keyValue,
  onClick
}: PropTypes) => (
  <div
    id={`key-${keyValue}`}
    className={`key ${keyType} ${position ? position : ""}`}
    onClick={e => {
      e.preventDefault();
      onClick();
    }}
  >
    {keySymbol}
  </div>
);

export default BaseView;

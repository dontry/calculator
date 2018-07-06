import React from "react";

type PropTypes = {
  display: string
};

const Screen = ({ display }: PropTypes) => {
  return <div className="screen">{display}</div>;
};

export default Screen;

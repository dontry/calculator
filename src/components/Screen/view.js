import React from "react";

type PropTypes = {
  data: string
};

const Screen = ({ data }: PropTypes) => {
  return <div className="screen">{data}</div>;
};

export default Screen;

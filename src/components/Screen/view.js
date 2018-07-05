import React from "react";

type Props = {
  data: string
};

const Screen = ({ data }: Props) => {
  return <div className="screen">{data}</div>;
};

export default Screen;

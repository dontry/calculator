import React from "react";
import BaseView from "./BaseView";
import { TYPE_CLEAR } from "../../actions/index";

type PropTypes = {
  lastActionType: string
};

const ClearView = ({ lastActionType, ...rest }: PropTypes) =>
  lastActionType === TYPE_CLEAR ? (
    <BaseView {...rest} keySymbol="AC" />
  ) : (
    <BaseView {...rest} />
  );

export default ClearView;

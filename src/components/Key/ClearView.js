import React from "react";
import BaseView from "./BaseView";
import { TYPE_CLEAR } from "../../actions/actionTypes";

type PropTypes = {
  lastActionType: string
};

const ClearView = ({ lastActionType, ...rest }: PropTypes) =>
  lastActionType === TYPE_CLEAR || lastActionType === null ? (
    <BaseView {...rest} keySymbol="AC" />
  ) : (
    <BaseView {...rest} keySymbol="C" />
  );

export default ClearView;

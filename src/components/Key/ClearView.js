import React from "react";
import BaseView from "./BaseView";
import { TYPE_CLEAR } from "../../actions/index";

const ClearView = props =>
  props.lastActionType === TYPE_CLEAR ? (
    <BaseView {...props} keySymbol="AC" />
  ) : (
    <BaseView {...props} />
  );

export default ClearView;

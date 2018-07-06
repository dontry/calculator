import React from "react";
import View from "./View";
import { connect } from "react-redux";
import { pressKey } from "../../actions";
import keyMap from "../../utils/keyMap";

type PropTypes = {
  onKeyDown: Function
};

const EnhancedView = () => {
  function onKeyDown(e) {
    e.preventDefault();
    const key = document.querySelector(`#key-${keyMap(e.key)}`);
    key && key.click();
  }

  window.addEventListener("keydown", onKeyDown);
  return <View />;
};

const mapDispatchToProps = dispatch => {
  return {
    onKeyDown: e => {}
  };
};

export { View };
export default EnhancedView;

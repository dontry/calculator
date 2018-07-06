import React from "react";
import View from "./View";
import keyMap from "../../utils/keyMap";

const EnhancedView = () => {
  function onKeyDown(e) {
    e.preventDefault();
    const key = document.querySelector(`#key-${keyMap(e.key)}`);
    key && key.click();
  }

  window.addEventListener("keydown", onKeyDown);
  return <View />;
};


export { View };
export default EnhancedView;

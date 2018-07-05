import {
  TYPE_NUMBER,
  TYPE_CLEAR,
} from "../actions/actionTypes";
import reducer, { INITIAL_STATE } from "./index";
import { pressKey } from "../actions";


describe("TYPE CLEAR", () => {
  it("should reset number to 0 with one click, lastOperation remain the same", () => {
    const prevState = {
      displayResult: "22",
      actualResult: 22,
      lastOperation: x => 2 * x,
      lastActionType: TYPE_NUMBER
    };

    const action = pressKey(TYPE_CLEAR);
    const curState = reducer(prevState, action);
    expect({
      ...curState,
      lastOperation: curState.lastOperation.toString()
    }).toEqual({
      ...prevState,
      displayResult: "0",
      actualResult: 0,
      lastOperation: prevState.lastOperation.toString(),
      lastActionType: TYPE_CLEAR
    });
  });

  it("should reset to INITIAL_STATE with double click", () => {
    const prevState = {
      displayResult: "22",
      actualResult: 22,
      lastOperation: x => x,
      lastActionType: TYPE_NUMBER
    };

    const action = pressKey(TYPE_CLEAR);
    const curState = reducer(prevState, action);
    expect({
      ...curState,
      lastOperation: INITIAL_STATE.lastOperation.toString()
    }).toEqual({
      ...INITIAL_STATE,
      lastActionType: TYPE_CLEAR,
      lastOperation: INITIAL_STATE.lastOperation.toString()
    });
  });
});

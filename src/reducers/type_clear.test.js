import {
  TYPE_NUMBER,
  TYPE_CLEAR,
} from "../actions/actionTypes";
import reducer, { INITIAL_STATE } from "./index";
import { pressKey, multiply, assign } from "../actions";


describe("TYPE CLEAR", () => {
  it("should reset number to 0 with one click, lastOperation remain the same", () => {
    const prevState = {
      displayResult: "22",
      actualResult: 22,
      lastOperation: multiply(2),
      lastOperator: multiply,
      lastActionType: TYPE_NUMBER
    };

    const action = pressKey(TYPE_CLEAR);
    const curState = reducer(prevState, action);
    expect({
      ...curState,
    }).toEqual({
      ...prevState,
      displayResult: "0",
      actualResult: 0,
      lastActionType: TYPE_CLEAR
    });
  });

  it("should reset to INITIAL_STATE with double click", () => {
    const prevState = {
      displayResult: "22",
      actualResult: 22,
      lastOperation: assign,
      lastOperator: null,
      lastActionType: TYPE_NUMBER
    };

    const action = pressKey(TYPE_CLEAR);
    const curState = reducer(prevState, action);
    expect({
      ...curState,
    }).toEqual({
      ...INITIAL_STATE,
      lastActionType: TYPE_CLEAR,
    });
  });
});

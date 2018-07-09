import { TYPE_NUMBER, TYPE_CHANGE_SIGN } from "../actions/actionTypes";
import reducer from "./index";
import { pressKey, assign } from "../actions";

describe("TYPE CHANGE SIGN", () => {
  it("should change sign from 2 to -2", () => {
    const prevState = {
      displayResult: "2",
      actualResult: 2,
      lastOperation: assign,
      lastOperator: null,
      lastActionType: TYPE_NUMBER
    };
    const action = pressKey(TYPE_CHANGE_SIGN, "+/-");
    const curState = reducer(prevState, action);
    expect(curState).toEqual({
      ...prevState,
      displayResult: "-2",
      actualResult: -2,
      lastActionType: TYPE_CHANGE_SIGN
    });
  });

  it("should change sign from -2 to 2", () => {
    const prevState = {
      displayResult: "-2",
      actualResult: -2,
      lastOperation: assign,
      lastOperator: null,
      lastActionType: TYPE_NUMBER
    };
    const action = pressKey(TYPE_CHANGE_SIGN, "+/-");
    const curState = reducer(prevState, action);
    expect(curState).toEqual({
      ...prevState,
      displayResult: "2",
      actualResult: 2,
      lastActionType: TYPE_CHANGE_SIGN
    });
  });

  it("should change sign from 0 to -0", () => {
    const prevState = {
      displayResult: "0",
      actualResult: 0,
      lastOperation: assign,
      lastOperator: null,
      lastActionType: TYPE_NUMBER
    };
    const action = pressKey(TYPE_CHANGE_SIGN, "+/-");
    const curState = reducer(prevState, action);
    expect(curState).toEqual({
      ...prevState,
      displayResult: "-0",
      actualResult: -0,
      lastActionType: TYPE_CHANGE_SIGN
    });
  });

  it("should change sign from -2. to 2.", () => {
    const prevState = {
      displayResult: "-2.",
      actualResult: -2,
      lastOperation: assign,
      lastActionType: TYPE_NUMBER
    };
    const action = pressKey(TYPE_CHANGE_SIGN, "+/-");
    const curState = reducer(prevState, action);
    expect(curState).toEqual({
      ...prevState,
      displayResult: "2.",
      actualResult: 2,
      lastActionType: TYPE_CHANGE_SIGN
    });
  });
});

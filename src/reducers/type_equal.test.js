import { TYPE_NUMBER,  TYPE_EQUAL } from "../actions/actionTypes";
import reducer from "./index";
import { pressKey, multiply, subtract, divide, assign } from "../actions";

describe("TYPE EQUAL", () => {
  it("should return 2., whne previous number is 2., last operation is 'x => x', last action type is TYPE_NUMBER", () => {
    const prevState = {
      displayResult: "2.",
      actualResult: 2,
      lastOperation: assign,
      lastOperator: null,
      lastActionType: TYPE_NUMBER
    };

    const action = pressKey(TYPE_EQUAL);
    const curState = reducer(prevState, action);
    expect(curState).toEqual({
      ...prevState,
      lastActionType: TYPE_EQUAL
    });
  });
  it("should return 4, when previous number is 2, last operation is 'x => 2 * x', last action type is TYPE_NUMBER ", () => {
    const prevState = {
      displayResult: "2",
      actualResult: 2,
      lastOperation: multiply(2),
      lastOperator: multiply,
      lastActionType: TYPE_NUMBER
    };

    const action = pressKey(TYPE_EQUAL);
    const curState = reducer(prevState, action);
    expect(curState).toEqual({
      ...prevState,
      displayResult: "4",
      actualResult: 4,
      lastActionType: TYPE_EQUAL
    });
  });

  it("should be '2 * 2 = 4', last action type is TYPE_NUMBER", () => {
    const prevState = {
      displayResult: "2",
      actualResult: 2,
      lastOperation: multiply(2),
      lastOperator: multiply,
      lastActionType: TYPE_NUMBER
    };

    const action = pressKey(TYPE_EQUAL);
    const curState = reducer(prevState, action);
    expect(curState).toEqual({
      ...prevState,
      displayResult: "4",
      actualResult: 4,
      lastActionType: TYPE_EQUAL
    });
  });

  it("should be '2 - 4 = -2', last action type is TYPE_NUMBER", () => {
    const prevState = {
      displayResult: "4",
      actualResult: 4,
      lastOperation: subtract(2),
      lastOperator: subtract,
      lastActionType: TYPE_NUMBER
    };

    const action = pressKey(TYPE_EQUAL);
    const curState = reducer(prevState, action);
    expect(curState).toEqual({
      ...prevState,
      displayResult: "-2",
      actualResult: -2,
      lastActionType: TYPE_EQUAL
    });
  });
  it("should be ' 2 / 0 = NaN',last action type is TYPE_NUMBER", () => {
    const prevState = {
      displayResult: "0",
      actualResult: 0,
      lastOperation: divide(2),
      lastOperator: divide,
      lastActionType: TYPE_NUMBER
    };

    const action = pressKey(TYPE_EQUAL);
    const curState = reducer(prevState, action);
    expect(curState).toEqual({
      ...prevState,
      displayResult: "NaN",
      actualResult: NaN,
      lastActionType: TYPE_EQUAL
    });
  });

  it("should be ' 0 / 0 = NaN',last action type is TYPE_OPERATOR", () => {
    const prevState = {
      displayResult: "0",
      actualResult: 0,
      lastOperation: divide(0),
      lastOperator: divide,
      lastActionType: TYPE_NUMBER
    };

    const action = pressKey(TYPE_EQUAL);
    const curState = reducer(prevState, action);
    expect(curState).toEqual({
      ...prevState,
      displayResult: "NaN",
      actualResult: NaN,
      lastActionType: TYPE_EQUAL
    });
  });
});

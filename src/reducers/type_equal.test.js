
import {
  TYPE_NUMBER,
  TYPE_OPERATOR,
  TYPE_EQUAL,
} from "../actions/actionTypes";
import reducer from "./index";
import { pressKey } from "../actions";

describe("TYPE EQUAL", () => {
  it("should return 2., whne previous number is 2., last operation is 'x => x', last action type is TYPE_NUMBER", () => {
    const prevState = {
      displayResult: "2.",
      actualResult: 2,
      lastOperation: x => x,
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
      lastOperation: x => 2 * x,
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

  it("should be '2 * 2 = 4', last action type is TYPE_OPERATOR", () => {
    const prevState = {
      displayResult: "2",
      actualResult: 2,
      lastOperation: x => 2 * x,
      lastActionType: TYPE_OPERATOR
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
      lastOperation: x => 2 - x,
      lastActionType: TYPE_OPERATOR
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

  it("should be '2 * 2 = 4', last action type is TYPE_EQUAL", () => {
    const prevState = {
      displayResult: "2",
      actualResult: 2,
      lastOperation: x => 2 * x,
      lastActionType: TYPE_EQUAL
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

  it("should be ' 2 / 0 = ERROR',last action type is TYPE_NUMBER", () => {
    const prevState = {
      displayResult: "0",
      actualResult: 0,
      lastOperation: x => 2 / x,
      lastActionType: TYPE_NUMBER
    };

    const action = pressKey(TYPE_EQUAL);
    const curState = reducer(prevState, action);
    expect(curState).toEqual({
      ...prevState,
      displayResult: "Error",
      actualResult: NaN,
      lastActionType: TYPE_EQUAL
    });
  });
  it("should be ' 0 / 0 = ERROR',last action type is TYPE_OPERATOR", () => {
    const prevState = {
      displayResult: "0",
      actualResult: 0,
      lastOperation: x => 0 / x,
      lastActionType: TYPE_NUMBER
    };

    const action = pressKey(TYPE_EQUAL);
    const curState = reducer(prevState, action);
    expect(curState).toEqual({
      ...prevState,
      displayResult: "Error",
      actualResult: NaN,
      lastActionType: TYPE_EQUAL
    });
  });
});
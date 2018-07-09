import {
  TYPE_NUMBER,
  TYPE_DECIMAL
} from "../actions/actionTypes";
import reducer from "./index";
import { pressKey, multiply } from "../actions";

describe("TYPE DECIMAL", () => {
  it("should display 10., when previous number is 10, last action type is TYPE_NUMBER", () => {
    const prevState = {
      displayResult: "10",
      actualResult: 10,
      lastOperation: multiply(2),
      lastOperator: multiply,
      lastActionType: TYPE_NUMBER
    };

    const action = pressKey(TYPE_DECIMAL);
    const curState = reducer(prevState, action);
    expect(curState).toEqual({
      ...prevState,
      displayResult: "10.",
      actualResult: 10,
      lastActionType: TYPE_DECIMAL
    });
  });

  it("should display 2.01, when previous number is 2.01, last action type is TYPE_DECIMAL", () => {
    const prevState = {
      displayResult: "2.01",
      actualResult: 2.01,
      lastOperation: multiply(2),
      lastOperator: multiply,
      lastActionType: TYPE_DECIMAL
    };

    const action = pressKey(TYPE_DECIMAL);
    const curState = reducer(prevState, action);
    expect(curState).toEqual({
      ...prevState,
      displayResult: "2.01",
      actualResult: 2.01,
      lastActionType: TYPE_DECIMAL
    });
  });
});

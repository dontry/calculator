import { TYPE_NUMBER, TYPE_CHANGE_SIGN } from "../actions/actionTypes";
import reducer  from "./index";
import { pressKey } from "../actions";

describe("TYPE CHANGE SIGN", () => {
  it("should change sign from 2 to -2", () => {
    const prevState = {
      displayResult: "2",
      actualResult: 2,
      lastOperation: x => x,
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
      lastOperation: x => x,
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

  it("should change sign from -2. to 2.", () => {
    const prevState = {
      displayResult: "-2.",
      actualResult: -2,
      lastOperation: x => x,
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

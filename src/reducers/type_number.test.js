import { TYPE_NUMBER, TYPE_EQUAL, TYPE_OPERATOR } from "../actions/actionTypes";
import reducer, { INITIAL_STATE } from "./index";
import { pressKey, assign } from "../actions";

describe("TYPE NUMBER", () => {
  it("should display 2 when previous state is INITIAL_STATE and pressed number is 2", () => {
    const prevState = INITIAL_STATE;
    const action = pressKey(TYPE_NUMBER, 2);
    const curState = reducer(prevState, action);
    expect(curState).toEqual({
      ...prevState,
      displayResult: "2",
      actualResult: 2,
      lastActionType: TYPE_NUMBER
    });
  });

  it(`should display 22 when previous number is 2, lastActionType is TYPE_NUMBER and pressed number is 2`, () => {
    const prevState = {
      displayResult: "2",
      actualResult: 2,
      lastOperation: assign,
      lastActionType: TYPE_NUMBER
    };

    const action = pressKey(TYPE_NUMBER, 2);
    const curState = reducer(prevState, action);
    expect(curState).toEqual({
      ...prevState,
      displayResult: "22",
      actualResult: 22,
      lastActionType: TYPE_NUMBER
    });
  });

  it(`should display 2 when previous number is 22, lastActionType is TYPE_OPERATOR and pressed number is 2`, () => {
    const prevState = {
      displayResult: "22",
      actualResult: 22,
      lastOperation: assign,
      lastActionType: TYPE_OPERATOR
    };

    const action = pressKey(TYPE_NUMBER, 2);
    const curState = reducer(prevState, action);
    expect(curState).toEqual({
      ...prevState,
      displayResult: "2",
      actualResult: 2,
      lastActionType: TYPE_NUMBER
    });
  });

  it(`should display 2 when preious number is 22, lastActionType is TYPE_EQUAL and pressed number is 2`, () => {
    const prevState = {
      displayResult: "22",
      actualResult: 22,
      lastOperation: assign,
      lastActionType: TYPE_EQUAL
    };

    const action = pressKey(TYPE_NUMBER, 2);
    const curState = reducer(prevState, action);
    expect(curState).toEqual({
      ...prevState,
      displayResult: "2",
      actualResult: 2,
      lastActionType: TYPE_NUMBER
    });
  });
});

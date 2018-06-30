import {
  TYPE_NUMBER,
  TYPE_OPERATOR,
  TYPE_EQUAL,
  TYPE_CLEAR,
  multiply,
  TYPE_CHANGE_SIGN
} from "../actions";
import reducer, { INITIAL_STATE } from "./index";
import { pressKey } from "../actions";
import { equal } from "assert";

describe("TYPE NUMBER", () => {
  it(`should display 2 when previous number is 0, lastActionType is NULL and pressed number is 2`, () => {
    const xxx = INITIAL_STATE;
    const action = pressKey(TYPE_NUMBER, 2);
    const curState = reducer(xxx, action);
    expect(curState.displayResult).toEqual("2");
    expect(curState.actualResult).toEqual(2);
    expect(curState.lastActionType).toEqual(TYPE_NUMBER);
  });

  it(`should display 22 when previous number is 2, lastActionType is TYPE_NUMBER and pressed number is 2`, () => {
    const prevState = {
      displayResult: "2",
      actualResult: 2,
      lastOperation: x => x,
      lastActionType: TYPE_NUMBER
    };

    const action = pressKey(TYPE_NUMBER, 2);
    const curState = reducer(prevState, action);
    expect(curState.displayResult).toEqual("22");
    expect(curState.actualResult).toEqual(22);
    expect(curState.lastActionType).toEqual(TYPE_NUMBER);
  });

  it(`should display 2 when previous number is 22, lastActionType is TYPE_OPERATOR and pressed number is 2`, () => {
    const prevState = {
      displayResult: "22",
      actualResult: 22,
      lastOperation: x => x,
      lastActionType: TYPE_OPERATOR
    };

    const action = pressKey(TYPE_NUMBER, 2);
    const curState = reducer(prevState, action);
    expect(curState.displayResult).toEqual("2");
    expect(curState.actualResult).toEqual(2);
    expect(curState.lastActionType).toEqual(TYPE_NUMBER);
  });

  it(`should display 2 when preious number is 22, lastActionType is TYPE_EQUAL and pressed number is 2`, () => {
    const prevState = {
      displayResult: "22",
      actualResult: 22,
      lastOperation: x => x,
      lastActionType: TYPE_EQUAL
    };

    const action = pressKey(TYPE_NUMBER, 2);
    const curState = reducer(prevState, action);
    expect(curState.displayResult).toEqual("2");
    expect(curState.actualResult).toEqual(2);
    expect(curState.lastActionType).toEqual(TYPE_NUMBER);
  });
});

describe("TYPE OPERATOR", () => {
  it("should display 2, when previous number is 2, lastActionType is TYPE_NUMBER, last operation is (x) => x, and pressed key is multiply", () => {
    const prevState = {
      displayResult: "2",
      actualResult: 2,
      lastOperation: x => x,
      lastActionType: TYPE_NUMBER
    };
    const action = pressKey(TYPE_OPERATOR, "*");
    const curState = reducer(prevState, action);
    const {
      lastOperation,
      displayResult,
      actualResult,
      lastActionType
    } = curState;

    expect(displayResult).toEqual("2");
    expect(actualResult).toEqual(2);
    expect(lastOperation.toString()).toEqual(multiply(2).toString());
    expect(lastOperation(2)).toEqual(multiply(2)(2));
    expect(lastActionType).toEqual(TYPE_OPERATOR);
  });

  it("should display 4, when previous number is 2, lastActionType is TYPE_NUMBER, last operation is (x) => 2 * x, and pressed key is multiply", () => {
    const prevState = {
      displayResult: "2",
      actualResult: 2,
      lastOperation: x => 2 * x,
      lastActionType: TYPE_NUMBER
    };
    const action = pressKey(TYPE_OPERATOR, "*");
    const curState = reducer(prevState, action);
    const {
      lastOperation,
      displayResult,
      actualResult,
      lastActionType
    } = curState;

    expect(displayResult).toEqual("4");
    expect(actualResult).toEqual(4);
    expect(lastOperation.toString()).toEqual(multiply(4).toString());
    expect(lastOperation(2)).toEqual(multiply(4)(2));
    expect(lastActionType).toEqual(TYPE_OPERATOR);
  });

  it("should display 'ERROR' and reset state, when previous number is 9, lastActionType is TYPE_NUMBER, last operation is (x) => 2 / x, and pressed key is multiply", () => {
    const prevState = {
      displayResult: "0",
      actualResult: 0,
      lastOperation: x => 2 / 0,
      lastActionType: TYPE_NUMBER
    };
    const action = pressKey(TYPE_OPERATOR, "/");
    const curState = reducer(prevState, action);
    expect({ ...INITIAL_STATE, displayResult: "ERROR" }).toEqual(curState);
  });
});

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

describe("TYPE CLEAR", () => {
  it("should reset number to 0 with one click", () => {
    const prevState = {
      displayResult: "22",
      actualResult: 22,
      lastOperation: x => x,
      lastActionType: TYPE_NUMBER
    };

    const action = pressKey(TYPE_CLEAR);
    const curState = reducer(prevState, action);
    expect(curState).toEqual({
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
      lastOperation: x => x,
      lastActionType: TYPE_NUMBER
    };

    const action = pressKey(TYPE_CLEAR);
    const curState = reducer(prevState, action);
    expect(curState).toEqual(INITIAL_STATE);
  });
});

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

  it("should return 4, when previous number is 2, last operation is multiply, last action type is TYPE_OPERATOR", () => {
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

  it("should return 4, when previous number is 2, last operation is multiply, last action type is TYPE_EQUAL", () => {
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
});

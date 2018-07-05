import {
  TYPE_NUMBER,
  TYPE_OPERATOR,
  multiply,
  plus,
  divide
} from "../actions/index";
import reducer, { INITIAL_STATE } from "./index";
import { pressKey } from "../actions";

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

  // (2 * 3) * 2
  it("should display 4, when previous number is 3, lastActionType is TYPE_NUMBER, last operation is (x) => 2 * x, and pressed key is 2", () => {
    const prevState = {
      displayResult: "3",
      actualResult: 3,
      lastOperation: multiply(2),
      lastActionType: TYPE_NUMBER
    };
    const action = pressKey(TYPE_OPERATOR, "*");
    const curState = reducer(prevState, action);

    expect({
      ...curState,
      lastOperation: curState.lastOperation.toString()
    }).toEqual({
      ...prevState,
      displayResult: "6",
      actualResult: 6,
      lastOperation: multiply(6).toString(),
      lastActionType: TYPE_OPERATOR
    });
    expect(curState.lastOperation(2)).toEqual(multiply(6)(2));
  });
  // (2 + 2) + 2
  it("should display 4, when previous number is 2, lastActionType is TYPE_NUMBER, last operation is (x) => 2 + x, and pressed key ", () => {
    const prevState = {
      displayResult: "2",
      actualResult: 2,
      lastOperation: plus(2),
      lastActionType: TYPE_NUMBER
    };
    const action = pressKey(TYPE_OPERATOR, "+");
    const curState = reducer(prevState, action);

    expect({
      ...curState,
      lastOperation: curState.lastOperation.toString()
    }).toEqual({
      displayResult: "4",
      actualResult: 4,
      lastOperation: plus(4).toString(),
      lastActionType: TYPE_OPERATOR
    });
    expect(curState.lastOperation(2)).toEqual(plus(4)(2));
  });
  //(2+2) * 3
  it("should display 5, when previous number is 2, lastActionType is TYPE_NUMBER, last operation is (x) => 2 + x, and pressed key *", () => {
    const prevState = {
      displayResult: "3",
      actualResult: 3,
      lastOperation: plus(2),
      lastActionType: TYPE_NUMBER
    };
    const action = pressKey(TYPE_OPERATOR, "*");
    const curState = reducer(prevState, action);

    expect({
      ...curState,
      lastOperation: curState.lastOperation.toString()
    }).toEqual({
      displayResult: "5",
      actualResult: 5,
      lastOperation: multiply(5).toString(),
      lastActionType: TYPE_OPERATOR
    });
    expect(curState.lastOperation(2)).toEqual(multiply(5)(2));
  });
  it("should display 'ERROR' and reset state, when previous number is 0, lastActionType is TYPE_NUMBER, last operation is (x) => 2 / x, and pressed key is '+'", () => {
    const prevState = {
      displayResult: "0",
      actualResult: 0,
      lastOperation: divide(2),
      lastActionType: TYPE_NUMBER
    };
    const action = pressKey(TYPE_OPERATOR, "+");
    const curState = reducer(prevState, action);
    expect({
      ...curState,
    }).toEqual({
      ...INITIAL_STATE,
      displayResult: "ERROR",
      lastActionType: TYPE_OPERATOR
    });
  });
});

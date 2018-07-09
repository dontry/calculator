import { TYPE_NUMBER, TYPE_OPERATOR } from "../actions/actionTypes";
import { plus, divide, multiply } from "../actions";
import reducer from "./index";
import { pressKey } from "../actions";

describe("TYPE OPERATOR", () => {
  it("should display 2, when previous number is 2, lastActionType is TYPE_NUMBER, last operation is (x) => x, and pressed key is multiply", () => {
    const prevState = {
      displayResult: "2",
      actualResult: 2,
      lastOperation: x => x,
      lastOperator: null,
      lastActionType: TYPE_NUMBER
    };
    const action = pressKey(TYPE_OPERATOR, "multiply");
    const curState = reducer(prevState, action);

    expect({
      ...curState,
      lastOperation: curState.lastOperation.toString(),
      lastOperator: multiply.toString()
    }).toEqual({
      ...prevState,
      displayResult: "2",
      actualResult: 2,
      lastOperation: multiply(2).toString(),
      lastOperator: multiply.toString(),
      lastActionType: TYPE_OPERATOR
    });

    expect(curState.lastOperation(2)).toEqual(multiply(2)(2));
  });

  // (2 * 3) * 2
  it("should display 6, when previous number is 3, lastActionType is TYPE_NUMBER, last operation is (x) => 2 * x, and pressed key is *", () => {
    const prevState = {
      displayResult: "3",
      actualResult: 3,
      lastOperation: multiply(2),
      lastOperator: multiply,
      lastActionType: TYPE_NUMBER
    };
    const action = pressKey(TYPE_OPERATOR, "multiply");
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
  it("should display 4, when previous number is 2, lastActionType is TYPE_NUMBER, last operation is (x) => 2 + x, and pressed key is +", () => {
    const prevState = {
      displayResult: "2",
      actualResult: 2,
      lastOperation: plus(2),
      lastOperator: plus,
      lastActionType: TYPE_NUMBER
    };
    const action = pressKey(TYPE_OPERATOR, "plus");
    const curState = reducer(prevState, action);

    expect({
      ...curState,
      lastOperation: curState.lastOperation.toString()
    }).toEqual({
      displayResult: "4",
      actualResult: 4,
      lastOperation: plus(4).toString(),
      lastOperator: plus,
      lastActionType: TYPE_OPERATOR
    });
    expect(curState.lastOperation(2)).toEqual(plus(4)(2));
  });
  //(2 + 2) * 3
  it("should display 4, when previous number is 2, lastActionType is TYPE_NUMBER, last operation is (x) => 2 + x, and pressed key *", () => {
    const prevState = {
      displayResult: "2",
      actualResult: 2,
      lastOperation: plus(2),
      lastOperator: plus,
      lastActionType: TYPE_NUMBER
    };
    const action = pressKey(TYPE_OPERATOR, "multiply");
    const curState = reducer(prevState, action);

    expect({
      ...curState,
      lastOperation: curState.lastOperation.toString()
    }).toEqual({
      displayResult: "4",
      actualResult: 4,
      lastOperation: multiply(3).toString(),
      lastOperator: multiply,
      lastActionType: TYPE_OPERATOR
    });
    expect(curState.lastOperation(3)).toEqual(multiply(4)(3));
  });
  it("should display 'NaN' and reset state, when previous number is 0, lastActionType is TYPE_NUMBER, last operation is (x) => 2 / x, and pressed key is '+'", () => {
    const prevState = {
      displayResult: "0",
      actualResult: 0,
      lastOperation: divide(2),
      lastActionType: TYPE_NUMBER
    };
    const action = pressKey(TYPE_OPERATOR, "plus");
    const curState = reducer(prevState, action);
    expect({
      ...curState,
      lastOperation: curState.toString()
    }).toEqual({
      actualResult: NaN,
      displayResult: "NaN",
      lastOperation: prevState.toString(),
      lastOperator: plus,
      lastActionType: TYPE_OPERATOR
    });
  });
  it("should display 'NaN' and reset state, when previous number is NaN, lastActionType is TYPE_NUMBER", () => {
    const prevState = {
      displayResult: "NaN",
      actualResult: NaN,
      lastOperation: divide(2),
      lastOperator: divide,
      lastActionType: TYPE_NUMBER
    };
    const action = pressKey(TYPE_OPERATOR, "plus");
    const curState = reducer(prevState, action);
    expect({
      ...curState,
      lastOperation: curState.toString()
    }).toEqual({
      actualResult: NaN,
      displayResult: "NaN",
      lastOperation: prevState.toString(),
      lastOperator: plus,
      lastActionType: TYPE_OPERATOR
    });
  });
});

import {
    TYPE_NUMBER,
    TYPE_EQUAL,
    TYPE_PERCENTAGE,
    TYPE_DECIMAL,
    TYPE_OPERATOR
  } from "../actions";
  import reducer from "./index";
  import { pressKey } from "../actions";
  
  describe("TYPE PERCENT", () => {
    it("should be 0.02, when previous number is 2, last action type is TYPE_NUMBER", () => {
      const prevState = {
        displayResult: "2",
        actualResult: 2,
        lastOperation: x => 2 * x,
        lastActionType: TYPE_NUMBER
      };
  
      const action = pressKey(TYPE_PERCENTAGE);
      const curState = reducer(prevState, action);
      expect(curState).toEqual({
        ...prevState,
        displayResult: "0.02",
        actualResult: 0.02,
        lastActionType: TYPE_PERCENTAGE
      });
    })
   
    it("should be 0.02, when previous number is 2, last action type is TYPE_EQUAL", () => {
      const prevState = {
        displayResult: "2",
        actualResult: 2,
        lastOperation: x => 2 * x,
        lastActionType: TYPE_EQUAL
      };
  
      const action = pressKey(TYPE_PERCENTAGE);
      const curState = reducer(prevState, action);
      expect(curState).toEqual({
        ...prevState,
        displayResult: "0.02",
        actualResult: 0.02,
        lastActionType: TYPE_PERCENTAGE
      });
    });
  
    it("should be 0, when previous number is 0, last action type is TYPE_OPERATOR", () => {
      const prevState = {
        displayResult: "0.",
        actualResult: 0,
        lastOperation: x => x,
        lastActionType: TYPE_DECIMAL
      };
  
      const action = pressKey(TYPE_PERCENTAGE);
      const curState = reducer(prevState, action);
      expect(curState).toEqual({
        ...prevState,
        displayResult: "0",
        actualResult: 0,
        lastActionType: TYPE_PERCENTAGE
      });
    });
  
    it("should be 0.02, when previous number is 2, last operation is x => 2 * x, last action type is TYPE_OPERATOR", () => {
      const prevState = {
        displayResult: "2",
        actualResult: 2,
        lastOperation: x => 2 * x,
        lastActionType: TYPE_OPERATOR
      };
  
      const action = pressKey(TYPE_PERCENTAGE);
      const curState = reducer(prevState, action);
      expect(curState).toEqual({
        ...prevState,
        displayResult: "0.02",
        actualResult: 0.02,
        lastActionType: TYPE_PERCENTAGE
      });
    });
  });
  
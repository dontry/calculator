import {
  TYPE_OPERATOR,
  TYPE_NUMBER,
  TYPE_CHANGE_SIGN,
  TYPE_EQUAL,
  TYPE_DECIMAL,
  TYPE_CLEAR,
  TYPE_PERCENTAGE
} from "../actions/actionTypes";

import { assign } from "../actions";

export const INITIAL_STATE = {
  displayResult: "0",
  actualResult: 0,
  lastOperation: assign,
  lastOperator: null,
  lastActionType: null
};

/*eslint no-case-declarations: 0*/
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPE_NUMBER:
      const number = action.payload;
      return handleNumber(state, number);
    case TYPE_OPERATOR:
      const operation = action.payload;
      return handleOperation(state, operation);
    case TYPE_CHANGE_SIGN:
      return handleChangeSign(state);
    case TYPE_PERCENTAGE:
      return handlePercentage(state);
    case TYPE_DECIMAL:
      return handleDecimal(state);
    case TYPE_CLEAR:
      return handleClear(state);
    case TYPE_EQUAL:
      return handleEqual(state);
    default:
      return state;
  }
};

function handleNumber(state, number) {
  const { displayResult, lastActionType } = state;
  let newActualResult, newDisplayResult;
  if (
    lastActionType === TYPE_NUMBER ||
    lastActionType === TYPE_CHANGE_SIGN ||
    lastActionType === TYPE_DECIMAL
  ) {
    if (displayResult === "0" || displayResult === "-0") {
      newDisplayResult = displayResult.replace("0", number);
    } else {
      newDisplayResult = displayResult + number;
    }
  } else {
    newDisplayResult = "" + number;
  }
  newActualResult = Number.parseFloat(newDisplayResult);
  return {
    ...state,
    displayResult: newDisplayResult,
    actualResult: newActualResult,
    lastActionType: TYPE_NUMBER
  };
}

function handleOperation(state, operator) {
  const { lastOperation, actualResult } = state;
  let newOperation, newActualResult;
  try {
    if (
      state.lastActionType === TYPE_OPERATOR ||
      state.lastActionType === TYPE_EQUAL
    ) {
      newActualResult = actualResult;
      newOperation = operator(newActualResult);
    } else {
      newActualResult = lastOperation(actualResult);
      newOperation = operator(newActualResult);
    }
    if (isFinite(newActualResult) === false || isNaN(newActualResult)) {
      throw new Error("result error");
    }

    return {
      ...state,
      displayResult: "" + newActualResult,
      actualResult: newActualResult,
      lastOperation: newOperation,
      lastOperator: operator,
      lastActionType: TYPE_OPERATOR
    };
  } catch (exception) {
    return {
      actualResult: NaN,
      displayResult: "NaN",
      lastOperation: newOperation,
      lastOperator: operator,
      lastActionType: TYPE_OPERATOR
    };
  }
}

function handleChangeSign(state) {
  const { displayResult } = state;
  let newDisplayResult;
  if (state.lastActionType === TYPE_OPERATOR) {
    newDisplayResult = "-0";
  } else {
    newDisplayResult =
      displayResult[0] === "-" ? displayResult.substr(1) : "-" + displayResult;
  }
  return {
    ...state,
    displayResult: newDisplayResult,
    actualResult: Number.parseFloat(newDisplayResult),
    lastActionType: TYPE_CHANGE_SIGN
  };
}

function handleClear(state) {
  if (state.lastActionType === TYPE_CLEAR) {
    return { ...INITIAL_STATE, lastActionType: TYPE_CLEAR };
  } else {
    return {
      ...state,
      displayResult: "0",
      actualResult: 0,
      lastActionType: TYPE_CLEAR
    };
  }
}

const handleEqual = (function() {
  let lastNumber;
  return function(state) {
    const {
      actualResult,
      displayResult,
      lastOperation,
      lastOperator,
      lastActionType
    } = state;
    let newActualResult, newDisplayResult;
    if (lastOperation.toString() === assign.toString()) {
      newActualResult = actualResult;
      newDisplayResult = displayResult;
    } else if (lastActionType === TYPE_EQUAL) {
      newActualResult = lastOperator(lastNumber)(actualResult);
      newDisplayResult = "" + newActualResult;
    } else {
      lastNumber = actualResult;
      if (lastOperation.toString().includes("/") && actualResult === 0) {
        // x / 0 = NaN
        newActualResult = NaN;
        newDisplayResult = "NaN";
      } else {
        newActualResult = lastOperation(actualResult);
        newDisplayResult = "" + newActualResult;
      }
    }
    return {
      ...state,
      actualResult: newActualResult,
      displayResult: newDisplayResult,
      lastActionType: TYPE_EQUAL
    };
  };
})();

function handlePercentage(state) {
  const { actualResult, displayResult } = state;
  let newActualResult;
  const decimalIndex = displayResult.indexOf(".");
  if (decimalIndex === -1 || actualResult - Math.floor(actualResult) === 0) {
    newActualResult = actualResult / 100;
  } else {
    //Fix issue of floating point precision
    const precision = displayResult.substr(decimalIndex + 1).length + 2;
    newActualResult = Number.parseFloat(actualResult / 100).toFixed(precision);
  }

  return {
    ...state,
    actualResult: newActualResult,
    displayResult: newActualResult.toString(),
    lastActionType: TYPE_PERCENTAGE
  };
}

function handleDecimal(state) {
  const { lastActionType, displayResult, actualResult } = state;
  let newDisplayResult, newActualResult;
  if (
    lastActionType === TYPE_NUMBER ||
    lastActionType === TYPE_CHANGE_SIGN ||
    lastActionType === TYPE_PERCENTAGE ||
    lastActionType === TYPE_DECIMAL
  ) {
    newActualResult = actualResult;
    newDisplayResult = displayResult.includes(".")
      ? displayResult
      : displayResult + ".";
  } else {
    newActualResult = 0;
    newDisplayResult = "0.";
  }
  return {
    ...state,
    actualResult: newActualResult,
    displayResult: newDisplayResult,
    lastActionType: TYPE_DECIMAL
  };
}

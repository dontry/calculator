import {
  TYPE_OPERATOR,
  TYPE_NUMBER,
  TYPE_CHANGE_SIGN,
  TYPE_EQUAL,
  TYPE_DECIMAL,
  TYPE_CLEAR,
  TYPE_PERCENT
} from "../actions/index";

export const INITIAL_STATE = {
  displayResult: "0",
  actualResult: 0,
  lastOperation: x => x,
  lastActionType: null
};

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
    case TYPE_PERCENT:
      return state;
    case TYPE_CLEAR:
      return handleClear(state);
    case TYPE_EQUAL:
      return handleEqual(state);
    default:
      return state;
  }
};

function handleNumber(state, number) {
  const { actualResult, displayResult, lastActionType } = state;
  let newActualResult, newDisplayResult;
  if (
    lastActionType === TYPE_OPERATOR ||
    lastActionType === TYPE_EQUAL ||
    lastActionType === TYPE_CLEAR ||
    lastActionType === null
  ) {
    newDisplayResult = "" + number;
  } else {
    if (displayResult === "0" || displayResult === "-0") {
      newDisplayResult = displayResult.replace("0", number);
    } else {
      newDisplayResult = displayResult + number;
    }
  }
  newActualResult = Number.parseFloat(displayResult);
  return {
    ...state,
    displayResult: newDisplayResult,
    actualResult: newActualResult,
    lastActionType: TYPE_NUMBER
  };
}

function handleOperation(state, operation) {
  const { lastOperation, actualResult } = state;
  let newOperation, newResult;
  try {
    if (
      state.lastActionType === TYPE_OPERATOR ||
      state.lastActionType === TYPE_EQUAL
    ) {
      newOperation = operation(actualResult);
    }
    if ((state.lastActionType = TYPE_NUMBER)) {
      newResult = lastOperation(actualResult);
      newOperation = operation(newResult);
    }
    if (isFinite(newResult) === false || isNaN(newResult)) {
      throw new Error("result error");
    }
    return {
      ...state,
      displayResult: "" + newResult,
      actualResult: newResult,
      lastOperation: newOperation,
      lastActionType: TYPE_OPERATOR
    };
  } catch (exception) {
    return {
      ...INITIAL_STATE,
      displayResult: "ERROR"
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
  const { lastActionType } = state;
  if (state.lastActionType === TYPE_CLEAR) {
    return INITIAL_STATE;
  } else {
    return {
      ...INITIAL_STATE,
      lastActionType: TYPE_CLEAR
    };
  }
}

function handleEqual(state) {
  const { lastActionType, displayResult, actualResult, lastOperation } = state;
  let newActualResult, newDisplayResult;
  if (lastOperation.toString() === "x => x") {
    newActualResult = actualResult;
    newDisplayResult = displayResult;
  } else {
    newActualResult = lastOperation(actualResult);
    newDisplayResult = "" + newActualResult;
  }

  return {
    ...state,
    actualResult: newActualResult,
    displayResult: newDisplayResult,
    lastActionType: TYPE_EQUAL
  };
}

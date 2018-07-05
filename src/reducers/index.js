import {
  TYPE_OPERATOR,
  TYPE_NUMBER,
  TYPE_CHANGE_SIGN,
  TYPE_EQUAL,
  TYPE_DECIMAL,
  TYPE_CLEAR,
  TYPE_PERCENTAGE
} from "../actions/index";

export const INITIAL_STATE = {
  displayResult: "0",
  actualResult: 0,
  lastOperation: x => x,
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

function handleOperation(state, operation) {
  const { lastOperation, actualResult } = state;
  let newOperation, newActualResult;
  try {
    if (
      state.lastActionType === TYPE_OPERATOR ||
      state.lastActionType === TYPE_EQUAL
    ) {
      newActualResult = actualResult;
      newOperation = operation(newActualResult);
    } else {
      newActualResult = lastOperation(actualResult);
      newOperation = operation(newActualResult);
    }
    if (isFinite(newActualResult) === false || isNaN(newActualResult)) {
      throw new Error("result error");
    }

    return {
      ...state,
      displayResult: "" + newActualResult,
      actualResult: newActualResult,
      lastOperation: newOperation,
      lastActionType: TYPE_OPERATOR
    };
  } catch (exception) {
    return {
      ...INITIAL_STATE,
      displayResult: "ERROR",
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

function handleEqual(state) {
  const { displayResult, actualResult, lastOperation } = state;
  let newActualResult, newDisplayResult;
  if (lastOperation.toString() === "x => x") {
    newActualResult = actualResult;
    newDisplayResult = displayResult;
  } else if (lastOperation.toString().includes("/") && actualResult === 0) {
    // x / 0 = ERROR
    newActualResult = NaN;
    newDisplayResult = "Error";
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

function handlePercentage(state) {
  const { actualResult } = state;
  let newActualResult;
  newActualResult = actualResult / 100;

  return {
    ...state,
    actualResult: newActualResult,
    displayResult: newActualResult.toString(),
    lastActionType: TYPE_PERCENTAGE
  };
}

function handleDecimal(state) {
  return {
    ...state,
    displayResult: state.displayResult.includes(".")
      ? state.displayResult
      : state.displayResult + ".",
    lastActionType: TYPE_DECIMAL
  };
}

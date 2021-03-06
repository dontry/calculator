import {
  TYPE_NUMBER,
  TYPE_OPERATOR
} from "./actionTypes";

export const plus = b => a => b + a;
export const subtract = b => a => b - a;
export const multiply = b => a => b * a;
export const divide = b => a => b / a;
export const assign = x => x;

export const pressKey = (keyType, keyValue) => {
  if (keyType === TYPE_OPERATOR || keyType === TYPE_NUMBER) {
    if (keyType === TYPE_OPERATOR) {
      keyValue = generateOperationFunc(keyValue);
    }
    return {
      type: keyType,
      payload: keyValue
    };
  } else {
    return {
      type: keyType
    };
  }
};

function generateOperationFunc(keyValue) {
  switch (keyValue) {
    case "plus":
      return plus;
    case "subtract":
      return subtract;
    case "multiply":
      return multiply;
    case "divide":
      return divide;
    default:
      return keyValue;
  }
}

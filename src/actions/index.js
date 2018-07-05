import {
  TYPE_NUMBER,
  TYPE_OPERATOR
} from "./actionTypes";

export const plus = b => a => b + a;
export const subtract = b => a => b - a;
export const multiply = b => a => b * a;
export const divide = b => a => b / a;

export const pressKey = (keyType, keyValue = {}) => {
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
    case "+":
      return plus;
    case "-":
      return subtract;
    case "*":
      return multiply;
    case "/":
      return divide;
    default:
      return keyValue;
  }
}

export const TYPE_NUMBER = "NUMBER";
export const TYPE_OPERATOR = "OPERATOR";
export const TYPE_CLEAR = "CLEAR";
export const TYPE_CHANGE_SIGN = "CHANGE_SIGN";
export const TYPE_DECIMAL = "DECIMAL";
export const TYPE_EQUAL = "EQUAL";
export const TYPE_PERCENTAGE = "PERCENT";


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


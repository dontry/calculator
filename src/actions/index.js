export const TYPE_NUMBER = "NUMBER";
export const TYPE_OPERATOR = "OPERATOR";
export const TYPE_CLEAR = "CLEAR";
export const TYPE_CHANGE_SIGN = "CHANGE_SIGN";
export const TYPE_DECIMAL = "DECIMAL";
export const TYPE_EQUAL = "EQUAL";
export const TYPE_PERCENT = "PERCENT";

export const pressKey = (keyType, keyValue = {}) => {
  if (keyType === TYPE_OPERATOR || keyType === NUMBER) {
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
      return;
    case "-":
      return b => a => a - b;
    case "*":
      return b => a => a * b;
    case "/":
      return b => a => a / b;
    default:
      return keyValue;
  }
}

export const plus = b => a => a + b;
export const subtract = b => a => a - b;
export const multiply = b => a => a * b;
export const divide = b => a / b;

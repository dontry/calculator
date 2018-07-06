export default function(key) {
  switch (key) {
    case "-":
      return "subtract";
    case "+":
      return "plus";
    case "/":
      return "divide";
    case "*":
      return "multiply";
    case "%":
      return "percentage";
    case ".":
      return "decimal";
    case "+/-":
      return "change_sign";
    case "=":
    case "Enter":
      return "equal";
    case "c":
    case "C":
    case "Backspace":
      return "clear";
    default:
      return key;
  }
}

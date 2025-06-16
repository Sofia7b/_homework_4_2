let yourNumberInput = prompt("Enter your 3-digit number:");

if (yourNumberInput === null || yourNumberInput.trim() === "") {
  alert("You did not enter anything. Please try again.");
} else {
  const trimmed = yourNumberInput.trim();
  const num = Number(trimmed);
  const isInteger = Number.isInteger(num);

  const isThreeDigit =
    (num >= 100 && num <= 999) || (num <= -100 && num >= -999);

  if (!isInteger || !isThreeDigit) {
    alert("Please enter a valid three-digit number!");
  } else {
    const digits = Math.abs(num).toString();
    const [a, b, c] = digits;

    if (a === b && b === c) {
      alert("All digits are the same.");
    } else if (a === b || a === c || b === c) {
      alert("Two digits are the same.");
    } else {
      alert("All digits are different.");
    }
  }
}

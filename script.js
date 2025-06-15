let yourNumberInput = prompt("Enter your 3-digit number:");
if (yourNumberInput === null || yourNumberInput.trim() === "") {
  alert("You did not enter anything. Please try again.");
} else if (yourNumberInput.length !== 3 || isNaN(yourNumberInput)) {
  alert("Please enter a valid three-digit number!");
} else {
  const a = yourNumberInput[0];
  const b = yourNumberInput[1];
  const c = yourNumberInput[2];

  if (a === b && b === c) {
    alert(`Your three digit number is: ${yourNumberInput}`);
  } else if (a === b || a === c || b === c) {
    alert("Among the numbers, there are 2 identical ones. But not three!!!");
  } else {
    alert("Numbers are different!");
  }
}

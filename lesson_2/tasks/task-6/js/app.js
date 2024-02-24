//////////////////////////////////////////////////////
const numberMonth = parseInt(prompt("Enter number month"));
if (numberMonth === 11 || numberMonth === 0 || numberMonth === 1) {
  alert("Winter");
} else if (numberMonth === 2 || numberMonth === 3 || numberMonth === 4) {
  alert("Spring");
} else if (numberMonth === 5 || numberMonth === 6 || numberMonth === 7) {
  alert("Summer");
} else if (numberMonth === 8 || numberMonth === 9 || numberMonth === 10) {
  alert("Autumn");
} else {
  alert("Incorrect number");
}

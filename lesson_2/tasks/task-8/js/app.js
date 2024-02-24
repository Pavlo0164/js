//Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби.
const minNumber = 1;
const maxNumber = 5;
const generateNumber = Math.floor(
  Math.random() * (maxNumber - minNumber + 1) + 1
);
console.log(generateNumber);
let numberVariant = parseInt(prompt("Hello.Enter a number from 1 to 5"));
if (isNaN(numberVariant) || numberVariant < 1 || numberVariant > 5) {
  alert("You entered an incorrected number");
} else {
  if (numberVariant === generateNumber) {
    alert("Nice.You guessed the number");
  } else {
    numberVariant = parseInt(prompt("Enter a number from 1 to 5 again"));
    if (isNaN(numberVariant) || numberVariant < 1 || numberVariant > 5) {
      alert("You entered an incorrected number");
    } else {
      if (numberVariant === generateNumber) {
        alert("Nice.You guessed the number");
      } else {
        alert(
          `Sorry.You did not quess the number.This is number ${generateNumber}`
        );
      }
    }
  }
}

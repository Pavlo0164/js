//З клавіатури вводиться номер дня тижня. Вивести на екран назву дня.
const numberEnter = parseInt(prompt("Enter a number from 0  to 6"));
let result;
switch (numberEnter) {
  case 0:
    result = "Monday";

    break;
  case 1:
    result = "Tuesday";

    break;
  case 2:
    result = "Wednesday";
    break;
  case 3:
    result = "Thursday";
    break;
  case 4:
    result = "Friday";
    break;
  case 5:
    result = "Saturday";
    break;
  case 6:
    result = "Sunday";
    break;
  default:
    result = "You entered an incorrected number";
    break;
}
alert(result);

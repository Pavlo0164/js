//З клавіатури вводиться номер дня тижня. Вивести на екран назву дня.
const numberEnter = parseInt(prompt("Enter a number from 0  to 6"));
switch (numberEnter) {
  case 0:
    alert("Monday");
    break;
  case 1:
    alert("Tuesday");
    break;
  case 2:
    alert("Wednesday");
    break;
  case 3:
    alert("Thursday");
    break;
  case 4:
    alert("Friday");
    break;
  case 5:
    alert("Saturday");
    break;
  case 6:
    alert("Sunday");
    break;
  default:
    alert("You entered an incorrected number");
    break;
}

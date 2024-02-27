//З клавіатури вводиться назва категорії водія (А-мотоцикл, В-легковий автомобіль, С-вантажний автомобіль).
//Вивести на екран назву транспортного засобу, яким він може керувати.
const categoryDriver = prompt(
  "Please, enter your category with a capital letter"
);
let result;
switch (categoryDriver) {
  case "A":
    result = "You can drive a motorcycle";
    break;
  case "B":
    result = "You can drive cars weighing up to 3500kg";
    break;
  case "C":
    result = "You can drive cars weighing more than 3500kg";
    break;
  default:
    result = "You entered an incorrected category drive";
    break;
}
alert(result);

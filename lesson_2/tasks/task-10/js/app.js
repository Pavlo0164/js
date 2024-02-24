//З клавіатури вводиться назва категорії водія (А-мотоцикл, В-легковий автомобіль, С-вантажний автомобіль).
//Вивести на екран назву транспортного засобу, яким він може керувати.
const categoryDriver = prompt(
  "Please, enter your category with a capital letter"
);

switch (categoryDriver) {
  case "A":
    alert("You can drive a motorcycle");
    break;
  case "B":
    alert("You can drive cars weighing up to 3500kg");
    break;
  case "C":
    alert("You can drive cars weighing more than 3500kg");
    break;
  default:
    alert("You entered an incorrected category drive");
    break;
}

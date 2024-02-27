//Задача 4. Дано довжину у сантиметрах. Визначати скільки це метрів і кілометрів.
const lengthInCentimeter = parseInt(
  prompt("Введіть довжину у сантиметрах", "0")
);
let result;
if (isNaN(lengthInCentimeter)) {
  result = "число введено не коректно";
} else {
  const lengthInMeters = (lengthInCentimeter / 100).toFixed(2);
  const lengthKilometers = (lengthInMeters / 1000).toFixed(3);
  result = `${lengthInCentimeter} сантиметрів - це ${lengthInMeters} метрів, або ${lengthKilometers} кілометрів `
}
alert(result);
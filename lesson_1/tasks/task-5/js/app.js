//Задача 4. Дано довжину у сантиметрах. Визначати скільки це метрів і кілометрів.
const lengthInCentimeter = parseInt(
  prompt("Введіть довжину у сантиметрах", "0")
);

if (isNaN(lengthInCentimeter)) {
  alert("число введено не коректно");
} else {
  const lengthInMeters = Math.round((lengthInCentimeter / 100) * 100) / 100;
  const lengthKilometers = Math.round((lengthInMeters / 1000) * 1000) / 1000;
  alert(
    `${lengthInCentimeter} сантиметрів - це ${lengthInMeters} метрів, або ${lengthKilometers} кілометрів `
  );
}

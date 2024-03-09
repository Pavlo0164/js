alert('Задача 15. Користувача поступово вводить показники температури протягом року. Знайти середню температуру.')


let count = 12;
let sumTemp = 0;
for (let i = 0; i < count; i++) {
    let temp = parseFloat(prompt("Введіть температуру"));
    sumTemp += temp;
}
let serTemp = sumTemp / count;
alert(
  `Середня температура за весь період становить ${serTemp.toFixed(1)} градуси`
);

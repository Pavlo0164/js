//Задача 7. Знайти суму випадкового номера місяця (від 1 до 12) та випадкового номера дня (від 0 до 6).
let minMonth = 1;
let maxMonth = 12;
let minDay = 0;
let maxDay = 6;
let randomNumberMonth = Math.floor(
  Math.random() * (maxMonth - minMonth + 1) + minMonth
);
let randomNumberDay = Math.floor(
  Math.random() * (maxMonth - minMonth + 1) + minMonth
);
let sumRandomNumber = randomNumberMonth + randomNumberDay;
document.write(`Сума випадкових чисел : ${sumRandomNumber}`);

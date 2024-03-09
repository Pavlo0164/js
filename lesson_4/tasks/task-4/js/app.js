// Задача 1. Вивести з використанням циклів маркований список з випадковими числами (1-100).
//Кількість випадкових чисел вводиться користувачем. Приклад:

const counNumber = parseInt(prompt("Введіть кількість чисел"));

for (let i = 0; i < 1; i++) {
  document.write(
    `<ul style="font-size:22px;display:flex;flex-wrap:wrap;gap:40px;list-style:none">`
  );
  for (let i = 0; i < counNumber; i++) {
    let num = 1 + Math.floor(Math.random() * 100);
    document.write(`<li>${num}</li>`);
  }
  document.write(`</ul>`);
}

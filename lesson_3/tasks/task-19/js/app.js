alert(
  "Задача 16. Користувач поступово вводить прибуток магазину за кожен день протягом N тижнів Знайти загальну величину прибутку та вивести величину прибутку протягом кожного окремого тижня"
);

let week = parseInt(prompt("Введіть кількість тижнів"));
let sum = 0;
for (let i = 1; i <= week; i++) {
  let sumOneWeek = 0;
  for (let p = 0; p < 7; p++) {
    let num = parseFloat(prompt("Введіть виручку за сьогодні"));
    sum += num;
    sumOneWeek += num;
  }
  document.write(
    `<p style="font-size:20px;padding:10px;border:1px solid black">Виручка за ${i}-й тиждень становить : ${sumOneWeek} грн </p> `
  );
}
document.write(
  `<p style="font-size:20px;padding:10px;border:1px solid black">Загальна виручка становить : ${sum} грн</p>`
);

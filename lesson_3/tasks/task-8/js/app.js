//Задача 5. Вивести таблицю


let count = 1
for (let i = 0; i < 3; i++) {
  document.write(`<table style="border:1px solid #000;font-size:25px"> <tr>`);
  for (let i = 1; i <= 3; i++) {
    document.write(`<th style="border:1px solid #000;padding:10px;">${count}</th>`);
    count++
  }
  document.write(`</tr></table>`);
}

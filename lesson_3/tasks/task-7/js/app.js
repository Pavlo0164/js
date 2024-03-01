//Задача 4. Вивести таблицю з 3 рядків і 7 стовпців

for (let i = 0; i < 3; i++) {
  document.write(`<table style="border:1px solid #000;font-size:25px"> <tr>`);
  for (let i = 1; i <= 7; i++) {
    document.write(`<th style="border:1px solid #000;padding:10px;">${i}</th>`);
  }
  document.write(`</tr></table>`);
}

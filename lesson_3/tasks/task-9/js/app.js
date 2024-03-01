//Задача 6. Вивести 3 таблиці (по 3 рядки і 3 стовпці у кожній) за зразком
let count = 1;
for (let i = 0; i < 3; i++) {
  document.write(`<table style="border:1px solid #000;font-size:25px;display:inline-block;margin-left:40px">`);
  for (let i = 0; i < 3; i++) {
    document.write(`<tr>`);
    for (let i = 0; i < 3; i++) {
      document.write(
        `<th style="border:1px solid #000;padding:10px;">${count}</th>`
      );
      count++;
    }
    document.write(`</tr>`);
  }
  document.write(`</table>`);
}

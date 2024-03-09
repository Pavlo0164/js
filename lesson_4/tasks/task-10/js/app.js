//Задача 7. Вивести на екран N абзаців (N вводиться користувачем) за зразком:

const N = parseInt(prompt("Введіть кількість абзаців"))

for (let i = 1; i <= N ; i++) {
  document.write(`<h1>Заголовок ${i}</h1>`)
  for (let p = 1; p <= i; p++) {
    document.write(`<p>Розділ ${i}, параграф ${p}</p>`)
  }
  document.write(`<hr>`)
}
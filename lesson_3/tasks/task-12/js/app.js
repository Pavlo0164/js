//Задача 9. Користувач загадує число від 1 до 100.
//Комп’ютер задає питання поки не вгадає число користувача (використати confirm).

while (true) {
  let num = 1 + Math.floor(Math.random() * 100);
  let bool = confirm(`Це число ${num}?`);
  if (bool) {
    alert(`Я вгадав число`);
    break
  }
}

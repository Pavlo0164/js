alert("//Задача 11. Знайти суму 5 непарних чисел, що знаходяться між заданими користувачем числами.")
let num1 = parseInt(prompt('Введіть число номер один'))
let num2 = parseInt(prompt("Введіть число номер два"));
let count = 0
let i = num1 + 1
let sum = 0
for (let i = 0; i < num2; i++) {
    if(i % 2){
      sum += i
      count += 1
      if(count === 5){
        break
      }
    }
}
if(count < 5){
  alert(`Між числом ${num1} та ${num2} немає п'яти непарних чисел`)
}else{
  alert(`Сума п'яти непарних чисел між числами ${num1} і ${num2} становить: ${sum}`)
}
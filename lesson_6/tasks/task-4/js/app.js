alert(
	"4. З клавіатури поступово вводяться числа. Знайти суму перших N парних чисел."
);
let sum = 0
for (let i = 0; i < 2; ) {
  let num = parseInt(prompt('Введіть число'))
  if(num % 2 === 0){
    sum += num
    i++
  }
  
}
document.write(`Сума перших двох парних чисел : ${sum}`)
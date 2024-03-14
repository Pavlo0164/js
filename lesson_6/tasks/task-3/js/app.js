alert(
	"3. З клавіатури вводиться початкове знчення суми. Поки сума є меншою за 100 додавати до неї числа, які вводяться з клавіатури."
);
let sum = 0
let number
do{
  number = parseInt(prompt("Введіть число"))
  sum += number
}while(sum <100)

document.write(sum)
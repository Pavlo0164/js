
alert(
	`
8. З клавіатури вводиться число. Знаходити суму цифр до тих пір. Поки сума не стане більшую 20
  `
);
let num2 = 0 
let num = 20
do{
  enterNum = prompt(`Введіть число`)
  for (let i = 0; i < enterNum.length; i++) {
   num2 += parseInt(enterNum[i]) 
  }
}while(num2 <= num)

alert(`Сума цифр становить ${num2}`)
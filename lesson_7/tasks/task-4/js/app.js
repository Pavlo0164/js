alert(`
Задача 3. Створити окремі функції, які для 4 чисел знаходять:
1)суму;
2)добуток;
3)середнє арифметичне;
4)мінімальне значення. 

`);

function sum(num1, num2, num3, num4) {
	let num = num1 + num2 + num3 + num4;
	return num;
}
function product(num1, num2, num3, num4) {
	let num = num1 * num2 * num3 * num4;
	return num;
}
function arithmeticMean(num1, num2, num3, num4) {
	let num = (num1 + num2 + num3 + num4) / 4;
	return num;
}
function arithmeticMean(num1, num2, num3, num4) {
	let num = num1;
	if (num > num2) num = num2;
	if (num > num3) num = num3;
	if (num > num4) num = num4;
	return num;
}


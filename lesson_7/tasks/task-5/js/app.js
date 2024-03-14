alert(`
    Задача 4. Створити функцію, яка для 3 заданих чисел знаходить одночасно декілька результатів: 
    кількість парних, кількість додатних, кількість більших за 100.
`);
let num1 = parseInt(prompt(`Введіть число`))
let num2 = parseInt(prompt(`Введіть число`));
let num3 = parseInt(prompt(`Введіть число`));
function showResult(num1, num2, num3) {
	let count = 0;
	if (num1 % 2 === 0) count += 1;
	if (num2 % 2 === 0) count += 1;
	if (num3 % 2 === 0) count += 1;

	let plus = 0;
	if (num1 > 0) plus += 1;
	if (num2 > 0) plus += 1;
	if (num3 > 0) plus += 1;

	let bigNumber = 0;
	if (num1 > 100) bigNumber += 1;
	if (num2 > 100) bigNumber += 1;
	if (num3 > 100) bigNumber += 1;
    return [count,plus,bigNumber]
}
let result = showResult(num1, num2, num3);
document.write(`
    <div>Парних чисел ${result[0]}</div>
    <div>Додатних чисел ${result[1]}</div>
    <div>Більших за 100 чисел ${result[2]}</div>
`);


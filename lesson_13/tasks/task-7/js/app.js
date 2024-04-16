// Задача 7. Тренажер додавання.
//  Кожні 10 секунд користувачу задають випадковий приклад з додавання двох цифр і робиться перевірка.
function generateNumber() {
	let randomNumOne = 1 + Math.floor(Math.random() * 9);
	let randomNumTwo = 1 + Math.floor(Math.random() * 9);
	return [randomNumOne, randomNumTwo];
}
function workTasks(genFunc) {
	let bool = false;
	let [numOne, numTwo] = genFunc();
	let result = parseInt(prompt(`${numOne} + ${numTwo} = `));
	if (result === numOne + numTwo) {
		alert(`Відповідь вірна`);
		bool = true;
	} else alert(`Відповідь не вірна`);
	if (!bool) return;
	setTimeout(workTasks, 10000, generateNumber);
}
workTasks(generateNumber);
//setTimeout(workTasks, 10000, generateNumber);

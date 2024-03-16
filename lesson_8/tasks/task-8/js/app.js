alert(`
    Задача 8. Дано одновимірний масив, у якому зберігається певна виграшна сума 
    (елементи заповнюються випадковим чином значеннями від -500 до 500). 
    Надаючи користувачу можливість вибирати номери елементів  (поки він не відмовиться). 
    Знаходити сумарний виграш.
`);
//створення масиву
function createdArray(num) {
	const maxNumber = 500;
	const minNumber = -500;
	let arr = [];
	for (let i = 0; i < num; i++) {
		let number =
			minNumber + Math.floor(Math.random() * (maxNumber - minNumber) + 1);
		arr.push(number);
	}
	return arr;
}
function loteryGame() {
	const element = parseInt(
		prompt(`Введіть скільки буде виграшних сум у масиві`)
	);
	const arr = createdArray(element);
	let sum = 0;
	let question;
	do {
		let number = parseInt(
			prompt(`Введіть номер елементу від 1 до ${element}`)
		);
		sum += arr[number - 1];
		question = confirm(`Будете вводити номер елементу? `);
	} while (question);
	return sum;
}
const result = loteryGame();
if (result > 0) {
	document.write(`
     Вітаю, ви виграли ${result}$
    `);
} else {
	document.write(`
     Нажаль ви нічого не виграли
    `);
}

//Задача 3. Морський бій. Випадковим чином на двовимірному полі розміром 6*6 розташовується 5 кораблів.
//Користувач стріляє вказуючи координати.
//Гра продовжується поки не потоплено усі кораблі або у користувача не закінчаться снаряди.

function generateField() {
	let field = [];
	for (let i = 0; i < 6; i++) {
		let subArr = [];
		for (let p = 0; p < 6; p++) {
			subArr.push(0);
		}
		field.push(subArr);
	}
	let count = 5;
	while (count) {
		let x = Math.floor(Math.random() * 6);
		let y = Math.floor(Math.random() * 6);
		if (field[y][x] === 0) {
			field[y][x] = 1;
			count--;
		}
	}
	console.log(field);
	return field;
}
function gameSeaFight(funcGenerateField) {
	let field = funcGenerateField()
	let shots = 10;
	let count = 0;
	alert("Ти маєш десять набоїв щоб потопити корабель");
	do {
		let y = parseInt(prompt("Введіть вертикальну координату пострілу від 0 до 5"));
		let x = parseInt(prompt("Введіть горизонтальну координату пострілу від 0 до 5"));
		if (field[y][x] === 1) {
			field[y][x] = "X";
			count++;
			alert("Вітаю, ви знищили один корабель");
		} else {
			alert('Нажаль ви не попали');
		}
		shots--;
	} while (shots);
	document.write(`1 - це корабель </br> X - це знищенний корабель </br>
	`)
	field.forEach(element => {
		document.write(`${element}</br>`)
	});
}
let startGame = confirm("Бажаєте розпочати гру?");
if (startGame) gameSeaFight(generateField);

alert(`
    Задача 9. Морський бій. Користувач вводить кількість клітинок одновимірного масиву та кількість одиночних кораблів.
     Комп’ютер довільно розміщує ці одиночні кораблі у масиві по один у клітинці (якщо у клітинці 0, то клітинка пуста,
         якщо 1 – то це означає, що там є корабель. Користувач вводить номер клітинки, куди стріляє. Гра продовжується до 
         тих пір, поки не будуть потоплені усі кораблі.

`);

function createdArray(cells, ships) {
	let arr = [];
	for (let i = 0; i < cells; i++) {
		arr.push(0);
	}
	while (ships) {
		let randomNum = Math.floor(Math.random() * cells + 1);
		if (arr[randomNum] === 0) {
			arr[randomNum] = 1;
			ships--;
		}
	}
	let bool;
	do {
		bool = false;
		let num = parseInt(prompt(`Зробіть постріл від 1 до ${cells}`));
		if (arr[num - 1] === 1) {
			alert(`Ви попали`);
			arr[num - 1] = 0;
		}
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] === 1) bool = true;
		}
	} while (bool);
	alert(`Гру закінчено`);
}
try {
	let cells = parseInt(prompt("Введіть скільки буде клітинок"));
	let ships = parseInt(prompt("Введіть скільки буде кораблів"));
	if (cells <= ships)
		throw new Error("Не коректні данні.Спробуйте будь ласка ще раз");
	createdArray(cells, ships);
} catch (error) {
	console.log(error.message);
}

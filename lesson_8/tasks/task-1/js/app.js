alert(`
	Задача 1. Дано масив, який містить оцінки з К предметів.
	 Знайти середній бал і з’ясувати до якої категорії він відноситься (відмінник, двійочник (має хоча би одну двійку), 
	 хорошист (оцінки добре і відмінно), трійочник(є хоча би одна трійка)).

`);
function centerArifmetikBall(...arr) {
	let sum = 0;
	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
		count++;
	}
	return sum / count
}

function categoryStudent(...arr) {
	let mark = 5
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < mark) {
			mark = arr[i];
		}
	}
	let category
	switch (mark) {
		case 5:category = 'Учень відмінник'
			break;
		case 4:category = "Учень хорошист";
			break;
		case 3:category = "Учень трійочник";
			break;
		case 2:category = "Учень двійочник";
			break;
		default:
			throw new Error("Щось пішло не так");
	}
	return category
}
try {
	
	let array = [4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 3, 4, 3];
	let centralBall = centerArifmetikBall(...array).toFixed(1);
	let categoryStud = categoryStudent(...array);
	document.write(`
	Середній бал учня становить ${centralBall} <br> ${categoryStud}
`);
} catch (error) {
	console.log(error);
}



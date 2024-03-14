alert(`
Задача 2. Створити функцію, яка за номером дня дозволяє з’ясувати чи є цей день робочим.
`);
function showDayWeek(num) {
	let day;
	switch (num) {
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
			day = "Цей день робочий";
			break;
		case 6:
		case 7:
			day = "Цей день не робочий";
			break;
		default:
			day = "Не коректний день";
			break;
	}
	return day;
}
let num = parseInt(prompt(`Введіть номер дня`))
document.write(showDayWeek(num));

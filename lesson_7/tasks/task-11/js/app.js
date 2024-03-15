alert(`
Задача 10. Дано покази температур (довільна кількість). 
Розробити функцію, яка дозволить знайти середнє значення для додатних показів температури.
`);
function showTemp() {
	let sum = 0;
	let count = 0;
	for (let i = 0; i < arguments.length; i++) {
		if (arguments[i] > 0) {
			sum += arguments[i];
			count += 1;
		}
	}
	return sum/count;
}
document.write(
	`Середнє значення для додатних показів температури становить ${showTemp(
		32,
		23,
		-23,
		-14,
		-23,
		-34
	)} градусів`
);

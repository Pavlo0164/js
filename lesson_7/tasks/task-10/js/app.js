alert(`
Задача 9. Дано покази температур (довільна кількість).
 Розробити функцію, яка дозволить підрахувати кількість від’ємних показів температури.
`);
function showTemp() {
	let count = 0;
	for (let i = 0; i < arguments.length; i++) {
		if (arguments[i] < 0) count += 1;
	}
	return count;
}

document.write(
	`Кількість від'ємних значень температури становить ${showTemp(
		32,
		23,
		23,
		14,
		23,
		34
	)}`
);

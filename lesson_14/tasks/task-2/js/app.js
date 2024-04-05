// Задача 2. Розробити функцію, у яку передають об’єкт (день, місяць, рік). Визначити, який буде рік через N місяців.
let obj = {
	day: 4,
	month: 5,
	year: 2000
};
let numMonth = parseInt(prompt("Введіть кількість місяців"));
function returnYear(obj, numMonth) {
	obj.year += Math.floor((obj.month + numMonth) / 12);
	obj.month = (obj.month + numMonth) % 12;
	return obj;
}
let resultYear = returnYear(obj, numMonth);
document.write(`Через ${numMonth} місяців ,буде ${resultYear.year} рік`);
console.log(resultYear);

// Задача 0. Дано два об’єкта. Обидва містять масив цілих чисел.
//При цьому у одному з них є функція знаходження суми, а у іншому – функція для знаходження добутку тих,
// які знаходяться між заданими мінімальним і максимальних значенням.
// Використати обидва методи стосовно обидвох об’єктів (використати call, apply)

let obj1 = {
	numbers: [1, 3, 4, 5, 7, 3, 4, 5, 6, 7,  22, 12, 32, 43, 23, 1, 5],
	funcGetSum: function (min, max) {
		return this.numbers.reduce(
			(prevSum, item) => (item > min && item < max ? (prevSum = prevSum + item) : prevSum),
			0
		);
	}
};
let obj2 = {
	numbers: [1, 3, 4],
	funcGetProd: function (min, max) {
		return this.numbers.reduce(
			(prevSum, item) => (item > min && item < max ? (prevSum = prevSum * item) : prevSum),
			1
		);
	}
};
console.log(obj1.funcGetSum(1,7));
console.log(obj2.funcGetProd(2, 10));

console.log(obj1.funcGetSum.call(obj2, 2, 10));
console.log(obj2.funcGetProd.apply(obj1,[1,10]));

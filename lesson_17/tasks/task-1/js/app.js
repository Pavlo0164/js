// Створити клас, що дозволяє виконувати такі операції над масивами:
// знаходження кількості додатних, кількості від’ємних, кількість входжень деякого числа (статичні методи)

class MethodsArray {
	static countPositiveNumber(arr) {
		return arr.reduce((prevCount, item) => (item > 0 ? prevCount + 1 : prevCount), 0);
	}
	static countNegativeNumber(arr) {
		return arr.reduce((prevCount, item) => (item < 0 ? prevCount + 1 : prevCount), 0);
	}
	static countSameNumber(arr, number) {
		return arr.reduce((prevCount, item) => (item === number ? prevCount + 1 : prevCount), 0);
	}
}
let testArr = [23, 45, 3, -3, -4, 5];
console.log(MethodsArray.countPositiveNumber(testArr));
console.log(MethodsArray.countNegativeNumber(testArr));
console.log(MethodsArray.countSameNumber(testArr, 0));

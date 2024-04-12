// Задача 1. Створити об’єкт «Тир». У масиві зберігаються 1, якщо у цьому квадраті є заєць і 0 в іншому випадку.
// Тир
// Поля(властивості)
// Масив, у якому зберігається поле з зайцями
// Методи (дії)
// Метод пострілу (задається позиція пострілу)
// Виведення ігрового поля

let tierObj = {
	area: [
		[0, 0, 1, 0, 0],
		[0, 1, 0, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 0, 1, 0]
	],
	shoot: function (row, col) {
		if (this.area[row][col] === 1) {
			this.area[row][col] = "X";
			return true;
		} else if (this.area[row][col] === 0) return false;
		else return "error";
	},
	showArea: function () {
		for (let i = 0; i < this.area.length; i++) {
			document.write(`${this.area[i]}</br>`);
		}
	},
	getLengthRowArea: function () {
		return this.area.length;
	},
	getLengthColArea: function () {
		return this.area[0].length;
	}
};
console.log(tierObj.getLengthColArea());
tierObj.showArea();
console.log(tierObj.shoot(0, 2));
console.log(tierObj.shoot(0, 1));
tierObj.showArea();

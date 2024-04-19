// Задача 1. Створити клас TDate для роботи із датами у форматі “день.місяць.рік”.
// Дата представляється структурою із трьома полями.
// Реалізувати методи збільшення/зменшення дати на певну кількість днів, місяців чи років.
// Введення та виведення дати реалізувати за допомогою методу  toString.
class TDate {
	#day;
	#month;
	#year;
	constructor(day, month, year) {
		this.Day = day;
		this.Month = month;
		this.Year = year;
	}
	get Day() {
		return this.#day;
	}
	get Month() {
		return this.#month;
	}
	get Year() {
		return this.#year;
	}
	set Day(day) {
		if (isNaN(day) || day < 1) throw new Error(`Не коректний день`);
		else {
			if (this.Day) {
				this.#day = (this.Day + day) % 31;
				this.#month += Math.floor((this.Day + day) / 31);
			} else {
				this.#day = day % 31;
				this.#month = Math.floor(day / 31);
			}
		}
	}

	set Month(month) {
		if (isNaN(month) || month < 1) throw new Error(`Не коректний місяць`);
		if (this.Month) {
			this.#month = (this.#month + month) % 12;
			this.#year += Math.floor((this.Month + month) / 12);
		} else {
			this.#month = month % 12;
			this.#year = Math.floor(month / 12);
		}
	}

	set Year(year) {
		if (isNaN(year) || year < 1 || year > 3000) throw new Error(`Не коректний рік`);
		if (this.Year) {
			this.#year = year + this.Year;
		} else this.#year = year;
	}
	toString() {
		return `${this.Day}.${this.Month}.${this.Year}`;
	}
	changeDay(day) {
		this.Day = day;
	}
	changeMonth(month) {
		this.Month = month;
	}
	changeYear(year) {
		this.Year = year;
	}
}

let date = new TDate(12,4,2000);
console.log(date);
date.changeDay(34)
console.log(date);
date.changeMonth(13)
console.log(date);
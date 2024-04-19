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
	set Day(day) {
		if (day < 1 || day > 31) throw new Error("Щось пішло не так");
		this.#day = day;
	}
	get Month() {
		return this.#month;
	}
	set Month(month) {
		if (month < 1 || month > 12) throw new Error("Щось пішло не так");
		this.#month = month;
	}
	get Year() {
		return this.#year;
	}
	set Year(year) {
		if (year < 1 || year > 3000) throw new Error("Щось пішло не так");
		this.#year = year;
	}
	toString() {
		return `${this.Day}.${this.Month}.${this.Year}`;
	}
	renderDate() {
		if (this.Day > 31) {
			this.#month += Math.floor(this.Day / 31);
			this.#day = this.Day % 31;
		}
		if (this.Month > 12) {
			this.#year += Math.floor(this.Month / 12);
			this.#month = this.Month % 12;
		}
	}
	addDay(day) {
		this.#day += day;
		this.renderDate();
	}
	addMonth(month) {
		this.#month += month;
		this.renderDate();
	}
	addYear(year) {
		if (this.Year + year > 3000) throw new Error("Не коректна кількість років");
		this.#year += year;
	}
	renderDeleteDate() {
		if (this.Day < 1) {
			let numMonth = Math.ceil(Math.abs(this.Day) / 31);
			this.#month -= numMonth;
			this.#day = numMonth * 31 - Math.abs(this.Day);
		}
		if (this.Month < 1) {
			let numYear = Math.ceil(Math.abs(this.Month) / 12);
			this.#year -= numYear;
			this.#month = numYear * 12 - Math.abs(this.Month);
		}
	}
	deleteDay(day) {
		this.#day -= day;
		this.renderDeleteDate();
	}
	deleteMonth(month) {
		this.#month -= month;
		this.renderDeleteDate();
	}
	deleteYear(year) {
		if (this.Year - year < 1) throw new Error("Не коректний рік");
		this.#year -= year;
	}
}
let date = new TDate(12, 1, 2000);
console.log(date);
date.addDay(40);
console.log(date);
date.deleteDay(23);
console.log(date);
date.deleteMonth(2);
console.log(date);
document.write(date)
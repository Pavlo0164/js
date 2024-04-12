// Задача 2. Створити об’єкт «Авто».
// Авто

// Поля(властивості)
//      Марка
//      Розмір бака
//      Кількість наявних літрів
//      Кількість місць
//      Кількість пасажирів
//  Методи (дії)
//      Заправка на вказану кількість літрів
//      Виведення кількості пасажирів
//      Додавання пасажирів
//      Висадка пасажирів
class Auto {
	constructor(brend, sizeTank, stockFuel, numberSeats, numberPassenger) {
		(this.brend = brend),
			(this.sizeTank = sizeTank),
			(this.stockFuel = stockFuel),
			(this.numberSeats = numberSeats),
			(this.numberPassenger = numberPassenger);
	}
	refuel(fuel = "full") {
		if (fuel === "full") this.stockFuel = this.sizeTank;
		else if (fuel + this.stockFuel > this.sizeTank) {
			let result = this.sizeTank - this.stockFuel;
			this.stockFuel = this.sizeTank;
			console.log(`в бак влізло ${result} літрів палива`);
		} else {
			this.stockFuel += fuel;
			console.log(`Заправили ${fuel} літри палива`);
		}
	}
	showFuelStock() {
		return this.stockFuel;
	}
	showNumberPassenger() {
		return this.numberPassenger;
	}
	addPassenger(num) {
		if (this.numberPassenger + num > this.numberSeats) {
			console.log(`Влізло тільки ${this.numberSeats - this.numberPassenger} пасажири`);
			this.numberPassenger = this.numberSeats;
		} else {
			this.numberPassenger += num;
		}
	}
	deletePassenger(num) {
		if (num > this.numberPassenger) {
			console.log("У авто немає стільки пасажирів");
		} else {
			this.numberPassenger -= num;
			console.log(`Висадили ${num} пасажирів`);
		}
	}
}
let audi = new Auto("Audi", 72, 50, 5, 3);
audi.refuel(4);
audi.addPassenger(3);
console.log(audi.showNumberPassenger());
audi.deletePassenger(3)
console.log(audi.showNumberPassenger());

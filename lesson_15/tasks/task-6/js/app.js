// Поля
// Масив імен хлопців
// Масив імен дівчат
// Методи
// Метод випадкового вибору імені хлопця
// Метод випадкового вибору імені дівчини
// Метод виведення пари для танців
// Метод run , який ініціює через кожні 5 секунд виведення нової пари для танців

class DirectorDance {
	constructor(arrBoys, arrGirls) {
		this.arrBoys = arrBoys;
		this.arrGirls = arrGirls;
	}
	getAnyBoy() {
		let randomNum = Math.floor(Math.random() * this.arrBoys.length);
		return this.arrBoys[randomNum];
	}
	getAnyGirl() {
		let randomNum = Math.floor(Math.random() * this.arrGirls.length);
		return this.arrGirls[randomNum];
	}
	getAnyOdd() {
		let randomBoy = this.getAnyBoy();
		let randomGirl = this.getAnyGirl();
		return [randomBoy, randomGirl];
	}
	run() {
		setInterval(() => {
			console.log(this.getAnyOdd());  
		}, 5000);
	}
}
let boys = ["Ivan", "Petro", "John", "Vasya"];
let girls = ["Anna", "Inna", "Olga", "Nana"];
let directorOne = new DirectorDance(boys, girls);
console.log(directorOne.getAnyBoy());
console.log(directorOne.getAnyGirl());
console.log(directorOne.getAnyOdd());
directorOne.run()

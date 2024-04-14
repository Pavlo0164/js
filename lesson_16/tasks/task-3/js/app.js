// Задача 3. Об’єкт “Фірма” (використати члени-класи)
// поля
// назва фірми;
// дата заснування (рік, місяць);
// послуги (назва послуги, вартість, термін виконання);
// адреси філіалів (країна, місто, вулиця, номер будинку);
// методи
// визначення кількості років існування фірми;
// виведення всіх філіалів фірми у вказаному місті;
// виведення на екран послуг, що можуть бути виконані за вказану суму грошей та вказаний термін часу;
class YearOldFirm {
	constructor(year, month) {
		this.Year = year;
		this.Month = month;
	}
	set Month(month) {
		if (month < 1 || month > 12) throw new Error("Не коректний номер місяця");
		this.month = month;
	}
	set Year(year) {
		if (year < 1900 || year > 2024) throw new Error("Не коректний рік");
		this.year = year;
	}
}
class Service {
	constructor(name, cost, timeWork) {
		this.name = name;
		this.cost = cost;
		this.timeWork = timeWork;
	}
}
class Branch {
	constructor(country, sity, street, numberBuild) {
		this.country = country;
		this.sity = sity;
		this.street = street;
		this.numberBuild = numberBuild;
	}
}
class Firm {
	#name;
	#yearOld;
	constructor(name, yearOld, service = [], branch = []) {
		this.#name = name;
		this.#yearOld = yearOld;
		this.service = service;
		this.branch = branch;
	}
	get Name() {
		return this.#name;
	}
	get YearOld() {
		return this.#yearOld;
	}
	addService(item) {
		this.service.push(item);
	}
	addBranch(item) {
		this.branch.push(item);
	}
	getYearOld() {
		return 2024 - this.#yearOld.year;
	}
	getBranch(sity) {
		this.branch.forEach((item) => {
			if (sity === item.sity) {
				document.write("</br>Branch:</br>");
				for (const key in item) {
					document.write(`${key} : ${item[key]} </br>`);
				}
			}
		});
	}
	showService(cost, timeWork) {
		this.service.forEach((item) => {
			if (item.cost <= cost && item.timeWork <= timeWork) {
				document.write(`</br>Service:</br>`);
				for (const key in item) {
					document.write(`${key} : ${item[key]}</br>`);
				}
			}
		});
	}
}
try {
	let autoService = new Firm(
		"STOGarage",
		new YearOldFirm(2014, 12),
		[new Service("Tire", 500, "1:00"), new Service("Wash", 300, "1:30"), new Service("Change Oil", 800, "2:00")],
		[new Branch("Ukraine", "Lviv", "White row", 46), new Branch("Ukraine", "Dnipro", "Stepana Banderiy", 13)]
	);
	autoService.getBranch("Lviv");
	autoService.showService(500, "1:20");
	console.log(autoService);
} catch (error) {
	document.write(error.message);
}

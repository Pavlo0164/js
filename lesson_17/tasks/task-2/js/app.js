// Створити службове авто (водій, марка, номер).
//  Створити клас таким чином, щоб можна було створити тільки один екземпляр цього класу.
class Driver {
	#age
	constructor(name, surname, age) {
		this.name = name;
		this.surname = surname;
		this.Age = age;
	}
	set Age(age) {
		if (age < 18) throw new Error(`Водію не може бути менше 18 років`);
		this.#age = age;
	}
	get Age(){
		return this.#age
	}
	
}
class ServiceAuto {
	static serviceAuto;
	constructor(nameDriver, surnameDriver, ageDriver, brandAuto, numberAuto) {
		if (!ServiceAuto.serviceAuto) {
			this.driver = new Driver(nameDriver, surnameDriver, ageDriver);
			this.brandAuto = brandAuto;
			this.numberAuto = numberAuto;
			ServiceAuto.serviceAuto = this;
		} else return ServiceAuto.serviceAuto;
	}
}

let serviceAuto = new ServiceAuto("Pavlo", "Podolian", 23, "Audi", "PPU223");
let serviceAuto2 = new ServiceAuto("Ivan", "Lashkul", 24, "BMW", "YYY877");
console.log(serviceAuto);
console.log(serviceAuto2);

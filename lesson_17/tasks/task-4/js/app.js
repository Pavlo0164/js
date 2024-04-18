// Склад. База товарів, які зберігаються на складі: назва товару, одиниця виміру,
// кількість, фірма виробник (назва, реєстраційний номер). Організувати реєстрацію/відвантаження товарів,
//  фільтрація за назвою товару, фільтрація за назвою фірми
class FirmProduce {
	#registrNumber;
	constructor(name, registrNumber) {
		this.name = name;
		this.RegistrNumber = registrNumber;
	}
	set RegistrNumber(registrNumber) {
		if (isNaN(registrNumber)) throw new Error(`Wrong registration number`);
		this.#registrNumber = registrNumber;
	}
	get RegistrNumber() {
		this.#registrNumber;
	}
	toString() {
		return `Firms name : ${this.name}<br>
                Firms register number : ${this.#registrNumber}<br>`;
	}
}
class ItemProduct {
	#amount;
	#unitOfMeasure;
	constructor(name, unitOfMeasure, amount, nameFirm, firmRegisterNumber) {
		this.name = name;
		this.UnitOfMeasure = unitOfMeasure;
		this.Amount = amount;
		this.firmProduce = new FirmProduce(nameFirm, firmRegisterNumber);
	}
	set Amount(amount) {
		if (amount < 0) throw new Error(`Не коректна кількість товару`);
		this.#amount = amount;
	}
	set UnitOfMeasure(unitOfMeasure) {
		let unit = unitOfMeasure.toLowerCase();
		if (unit !== "kg" && unit !== "apiece") throw new Error(`Одиниця виміру може бути kg або apiece`);
		this.#unitOfMeasure = unit;
	}
	get Amount() {
		return this.#amount;
	}
	get UnitOfMeasure() {
		return this.#unitOfMeasure;
	}
	toString() {
		return `Name: ${this.name}<br>
                UnitOfMeasure: ${this.#unitOfMeasure}<br>
                Amount: ${this.#amount}<br>
                Firm:<br> ${this.firmProduce}<br>`;
	}
}
class Stock {
	#products;
	constructor(productsList = []) {
		this.Products = productsList;
	}
	toString() {
		this.#products.forEach((item) => {
			document.write(item);
		});
		return "";
	}
	set Products(productsList) {
		if (!Array.isArray(productsList)) throw new Error(`Товари повинні зберігатися тільки у масиві`);
		this.#products = productsList;
	}
	get Products() {
		return this.#products;
	}
	addProduct(name, unitOfMeasure, amount, nameFirm, firmRegisterNumber) {
		let itemProduct = new ItemProduct(name, unitOfMeasure, amount, nameFirm, firmRegisterNumber);
		if (itemProduct) {
			this.#products.push(itemProduct);
			return true;
		} else return false;
	}
	deleteProduct(name) {
		let result = false;
		this.#products.forEach((item, index) => {
			if (item.name.toLowerCase() === name.toLowerCase()) {
				result = true;
				this.#products.splice(index, 1);
				return;
			}
		});
		if (result) return true;
		else return false;
	}
	filterToNameProduct(name) {
		let result = this.#products.filter((item) => item.name.toLowerCase() === name.toLowerCase());
		if (result.length > 0) return result;
		return false;
	}
	filterToNameFirm(name) {
		let result = this.#products.filter((item) => item.firmProduce.name.toLowerCase() === name.toLowerCase());
		if (result.length > 0) return result;
		return false;
	}
}

try {
	let warehouse = new Stock([
		new ItemProduct("banana", "kg", 67, "PPW", "666700"),
		new ItemProduct("cola", "apiece", 34, "CocaCola", "434343"),
		new ItemProduct("apple", "kg", 45, "PPM", "010111")
	]);
	let resultPush = warehouse.addProduct("cheese", "kg", 20, "QQQ", "090909");
	let resultDelete = warehouse.deleteProduct("cola");
	let resultFiltName = warehouse.filterToNameProduct("apple");
	let resultFiltNameFirm = warehouse.filterToNameFirm("PPw");
	console.log(resultPush);
	console.log(resultDelete);
	console.log(resultFiltName);
	console.log(resultFiltNameFirm);
	document.write(warehouse);
} catch (error) {
	console.log(error.message);
}

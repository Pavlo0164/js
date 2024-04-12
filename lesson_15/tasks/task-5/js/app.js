// Задача 4. Розробити клас Baner
// Поля
// Масив об’єктів ( графічних зображень та посилань на сайти)

// методи
// Метод випадкового вибору об’єкта (графічного зображення та посилання)
// Метод виведення випадкового банера

class ItemBaner {
	constructor(linkImage, linkSite) {
		this.linkImage = linkImage;
		this.linkSite = linkSite;
	}
}
class Baner {
	constructor(stockBanersArr = []) {
		this.stockBanersArr = stockBanersArr;
	}
	pushItemInBaner(item) {
		this.stockBanersArr.push(item);
	}
	getRandomBaner() {
		let randomNum = Math.floor(Math.random() * this.stockBanersArr.length);
		return this.stockBanersArr[randomNum];
	}
	showRandomBaner() {
		let baner = this.getRandomBaner();
		document.write(` <img src="${baner.linkImage}" alt="Image"></br>`);
		document.write(` <a href="${baner.linkSite}">${baner.linkSite}</a>`);
	}
}
let itemBanerOne = new ItemBaner("../../../../img/image-1.jpeg", "https://www.google.com");
let itemBanerTwo = new ItemBaner("../../../../img/image-2.jpeg", "https://www.instagram.com");
let itemBanerThree = new ItemBaner("../../../../img/image-3.jpeg", "https://www.facebook.com");
let baner = new Baner([itemBanerOne, itemBanerThree]);
baner.pushItemInBaner(itemBanerTwo);

console.log(baner.getRandomBaner());
baner.showRandomBaner();

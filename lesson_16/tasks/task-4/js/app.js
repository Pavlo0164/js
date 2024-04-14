// Задача 4. Створити клас TBankomat, який моделює роботу банкомата.
// Клас повинен містити поля для зберігання кількості купюр кожного із номіналів від 5 до 200 гривень.
//  Реалізувати методи знаходження максимальної та мінімальної сум, які може видати банкомат, та метод зняття деякої суми.
class TBankomat {
	constructor(five, ten, twenty, fifty, hundred, twoHundred) {
		this["5"] = five;
		this["10"] = ten;
		this["20"] = twenty;
		this["50"] = fifty;
		this["100"] = hundred;
		this["200"] = twoHundred;
	}
	work() {
		let result;

		do {
			result = parseInt(
				prompt(`
        Привіт.Я банкомат\n
        Мінімальна сума яку я можу дати, становить ${this.getMinSum()}\n
        Максимальна сума яку я можу дати, становить ${this.getMaxSum()}\n
        Введіть суму яку бажаєте зняти, кратну ${this.getMinSum()}\n
        Якщо не бажаєте знімати грошей, введіть 0
        `)
			);
			if (result === 0) alert(`Бувай`);
			else if (result % this.getMinSum() === 0) {
				let res = this.getSum(result);
				alert(`${res}`);
			} else throw new Error(`Щось пішло не так`);
		} while (result);
	}
	getMinSum() {
		for (const key in this) {
			if (this[key]) return +key;
		}
	}
	getMaxSum() {
		let num = 0;
		for (const key in this) {
			if (this[key]) {
				num = num + +key * this[key];
			}
		}
		return num;
	}
	getSum(sum) {
		let cash = sum;
		let arr = [];
		for (const key in this) {
			arr.push(key);
		}
		arr = arr.reverse();
		arr.forEach((item) => {
			if (this[item]) {
				while (this[item] && cash >= +item) {
					cash -= +item;
					this[item]--;
				}
			}
		});
		if (!cash) return `Ви успішно зняли ${sum} грн`;
		else return `Я трішки прорахувався.Ви зняли тільки ${sum - cash} грн`;
	}
	toString() {
		let res = [];
		for (const key in this) {
			res.push(`Банкнот номіналом ${key} : ${this[key]}</br>`);
		}
		return `${res}`;
	}
}
try {
	let bancomatBBS = new TBankomat(0, 2, 0, 30, 20, 6);
	bancomatBBS.work();
	document.write(bancomatBBS);
} catch (error) {
	document.write(`${error.message}`);
}

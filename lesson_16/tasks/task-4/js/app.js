// Задача 4. Створити клас TBankomat, який моделює роботу банкомата.
// Клас повинен містити поля для зберігання кількості купюр кожного із номіналів від 5 до 200 гривень.
//  Реалізувати методи знаходження максимальної та мінімальної сум, які може видати банкомат, та метод зняття деякої суми.
class TBankomat {
	constructor(twoHundred, hundred, fifty, twenty, ten, five) {
		this["200"] = twoHundred;
		this["100"] = hundred;
		this["50"] = fifty;
		this["20"] = twenty;
		this["10"] = ten;
		this["5"] = five;
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
		let minSum = Infinity;
		for (const key in this) {
			if (+key < minSum && this[key] !== 0) minSum = +key;
		}
		if (isFinite(minSum)) return minSum;
		return 0;
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
		if (sum > this.getMaxSum()) return `В банкоматі немає такої суми грошей`;
		let cash = sum;
		let arr = [];
		for (const key in this) {
			arr.push(key);
		}
		arr.reverse().forEach((item) => {
			if (this[item]) {
				while (this[item] && cash >= +item) {
					//500
					cash -= +item;
					this[item]--;
				}
			}
		});
		if (!cash) return `Ви успішно зняли ${sum} грн`;
		else throw new Error(`Банкомат не може видати вам цю суму`);
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

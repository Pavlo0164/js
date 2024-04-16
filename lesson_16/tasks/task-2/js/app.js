// Задача 2. Створити клас TMoney для роботи з грошовими сумами.
// Сума повинна зберігатися у вигляді доларового еквіваленту.
// Реалізувати методи додавання/вилучення грошової маси, вказуючи необхідну суму у гривнях,
// та визначення курсу долара, при якому сума у гривнях збільшиться на 100. Курс долара зберігати в окремому полі.

//Клас створення обмінника гривні та доллара
class TMoney {
	#cashUSD;
	#cashUAH;
	#dollarRateBuy;
	#dollarRateSell;
	#historyRate;
	constructor(cashUSD, cashUAH, dollarRateBuy = 38, dollarRateSell = 37.5, historyRate = []) {
		this.CashUSD = cashUSD;
		this.CashUAH = cashUAH;
		this.#dollarRateBuy = dollarRateBuy;
		this.#dollarRateSell = dollarRateSell;
		this.#historyRate = historyRate;
	}
	work() {
		let answer = true
		while (answer) {
			answer = false
			answer = parseInt(
				prompt(`
			Привіт.Вітаю у нашому обміннику.\n Курс валюти сьогодні такий: \n ${this.toString()}
			Якщо бажаєш купити у нас USD, натисни 1.\n Якщо бажаєш продати USD, натисни 2 \n
			Якщо не бажаєш нічого обміняти натисни 0
		`)
			);
			if (answer === 1) {
				let sum = parseFloat(prompt(`На скільки гривень ти хочеш купити USD?`));
				let result = this.buyCashUSD(sum);
				alert(`${result}`);
			} else if (answer === 2) {
				let sum = parseFloat(prompt(`Скільки USD бажаєш продати?`));
				let result = this.buyCashUAN(sum);
				alert(`${result}`);
			}else alert(`Бувай`)
		} 
	}
	//змінити курс
	changeRate(buy, sell, code) {
		const CodeSecurity = 2367;
		if (code === CodeSecurity) {
			this.#historyRate.push([this.#dollarRateBuy, this.#dollarRateSell]);
			this.#dollarRateBuy = buy;
			this.#dollarRateSell = sell;
		} else throw new Error(`У вас немає доступу до зміни курсу валюти`);
	}
	set CashUSD(cashUSD) {
		if (cashUSD < 0) throw new Error(`Щось пішло не так`);
		this.#cashUSD = cashUSD;
	}
	get CashUSD() {
		return this.#cashUSD;
	}
	set CashUAH(cashUAH) {
		if (cashUAH < 0) throw new Error(`Щось пішло не так`);
		this.#cashUAH = cashUAH;
	}
	get CashUAH() {
		return this.#cashUAH;
	}
	//купити USD
	buyCashUSD(uah) {
		let hrnInDollar = Math.floor((uah / this.#dollarRateBuy) * 100) / 100;
		if (hrnInDollar <= this.#cashUSD) {
			this.#cashUSD = Math.ceil((this.#cashUSD - hrnInDollar) * 100) / 100;
			this.#cashUAH += uah;
			return `Ви придбали ${hrnInDollar} $`;
		}
		return `У нас немає стільки грошей`;
	}
	//купити UAH
	buyCashUAN(usd) {
		let UsdInUah = Math.floor(usd * this.#dollarRateSell * 100) / 100;
		if (UsdInUah <= this.#cashUAH) {
			this.#cashUAH = Math.ceil((this.#cashUAH - UsdInUah) * 100) / 100;
			this.#cashUSD += usd;
			return `Ви придбали ${UsdInUah} грн`;
		}
		return `У нас немає стільки грошей`;
	}
	toString() {
		return ` купівля USD : ${this.#dollarRateBuy}</br>
			 продаж USD : ${this.#dollarRateSell}</br>
			Залишок USD : ${this.#cashUSD}</br>
			Залишок UAH : ${this.#cashUAH}</br>`;
	}
}
const Bank = new TMoney(300, 10000);
Bank.work();
document.write(Bank);

// Створити клас Нагадувач. Кожні вказані кількості секунд (використати setInterval)
// програма нагадує про якусь подію (це просто текст) і також виводиться порядковий
// номер скільки раз вже нагадування було. Зробити так, щоб неможна було зробити одночасно
// декілька об’єктів-нагадувачів. Методи зупинки таймера, метод зміни повідомлення без зупинки таймера.
class Reminder {
	static #counter = 0;
	static remind;
	static get Counter() {
		return Reminder.#counter;
	}
	constructor(ms, event) {
		if (!Reminder.remind) {
			this.event = event;
			this.ms = ms;
			this.remind = setInterval(() => {
				Reminder.#counter++;
				document.write(`${this.event}<br>`);
				document.write(`${Reminder.#counter}<br>`);
			}, this.ms);
			Reminder.remind = this;
		} else return Reminder.remind;
	}
	changeEvent(newEvent) {
		this.event = newEvent;
	}
	stopInterval() {
		clearInterval(this.remind);
	}
}

let remind = new Reminder(3000, "Hello");
let remind2 = new Reminder(3000, "Bye");
console.log(remind);
setTimeout(() => {
	remind.changeEvent("Thanks");
}, 15000);
setTimeout(() => {
	remind.stopInterval();
}, 25000);

const body = document.body;
body.classList.add("body-date");
//task1
class ShowTime {
	constructor() {
		this.el = this.render();
		this.startTime = new Date();
	}
	render() {
		const wrap = document.createElement("div");
		wrap.classList.add("date-show__wrapper");
		const time = document.createElement("p");
		wrap.append(time);
		setInterval(() => {
			const showDate = new Date(2024, 4, 1, 0, 0, 0, Date.now() - this.startTime);
			let hours = `${showDate.getHours()}`.length === 1 ? `0${showDate.getHours()}` : showDate.getHours();
			let minutes = `${showDate.getMinutes()}`.length === 1 ? `0${showDate.getMinutes()}` : showDate.getMinutes();
			let seconds = `${showDate.getSeconds()}`.length === 1 ? `0${showDate.getSeconds()}` : showDate.getSeconds();
			time.innerText = `${hours}:${minutes}:${seconds}`;
		}, 200);
		return wrap;
	}
}

//task2
class EmptyInput extends Error {
	constructor() {
		super();
		this.message = "Поля вводу не повинні бути пусті";
	}
}
class WrongHour extends Error {
	constructor() {
		super();
		this.message = "Поле з годинами повинне мати значення менше за 24 і не менше за 0";
	}
}
class WrongMinutes extends Error {
	constructor() {
		super();
		this.message = "Поле з минутами повинне мати значення менше за 60 і не менше за 0";
	}
}
class CheckProcedur {
	constructor() {
		this.el = this.render();
	}
	eventCheck() {
		const date = new Date();
		if (this.inputHour.value.length === 0 || this.inputMinute.value.length === 0) throw new EmptyInput();
		if (parseInt(this.inputHour.value) < 0 || parseInt(this.inputHour.value) > 23) throw new WrongHour();
		if (parseInt(this.inputMinute.value) < 0 || parseInt(this.inputMinute.value) > 59) throw new WrongMinutes();

		const endProcedur = new Date(2024, 1, 1, this.inputHour.value, this.inputMinute.value);
		endProcedur.setMinutes(endProcedur.getMinutes() + 30);
		let minutesNow = date.getHours() * 60 + date.getMinutes();
		let minStartProc = endProcedur.getHours() * 60 + endProcedur.getMinutes() - 30;
		let minEndProc = endProcedur.getHours() * 60 + endProcedur.getMinutes();
		if (minutesNow >= minStartProc && minutesNow <= minEndProc) this.result.innerText = "Процедура ще триває";
		else this.result.innerText = "Процедура зараз не триває";
		this.inputHour.value = "";
		this.inputMinute.value = "";
	}
	render() {
		const wrap = document.createElement("form");
		wrap.setAttribute("action", "#");
		wrap.classList.add("check-proc");
		const title = document.createElement("h2");
		title.style.fontSize = "14px";
		title.innerText = "Вводимо час початку процедури (процедура триває 30хв).Визначити, чи процедура ще триває.";
		const wrapHour = document.createElement("div");
		const labelHour = document.createElement("label");
		labelHour.innerText = "Enter hour";
		this.inputHour = document.createElement("input");
		this.inputHour.setAttribute("type", "number");

		wrapHour.append(labelHour, this.inputHour);
		const wrapMinute = document.createElement("div");
		const labelMinute = document.createElement("label");
		labelMinute.innerText = "Enter minutes";
		this.inputMinute = document.createElement("input");
		this.inputMinute.setAttribute("type", "number");
		wrapMinute.append(labelMinute, this.inputMinute);

		const buttonCheck = document.createElement("input");
		buttonCheck.value = "check";
		buttonCheck.setAttribute("type", "submit");
		buttonCheck.addEventListener("click", () => {
			try {
				this.eventCheck();
			} catch (error) {
				alert(error.message);
				if (error instanceof WrongHour) this.inputHour.value = "";
				if (error instanceof WrongMinutes) this.inputMinute.value = "";
			}
		});
		this.result = document.createElement("p");
		wrap.append(title, wrapHour, wrapMinute, buttonCheck, this.result);
		return wrap;
	}
}
//task3
//Задача 3. Визначити скільки залишилось до кінця робочого дня (до 17.00)
class CheckEndWorkDay {
	constructor() {
		this.el = this.render();
	}
	eventCheck() {
		const dateNow = new Date();
		const hour = dateNow.getHours();
		const minutes = dateNow.getMinutes();
		const res = 17 * 60 - (hour * 60 + minutes);
		if (res <= 0) this.result.innerText = `Робочий день закінчився`;
		else {
			const resHour = Math.floor(res / 60);
			const resMinutes = res % 60;
			this.result.innerText = `До кінця робочого дня залишилось ${resHour} год, ${resMinutes} мин`;
		}
	}
	render() {
		const checker = document.createElement("div");
		checker.classList.add("checker");
		const title = document.createElement("h2");
		title.style.fontSize = "14px";
		title.innerText = "Визначити скільки залишилось до кінця робочого дня (до 17.00)";
		this.result = document.createElement("p");
		const button = document.createElement("button");
		button.innerText = "Check";
		button.addEventListener("click", () => this.eventCheck());
		checker.append(title, button, this.result);

		return checker;
	}
}
//Задача 4. Створити функцію, яка дозволяє визначити, чи знаходиться вказана дата і
//час у межах поточного тижня (від понеділка 0 год, 0хв, до неділі 23год.59хв)
class CheckDataInRate {
	constructor() {
		this.inputs = [];
		this.el = this.render();
	}
	createEnterBlock(innerText) {
		const wrap = document.createElement("form");
		const label = document.createElement("label");
		label.innerText = innerText;
		const input = document.createElement("input");
		this.inputs.push(input);
		input.type = "number";
		wrap.append(label, input);
		return wrap;
	}
	eventCheckDate() {
		const [inputYear, inputMonth, inputDay, inputHour, inputMinute] = this.inputs;
		const date = new Date(inputYear.value, inputMonth.value, inputDay.value, inputHour.value, inputMinute.value);
		if (
			inputYear.value.length === 0 ||
			inputMonth.value.length === 0 ||
			inputDay.value.length === 0 ||
			inputHour.value.length === 0 ||
			inputMinute.value.length === 0
		)
			throw new EmptyInput();
		const startCurrentWeek = new Date();
		const endCurrentWeek = new Date();
		while (startCurrentWeek.getDay() !== 1) startCurrentWeek.setHours(-22);
		while (endCurrentWeek.getDay() !== 0) endCurrentWeek.setHours(endCurrentWeek.getHours() + 22);
		endCurrentWeek.setHours(23, 59, 59, 999);
		startCurrentWeek.setHours(0, 0, 0, 0);
		if (date > startCurrentWeek && date < endCurrentWeek)
			this.result.innerText = "Вказана дата знаходиться в межах поточного тижня";
		else this.result.innerText = "Вказана дата не знаходиться в межах поточного тижня";
	}
	render() {
		const wrap = document.createElement("div");
		wrap.classList.add("check-rate");
		const title = document.createElement("h2");
		title.style.fontSize = "14px";
		title.innerText = `Створити функцію, яка дозволяє визначити,
         чи знаходиться вказана дата і час у межах поточного тижня (від понеділка 0 год, 0хв, до неділі 23год.59хв)`;
		const button = document.createElement("button");
		button.addEventListener("click", () => {
			try {
				this.eventCheckDate();
			} catch (error) {
				alert(error.message);
			}
		});
		button.innerText = "Check";
		this.result = document.createElement("p");
		wrap.append(
			title,
			this.createEnterBlock("Enter year"),
			this.createEnterBlock("Enter month"),
			this.createEnterBlock("Enter day"),
			this.createEnterBlock("Enter hour"),
			this.createEnterBlock("Enter minutes"),
			button,
			this.result
		);
		return wrap;
	}
}
//Задача 5. При заході на сайт вітати користувача або відображати повідомлення про те,
//скільки хвилин залишилось до початку робочого дня (початок о 8.00).
class StartDay {
	constructor() {
		this.el = this.render();
	}
	render() {
		const wrap = document.createElement("div");
		wrap.classList.add("start-day");
		const message = document.createElement("p");
		wrap.append(message);
		const dateNow = new Date();
		if (dateNow.getHours() >= 17) message.innerText = "Вітаю!!! Робочий день вже закінчився";
		else if (dateNow.getHours() >= 8) message.innerText = "Вітаю!!! Робочий день вже розпочався";
		else {
			const startWorkDay = new Date();
			startWorkDay.setHours(8, 0, 0, 0);
			const resMilliseconds = new Date(2024, 1, 1, 0, 0, 0, startWorkDay - dateNow);
			message.innerText = `До початку робочого дня залишилося ${resMilliseconds.getHours()}год. та ${resMilliseconds.getMinutes()}мин.`;
		}
		return wrap;
	}
}
//Задача 6. Вивести скільки зараз годин у Лондоні, Парижі, Сіднеї.
class ShowTimeInAnyCountry {
	constructor() {
		this.el = this.render();
	}
	render() {
		const wrap = document.createElement("div");
		const timeInLondon = document.createElement("p");
		const timeInParis = document.createElement("p");
		const timeInSidney = document.createElement("p");
		wrap.classList.add("start-day");
		const dateNow = new Date();
		timeInLondon.innerText = `У Лондоні зараз ${dateNow.getUTCHours() + 1}год. ${dateNow.getMinutes()}хв.`;
		timeInParis.innerText = `У Парижі зараз ${dateNow.getUTCHours() + 2}год. ${dateNow.getMinutes()}хв`;
		const timeInSid = dateNow.getUTCHours() + 10 >= 24 ? dateNow.getUTCHours() + 10 - 24 : dateNow.getUTCHours() + 10;
		timeInSidney.innerText = `У Сіднеї зараз ${timeInSid}год. ${dateNow.getMinutes()}хв`;
		wrap.append(timeInLondon, timeInParis, timeInSidney);
		return wrap;
	}
}
//Задача 7. Дано список студентів (ім’я і дата народження: у формі тексту (день.місяць.рік). Знайти найстаршого студента
let studentsList = [
	{
		name: "Ivan",
		birthday: "4.4.2005"
	},
	{
		name: "Petro",
		birthday: "4.9.2001"
	},
	{
		name: "John",
		birthday: "26.4.2005"
	}
];
class SearchOlderStudent {
	constructor(studentsList) {
		this.studentsList = studentsList;
		this.result = this.work();
	}
	work() {
		this.studentsList.sort((a, b) => {
			let dateA = new Date(a.birthday);
			let dateB = new Date(b.birthday);
			return dateA - dateB;
		});
		return this.studentsList[0];
	}
}
//Задача 8. Визначити скільки пройшло секунд після заходу на сайт перш ніж користувач зробив рух мишкою.
class FirstMoveMouse {
	constructor() {
		this.check = true;
		this.el = this.render();
	}
	render() {
		const dateNow = new Date();
		const wrap = document.createElement("div");
		wrap.classList.add("start-day");
		window.addEventListener("mousemove", () => {
			if (!this.check) return;
			wrap.innerText = `Після заходу на сайт перш ніж ви поворушили мишкою пройшло ${Math.floor(
				(Date.now() - dateNow) / 1000
			)}сек`;
			this.check = false;
		});
		return wrap;
	}
}
//Задача  9. Користувачка планувала оформила дектретну відпустку на 200 днів
//(дата початку відпустки вводиться). Визначити чи відпустка вже триває і чи не закінчилась.
class Holliday extends CheckDataInRate {
	constructor() {
		super();
		this.inputs = [];
		this.el = this.render();
	}
	eventCheckHolliday() {
		console.log(this.inputs);
		const [inputYear, inputMonth, inputDay] = this.inputs;
		const dateNow = new Date();
		const dateStartHolliday = new Date(inputYear.value, inputMonth.value, inputDay.value);
		const dateEndHolliday = new Date(inputYear.value, inputMonth.value, inputDay.value);
		dateEndHolliday.setDate(dateEndHolliday.getDate() + 200);
		if (dateStartHolliday > dateNow) this.result.innerText = "Відпустка ще не розпочалася";
		else if (dateEndHolliday < dateNow) this.result.innerText = "Відпустка вже закінчилась";
		else this.result.innerText = "Відпустка ще триває";
		inputYear.value = "";
		inputMonth.value = "";
		inputDay.value = "";
	}
	render() {
		const wrap = document.createElement("div");
		const title = document.createElement("h3");
		title.style.fontSize = "14px";
		title.innerText = `Користувачка планувала оформила дектретну відпустку на 200 днів(дата початку відпустки вводиться). 
		Визначити чи відпустка вже триває і чи не закінчилась.`;
		wrap.classList.add("start-day");
		const button = document.createElement("button");
		button.innerText = "Check";
		button.addEventListener("click", () => this.eventCheckHolliday());
		this.result = document.createElement("p");

		wrap.append(
			title,
			this.createEnterBlock("Enter year"),
			this.createEnterBlock("Enter month"),
			this.createEnterBlock("Enter day"),
			button,
			this.result
		);
		return wrap;
	}
}
//Задача 10 . Дано дата виробництва йогурта (вводимо рік, місяць, день)
//та кількість днів придатності. Визначити чи є він придатним на даний момент.

class CheckTermin extends CheckDataInRate {
	constructor() {
		super();
		this.inputs = [];
		this.el = this.render();
	}
	checkTermin() {
		const [inputYear, inputMonth, inputDay, inputTermDays] = this.inputs;
		const termDate = new Date(inputYear.value, inputMonth.value, inputDay.value);
		termDate.setDate(termDate.getDate() + parseInt(inputTermDays.value));
		if (
			inputYear.value.length === 0 ||
			inputMonth.value.length === 0 ||
			inputDay.value.length === 0 ||
			inputTermDays.value.length === 0
		)
			throw new EmptyInput();
		if (termDate < Date.now()) this.result.innerText = "Термін придатності товару вичерпано";
		else this.result.innerText = "Термін придатності ще не вичерпано";
		this.inputs.forEach((item) => (item.value = ""));
	}
	render() {
		const wrap = document.createElement("div");
		wrap.classList.add("start-day");
		const title = document.createElement("h3");
		title.style.fontSize = "14px";
		title.innerText = `Дано дата виробництва йогурта (вводимо рік, місяць, день)
 		та кількість днів придатності. Визначити чи є він придатним на даний момент.`;
		const button = document.createElement("button");
		button.innerText = "Check";
		button.addEventListener("click", () => {
			try {
				this.checkTermin();
			} catch (error) {
				alert(error.message);
			}
		});
		this.result = document.createElement("p");
		wrap.append(
			title,
			this.createEnterBlock("Enter year"),
			this.createEnterBlock("Enter month"),
			this.createEnterBlock("Enter day"),
			this.createEnterBlock("Enter days termin"),
			button,
			this.result
		);
		return wrap;
	}
}
//Задача 12. Сформувати масив з 1000 елементів від 1 до 800. Порівняти час сортування бульбашкою і  вставкою.
class CheckSort {
	constructor(countNumbers = 100, maxValueOfNumber = 100) {
		this.count = countNumbers;
		this.max = maxValueOfNumber;
		this.arrNumbers = this.generateArr();
	}
	generateArr() {
		let arrNumbers = [];
		for (let i = 0; i < this.count; i++) {
			const randomNum = 1 + Math.floor(Math.random() * this.max);
			this.arrNumbers.push(randomNum);
		}
		return arrNumbers;
	}
	sortBubbles() {
		const dateStart = new Date();

	}
	sortEnter() {
		const dateStart = new Date();
		
	}
}
try {
	const searchStudents = new SearchOlderStudent(studentsList);
	console.log(searchStudents.studentsList);
	console.log(searchStudents.result);
	//const curentTime = new ShowTime();
	const checker = new CheckProcedur();
	const checkEndWorkDay = new CheckEndWorkDay();
	const checkDate = new CheckDataInRate();
	const startDay = new StartDay();
	const showTime = new ShowTimeInAnyCountry();
	const moveMouse = new FirstMoveMouse();
	const holliday = new Holliday();
	const termin = new CheckTermin();
	body.append(
		moveMouse.el,
		startDay.el,
		showTime.el,
		checkDate.el,
		holliday.el,
		termin.el,
		checker.el,
		checkEndWorkDay.el
	);
} catch (error) {
	alert(error.message);
	console.log(error);
}

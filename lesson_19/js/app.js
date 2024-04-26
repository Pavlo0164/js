"use strict";
// Задача 1. Дано 10 рядків тексту «Hello!» у окремих div.
// При кліку на якийсь із них усі наступні повинні бути зафарбовані у червоний колір.

// Задача 3. Дано 5 випадковим чином згенерованих нумерованих списків з рандомними числами
// (кількість елементів у списку випадкова від 1 до 10, елементи випадкові – від 1 до 100).
// При натисненні на кнопку нумеровані списки з парною кількістю елементів зафарбувати у зелений колір, інші у червоний.

// Задача 4. Дано 3 таблиці розмірності 3*3 з випадковими числами.
// Якщо відбувається клік на якійсь із клітинок,
// то до відповідної таблиці додається червона рамка
// (спробуйте додати можливість відображення кількості кліків біля назви таблиці
//      з використанням відповідно доданого для цього атрибута).

// Задача 5. Відображаємо картки товарів, які користувач може вибирати.
//  Вибраний товар має зелену рамку (при кліку робити toogle з класом вибраного елемента)

// Задача 6. Дано список спортсменів.
//  Потрібно сформувати список тих, які будуть брати участь у змаганні.
//   При цьому є два стовпці. В одному відображені всі спортсмени,
//    в іншому – список тих, хто був вибраний.
//    При натисканні на зелену стрілку спортсмен переміщається у список для змагань.
//     При натисканні на червону стрілку спортсмен переміщається у загальний список.

// 7. Задача 1. Відобразити падаючий сніг.
//  Сніжинка з’являється у верхній частині екрану (top =0) і з
//   випадковою швидкістю рухається вниз (у setInterval викликати метод,
// 	 у якому додавати крок до top). Як тільки сніжинка досягає нижньої частини екрану (top>maxTop)
// 	  вона знову повинна з’явитись у верхній частині екрану (top=0).

const buttonsWrapper = document.querySelector(".main__tasks");
const wrapperResult = document.querySelector(".main__wrapper-result");
//task 6
let players = [
	{
		name: "Ivan",
		surname: "Butulka"
	},
	{
		name: "Petro",
		surname: "Black"
	},
	{
		name: "John",
		surname: "White"
	},
	{
		name: "Olga",
		surname: "Plama"
	},
	{
		name: "Kola",
		surname: "Coca"
	},
	{
		name: "Pepsi",
		surname: "Pups"
	}
];
class Player {
	static linkRedArrow = "../img/red-arrow.svg";
	static linkGreenArrow = "../img/green-arrow.svg";
	constructor(name, surname) {
		this.greenArrowLink = Player.linkGreenArrow;
		this.redArrowLink = Player.linkRedArrow;
		this.name = name;
		this.surname = surname;
		this.el = this.render();
	}
	createName() {
		const namePlayer = document.createElement("h2");
		namePlayer.innerText = `${this.name} ${this.surname}`;
		return namePlayer;
	}
	onclick() {
		const event = new CustomEvent("eventArrow", {
			detail: {
				player: this.el,
				greenArrow: this.greenArrowLink,
				redArrow: this.redArrowLink,
				name: this.name,
				surname: this.surname,
				positionEvent: this.arrow.getAttribute("src") === this.greenArrowLink ? "left" : "right"
			},
			bubbles: true
		});
		this.el.dispatchEvent(event);
	}
	createArrow() {
		const arrowWrapper = document.createElement("button");
		this.arrow = document.createElement("img");
		this.arrow.addEventListener("click", this.onclick.bind(this));
		arrowWrapper.append(this.arrow);
		this.arrow.setAttribute("src", this.greenArrowLink);
		return arrowWrapper;
	}
	render() {
		const container = document.createElement("div");
		container.classList.add("player");
		container.append(this.createName(), this.createArrow());
		return container;
	}
}
class StockPlayers {
	constructor(listPlayers) {
		this.players = listPlayers;
		this.el = this.render();
	}
	render() {
		const wrap = document.createElement("div");
		wrap.classList.add("stock-players");
		const title = document.createElement("h2");
		title.innerText = "Загальний список";
		wrap.append(title);
		for (const play of this.players) {
			let player = new Player(play.name, play.surname);
			wrap.append(player.el);
		}
		return wrap;
	}
}
class CheckedPlayerStock {
	constructor() {
		this.el = this.render();
	}
	render() {
		const rightStock = document.createElement("div");
		const title = document.createElement("h2");
		title.innerText = "Обранні для змагання";
		rightStock.append(title);
		return rightStock;
	}
}
class ManagerPlayers {
	constructor(players) {
		this.players = players;
		this.el = this.render();
	}
	eventArrow(event, manager) {
		const { player, greenArrow, redArrow, name, surname, positionEvent } = event.detail;
		const copyPlayer = new Player(name, surname);
		const el = copyPlayer.el;
		player.remove();
		if (positionEvent === "left") {
			copyPlayer.arrow.classList.add("rotate-arrow");
			copyPlayer.arrow.setAttribute("src", redArrow);
			manager.lastChild.append(el);
		} else {
			copyPlayer.arrow.classList.remove("rotate-arrow");
			copyPlayer.arrow.setAttribute("src", greenArrow);
			manager.firstChild.append(el);
		}
	}
	render() {
		const manager = document.createElement("div");
		manager.addEventListener("eventArrow", (event) => {
			this.eventArrow(event, manager);
		});
		manager.classList.add("manager");
		const leftStock = new StockPlayers(this.players);
		const rightStock = new CheckedPlayerStock();
		manager.append(leftStock.el, rightStock.el);
		return manager;
	}
}
//task 5
class Flower {
	constructor(span, image, title, price) {
		this.span = span;
		this.imageUrl = image;
		this.title = title;
		this.price = price;
	}
}
let flowers = [
	new Flower("TOP", "../img/image-1.jpeg", "Title1", "200.99"),
	new Flower("NEW", "../img/image-2.jpeg", "Title2", "100.99"),
	new Flower("TOP", "../img/image-3.jpeg", "Title3", "300.99"),
	new Flower("TOP", "../img/image-4.jpeg", "Title4", "500.99")
];
class Snow {
	constructor(urlSnow, countSnow) {
		this.urlSnow = urlSnow;
		this.countSnow = countSnow;
		this.el = this.render();
	}
	createSnow() {
		const snowWrap = document.createElement("div");
		this.snows.push(snowWrap);

		snowWrap.classList.add("snow");
		let randomPos = Math.floor(Math.random() * 100);
		snowWrap.style.left = `${randomPos}%`;
		const snow = document.createElement("img");
		snow.setAttribute("src", this.urlSnow);
		snowWrap.append(snow);

		return snowWrap;
	}
	work() {
		this.snows.forEach((item) => {
			let top = -20;
			let randomNum = 15 + Math.floor(Math.random() * 40);
			const works = () => {
				if (top === 100) top = 0;
				item.style.top = `${top + 1}%`;
				top += 1;
			};
			setInterval(works, randomNum);
		});
	}
	render() {
		const container = document.createElement("div");
		container.classList.add("snow-container");
		this.snows = [];
		for (let i = 0; i < this.countSnow; i++) {
			container.append(this.createSnow());
		}
		this.work();
		return container;
	}
}

//---------------------------------------------------------
buttonsWrapper.addEventListener("click", (event) => {
	//додавання класу активній кнопці
	const buttons = buttonsWrapper.children;
	for (const button of buttons) {
		if (button.classList.contains("active")) {
			button.classList.remove("active");
		}
	}
	const el = event.target;
	el.classList.add("active");
	//видалення вмісту з пепереднього завдання , якщо він є
	const childrenWrapper = wrapperResult.firstElementChild;
	if (childrenWrapper !== null) {
		childrenWrapper.remove();
	}
	//додаткова оболонка результату
	const wrap = document.createElement("div");
	wrap.style.height = "900px";
	wrapperResult.append(wrap);
	//task 1
	if (el.classList.contains("main__task-1")) {
		for (let i = 0; i < 10; i++) {
			const div = document.createElement("div");
			div.classList.add("task-one");
			div.innerText = "HELLO";
			wrap.prepend(div);
		}
	}
	//task2
	else if (el.classList.contains("main__task-2")) {
		for (let i = 0; i < 5; i++) {
			const label = document.createElement("label");
			label.innerText = `Value ${i + 1}`;
			const input = document.createElement("input");
			input.classList.add("input-task-2");
			input.type = "number";
			label.append(input);
			wrap.append(label);
		}
	}
	//task3
	else if (el.classList.contains("main__task-3")) {
		for (let i = 0; i < 5; i++) {
			const olElement = document.createElement("ol");
			const randomNumElem = 1 + Math.floor(Math.random() * 10);
			for (let j = 0; j < randomNumElem; j++) {
				const randomNum = 1 + Math.floor(Math.random() * 100);
				const liElement = document.createElement("li");
				liElement.classList.add("li-task-3");
				liElement.innerText = `${j + 1}. ${randomNum}`;
				olElement.append(liElement);
			}
			wrap.classList.add("task-3");
			wrap.append(olElement);
		}
		const buttonResTaskThree = document.createElement("button");
		buttonResTaskThree.classList.add("button-task-3");
		buttonResTaskThree.innerText = "change";
		wrap.append(buttonResTaskThree);
	}
	//task4
	else if (el.classList.contains("main__task-4")) {
		const wrapTable = document.createElement("div");
		for (let i = 0; i < 3; i++) {
			const table = document.createElement("table");
			const counter = document.createElement("span");
			counter.innerText = "Counter click on the table: 0";
			table.classList.add("table-task-4");
			table.setAttribute("counter", "0");
			for (let p = 0; p < 3; p++) {
				const tr = document.createElement("tr");
				for (let j = 0; j < 3; j++) {
					const randomNum = 1 + Math.floor(Math.random() * 99);
					const td = document.createElement("td");
					td.innerText = randomNum;
					td.classList.add("td-task-4");
					tr.append(td);
				}
				table.append(tr);
			}
			wrapTable.append(counter, table);
		}
		wrap.append(wrapTable);
	}
	//task5
	else if (el.classList.contains("main__task-5")) {
		for (let i = 0; i < flowers.length; i++) {
			const cardProduct = document.createElement("div");
			cardProduct.classList.add("card-task-5");
			const span = document.createElement("span");
			span.innerText = `${flowers[i].span}`;

			const imageWrap = document.createElement("div");
			const image = document.createElement("img");
			image.setAttribute("src", `${flowers[i].imageUrl}`);
			imageWrap.append(image);

			const title = document.createElement("h2");
			title.innerText = `${flowers[i].title}`;
			const price = document.createElement("p");
			price.innerText = `${flowers[i].price}`;

			cardProduct.append(span, imageWrap, title, price);
			wrap.append(cardProduct);
			wrap.classList.add("wrap-task-5");
		}
	}
	//task6
	else if (el.classList.contains("main__task-6")) {
		const manager = new ManagerPlayers(players);

		wrap.append(manager.el);
	}
	//test
	else if (el.classList.contains("main__task-7")) {
		const snow = new Snow("../img/snow.svg", 100);
		wrap.append(snow.el);
	}
});
//task 5
wrapperResult.addEventListener("click", (event) => {
	const clickEl = event.target;
	if (clickEl.closest(".card-task-5")) {
		const card = clickEl.closest(".card-task-5");
		card.classList.toggle("active-task-5");
		let cards = card.parentElement.children;
		for (const item of cards) {
			if (item !== card) item.classList.remove("active-task-5");
		}
	}
});
//task 4
wrapperResult.addEventListener("click", (event) => {
	const clickEl = event.target;
	if (clickEl.classList.contains("td-task-4")) {
		const parentTable = clickEl.closest("table");
		if (parentTable !== null) {
			let prevValueAtr = parseInt(parentTable.getAttribute("counter"));
			parentTable.setAttribute("counter", `${prevValueAtr + 1}`);
			parentTable.previousElementSibling.innerText = `Counter click on the table: ${prevValueAtr + 1}`;
			parentTable.style.outline = "2px solid red";
			let copyParentTable = parentTable;
			let copyParentTable2 = parentTable;
			while (copyParentTable.previousElementSibling !== null) {
				copyParentTable = copyParentTable.previousElementSibling;
				copyParentTable.style.outline = "none";
			}
			while (copyParentTable2.nextElementSibling !== null) {
				copyParentTable2 = copyParentTable2.nextElementSibling;
				copyParentTable2.style.outline = "none";
			}
		}
	}
});
//task 3
wrapperResult.addEventListener("click", (event) => {
	const clickElem = event.target;
	if (clickElem.classList.contains("button-task-3")) {
		const olLists = document.querySelectorAll("ol");
		for (const olList of olLists) {
			const liElements = olList.children;
			for (const li of liElements) {
				if (liElements.length % 2 === 0) li.style.background = "green";
				else li.style.background = "red";
			}
		}
	}
});
//task 2
wrapperResult.addEventListener("focusin", (event) => {
	const elem = event.target;
	elem.addEventListener("input", (e) => {
		const el = e.target;
		if (el.classList.contains("input-task-2")) {
			const parentLabel = el.parentElement;
			if (el.value) {
				let inputValue1 = parseInt(el.value);
				let inputValue2 = parseInt(el.value);
				let prevEl = parentLabel.previousElementSibling;
				let nextEl = parentLabel.nextElementSibling;
				while (prevEl !== null) {
					prevEl.firstElementChild.value = inputValue1 - 1;
					inputValue1--;
					prevEl = prevEl.previousElementSibling;
				}
				while (nextEl !== null) {
					nextEl.firstElementChild.value = inputValue2 + 1;
					inputValue2++;
					nextEl = nextEl.nextElementSibling;
				}
			}
		}
	});
});
//task 1
wrapperResult.addEventListener("click", (event) => {
	const clickElem = event.target;
	if (clickElem.classList.contains("task-one")) {
		let currentElem = clickElem;
		let currentElem2 = clickElem;
		currentElem.style.color = "red";
		while (currentElem.nextElementSibling !== null) {
			currentElem = currentElem.nextElementSibling;
			currentElem.style.color = "red";
		}
		while (currentElem2.previousElementSibling !== null) {
			currentElem2 = currentElem2.previousElementSibling;
			currentElem2.style.color = "black";
		}
	}
});

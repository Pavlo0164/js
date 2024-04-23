// Задача 7. Подорож складається з 3 етапів.
//  На кожному етапі користувач може вибрати один з видів транспорту
//   (авто, автобус, літак - випадаючий список),
//   харчування (сніданок, обід, вечеря – checkbоx) та
//    одного з 3-х гідів(використати  - radio buttons).
//     Ціни визначте самі. Підрахувати загальну вартість.

const body = document.body;
const wrapper = document.createElement("div");
wrapper.classList.add("wrapper");
wrapper.style.padding = "30px";
wrapper.style.fontSize = "30px";
body.prepend(wrapper);

const stepOne = document.createElement("div");
const stepTwo = document.createElement("div");
const stepThree = document.createElement("div");
wrapper.append(stepOne, stepTwo, stepThree);

const titleOne = document.createElement("h2");
titleOne.innerText = "Виберіть бажаний вид транспорту для подорожування";
const titleTwo = document.createElement("h2");
titleTwo.innerText = "Виберіть бажані прийоми їжі";
const titleThree = document.createElement("h2");
titleThree.innerText = "Оберіть собі гіда";
/*============================================================*/
const select = document.createElement("select");
select.style.fontSize = "25px";
select.style.width = "200px";

class Transport {
	constructor(name, cost) {
		this.name = name;
		this.cost = cost;
	}
}
class TransportsPark {
	constructor(arrTransports) {
		this.transports = arrTransports;
	}
}
const parkAuto = new TransportsPark([
	new Transport("Car", 100),
	new Transport("Bus", 400),
	new Transport("Plane", 2000)
]);
for (let i = 0; i < parkAuto.transports.length; i++) {
	const optTrans = document.createElement("option");
	optTrans.innerText = parkAuto.transports[i].name;
	optTrans.value = parkAuto.transports[i].cost;
	select.append(optTrans);
}
stepOne.append(titleOne, select);
/*==========================================================*/
class Meal {
	constructor(name, cost) {
		this.name = name;
		this.cost = cost;
	}
}
class StockMeal {
	constructor(arrMeals) {
		this.meals = arrMeals;
	}
}
const food = new StockMeal([new Meal("breakfast", 150), new Meal("monn", 250), new Meal("lunch", 200)]);

for (let i = 0; i < food.meals.length; i++) {
	const labelMeal = document.createElement("label");
	labelMeal.style.display = "block";
	const name = food.meals[i].name;
	labelMeal.innerText = name;
	const inputMeal = document.createElement("input");
	inputMeal.classList.add("meal");
	inputMeal.style.width = "20px";
	inputMeal.type = "checkbox";
	inputMeal.setAttribute("name", name);
	inputMeal.value = food.meals[i].cost;
	labelMeal.prepend(inputMeal);
	stepTwo.append(labelMeal);
}
stepTwo.prepend(titleTwo);
/*==============================================*/
stepThree.append(titleThree);
for (let i = 0; i < 3; i++) {
	const labelGid = document.createElement("label");
	labelGid.style.display = "block";
	labelGid.innerText = `Gid ${i + 1}`;
	const inputGid = document.createElement("input");
	inputGid.classList.add("gids");
	inputGid.style.width = "30px";
	inputGid.type = "radio";
	inputGid.name = "gids";
	inputGid.value = 100 + Math.floor(Math.random() * 400);
	labelGid.prepend(inputGid);
	stepThree.append(labelGid);
}
/*====================================================*/
const buttonResult = document.createElement("button");
buttonResult.innerText = "Розрахувати вартість";
buttonResult.classList.add("button-result");
wrapper.append(buttonResult);

buttonResult.onclick = function result() {
	const res = document.querySelector(".show-result");
	if (res) res.remove();
	let result = 0;
	result += parseInt(select.value);
	const meals = document.querySelectorAll(".meal");
	for (const meal of meals) {
		if (meal.checked) result += parseInt(meal.value);
	}
	const gids = document.querySelectorAll(".gids");
	for (const gid of gids) {
		if (gid.checked) result += parseInt(gid.value);
	}
	const showResult = document.createElement("div");
	showResult.innerText = `Вартість поїздки становить : ${result} грн`;
	showResult.classList.add("show-result");
	wrapper.append(showResult);
};

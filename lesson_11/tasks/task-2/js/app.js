function generateArray(shops, min, max, days = 7) {
	let arr = [];
	for (let i = 0; i < shops; i++) {
		let subArr = [];
		for (let j = 0; j < days; j++) {
			let num = min + Math.floor(Math.random() * (max - min) + 1);
			subArr.push(num);
		}
		arr.push(subArr);
	}
	return arr;
}
let historyPrice = generateArray(7, 1, 300);
console.log(historyPrice);
//Дано інформацію про прибуток К магазинів протягом тижня. Знайти :

//1) загальний прибуток кожного масиву за тиждень;
function commonCash(arr) {
	let everyShopCash = arr.map((item) => {
		sumCashOneEvery = item.reduce((prevSum, item) => (prevSum += item), 0);
		return sumCashOneEvery;
	});
	return everyShopCash;
}
document.write(`загальний прибуток кожного магазину за тиждень; </br>`);
let earnEveryShop = commonCash(historyPrice);
earnEveryShop.forEach((element, index) => {
	document.write(`Дохід магазину номер ${index + 1} становить : ${element} </br>`);
});

//2) загальний прибуток усіх магазинів по дням (загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.);
//monday, tuesday, wednesday, thursday, friday, saturday,sunday
function commonCashByOneDay(array) {
	let resultArr = new Array(7).fill(0);
	array.forEach((item, index) => {
		item.forEach((itemSub, indexSub) => {
			resultArr[indexSub] += itemSub;
		});
	});
	return resultArr;
}
let cashInEvenDay = commonCashByOneDay(historyPrice);
cashInEvenDay.forEach((item, index) => {
	document.write(`Дохід магазинів за день номер ${index + 1} становить : ${item} </br>`);
});
//загальний прибуток за робочі дні

function getSumCashWorksDay(array) {
	let resultSum = array.reduce((prevSum, item) => {
		let sumOneShop = 0;
		for (let i = 0; i < 5; i++) {
			sumOneShop += item[i];
		}
		return (prevSum += sumOneShop);
	}, 0);
	return resultSum;
}

document.write(`
	Загальний прибуток магазинів за робочі дні становить : ${getSumCashWorksDay(historyPrice)}</br>
`);
//4) загальний прибуток за вихідні дні
function getSumCashHolidayDay(array) {
	let resultSum = array.reduce((prevSum, item) => {
		let sumOneShop = 0;
		for (let i = 5; i < 7; i++) {
			sumOneShop += item[i];
		}
		return (prevSum += sumOneShop);
	}, 0);
	return resultSum;
}
document.write(`
	Загальний прибуток магазинів за не робочі дні становить : ${getSumCashHolidayDay(historyPrice)}</br>
`);

//5) максимальний прибуток за середу
function bigCashInWednesday(array) {
	let maxCash = -Infinity;
	array.forEach((item) => {
		if (item[2] > maxCash) maxCash = item[2];
	});
	return maxCash;
}
document.write(`Максимальний прибуток за середу становить:${bigCashInWednesday(historyPrice)}</br>`);
//6) сформувати загальний список (одновимірний масив) зі значенням, які що більші за 200

function cashThatOverIn200(array) {
	let newCashOver200 = [];
	array.flat().forEach((item) => {
		if (item > 200) newCashOver200.push(item);
	});
	return newCashOver200;
}
document.write(`Список зі значеннями які більші за 200 :${cashThatOverIn200(historyPrice)} </br>`);

//7) відсортувати кожен тиждень за зростанням
function sortEveryWeekIncrease(array) {
	array.forEach((item) => {
		item.sort((a, b) => a - b);
	});
	return array;
}
let sortedArrayPrices = sortEveryWeekIncrease(historyPrice);
document.write(`Відсортований кожен тиждень за зростанням : </br>`);
sortedArrayPrices.forEach((elem, index) => {
	document.write(`Тиждень номер ${index + 1} : ${elem} </br>`);
});
//8) відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку),
//тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків
function sortEveryWeekInDown(array) {
	array.sort((a, b) => {
		let aMax = Math.max(...a);
		let bMax = Math.max(...b);
		return bMax - aMax;
	});
	return array;
}
let sortedWeekInDown = sortEveryWeekInDown(historyPrice);
document.write(`Відсортовані тижні за спаданням відносно найбільшого значення у кожному тижні:</br>`);
sortedWeekInDown.forEach((element, index) => {
	document.write(`Тиждень номер ${index + 1} : ${element}</br>`);
});
//8) упорядкувати тижні (рядки) за спаданням суми елементів у рядку
//(тобто при порівнянні двох рядків треба знайти суму кожного з рядків і порівнювати ці суми,
//на основі цих сум буде зрозуміло, який з елементів повинен іти раніше).
function sortEveryWeekInDownUseSumEveryDay(array) {
	array.sort((a, b) => {
		let aSum = a.reduce((prevSum, item) => (prevSum += item), 0);
		let bSum = b.reduce((prevSum, item) => (prevSum += item), 0);
		return bSum - aSum;
	});
	return array;
}
document.write(`Відсортовані тижні за спаданням суми елементів у рядку </br>`);
let sortedWeekInDownUseSumEveryDay = sortEveryWeekInDownUseSumEveryDay(historyPrice);

sortedWeekInDownUseSumEveryDay.forEach((item, index) => {
	document.write(`Тиждень номер ${index} :${item} </br>`);
});

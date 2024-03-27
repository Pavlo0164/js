document.write(
	`Задача 1. Знайти суми елементів у вказаній області </br>
	
`
);

function generateArray(row, column, max, min) {
	let arr = [];
	for (let i = 0; i < row; i++) {
		let subArr = [];
		for (let j = 0; j < column; j++) {
			let num = min + Math.floor(Math.random() * (max - min) + 1);
			subArr.push(num);
		}
		arr.push(subArr);
	}
	return arr;
}
let newArr = generateArray(2, 2, 1, 5);
console.log(newArr);
//Пункт1:номери рядків від 0 до половини, стовпці від 0 до половини
document.write("Пункт 1:номери рядків від 0 до половини, стовпці від 0 до половини ");
function getSumTopLeftHalf(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length / 2; i++) {
		for (let j = 0; j < arr[i].length / 2; j++) {
			sum += arr[i][j];
		}
	}
	return sum;
}

document.write(`:${getSumTopLeftHalf(newArr)} </br>`);

//номери рядків від 0 до половини, стовпці від половини до кінця
document.write("Пункт 2:номери рядків від 0 до половини, стовпці від половини до кінця");
function getSumTopRight(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length / 2; i++) {
		for (let j = Math.round((arr[i].length - 1) / 2); j < arr[i].length; j++) {
			sum += arr[i][j];
		}
	}
	return sum;
}
document.write(` :${getSumTopRight(newArr)}</br>`);

//номери рядків від половини до кінця, стовпці від 0 до половини
document.write("Пункт 3:номери рядків від половини до кінця, стовпці від 0 до половини");
function getSumBottomLeft(arr) {
	let sum = 0;
	for (let i = Math.round(arr.length / 2); i < arr.length; i++) {
		for (let j = 0; j < arr[i].length / 2; j++) {
			sum += arr[i][j];
		}
	}
	return sum;
}
document.write(` :${getSumBottomLeft(newArr)}</br>`);

//4) номери рядків від половини до кінця , стовпці від половини до кінця
document.write("Пункт 4:номери рядків від половини до кінця , стовпці від половини до кінця");
function getSumBottomRight(arr) {
	let sum = 0;
	for (let i = Math.round(arr.length / 2); i < arr.length; i++) {
		for (let j = Math.round(arr.length / 2); j < arr[i].length; j++) {
			sum += arr[i][j];
		}
	}
	return sum;
}
document.write(` :${getSumBottomRight(newArr)}</br>`);
//5) Суму парних рядків
document.write("Пункт 5:Сума парних рядків");
function getSumEvenRow(arr) {
	let sum = arr.reduce((prevSum, item, index) => {
		let subSum = item.reduce((prevSubSum, itemSub) => (index % 2 === 0 ? (prevSubSum += itemSub) : prevSubSum), 0);
		return (prevSum += subSum);
	}, 0);

	return sum;
}
document.write(` :${getSumEvenRow(newArr)}</br>`);

//6) Суму непарних стовпців
document.write("Пункт 6:Сума непарних стовпців");
function getSumOddColumn(arr) {
	let sum = arr.reduce((prevSum, item) => {
		let subSum = item.reduce(
			(prevSubSum, itemSub, index) => (index % 2 !== 0 ? (prevSubSum += itemSub) : prevSubSum),
			0
		);
		return (prevSum += subSum);
	}, 0);

	return sum;
}
document.write(` :${getSumOddColumn(newArr)}</br>`);

//7) У парних рядках – непарні стовпці, у непарних – парні.
document.write("У парних рядках – непарні стовпці, у непарних – парні");
function getSumReverse(arr) {
	let sum = arr.reduce((prevSum, item, index) => {
		let subSum = item.reduce((prevSubSum, itemSub, indexSub) => {
			if ((index % 2 === 0 && indexSub % 2 !== 0) || (index % 2 !== 0 && indexSub % 2 === 0))
				return (prevSubSum += itemSub);
			else return prevSubSum;
		}, 0);
		return (prevSum += subSum);
	}, 0);

	return sum;
}
document.write(` :${getSumReverse(newArr)}</br>`);

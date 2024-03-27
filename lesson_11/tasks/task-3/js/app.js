document.write(
	`Задача 1. Знайти суми елементів у вказаній області </br>
	Пункт1:номери рядків від 0 до половини, стовпці від 0 до половини 
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
let newArr = generateArray(4, 4, 3, 10);

function getSum(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length / 2; i++) {
		for (let j = 0; j < arr[i].length / 2; j++) {
			sum += arr[i][j];
		}
	}
	return sum;
}

document.write(`:${getSum(newArr)}`);

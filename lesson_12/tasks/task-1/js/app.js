//Задача 1. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів та порівнянь чисел під час сортування бульбашкою
function generateArray(number) {
	let arrayNumbers = [];
	for (let i = 0; i < number; i++) {
		let num = Math.floor(Math.random() * 101);
		arrayNumbers.push(num);
	}
	return arrayNumbers;
}

let arrayNumbers = generateArray(30);

function arrSortUsedBuble(arrayWillSort) {
	let resultChange;
	let countChange = 0;
	let countCompare = 0;
	let arrayLength = arrayWillSort.length - 1;
	do {
		resultChange = false;
		for (let i = 0; i < arrayLength; i++) {
			countCompare++;
			if (arrayWillSort[i] > arrayWillSort[i + 1]) {
				let addLet = arrayWillSort[i];
				arrayWillSort[i] = arrayWillSort[i + 1];
				arrayWillSort[i + 1] = addLet;
				resultChange = true;
				countChange++;
			}
		}
		if (resultChange) arrayLength--;
	} while (resultChange);
	return [arrayWillSort, countChange, countCompare];
}

let [sortedArray, countChange, countCompare] = arrSortUsedBuble(arrayNumbers);
document.write(`
    ${sortedArray}</br>
	Під час сортування масиву з 30 елементів методом сортування бульбашкою було виконано : ${countChange} замін,та ${countCompare} порівнянь </br>
`);

//Задача 2. Дано масив 30 випадкових цілих чисел.
//Підрахувати скільки було обмінів та порівнянь чисел під час сортування змішуванням.
let arrayNumbersTwo = generateArray(30);
function sortArrMixBuble(arrayWillSort) {
	let resultChange;
	let countChange = 0;
	let countCompare = 0;
	let start = 0;
	let end = arrayWillSort.length - 1;
	do {
		resultChange = false;
		for (let i = start; i < end; i++) {
			countCompare++;
			if (arrayWillSort[i] > arrayWillSort[i + 1]) {
				let addLet = arrayWillSort[i];
				arrayWillSort[i] = arrayWillSort[i + 1];
				arrayWillSort[i + 1] = addLet;
				countChange++;
				resultChange = true;
			}
		}
		if (!resultChange) break;
		else {
			resultChange = false;
			end--;
		}
		for (let p = end; p > start; p--) {
			countCompare++;
			if (arrayWillSort[p] < arrayWillSort[p - 1]) {
				let twoAddLet = arrayWillSort[p];
				arrayWillSort[p] = arrayWillSort[p - 1];
				arrayWillSort[p - 1] = twoAddLet;
				countChange++;
				resultChange = true;
			}
		}
		if (resultChange) start++;
	} while (resultChange);
	return [arrayWillSort, countChange, countCompare];
}
let [arraySortedTwo, countChangeTwo, countCompareTwo] = sortArrMixBuble(arrayNumbersTwo);
document.write(`
	${arraySortedTwo}</br>
	Під час сортування масиву з 30 елементів методом змішування було виконано : ${countChangeTwo} замін,та ${countCompareTwo} порівнянь </br>
`);

//сортування вибором
let arrayNumbersThree = generateArray(30);
function arraySortedExclusion(arrayWillSort) {
	let arrLength = arrayWillSort.length - 1;
	let counnChange = 0;
	let countCompare = 0;

	for (let i = 0; i <= arrLength; i++) {
		let minIndex = i;
		for (let p = i + 1; p <= arrLength; p++) {
			if (arrayWillSort[p] < arrayWillSort[minIndex]) {
				countCompare++;
				minIndex = p;
			}
		}
		if (minIndex !== i) {
			let addLet = arrayWillSort[i];
			arrayWillSort[i] = arrayWillSort[minIndex];
			arrayWillSort[minIndex] = addLet;
			counnChange++;
		}
	}
	return [arrayWillSort, counnChange, countCompare];
}
console.log(arraySortedExclusion(arrayNumbersThree));
//Задача 3. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів та порівнянь чисел під час сортування включеннями.

let arrayNumbersFour = generateArray(30);
function sortedArrayTurnOn(array) {
	let countCompare = 0;
	let countChange = 0;
	for (let i = 1; i < array.length; i++) {
		let currentElement = array[i];
		let prevElement = i - 1;
		while (prevElement >= 0 && array[prevElement] > currentElement) {
			countCompare++;
			array[prevElement + 1] = array[prevElement];
			prevElement--;
		}
		countChange++;
		array[prevElement + 1] = currentElement;
	}
	return [array, countChange, countCompare];
}

let [sortedTurnOn, countChangeTurnOn, countCompareTurnOn] = sortedArrayTurnOn(arrayNumbersFour);

document.write(`
	${sortedTurnOn}</br>
	Під час сортування масиву з 30 елементів методом включення було виконано : ${countChangeTurnOn} замін,та ${countCompareTurnOn} порівнянь </br>
`);



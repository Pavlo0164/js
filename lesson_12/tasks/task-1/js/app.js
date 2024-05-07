//генерація масиву
function generateArray(number) {
	let arrayNumbers = [];
	for (let i = 0; i < number; i++) {
		let num = Math.floor(Math.random() * 101);
		arrayNumbers.push(num);
	}
	return arrayNumbers;
}
//Задача 1. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів та порівнянь чисел під час сортування бульбашкою
//сортування бульбашкою
function arrSortUsedBuble(arrayWillSort) {
	let arrWithChanges = [];
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
				arrWithChanges.push([...arrayWillSort]);
			}
		}
		if (resultChange) arrayLength--;
	} while (resultChange);
	return [arrayWillSort, countChange, countCompare, arrWithChanges];
}
//Задача 2. Дано масив 30 випадкових цілих чисел.
//Підрахувати скільки було обмінів та порівнянь чисел під час сортування змішуванням.

function sortArrMixBuble(arrayWillSort) {
	let arrWithChanges = [];
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
				arrWithChanges.push([...arrayWillSort]);
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
				arrWithChanges.push([...arrayWillSort]);
			}
		}
		if (resultChange) start++;
	} while (resultChange);
	return [arrayWillSort, countChange, countCompare, arrWithChanges];
}


//сортування вибором

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

//Задача 3. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів та порівнянь чисел під час сортування включеннями.
function sortedArrayTurnOn(array) {
	let arrWithChanges = [];
	for (let i = 1; i < array.length; i++) {
		let currentElement = array[i];
		let prevElement = i - 1;
		while (prevElement >= 0 && array[prevElement] > currentElement) {
			array[prevElement + 1] = array[prevElement];
			prevElement--;
		}
		array[prevElement + 1] = currentElement;
	}
	return [array, arrWithChanges];
}



try {
	//завдання 1
	let arrayNumbersFour = generateArray(5);
	let [sortedTurnOn, countChangeTurnOn, countCompareTurnOn, arrWithChangesSortTurnOn] =
		sortedArrayTurnOn(arrayNumbersFour);
	document.write(`
    </br></br>
	${sortedTurnOn}</br>
	Під час сортування масиву з 30 елементів методом включення було виконано : ${countChangeTurnOn} замін,та ${countCompareTurnOn} порівнянь </br>
	Послідовність перестанов елементів під час сортування включення:</br>
	`);
	arrWithChangesSortTurnOn.forEach((element) => {
		document.write(`${element} </br>`);
	});
	//завдання 2
	///////////////////////////
	let arrayNumbersTwo = generateArray(5);
	let [arraySortedTwo, countChangeTwo, countCompareTwo, arrWithChangesSortMixed] = sortArrMixBuble(arrayNumbersTwo);
	document.write(`
</br></br>
	${arraySortedTwo}</br>
	Під час сортування масиву з 30 елементів методом змішування було виконано : ${countChangeTwo} замін,та ${countCompareTwo} порівнянь </br>
	Послідовність перестанов елементів під час сортування змішуванням:</br>
	`);
	arrWithChangesSortMixed.forEach((element) => {
		document.write(`${element} </br>`);
	});
	//////////////////////////////////////////////
	//завдання 3
	let arrayNumbers = generateArray(5);
	let [sortedArray, countChange, countCompare, arrWithChanges] = arrSortUsedBuble(arrayNumbers);
	document.write(`
    ${sortedArray}</br>
	Під час сортування масиву з 30 елементів методом сортування бульбашкою було виконано : ${countChange} замін,та ${countCompare} порівнянь </br>
	Послідовність перестанов елементів під час сортування бульбашкою:</br>
`);
	arrWithChanges.forEach((element) => {
		document.write(`${element} </br>`);
	});
	///////////////////////////////////////////////////////////////
	let arrayNumbersThree = generateArray(5);
	console.log(arraySortedExclusion(arrayNumbersThree));
} catch (error) {
	console.log(error.message);
}


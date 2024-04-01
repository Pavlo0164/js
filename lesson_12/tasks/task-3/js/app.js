//Задача 5. Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я «Olga» і під яким індексом.

//функція сортування масиву імен
function sortNames(arrayNames) {
	for (let i = 0; i < arrayNames.length; i++) {
		let minIndex = i;

		for (let p = i + 1; p < arrayNames.length; p++) {
			if (arrayNames[p] < arrayNames[minIndex]) {
				minIndex = p;
			}
		}
		if (minIndex !== i) {
			let addLet = arrayNames[i];
			arrayNames[i] = arrayNames[minIndex];
			arrayNames[minIndex] = addLet;
		}
	}
	return arrayNames;
}
//функція пошуку якогось імені у відсортованому масиві імен
function binarySearch(funcSort, arrayNames, namesWhichSearch = "Olga") {
	let indexName = -1;
	let sortedArrayNames = funcSort(arrayNames);
	let start = 0;
	let end = sortedArrayNames.length - 1;
	while (start <= end) {
		let centerElem = Math.floor((end + start) / 2);
		if (namesWhichSearch > sortedArrayNames[centerElem]) start = centerElem + 1;
		else if (namesWhichSearch < sortedArrayNames[centerElem]) end = centerElem - 1;
		else if (namesWhichSearch === sortedArrayNames[centerElem]) {
			return centerElem;
		}
	}
	return indexName;
}

//Задача 6. Дано масив імен.
//Застосовуючи відповідне сортування та бінарний пошук визначити,
//чи є у масиві ім’я довжиною 5 символів і під яким індексом.

//функція сортування масиву імен за довжиною елементів масиву
function sortLengthNames(arrayNames) {
	for (let i = 0; i < arrayNames.length; i++) {
		let minIndex = i;

		for (let p = i + 1; p < arrayNames.length; p++) {
			if (arrayNames[p].length < arrayNames[minIndex].length) {
				minIndex = p;
			}
		}
		if (minIndex !== i) {
			let addLet = arrayNames[i];
			arrayNames[i] = arrayNames[minIndex];
			arrayNames[minIndex] = addLet;
		}
	}
	return arrayNames;
}
// функція знаходження елементу за вказаною довжиною
function binarySearchLengthElem(funcSort, arrayNames, lengthElem = 5) {
	let sortedArrayNames = funcSort(arrayNames);
	let start = 0;
	let indexName = false;
	let end = sortedArrayNames.length - 1;
	let middle = Math.floor((start + end) / 2);
	while (start <= end) {
		if (sortedArrayNames[middle].length === lengthElem) return [middle, lengthElem];
		else if (sortedArrayNames[middle].length < lengthElem) start = middle;
		else if (sortedArrayNames[middle].length > lengthElem) end = middle;
	}
	return [indexName, lengthElem];
}


try {
	let namesArray = [
		"Anna",
		"Alexander",
		"Maria",
		"Sergei",
		"Natalia",
		"Ivan",
		"Julia",
		"Michael",
		"Olga",
		"Elena",
		"Andrew",
		"Irina",
		"Vladimir",
		"Tatiana",
		"Yuri",
		"Sofia"
	];
	document.write(`
Задача 5. Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити,
 чи є у масиві ім’я «Olga» і під яким індексом.</br>
 ім'я "Olga" знаходиться за індексом номер :
 ${binarySearch(sortNames, namesArray)} </br>`);

	document.write(`Задача 6. Дано масив імен.
Застосовуючи відповідне сортування та бінарний пошук визначити,
чи є у масиві ім’я довжиною 5 символів і під яким індексом.</br>`);

	let [resultSearch, lengthElem] = binarySearchLengthElem(sortLengthNames, namesArray);
	if (resultSearch) document.write(`Ім'я довжиною в ${lengthElem} символів знаходиться під індексом ${resultSearch} `);
	else document.write(`Імені довжиною в ${lengthElem} символів не має у масиві`);

} catch (error) {
	console.log(error.message);
}
alert(`
Задача 5. Дано послідовність оцінок учня. Підрахувати кількість:
1)	двійок
2)	кількість хороших оцінок (добре, відмінно);
3)	кількість оцінок, які нижче середнього.
`);
//двійки
function studentLevelDeuces(...arr) {
	let deuces = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === 2) deuces++;
	}
	return deuces;
}
//трійки
function studentLevelTriples(...arr) {
	let triples = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === 3) triples++;
	}
	return triples;
}
//четвірки та п'ятірки
function studentLevelFoursAndFives(...arr) {
	let foursAndFives = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === 4 || arr[i] === 5) foursAndFives++;
	}
	return foursAndFives;
}
try {
	let array = [4, 5, 5, 4, 3, 2, 3, 4, 5, 4, 4, 4, 5, 5, 5, 5];
	let deuces = studentLevelDeuces(...array);
	let triples = studentLevelTriples(...array);
	let foursAndFives = studentLevelFoursAndFives(...array);
    document.write(`
        Кількість двійок у учня: ${deuces} </br>
        Кількість трійок у учня: ${triples} </br>
        Кількість четвірок та п'ятірок у учня : ${foursAndFives} </br>
    `)
} catch (error) {
	console.log(error);
}

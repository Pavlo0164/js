alert(`
    Задача 4. Дано послідовність номерів автомобілів. Підрахувати кількість номерів, які :
•	починаються на букву «А»;
•	перша і остання літери співпадають;
•	складаються з більше ніш 5 символів;
`);
//Починаються на літеру А
function startLetterA(...arr) {
	let number = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].startsWith("А")) number++;
	}

	return number;
}
// перша і остання літери співпадають;
function startEnd(...arr) {
	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].at(0) === arr[i].at(-1)) count++;
	}
	return count;
}
//складаються з більше ніш 5 символів;
function manyFiveLetters(...arr) {
	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].length > 5) count++;
	}
	return count;
}
try {
	let array = ["АВ2294ВА", "АВ2243ВА", "НВ1143ВА"];
	let itemOne = startEnd(...array);
	document.write(`
    Кількість номерів які розпочинаються на літеру А: ${itemOne} </br>
`);
	let itemTwo = startEnd(...array);
	document.write(`
    Кількість номерів у який перша і остання літери співпадають становить: ${itemTwo} </br>
`);
	let manyFiveResult = manyFiveLetters(...array);
	document.write(`
       Кількість номерів у який більше ніж 5 символів: ${manyFiveResult} 
    `);
} catch (error) {
	console.log(error.message);
}

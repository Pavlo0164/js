alert(`
Задача 2. Дано масив, який зберігає кількість відвідувачів магазину протягом тижня. Вивести на екран:
номери днів, протягом яких кількість відвідувачів була меншою за 20;
номери днів, коли кількість відвідувачів була мінімальною;
номери днів, коли кількість відвідувачів була максимальною;
загальну кількість клієнтів у робочі дні та окремо загальну кількість днів на вихідних.
`);

//номери днів, протягом яких кількість відвідувачів була меншою за 20;
function fewVisitors(array) {
	let dayWeak = [];
	for (let i = 0; i < array.length; i++) {
		if (array[i] < 20) {
			dayWeak.push(i + 1);
		}
	}
	return dayWeak;
}

//загальну кількість клієнтів у робочі дні та окремо загальну кількість днів на вихідних.
//робочі дні
function totalNumberWeekDay(array) {
	let weekday = 0;
	for (let i = 0; i <= 4; i++) {
		weekday += array[i];
	}
	return weekday;
}
//вихідні дні
function totalNumberDayOff(array) {
	let dayOff = 0;
	for (let i = 5; i <= 6; i++) {
		dayOff += array[i];
	}
	return dayOff;
}

//номери днів, коли кількість відвідувачів була мінімальною;
function visitorMin(array) {
	let minNum = Math.min(...array);
	let numberDays = [];
	for (let i = 0; i < array.length; i++) {
		if (array[i] === minNum) {
			numberDays.push(i + 1);
		}
	}
	return numberDays;
}
//номери днів, коли кількість відвідувачів була максимальною;
function visitorMax(array) {
	let maxNum = Math.max(...array);
	let numberDays = [];
	for (let i = 0; i < array.length; i++) {
		if (array[i] === maxNum) {
			numberDays.push(i + 1);
		}
	}
	return numberDays;
}
try {
	let arr = [];
	for (let i = 0; i < 7; i++) {
		let day = parseInt(
			prompt(`Вводьте кількість відвідувачів кожного дня минулого тижня`)
		);
		if (isNaN(day)) {
			throw new Error("Не коректна кількість відвідувачів");
		}
		arr.push(day);
	}
	let minNumberToTwenty = fewVisitors(arr);
	document.write(`
  номери днів, 
  протягом яких кількість відвідувачів була меншою за 20: ${minNumberToTwenty} 
</br>`);

	let numberWeekday = totalNumberWeekDay(arr);
	let numberDayOff = totalNumberDayOff(arr);
	document.write(`
    Кількість клієнтів у робочі дні становить: ${numberWeekday}
    </br>
    Кількість клієнтів у вихідні дні становить: ${numberDayOff}
    </br>
`);

	let minDays = visitorMin(arr);
	document.write(`
   Номери днів коли кількість відвідувачів була мінімальною: ${minDays}
   </br>
`);

	let maxDays = visitorMax(arr);
	document.write(`
   Номери днів коли кількість відвідувачів була максимальною: ${maxDays}
   </br>
`);
} catch (error) {
	console.log(error.message);
	document.write(error.message);
}

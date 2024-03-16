alert(`
    Задача 7. Дано послідовність платіжок протягом року. Знайти сумарну кількість грошей за:
за весь рік;
у першій половині року;
у другій половині року;
за літо;
за ІІ квартал;
за парні місяці (з парними номерами);
за місяці, які є початковими у сезоні (весна, літо, осінь, зима).
`);
//сумарна кількість грошей за  цілий рік
function amountPerYear(...array) {
	let sum = 0;
	for (let i = 0; i < 12; i++) {
		sum += array[i];
	}
	return sum;
}
//сумарна кількість грошей за першу половину року
function firstHalfYear(...array) {
	let sum = 0;
	for (let i = 0; i < 6; i++) {
		sum += array[i];
	}
	return sum;
}
//сумарна кількість грошей за  другу половину року
function secondHalfYear(...array) {
	let sum = 0;
	for (let i = 6; i < 12; i++) {
		sum += array[i];
	}
	return sum;
}
//сумарна кількість грошей за  літо
function amountForSummer(...array) {
	let sum = 0;
	for (let i = 5; i < 8; i++) {
		sum += array[i];
	}
	return sum;
}
//сумарна кількість грошей за ІІ квартал
function secondQuarter(...array) {
	let sum = 0;
	for (let i = 3; i < 6; i++) {
		sum += array[i];
	}
	return sum;
}
//сумарна кількість грошей за парні місяці (з парними номерами);
function evenMonths(...array) {
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
		if (i % 2 === 0) sum += array[i];
	}
	return sum;
}
//сумарна кількість грошей за місяці, які є початковими у сезоні (весна, літо, осінь, зима).
function firstMonthsSeason(...array) {
	let sum = 0;
	for (let i = 2; i < array.length; i += 3) {
		sum += array[i];
	}
	return sum;
}
try {
    let arr = []
    for (let i = 0; i < 12; i++) {
        let cash = parseFloat(prompt(`Поступово вводьте суму в платіжці починаючи з початку року за цілий рік`))
        arr.push(cash)
    }
    let amountYear = amountPerYear(...arr);
    let firstHalf = firstHalfYear(...arr);
    let secondHalf = secondHalfYear(...arr);
    let amountSummer = amountForSummer(...arr);
    let monthEven = evenMonths(...arr);
    let quarterSecond = secondQuarter(...arr);
    let monthSeason = firstMonthsSeason(...arr); 
    document.write(`
    <div> сумарна кількість грошей за  цілий рік ${amountYear}$ </div>
    <div> сумарна кількість грошей за першу половину року ${firstHalf}$ </div>
    <div> сумарна кількість грошей за  другу половину року ${secondHalf}$ </div>
    <div> сумарна кількість грошей за  літо ${amountSummer}$ </div>
    <div> сумарна кількість грошей за ІІ квартал ${monthEven}$ </div>
    <div> сумарна кількість грошей за парні місяці (з парними номерами); ${quarterSecond}$ </div>
    <div> сумарна кількість грошей за місяці, які є початковими у сезоні (весна, літо, осінь, зима).${monthSeason}$  </div>
    `);
} catch (error) {
	console.log(error);
}

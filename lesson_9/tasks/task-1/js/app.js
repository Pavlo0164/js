alert(`
    1. Користувач вводить кількість елементів. 
    Створити масив, що складається з вказаної кількості елементів заповнених нулями.
`);
function createdArray(funcGetNumberAndValue) {
	let arrOption = funcGetNumberAndValue();
	let num = arrOption[0];
	let value = arrOption[1];
	let array = new Array(num).fill(value);
	return array;
}
let array = createdArray(() => {
	let arr = [];
	arr.push(parseInt(prompt(`Введіть яка кількість елементів буде у массиві`)));
	arr.push(parseInt(prompt(`Введіть яке значення елементів буде у массиві`)));
	return arr;
});
document.write(array);

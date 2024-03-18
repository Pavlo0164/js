alert(`
    3. Користувач вводить кількість елементів.
     Створити масив, у якому перші 5 елементів заповнені 1-цями, а інші до кінця масиву заповнені 7-ками.
`);
function createdArray(funcGetNumber) {
	let number = funcGetNumber();
	if (number < 5) throw new Error(`У масиві не буде навіть п'яти елементів`);
	else {
		let array = new Array(number);
		array.fill(1, 0, 5).fill(7, 5);
		return array;
	}
}
try {
	let arr = createdArray(() =>
		parseInt(prompt(`Введіть скільки елементів буде у масиві`))
	);
	document.write(arr);
} catch (error) {
	console.log(error.message);
}

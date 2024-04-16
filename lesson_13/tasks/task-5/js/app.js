// Задача 5.  З використанням замикань розробити ітератор, тобто функцію,
//  що буде поступово за окремими викликами видавати по одне значення від
//  заданого мінімального до заданого максимального. Якщо значення досягне максимального,
//  то наступним буде мінімальне значення. З використанням цієї функції реалізувати перебір номерів місяців.
function lock(min, max) {
	let counter = null;
	return () => {
		if (counter === null) counter = min;
		else if (counter === max) counter = min;
		else counter++;
		return counter;
	};
}
let count = lock(1, 12);
for (let i = 0; i < 18; i++) {
	console.log(count());
}

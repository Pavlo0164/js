alert(`
    Задача 6. Дано послідовність цін товарів та назв (у окремих масивах). 
    Вивести на екран ті, які може собі дозволити користувач (кількість грошей задається).
    Приклад збереження даних
let productsPrices = [1000, 20, 31]
let productsTitles = [cheese, juice, bread]

`);
function availableGoods(productsPrices, productsTitles, cash) {
	for (let i = 0; i < productsPrices.length; i++) {
		if (productsPrices[i] <= cash) {
			document.write(`
                Ви можете купити : ${productsTitles[i]},  вартість товару - ${productsPrices[i]}$ </br>
            `);
		}
	}
}
try {
	let cash = parseFloat(prompt(`Скільки у вас є грошей?`));
	let productsPrices = [1000, 20, 31];
	let productsTitles = ["cheese", "juice", "bread"];
	availableGoods(productsPrices, productsTitles, cash);
} catch (error) {
	console.log(error);
}

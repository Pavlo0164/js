//Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000)
alert(`
    Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000)
`);
let historyPrices = [];
for (let i = 0; i < 20; i++) {
	let price = 1 + Math.floor(Math.random() * 10000);
	historyPrices.push(price);
}
console.log(historyPrices);

//   1)Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.
let arrBigPrice = historyPrices.filter((price) => price > 1000);
console.log(arrBigPrice);

//  2)Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.
let arrIndexBigPrice = [];
historyPrices.forEach((item, index) => {
	if (item > 1000) arrIndexBigPrice.push(index);
});
console.log(arrIndexBigPrice);

//   3)Сформувати список з тих цін, які більші за попереднє значення
let arrItemMorePrev = historyPrices.filter((item, index, arr) => {
	if (item > arr[index - 1]) return true;
	return false;
});
console.log(arrItemMorePrev);

//   4)Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального
let maxPrice = Math.max(...historyPrices);
let onePersent = maxPrice / 100;
console.log(maxPrice);
console.log(onePersent);
let arrPersent = historyPrices.map(
	(item) => Math.floor((item / onePersent) * 100) / 100
);
console.log(arrPersent);

//   5)Підрахувати кількість змін цін
let countChangePrice = historyPrices.reduce((prevCount, item, index, arr) => {
	if (index === 0) return prevCount;
	else if (item !== arr[index - 1]) {
		return prevCount + 1;
	}
}, 0);
console.log(`Ціна змінювалася ${countChangePrice} разів`);
//   6)Визначити, чи є ціна, що менше 1000
let loverPrice = historyPrices.some((item) => item < 1000);
if (loverPrice) document.write(`Ціна що менше за 1000 є </br>`);
else document.write(`Ціни що менше за 1000 немає </br>`);

//   7)Визначати, чи усі ціни більше за 1000
let upperPrice = historyPrices.every((item) => item > 1000);
if (upperPrice) document.write(`Всі ціни більше за 1000 </br>`);
else document.write(`Не всі ціни більші за 1000 </br>`);

//   8)Підрахувати кількість цін, що більше за 1000
let countUpperPrice = historyPrices.reduce(
	(prevCount, item) => (item > 1000 ? prevCount + 1 : prevCount),
	0
);
console.log(countUpperPrice);

//   9)Підрахувати суму цін, що більше за 1000
let sumUpperPrice = historyPrices.reduce(
	(prevSum, item) => (item > 1000 ? prevSum + item : prevSum),
	0
);
console.log(sumUpperPrice);

//   10)Знайти першу ціну, що більше за 1000
let firstMorePrice = historyPrices.find((item) => item > 1000);
console.log(firstMorePrice);

//   11)Знайти індекс першої ціни, що більше за 1000
let firstMorePriceIndex = historyPrices.findIndex((item) => item > 1000);
console.log(firstMorePriceIndex);

//   12)Знайти останню ціну, що більше за 1000
let endMorePrice = historyPrices.findLast((item) => item > 1000);
console.log(endMorePrice);

//   13)Знайти індекс останньої ціни, що більше за 1000
let endMorePriceIndex = historyPrices.findLastIndex((item) => item > 1000);
console.log(endMorePriceIndex);

alert(`
    4.Дано масив елементів. 
    Вивести на екран елементи, що більші за 100
`);
function showNumber(arr) {
	for (const item of arr) {
		if (item > 100) document.write(`${item} </br>`);
	}
}
let array = [12, 345, 23, 12, 34, 34, 555, 444, 333, 123, 12, 12];
showNumber(array);

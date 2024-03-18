alert(`
    5.Дано масив елементів. Знайти добуток додатних елементів
`);
function productNumbers(arr) {
	let sum = 1;
	for (let item of arr) {
		if (item > 0){
            sum *= item;
        } 
	}
    return sum
}
let arr = [1,2,3,-4,1,-3,5]
let product = productNumbers(arr);
document.write(`Добуток додатніх чисел ${product}`)
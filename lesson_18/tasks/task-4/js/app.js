// Задача 4. Наперед задано у скрипті масив зі списком бажань.
// Після завантаження сторінки випадковим чином вибираються 3
// і відображаються у окремих div (їх треба створити і додати на сторінку)
let arr = [
	"Бажання 1",
	"Бажання 2",
	"Бажання 3",
	"Бажання 4",
	"Бажання 5",
	"Бажання 6",
	"Бажання 7",
	"Бажання 8",
	"Бажання 9"
];
const body = document.body;
window.onload = function work() {
	for (let i = 0; i < 3; i++) {
		let random = Math.floor(Math.random() * arr.length);
		let div = document.createElement("div");
		div.innerText = arr[random];
        div.style.color = 'yellow'
        div.style.fontSize = '30px'
        div.style.textTransform = 'uppercase'
        div.style.padding = '20px'
        div.style.border = '1px solid black'
        div.style.marginBottom = '20px'
        div.style.background = 'green'
		body.prepend(div);
	}
};

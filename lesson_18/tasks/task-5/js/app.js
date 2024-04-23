// Задача 5. Відобразити таблицю 3*4 з випадковими числами (її треба динамічно створити і вставити на сторінку)
const body = document.body;
window.onload = function work() {
	const table = document.createElement("table");
	for (let i = 0; i < 4; i++) {
		const tr = document.createElement("tr");
		for (let p = 0; p < 3; p++) {
			const td = document.createElement("td");
			let randomNum = Math.floor(Math.random() * 100);
			td.innerText = randomNum;
			td.style.padding = "10px";
			td.style.border = "2px solid black";

			tr.append(td);
		}
		table.append(tr);
	}
	table.style.margin = "20px";
	table.style.fontSize = "25px";
	body.prepend(table);
};

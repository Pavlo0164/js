// Задача 6. Користувач задає кількість оцінок і натискає на кнопку «get table».
//  В результаті формується таблиця з input, куди користувач вводить оцінки.
//   Після цього натискає на кнопку “get sum” і знаходить середнє значення.
const body = document.body;
body.style.padding = "50px";
const title = document.createElement("h1");
title.innerText = "Price number :";
body.prepend(title);

const inputNumber = document.createElement("input");
inputNumber.style.fontSize = "30px";
inputNumber.style.padding = "10px";
inputNumber.style.marginBottom = "10px";
inputNumber.setAttribute("type", "number");
title.after(inputNumber);

const buttonGetTable = document.createElement("button");
buttonGetTable.innerText = "Get Table";
buttonGetTable.style.padding = "10px";
buttonGetTable.style.display = "block";
buttonGetTable.style.border = "2px solid black";
buttonGetTable.style.fontSize = "25px";
inputNumber.after(buttonGetTable);

const buttonGetSum = document.createElement("button");
buttonGetTable.onclick = function buttonTable() {
	if (inputNumber.value) {
		const wrapper = document.createElement("div");
		let value = parseInt(inputNumber.value);
		for (let i = 0; i < value; i++) {
			const newInput = document.createElement("input");
			wrapper.prepend(newInput);
			newInput.style.fontSize = "30px";
			newInput.style.padding = "10px";
			newInput.style.marginBottom = "10px";
			newInput.setAttribute("type", "number");
			newInput.classList.add("new-input");
			newInput.style.margin = "10px";
			buttonGetTable.after(wrapper);
		}

		buttonGetSum.innerText = "Get Sum";
		buttonGetSum.style.padding = "10px";
		buttonGetSum.style.display = "block";
		buttonGetSum.style.border = "2px solid black";
		buttonGetSum.style.fontSize = "25px";
		buttonGetSum.classList.add("button-get-sum");
		wrapper.after(buttonGetSum);
	}

    
};

buttonGetSum.onclick = function getSum() {
	const inputs = document.querySelectorAll(".new-input");
	let sum = 0;
	for (const input of inputs) {
		sum += parseInt(input.value);
	}
	let current = sum / inputs.length;
	const result = document.createElement("p");
	result.innerText = "Sum = " + current;
	buttonGetSum.after(result);

};

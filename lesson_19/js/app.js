"use strict";
// Задача 1. Дано 10 рядків тексту «Hello!» у окремих div.
// При кліку на якийсь із них усі наступні повинні бути зафарбовані у червоний колір.
const buttonsWrapper = document.querySelector(".main__tasks");
const wrapperResult = document.querySelector(".main__wrapper-result");

buttonsWrapper.addEventListener("click", (event) => {
	const el = event.target;
	const childrenWrapper = wrapperResult.firstElementChild;
	if (childrenWrapper !== null) {
		childrenWrapper.remove();
	}
	const wrap = document.createElement("div");
	wrapperResult.append(wrap);
	if (el.classList.contains("main__task-1")) {
		if (childrenWrapper !== null) childrenWrapper.remove();
		for (let i = 0; i < 10; i++) {
			const div = document.createElement("div");
			div.classList.add("task-one");
			div.innerText = "HELLO";
			wrap.prepend(div);
		}
	} else if (el.classList.contains("main__task-2")) {
		for (let i = 0; i < 5; i++) {
			const label = document.createElement("label");
			label.innerText = `Value ${i + 1}`;
			const input = document.createElement("input");
			input.classList.add("input-task-2");
			input.type = "number";
			label.append(input);
			wrap.append(label);
		}
	}
});
wrapperResult.addEventListener("focusin", (event) => {
	const elem = event.target;
	console.log("focus");
	elem.addEventListener("keydown", (e) => {
		const el = e.target;
		console.log(el.value);
		const parentLabel = el.parentElement;
		if (el.value) {
			let inputValue1 = parseInt(el.value);
			let inputValue2 = parseInt(el.value);
			let prevEl = parentLabel.previousElementSibling;
			let nextEl = parentLabel.nextElementSibling;
			while (prevEl !== null) {
				prevEl.firstElementChild.value = inputValue1 - 1;
				inputValue1--;
				prevEl = prevEl.previousElementSibling;
			}
			while (nextEl !== null) {
				nextEl.firstElementChild.value = inputValue2 + 1;
				inputValue2++;
				nextEl = nextEl.nextElementSibling;
			}
		}
	});
});
wrapperResult.addEventListener("click", (event) => {
	const clickElem = event.target;
	if (clickElem.classList.contains("task-one")) {
		let currentElem = clickElem;
		currentElem.style.color = "red";

		while (currentElem.nextElementSibling !== null) {
			currentElem = currentElem.nextElementSibling;
			currentElem.style.color = "red";
		}
	}
});

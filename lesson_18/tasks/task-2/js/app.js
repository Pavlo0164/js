class Converter {
	static courseDollar = 40;
	static courseEuro = 42;
}
const inputValue = document.querySelector(".input-converter__number");
const inputValueResult = document.querySelector(".input-converter__result");
const buttonDollar = document.querySelector(".button-dollar");
const buttonEuro = document.querySelector(".button-euro");
const buttonReset = document.querySelector(".button-reset");
buttonReset.onclick = function reset() {
	inputValueResult.innerText = "0";
	inputValue.value = "0";
};
buttonDollar.onclick = function convertDollar() {
	inputValueResult.innerText = (inputValue.value / Converter.courseDollar).toFixed(3) + " " + "$";
};
buttonEuro.onclick = function convertEuro() {
	inputValueResult.innerText = (inputValue.value / Converter.courseEuro).toFixed(3) + " " + "€";
};

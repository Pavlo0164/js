
const buttonNumber0 = document.querySelector(".button-number-0");
const buttonNumber1 = document.querySelector(".button-number-1");
const buttonNumber2 = document.querySelector(".button-number-2");
const buttonNumber3 = document.querySelector(".button-number-3");
const buttonNumber4 = document.querySelector(".button-number-4");
const buttonNumber5 = document.querySelector(".button-number-5");
const buttonNumber6 = document.querySelector(".button-number-6");
const buttonNumber7 = document.querySelector(".button-number-7");
const buttonNumber8 = document.querySelector(".button-number-8");
const buttonNumber9 = document.querySelector(".button-number-9");

const resultText = document.querySelector(".result-calc__text");

const buttonDivision = document.querySelector(".button-division");
const buttonMult = document.querySelector(".button-mult");
const buttonMinus = document.querySelector(".button-minus");
const buttonPlus = document.querySelector(".button-plus");
const buttonResult = document.querySelector(".button-result");
class Calc {
	static action = "";
	static numberOne = "";
	static numberTwo = "";
}
const buttonReset = document.querySelector(".button-reset");
buttonReset.onclick = function reset() {
	Calc.action = "";
	Calc.numberOne = "";
	Calc.numberTwo = "";
	resultText.innerText = "0";
	buttonPlus.classList.remove("active");
	buttonMinus.classList.remove("active");
	buttonDivision.classList.remove("active");
	buttonMult.classList.remove("active");
};
let reset = () => {
	setTimeout(() => {
		Calc.action = "";
		Calc.numberOne = "";
		Calc.numberTwo = "";
		resultText.innerText = "0";
	}, 2000);
};
buttonResult.onclick = function result() {
	if (Calc.action && Calc.numberOne && Calc.numberTwo) {
		buttonPlus.classList.remove("active");
		buttonMinus.classList.remove("active");
		buttonDivision.classList.remove("active");
		buttonMult.classList.remove("active");
		switch (Calc.action) {
			case "/":
				resultText.innerText = parseInt(Calc.numberOne) / parseInt(Calc.numberTwo);
				reset();
				break;
			case "*":
				resultText.innerText = parseInt(Calc.numberOne) * parseInt(Calc.numberTwo);
				reset();
				break;
			case "-":
				resultText.innerText = parseInt(Calc.numberOne) - parseInt(Calc.numberTwo);
				reset();
				break;
			case "+":
				resultText.innerText = parseInt(Calc.numberOne) + parseInt(Calc.numberTwo);
				reset();
				break;
		}
	}
};
buttonPlus.onclick = function plus() {
	if (Calc.numberOne) {
		Calc.action = "+";
		buttonPlus.classList.add("active");
		buttonMinus.classList.remove("active");
		buttonDivision.classList.remove("active");
		buttonMult.classList.remove("active");
	}
};
buttonMinus.onclick = function minus() {
	if (Calc.numberOne) {
		Calc.action = "-";
		buttonMinus.classList.add("active");
		buttonPlus.classList.remove("active");
		buttonDivision.classList.remove("active");
		buttonMult.classList.remove("active");
	}
};
buttonMult.onclick = function mult() {
	if (Calc.numberOne) {
		Calc.action = "*";
		buttonMult.classList.add("active");
		buttonMinus.classList.remove("active");
		buttonDivision.classList.remove("active");
		buttonPlus.classList.remove("active");
	}
};
buttonDivision.onclick = function division() {
	if (Calc.numberOne) {
		Calc.action = "/";
		buttonDivision.classList.add("active");
		buttonMinus.classList.remove("active");
		buttonPlus.classList.remove("active");
		buttonMult.classList.remove("active");
	}
};

buttonNumber0.onclick = function num0() {
	if (!Calc.action) {
		if (Calc.numberOne) {
			Calc.numberOne += "0";
			resultText.innerText = Calc.numberOne;
		}
	} else {
		if (Calc.numberTwo) Calc.numberTwo += "0";
		resultText.innerText = Calc.numberTwo;
	}
};
buttonNumber1.onclick = function num1() {
	if (!Calc.action) {
		Calc.numberOne += "1";
		resultText.innerText = Calc.numberOne;
	} else {
		Calc.numberTwo += "1";
		resultText.innerText = Calc.numberTwo;
	}
};
buttonNumber2.onclick = function num2() {
	if (!Calc.action) {
		Calc.numberOne += "2";
		resultText.innerText = Calc.numberOne;
	} else {
		Calc.numberTwo += "2";
		resultText.innerText = Calc.numberTwo;
	}
};
buttonNumber3.onclick = function num3() {
	if (!Calc.action) {
		Calc.numberOne += "3";
		resultText.innerText = Calc.numberOne;
	} else {
		Calc.numberTwo += "3";
		resultText.innerText = Calc.numberTwo;
	}
};
buttonNumber4.onclick = function num4() {
	if (!Calc.action) {
		Calc.numberOne += "4";
		resultText.innerText = Calc.numberOne;
	} else {
		Calc.numberTwo += "4";
		resultText.innerText = Calc.numberTwo;
	}
};
buttonNumber5.onclick = function num5() {
	if (!Calc.action) {
		Calc.numberOne += "5";
		resultText.innerText = Calc.numberOne;
	} else {
		Calc.numberTwo += "5";
		resultText.innerText = Calc.numberTwo;
	}
};
buttonNumber6.onclick = function num6() {
	if (!Calc.action) {
		Calc.numberOne += "6";
		resultText.innerText = Calc.numberOne;
	} else {
		Calc.numberTwo += "6";
		resultText.innerText = Calc.numberTwo;
	}
};
buttonNumber7.onclick = function num7() {
	if (!Calc.action) {
		Calc.numberOne += "7";
		resultText.innerText = Calc.numberOne;
	} else {
		Calc.numberTwo += "7";
		resultText.innerText = Calc.numberTwo;
	}
};
buttonNumber8.onclick = function num8() {
	if (!Calc.action) {
		Calc.numberOne += "8";
		resultText.innerText = Calc.numberOne;
	} else {
		Calc.numberTwo += "8";
		resultText.innerText = Calc.numberTwo;
	}
};
buttonNumber9.onclick = function num9() {
	if (!Calc.action) {
		Calc.numberOne += "9";
		resultText.innerText = Calc.numberOne;
	} else {
		Calc.numberTwo += "9";
		resultText.innerText = Calc.numberTwo;
	}
};

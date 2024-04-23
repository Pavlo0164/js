class NumYearOld {
	static yearNow = 2024;
}
const page = document.querySelector(".page");

const numberYear = document.querySelector(".number-year");


const par = document.createElement("p");
par.innerText = "Enter your birthday year";
page.prepend(par);

const buttonResult = document.createElement("button");
buttonResult.innerText = "Show year old";
buttonResult.classList.add("button-show");
numberYear.after(buttonResult);

const parRes = document.createElement("p");
buttonResult.after(parRes);

const inputYear = document.querySelector(".number-year");
buttonResult.onclick = function btnRes() {
	if (inputYear.value && parseInt(inputYear.value) < NumYearOld.yearNow && parseInt(inputYear.value) > 1800) {
		parRes.innerText = NumYearOld.yearNow - parseInt(inputYear.value) + " " + "years";
		inputYear.value = "";
	}
};

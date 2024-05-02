const main = document.querySelector(".page");
const stockPerson = ["Pavlo", "Ivan", "John", "Anna", "Olga", "Oleksiy"];

class SearchPerson {
	constructor(arrPersons) {
		this.persons = arrPersons;
		this.el = this.render();
	}
	eventInput(event) {
		let value = event.target.value.toLowerCase();
		const newResultWrap = document.createElement("div");
		this.persons.forEach((item) => {
			if (item.toLowerCase().includes(value)) {
				const person = document.createElement("p");
				person.innerText = item;
				newResultWrap.append(person);
			}
		});
		this.result.replaceWith(newResultWrap);
		this.result = newResultWrap;
	}
	createLabel() {
		const label = document.createElement("label");
		label.innerText = "Імя:";
		const input = document.createElement("input");
		input.addEventListener("input", (event) => this.eventInput(event));
		input.type = "text";
		label.append(input);
		return label;
	}
	createResult() {
		const resultWrap = document.createElement("div");
		const title = document.createElement("h3");
		title.innerText = "Працівники";
		this.result = document.createElement("div");
		this.result.classList.add("result-serch-person");

		this.persons.forEach((item) => {
			const person = document.createElement("p");
			person.innerText = item;
			this.result.append(person);
		});
		const persons = Array.from(this.result.children);

		resultWrap.append(title, this.result);
		return resultWrap;
	}
	render() {
		const searchWraper = document.createElement("div");
		searchWraper.classList.add("search-wrapper");
		searchWraper.append(this.createLabel(), this.createResult());
		return searchWraper;
	}
}
const searchPerson = new SearchPerson(stockPerson);
main.append(searchPerson.el);

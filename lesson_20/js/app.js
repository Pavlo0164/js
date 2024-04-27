const main = document.querySelector(".main");

class TaskManager {
	constructor() {
		this.data = [];
		this.el = this.render();
	}
	eventSentTask(event) {
		this.data.push(event.detail);
		this.onchange(event);
	}

	onchange(event) {
		const newWrapStock = document.createElement("div");
		if (event.target.value === "increase") {
			this.data.sort((a, b) => parseInt(a.inputPriority) - parseInt(b.inputPriority));
		} else this.data.sort((a, b) => parseInt(b.inputPriority) - parseInt(a.inputPriority));
		this.data.forEach((item) => {
			const task = new Task(item.inputText, item.inputPriority, item.id);
			newWrapStock.append(task.el);
		});
		this.wrapStockTask.replaceWith(newWrapStock);
		this.wrapStockTask = newWrapStock;
	}
	createSelect() {
		const select = document.createElement("select");
		select.addEventListener("change", this.onchange.bind(this));
		const option1 = document.createElement("option");
		const option2 = document.createElement("option");
		option1.innerText = "Increasing priority";
		option1.value = "decrease";
		option2.innerText = "Decreasing priority";
		option2.value = "increase";
		select.append(option1, option2);
		return select;
	}
	createSort() {
		const wrap = document.createElement("div");
		wrap.classList.add("sort");
		const title = document.createElement("h3");
		title.innerText = "Sorted";
		wrap.append(title, this.createSelect());
		return wrap;
	}
	deleteTask(event) {
		this.data.forEach((item, index) => {
			if (parseInt(event.detail.id) === item.id) this.data.splice(index, 1);
		});
	}
	render() {
		const manager = document.createElement("div");
		manager.classList.add("manager");
		manager.addEventListener("deleteTask", (event) => this.deleteTask(event));
		const addTask = new AddTask();
		const stockTasks = document.createElement("div");
		stockTasks.classList.add("stock-tasks");
		this.wrapStockTask = document.createElement("div");
		stockTasks.append(this.createSort(), this.wrapStockTask);
		manager.addEventListener("sentTask", this.eventSentTask.bind(this));
		manager.append(addTask.el, stockTasks);
		return manager;
	}
}
class Task {
	constructor(text, number, id) {
		this.text = text;
		this.number = number;
		this.id = id;
		this.el = this.render();
	}
	onclick(event) {
		const delTask = new CustomEvent("deleteTask", {
			detail: {
				id: this.id
			},
			bubbles: true
		});
		this.el.dispatchEvent(delTask);
		this.el.remove();
	}
	render() {
		const task = document.createElement("div");
		task.classList.add("task");
		const title = document.createElement("div");
		title.innerText = `${this.text} - ${this.number}`;

		const button = document.createElement("button");
		button.addEventListener("click", this.onclick.bind(this));
		button.innerText = "Delete";
		task.append(title, button);
		return task;
	}
}
class AddTask {
	constructor() {
		this.el = this.render();
	}
	createTitle() {
		const title = document.createElement("h2");
		title.innerText = "New task";
		return title;
	}
	createTasksText() {
		const label = document.createElement("label");
		label.innerText = "Tasks text";
		this.inputText = document.createElement("input");
		this.inputText.type = "text";
		label.append(this.inputText);
		return label;
	}
	createTasksPriority() {
		const label = document.createElement("label");
		label.innerText = "Tasks priority";
		this.inputPriority = document.createElement("input");
		this.inputPriority.type = "number";
		label.append(this.inputPriority);
		return label;
	}
	buttonOnClick() {
		if (this.inputPriority.value && this.inputText.value) {
			const eventSent = new CustomEvent("sentTask", {
				detail: {
					inputText: this.inputText.value,
					inputPriority: this.inputPriority.value,
					id: 55555 + Math.floor(Math.random() * 888888)
				},
				bubbles: true
			});
			this.el.dispatchEvent(eventSent);
		}
	}
	createButton() {
		const button = document.createElement("button");
		button.addEventListener("click", this.buttonOnClick.bind(this));
		button.innerText = "Add task";
		return button;
	}
	render() {
		const addTask = document.createElement("div");
		addTask.classList.add("add-task");
		addTask.append(this.createTitle(), this.createTasksText());
		addTask.append(this.createTasksPriority(), this.createButton());
		return addTask;
	}
}
const taskManager = new TaskManager();
// const task = new Task("Нагодувати собаку", 20);

main.append(taskManager.el);

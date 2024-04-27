const main = document.querySelector(".main");

class TaskManager {
	constructor() {
		this.el = this.render();
	}
	eventSentTask(event) {
		const { inputText, inputPriority } = event.detail;
		const task = new Task(inputText, inputPriority);
		task.el.setAttribute("prior", inputPriority);
		this.wrapStockTask.append(task.el);
		this.sort();
	}
	sort() {}
	onchange(event) {
		
		
	}
	createSelect() {
		const select = document.createElement("select");
		this.select = select;
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
	render() {
		const manager = document.createElement("div");
		manager.classList.add("manager");

		const addTask = new AddTask();

		const stockTasks = document.createElement("div");

		this.wrapStockTask = document.createElement("div");
		stockTasks.append(this.createSort(), this.wrapStockTask);

		manager.addEventListener("sentTask", this.eventSentTask.bind(this));

		manager.append(addTask.el, stockTasks);
		return manager;
	}
}
class Task {
	constructor(text, number) {
		this.text = text;
		this.number = number;
		this.el = this.render();
	}
	onclick() {
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
					inputPriority: this.inputPriority.value
				},
				bubbles: true
			});
			this.el.dispatchEvent(eventSent);
			console.log(true);
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

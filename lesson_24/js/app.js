// ============ ===============
const body = document.body;
// Задача 5. Дано список URL адрес. Підрахувати кількість адрес, що відносяться до кожного із доменів
// (edu, com, org,...).
let urls = ["https://work.edu", "https://work.com", "https://work.org", "https://work.edu", "https://work.com"];
let mapUrl = new Map();
urls.forEach((item) => {
	let res = item.match(/(?<=\.)(edu|com|org)/);
	if (!res) return;
	if (mapUrl.has(res[0])) mapUrl.set(res[0], mapUrl.get(res[0]) + 1);
	else mapUrl.set(res[0], 1);
});
console.log(mapUrl);
// Задача 6. Дано масив книг (назва, рік видання, автор, ціна). Підрахувати загальну вартість книг для
// кожного із авторів.
class Book {
	constructor(name, year, author, price) {
		this.name = name;
		this.year = year;
		this.author = author;
		this.price = price;
	}
}
let books = [
	new Book("Space", 2012, "Ivan", 1000),
	new Book("Lord", 2018, "Ivan", 100),
	new Book("Ponny", 2011, "Ivan", 300),
	new Book("Word", 2001, "Petro", 540),
	new Book("Small", 2002, "Olga", 600),
	new Book("Car", 2020, "John", 200),
	new Book("Music", 2012, "Ann", 1200),
	new Book("Voice", 2001, "Ann", 300)
];
const cashEveryAuthor = new Map();
books.forEach((item) => {
	if (cashEveryAuthor.has(item.author))
		cashEveryAuthor.set(item.author, cashEveryAuthor.get(item.author) + item.price);
	else cashEveryAuthor.set(item.author, item.price);
});
console.log(cashEveryAuthor);
// Задача 7. Дано інформацію про відвідувачів деякого сайту (для кожного відвідувача зберігається
// логін). Підрахувати для кожного клієнта кількість відвідувань.

if (!localStorage.getItem("login")) {
	const login = prompt("Enter your login");
	localStorage.setItem("login", login);
	localStorage.setItem("visit", "1");
} else localStorage.setItem("visit", +localStorage.getItem("visit") + 1);
const task7 = document.createElement("p");
task7.innerText = `Ви відвідали сайт ${localStorage.getItem("visit")} разів`;
body.append(task7);
// Задача 8. Дано масив студентів (піб, курс, факультет). Підрахувати кількість різних факультетів, та
// кількість студентів кожного з курсів.
class Student {
	constructor(name, course, profeshion) {
		this.name = name;
		this.course = course;
		this.profeshion = profeshion;
	}
}
let studentsList = [
	new Student("Ivan", 1, "cook"),
	new Student("Petro", 2, "engineer"),
	new Student("Ann", 2, "driver"),
	new Student("Olga", 4, "cook"),
	new Student("John", 3, "cook"),
	new Student("Stepan", 4, "engineer"),
	new Student("Yura", 4, "translator")
];
let amountCourse = new Map([
	[1, 0],
	[2, 0],
	[3, 0],
	[4, 0]
]);
let amounProf = new Map();
studentsList.forEach((item) => {
	amountCourse.set(item.course, amountCourse.get(item.course) + 1);
	if (amounProf.has(item.profeshion)) amounProf.set(item.profeshion, amounProf.get(item.profeshion) + 1);
	else amounProf.set(item.profeshion, 1);
});
console.log(amountCourse);
console.log(amounProf);
// Задача 9. Дано масив показів температур. Підрахувати кількість входжень кожного із показів
//
// Заокруглити вверх значення та підрахувати кількість різних показів.
let temperatures = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9];
let tempAmount = new Map();
let tempCountSome = new Set();
temperatures.forEach((item) => {
	if (tempAmount.has(item)) tempAmount.set(item, tempAmount.get(item) + 1);
	else tempAmount.set(item, 1);
	tempCountSome.add(Math.ceil(item));
});
//кількість входжень кожного із показів
console.log(tempAmount);
//кількість входжень різних температур
console.log(tempCountSome.size);
// Задача 10 Дано два списки прізвищ студентів, що відвідують гуртки з
// математики і історії. Підрахувати скільки студентів з гуртка з історії
// також відвідують гурток з математики. Також підрахувати скільки всього
// студентів відвідують хоча б один гурток.
const studentsListMath = ["Olga", "John", "Petro", "Ivan", "Stepan", "Vova", "Sasha", "Inna"];
const studentsListHistory = ["Anna", "Alla", "Yana", "Ivan", "Stepan", "Vova"];
let resOne = new Set(studentsListHistory).intersection(new Set(studentsListMath));
let resAllStudents = new Set([...studentsListHistory, ...studentsListMath]);
console.log(resOne);
console.log(resAllStudents);
// Задача 12. Зберігати у пам’яті список справ, які користувачу треба виконати
// (зберігати у localStorage). Періодично випадковим чином вибирати якусь з справ
// і виводити користувачу (з використанням confirm). Якщо користувач натискає на
// «Ок», то видаляти цю задачу.

const wrapTask12 = document.createElement("div");
wrapTask12.classList.add("wrap-task");
const title = document.createElement("h1");
title.innerText = "Enter your task";
const wrapper = document.createElement("div");
const input = document.createElement("input");
input.placeholder = "Enter your new task";
input.type = "text";
const button = document.createElement("button");
button.innerText = "Add";
const buttonDel = document.createElement("button");
buttonDel.innerText = "Clear all";
buttonDel.addEventListener("click", () => {
	if (localStorage.getItem("tasksList")) {
		localStorage.removeItem("tasksList");
		alert("You deleted all tasks");
	}
});
button.addEventListener("click", () => {
	if (input.value.length <= 4) return;
	const tasksList = localStorage.getItem("tasksList");
	if (tasksList) {
		const arrTaskList = JSON.parse(tasksList);
		arrTaskList.push(input.value);
		localStorage.setItem("tasksList", JSON.stringify(arrTaskList));
	} else localStorage.setItem("tasksList", JSON.stringify([input.value]));
	alert("You added new task!!!");
	input.value = "";
});
setInterval(() => {
	const arrTasks = JSON.parse(localStorage.getItem("tasksList"));
	if (arrTasks.length === 0) return;
	let sizeTasks = arrTasks.length;
	let randomIndex = Math.floor(Math.random() * sizeTasks);
	let res = confirm(arrTasks[randomIndex]);
	if (!res) return;
	arrTasks.splice(randomIndex, 1);
	localStorage.setItem("tasksList", JSON.stringify(arrTasks));
}, 10000);
const resTasks = document.createElement("div");
wrapper.append(input, button, buttonDel);
wrapTask12.append(title, wrapper, resTasks);
body.prepend(wrapTask12);

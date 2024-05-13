const body = document.body;
body.classList.add("lesson23");
let stringList = [
	"Hello",
	"Bye55",
	"Nice to meet you 2000",
	"Have you ever been to London?",
	"I have lived in Ukraine since 2001",
	"Klmnl"
];
let stringRow = `Hello, Nice to meet you, 2000, I have lived, in 2022 2021 Ukraine since 2001, 
Have you ever been to London? Bye55, 10-10-2024, 3434-3434-3434-3434`;
// Задача 1. Дано масив рядків. Вивести ті, у яких є цифри (використати метод test та регулярні вирази).
const task1 = document.createElement("h3");
task1.innerText = "Дано масив рядків. Вивести ті, у яких є цифри (використати метод test та регулярні вирази).";
body.append(task1);
stringList.forEach((item) => {
	if (/[0-9]/gi.test(item)) {
		const result = document.createElement("p");
		result.innerText = item;
		body.append(result);
	}
});
// Задача 2. Дано масив рядків. Вивести ті, у яких немає цифр.
const task2 = document.createElement("h3");
body.append(task2);
task2.innerText = " Дано масив рядків. Вивести ті, у яких немає цифр.";
stringList.forEach((item) => {
	if (!/[0-9]/gi.test(item)) {
		const result = document.createElement("p");
		result.innerText = item;
		body.append(result);
	}
});
// Задача 3. Дано масив рядків. Вивести ті, у яких є голосні літери.
const task3 = document.createElement("h3");
body.append(task3);
task3.innerText = " Дано масив рядків. Вивести ті, у яких є голосні літери.";
stringList.forEach((item) => {
	if (/[aeyuio]/gi.test(item)) {
		const result = document.createElement("p");
		result.innerText = item;
		body.append(result);
	}
});

// Задача 4. Дано масив рядків. Вивести ті, у яких немає голосних літер.
const task4 = document.createElement("h3");
body.append(task4);
task4.innerText = "Дано масив рядків. Вивести ті, у яких немає голосних літер.";
stringList.forEach((item) => {
	if (!/[aeyuio]/gi.test(item)) {
		const result = document.createElement("p");
		result.innerText = item;
		body.append(result);
	}
});

// Задача 5. Дано масив рядків. Вивести ті, у яких є або цифра 1 або цифра 3.
const task5 = document.createElement("h3");
body.append(task5);
task5.innerText = "Дано масив рядків. Вивести ті, у яких є або цифра 1 або цифра 3";
stringList.forEach((item) => {
	if (/[1|3]/gi.test(item)) {
		const result = document.createElement("p");
		result.innerText = item;
		body.append(result);
	}
});

// Задача 6. Дано рядок тексту, вивести усі числа, які є у тексті.
const task6 = document.createElement("h3");
body.append(task6);
task6.innerText = "Дано рядок тексту, вивести усі числа, які є у тексті.";
let res = stringRow.match(/\d+/gi);
const result = document.createElement("p");
result.innerText = res;
body.append(task6, result);

// Задача 7. Дано рядок тексту. Знайти усі знаки пунктуації, які були використано.
const task7 = document.createElement("h3");
body.append(task7);
task7.innerText = "Дано рядок тексту. Знайти усі знаки пунктуації, які були використано.";
let res2 = stringRow.match(/\.|\?|\,/gi);
const result2 = document.createElement("p");
result2.innerText = res2.join("        ");
body.append(task6, result2);

// Задача 8. Дано рядок тексту. Вивести усі складові, які розділені розділовими знаками.
const task8 = document.createElement("h3");
body.append(task8);
task8.innerText = "Дано рядок тексту. Вивести усі складові, які розділені розділовими знаками.";
const res3 = stringRow.match(/(?<=^|\.|\,|\?).+?(?=\,|\?|\,|\.|$)/gim);
const result3 = document.createElement("p");
res3.forEach((elem) => {
	const item = document.createElement("p");
	item.innerText = elem;
	result3.append(item);
});

body.append(task8, result3);
// Задача 9. Дано рядок тексту. Перевірити, чи містить він дату у форматі dd.mm.yyyy (dd- день, mm- місяць, yyyy- рік).
const task9 = document.createElement("h3");

task9.innerText =
	" Дано рядок тексту. Перевірити, чи містить він дату у форматі dd.mm.yyyy (dd- день, mm- місяць, yyyy- рік).";
const res4 = stringRow.match(/(\d{2}-\d{2}-\d{4})/gim);
const result4 = document.createElement("p");
result4.innerText = res4;
body.append(task9, result4);
// Задача 10. Дано рядок тексту. Підрахувати кількість двоцифрових чисел у рядку.
const task10 = document.createElement("h3");
body.append(task10);
task10.innerText = "Дано рядок тексту. Підрахувати кількість двоцифрових чисел у рядку.";
const res5 = stringRow.match(/\d{2}/gim);
const result5 = document.createElement("p");
result5.innerText = res5;
body.append(task10, result5);

// Задача 11. Визначити чи може бути рядок тексту номером банківської картки (приклад: «4142-3433-2323-3434»). Знайти усі такі номери.
const task11 = document.createElement("h3");
body.append(task11);
task11.innerText =
	" Визначити чи може бути рядок тексту номером банківської картки (приклад: «4142-3433-2323-3434»). Знайти усі такі номери.";
const res6 = stringRow.match(/\d{4}(-| )\d{4}(-| )\d{4}(-| )\d{4}/gim);
const result6 = document.createElement("p");
result6.innerText = res6;
body.append(task11, result6);
// Задача 12. Дано адресу сайту. Визначити, чи є він урядовим (містить домен “gov”)
let url = "https://regex101.gov.com";
const task12 = document.createElement("h3");
body.append(task12);
task12.innerText = " Дано адресу сайту. Визначити, чи є він урядовим (містить домен “gov”)";
const res7 = url.match(/http(s?):\/\/.+\.gov(\..+)?/gi);
const result7 = document.createElement("p");
result7.innerText = res7;
body.append(task12, result7);
// Задача 13. Вибрати усі роки після 2021 року з отриманого повідомлення
const task13 = document.createElement("h3");
body.append(task13);
task13.innerText = "Вибрати усі роки після 2021 року з отриманого повідомлення";
const res8 = stringRow.match(/(?<=^| |\,|\.)[2-9][0-9][2-9]{2}(?=$|\,|\.| )/gi);
const result8 = document.createElement("p");
result8.innerText = res8;
body.append(task13, result8);
// Задача 14. Дано номер телефону. Перевірити, чи є цей телефон телефоном з України (починаєтсья на «+38»)
let tel = "+380935656555";
const task14 = document.createElement("h3");
body.append(task14);
task14.innerText = "Дано номер телефону. Перевірити, чи є цей телефон телефоном з України (починаєтсья на «+38»)";
const res9 = /\+38\d{10}/gi.test(tel);
const result9 = document.createElement("p");
result9.innerText = res9;
body.append(task14, result9);

// Задача 15. Користувач вводить прізвище та ім’я в одному рядку через пробіл.  Замінити пробіл на дефіс.
let nameFull = prompt("Your name and surname");
const task15 = document.createElement("h3");
body.append(task15);
task15.innerText = "Користувач вводить прізвище та ім’я в одному рядку через пробіл.  Замінити пробіл на дефіс.";
const reg = / /gi;
const newRes = nameFull.replace(reg, "-");
const result10 = document.createElement("p");
result10.innerText = newRes;
body.append(task15, result10);

// Задача 16. Користувач вводить дату у форматі «день.місяць.рік». Отримати рядкове представлення дати у форматі «день/місяць/рік»
let dateFull = prompt("Enter date");
const task16 = document.createElement("h3");
body.append(task16);
task16.innerText =
	"Користувач вводить дату у форматі «день.місяць.рік». Отримати рядкове представлення дати у форматі «день/місяць/рік»";
const reg2 = /\./gi;
const newRes2 = dateFull.replace(reg2, "/");
const result11 = document.createElement("p");
result11.innerText = newRes2;
body.append(task16, result11);

// Задача 17. Користувач вводить день (номер дня (0-6) або «sun,mon,tue,wed,thu,fri,sat»). Визначити, чи  є це день вихідним
let day = prompt("Enter day");
const task17 = document.createElement("h3");
body.append(task17);
task17.innerText =
	"Користувач вводить дату у форматі «день.місяць.рік». Отримати рядкове представлення дати у форматі «день/місяць/рік»";
const result12 = document.createElement("p");
const newRes3 = /(sun|sat|0|6)/gi.test(day);
if (newRes3) result12.innerText = "День є вихідним";
else result12.innerText = "День не є вихідним";
body.append(task17, result12);

alert(`
Задача 8. Створити функцію, яка виводить банер (у функцію передаються: зображення, заголовок та посилання,
 куди переходимо при кліку на зображення (тег img повине знаходитись у середині тега a: <a> <img src=”шлях”> </a>

`);
function showImage(urlImage, text, link) {
	document.write(`
     <a href="${link}">
            <img src="${urlImage}" alt="Image">
            ${text}
     </a>
    `);
}
let link = "https://www.google.com ";
let urlImage = "../../../../img/image-1.jpeg";
let text = "edesfdfdfd sfdfdf dfdfdf fdfdf";
showImage(urlImage, text, link);

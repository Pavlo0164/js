//Кількість ваших років
const yearNow = 2024;
let yearBirthday = parseInt(prompt(`Введіть рік свого народження`));
let yearsOld = yearNow - yearBirthday;

document.write(`You are ${yearsOld} years old`);
alert(`You are ${yearsOld} years old`);

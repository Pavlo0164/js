alert(`
  11.1. Комп’ютер загадує два випадкових числа від 1 до 10. 
  Вгадати обидва числа шляхом введеня можливих варіантів.
   В кінці вивести кількість спроб користувача.
`);

let num1 = 1 + Math.floor(Math.random() * 10);
let num2 = 1 + Math.floor(Math.random() * 10);
while (num1 === num2) {
	num2 = 1 + Math.floor(Math.random() * 10);
}

let count = 0;
let enterNum1;
let bool = true;
do {
	enterNum1 = parseInt(prompt("Відгадайте перше число"));
	if (enterNum1 === num1 || enterNum1 === num2) {
		bool = false;
	}
	count += 1;
} while (bool);

bool = true
let enterNum2;
do {
  enterNum2 = parseInt(prompt("Відгадайте друге число"));
	count += 1;
  if (enterNum1 === num1 || enterNum1 === num2) {
		bool = false;
  }
	
} while (bool);

alert(`Ви вгадали числа ${enterNum1} та ${enterNum2} за ${count} спроб`);

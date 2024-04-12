// Задача 3. Розробити клас MultChecker для перевірки таблиці множення
// Поля
// Число, яке перевіряємо (наприклад, перевірка частини таблиці множення на 7)
// Кількість правильних відповідей
// Кількість неправильних відповідей
// Методи
// Генерування прикладу (метод випадковим чином визначає друге число, перше число фіксоване)
// Перевірка правильності вказаної відповіді
// render - виведення інформації про тестування на екран
class MultChecker {
	constructor(num) {
		this.num = num;
		this.trueResult = 0;
		this.falseResult = 0;
	}
	checkAnswer(answer, randomNum) {
		if (answer === this.num * randomNum) this.trueResult++;
		else this.falseResult++;
	}
	render() {
		document.write(`Ви зробили ${this.trueResult} правильних відповідей </br>
        Ви зробили ${this.falseResult} неправильних відповідей </br>
        `);
	}
	generateTask() {
		let question;
		do {
			let randomNum = 1 + Math.floor(Math.random() * 9);
			let result = prompt(`${this.num} * ${randomNum} = ?`);
			this.checkAnswer(result, randomNum);
			question = confirm(`Бажаєте ще зробити приклад?`);
		} while (question);
		
	}
}
let numberFive = new MultChecker(5);
numberFive.generateTask();
numberFive.render()

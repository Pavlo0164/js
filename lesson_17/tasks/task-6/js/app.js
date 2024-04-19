// Дано два класи MultChecker (клас для перевірки таблиці множення - рандомно генеруються числа, які треба перемножати),
// AddChecker (клас для перевірки додавання - рандомно генеруються числа у заданому діапазоні, які треба додавати).
//  Обидва класи надсилають результати тестування об'єкту класу Hystory, який зберігає історію тестування у масиві у вигляді об'єктів
// Приклад.
// testsList= [
//    {firstNum:1, secondNum:5,opration:’*’, userAnswer:7, correctAnswer:5},
//    {firstNum:3, secondNum:4,opration:’+’, userAnswer:7, correctAnswer:7},
// ]
// Можна створити окремий клас TestData, який описує один такий тест і у якому будуть ці поля.
// Розробити клас TestManager, який використовуючи ці класи за допомогою таймера періодично генерує якісь N задач
// (рандомно вибираємо, що опитувати: додавання чи множення) і проводить опитування. Результати тестування додаються в об’єкт History.
//  Зробити так, щоб об'єкт такого класу можна було створити тільки один. Коли зроблено ці N задач вивести усю історію на екран
class TestData {
	constructor(firstNum, secondNum, opration, userAnswer, correctAnswer) {
		this.firstNum = firstNum;
		this.secondNum = secondNum;
		this.opration = opration;
		this.userAnswer = userAnswer;
		this.correctAnswer = correctAnswer;
	}
}
class MultChecker {
	static multWork() {
		let firstNum = 1 + Math.floor(Math.random() * 9);
		let secondNum = 1 + Math.floor(Math.random() * 9);
		let correctAnswer = firstNum * secondNum;
		let opration = `*`;
		let userAnswer = parseInt(prompt(`${firstNum} * ${secondNum} :`));
		return new TestData(firstNum, secondNum, opration, userAnswer, correctAnswer);
	}
	constructor() {}
}
class AddChecker {
	static addWork(min, max) {
		let firstNum = min + Math.floor(Math.random() * (max - min) + 1);
		let secondNum = min + Math.floor(Math.random() * (max - min) + 1);
		let correctAnswer = firstNum + secondNum;
		let opration = `+`;
		let userAnswer = parseInt(prompt(`${firstNum} + ${secondNum} :`));
		return new TestData(firstNum, secondNum, opration, userAnswer, correctAnswer);
	}
	constructor() {}
}
class History {
	constructor() {
		this.testHistory = [];
	}
	toString() {
		this.testHistory.forEach((item, index) => {
			document.write(`Task number ${index + 1}<br>`);
			document.write(`First number = ${item.firstNum}<br>
                            Second number = ${item.secondNum}<br>
                            Correct answer = ${item.correctAnswer}<br>
                            Operation = ${item.opration}<br>
                            User answer = ${item.userAnswer}<br><br>
            `);
		});
	}
	addHistoryTest(objHistory) {
		this.testHistory.push(objHistory);
	}
}
class TestManager {
	static numberTask;
	constructor(N) {
		if (!TestManager.numberTask) {
			this.numberTask = N;
			TestManager.numberTask = this;
		} else return TestManager.numberTask;
	}
	work(classAdd, classMult, objHistory,min,max) {
		let arrOption = ["+", "*"];
		let randomNum = Math.floor(Math.random() * 2);
		let count = this.numberTask;
		if (arrOption[randomNum] === "+") {
			setTimeout(function timeOut() {
				let result = classAdd.addWork(min, max);
				objHistory.addHistoryTest(result);
				count--;
				if (count === 0) {
					objHistory.toString()
					return;
				}
				setTimeout(timeOut, 3000);
			}, 3000);
		} else {
			setTimeout(function timeOut() {
				let result = classMult.multWork();
				objHistory.addHistoryTest(result);
				count--;
				if (count === 0) {
					objHistory.toString()
					return;
				}
				setTimeout(timeOut, 3000);
			}, 3000);
		}
	}
}

let history = new History();
let testOne = new TestManager(2);
let testTwo = new TestManager(5)
console.log(testOne);
 testOne.work(AddChecker, MultChecker, history,1,5);

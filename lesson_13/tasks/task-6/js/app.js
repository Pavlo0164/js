// Задача 6. З використанням замикань розробити ітератор, тобто функцію,
//  що буде поступово за окремими викликами видавати по одну букву наперед заданого слова.
//   З використанням нього розробити гру «Прекладач». Виводимо для користувача опис цього слова
//    і по одну букву користувач вводить переклад цього слова. Підрахувати кількість вгаданих букв.

function lock(word) {
	let count = 0;
	let lengthWord = word.length - 1;
	return (letterSearch) => {
		let letter = word[count];
		if (count > lengthWord) count = 0;
		if (letterSearch === letter) {
			count++;
			return true;
		} else {
			count++;
			return false;
		}
	};
}
function work(funcOneLetter, word) {
	let oneLetter = funcOneLetter(word);
	let count = 0;
	let trueAnswer = 0;
	alert(`happy ...`);
	while (count < word.length) {
		let answerLetter = prompt(`Введіть літеру номер ${count + 1}`);
		let result = oneLetter(answerLetter);
		if (result) trueAnswer++;
		count++;
	}
	alert(`Вгадуване слово було ${word}\n Правильних відповідей було ${trueAnswer}`);
}
work(lock, "birthday");

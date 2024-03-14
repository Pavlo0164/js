
alert(`
    Задача 0. Створити функцію, яка за номером місяця повертає пору року, до якої відноситься цей місяць.
`);

function showMonth(numMonth){
    let month 
    switch (numMonth) {
			case 12:
			case 1:
			case 2:
				month = "Зима";
				break;
			case 3:
			case 4:
			case 5:
				month = "Весна";
				break;
			case 6:
			case 7:
			case 8:
				month = "Літо";
				break;
			case 9:
			case 10:
			case 11:
				month = "Осінь";
				break;
			default:
                month = 'Такого місяця не існує'
				break;
		}

    return month
}
let num = parseInt(prompt('Введіть номер місяця'))
document.write(showMonth(num));

alert(`
Задача 6. Створити функцію, 
яка створює таблицю з вказаною кількістю рядків і 
стовпців (таблиця заповнюється заданим фіксованим повідомленням).
`);
let row  = parseInt(prompt(`Введіть кількіть рядків`))
let column = parseInt(prompt(`Введіть кількість стовпців`))
let text = prompt(`Введіть повідомлення`)
function showRowAndColumn(row,column) {
    document.write(`<table>`)
    for (let i = 0; i < column; i++) {
       document.write(`<tr>`)
            for (let p = 0; p < row; p++) {
                document.write(`<th>${text}</th>`)
            }
       document.write(`</tr>`);
    }
    document.write(`</table>`);
}
showRowAndColumn(row, column);


alert(`
Задача 5. Створити окремі функції, які переводять:
Сантиметри у дюйми;
Кілограми у фунти;
Кілометри у милі.

`);
let sant = parseInt(prompt(`Введіть кількість сантиметрів`))
let kilo = parseFloat(prompt(`Введіть кількість кілограмів`))
let kilometr = parseFloat(prompt(`Введіть кількість кілометрів`))
function santInDuim(sant) {
    oneDuim = 2.54
    let duim = sant / oneDuim
    return duim
}

function kiloInFunt(kilo) {
    oneFunt = 2.2
    let funt = kilo / oneFunt
    return funt
}
function kilometrInMile(kilometr) {
    oneMile = 1.61
    let mile = kilometr / oneMile
    return mile
}
document.write(`
    <div>${sant} сантиметрів це: ${santInDuim(sant).toFixed(3)} дюйм(ів) </div>
    <div>
        ${kilo} кілограмів це: ${kiloInFunt(kilo).toFixed(3)} фунти(ів)
    </div>
    <div>${kilometr} кілометрів це: ${kilometrInMile(kilometr).toFixed(3)} миль</div>
`);

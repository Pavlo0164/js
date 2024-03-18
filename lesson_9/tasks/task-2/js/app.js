alert(`
    2. Користувач вводить кількість елементів. 
    Створити масив, у якому перша половина заповнена 1-цями, а друга заповнена 7-ками.
`);
function createdArray(funcGetNumber) {
    let number = funcGetNumber()
    let newArr = new Array(number)
    let centerNumArr = Math.floor(number/2)
    newArr.fill(1, 0, centerNumArr).fill(7, centerNumArr);
    return newArr
}
let array = createdArray(()=>parseInt(prompt(`Введіть скільки елементів буде у масиві`)))
document.write(array)
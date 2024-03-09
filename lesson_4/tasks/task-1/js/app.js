//1. З клавіатури вводитяться числа поки не буде введено 0. Знайти суму чисел.
let sum = 0
do{
    let num = parseInt(prompt('Введіть число'))
    sum += num
}while(num)

document.write(`сума чисел: ${sum}`)
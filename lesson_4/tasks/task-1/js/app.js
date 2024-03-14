//
//
alert(`
1. З клавіатури вводитяться числа поки не буде введено 0. Знайти суму чисел.
2.З клавіатури вводитяться числа поки не буде введено 0. Знайти добуток чисел.
`);
let sum = 0
let prod = 1
let num
do{
     num = parseInt(prompt('Введіть число'))
    sum += num
    prod = num ? prod * num :prod
}while(num)
if(sum === 0) prod = 0
document.write(`сума чисел: ${sum},добуток чисел : ${prod}`)

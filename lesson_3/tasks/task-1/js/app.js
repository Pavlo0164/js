//Задача -2. Поступово генерувати 100 випадкових чисел від 1 до 1000. Підрахувати яких чисел більше: парних чи непарних.
let evenNumber = 0
let oddNumber = 0
for (let i = 0; i < 100; i++) {
    const randomNumber = 1 + Math.floor(Math.random()* 1000)
    if(  randomNumber%2){
        oddNumber += 1
        continue
    }
    evenNumber += 1
}
document.write(`Парних чисел: ${evenNumber}, не парних чисел ${oddNumber}`)
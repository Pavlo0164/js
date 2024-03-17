alert(`
    Задача 3. Дано масив імен учнів. З’ясувати скільки разів зустрічається ім’я «Іван».

`);
function showIvan(array) {
    let count = 0
    for (let i = 0; i < array.length; i++) {
       if(array[i] === "Іван")count++
        
    }
    return count
}
let arr = ["Іван",'Валєра','Жора']
console.log(showIvan(arr));


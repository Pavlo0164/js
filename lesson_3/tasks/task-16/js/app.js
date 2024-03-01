alert("13. Морський бій. Комп’ютер випадково розташовує одиночний корабель на полі розміром N*M.Маючи К снарядів користувач намагається потопити корабель. ")

 const N = parseInt(prompt('Введіть розмір поля N'))
  const M = parseInt(prompt("Введіть розмір поля M"));
  let K = parseInt(prompt("Введіть скільки в вас є набоїв"));
  let bool = true
const charge = 1 + Math.floor(Math.random()*M*N)
  while(K){
    let num = parseInt(prompt('Робіть постріл'))
    if(num === charge){
      bool = false
       alert('Ви потопили корабель')
        break
    }
    K--
  }
if(bool){
  alert('Ви не потопили корабель.Спробуйте зіграти ще раз')
}
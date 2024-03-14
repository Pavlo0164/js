
alert(`2.1. З клавіатури поступово вводяться символи поки не буде введено символ «а». Вивести рядок символів у зворотному порядку.`)
let letter = ""
let sumLetter = ""
do{
  letter = prompt("Введіть літеру")
  
  sumLetter = letter + sumLetter
}while(letter !== "a")

document.write(sumLetter)
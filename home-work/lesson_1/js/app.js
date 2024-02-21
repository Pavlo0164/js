//сума трьох чисел
const numberOne = 12;
let a = parseInt(prompt("Number a ="));
let b = parseInt(prompt("Number b ="));
let sumNumbers = numberOne + a + b;

document.write(`Hello.Sum of numbers :   ${sumNumbers}`);

//сума,добуток,частка двох чисел
alert(
  `Сума чисел = ${a + b}\n 
   Добуток чисел = ${a * b}\n 
   Частка чисел = ${a / b} \n`
);

//Кількість ваших років
const yearNow = 2024;
let yearBirthday = parseInt(prompt(`Введіть рік свого народження`));
let yearsOld = yearNow - yearBirthday;

document.write(`You are ${yearsOld} years old`);
alert(`You are ${yearsOld} years old`);

//Задача 3.
let priceProduct = parseInt(prompt(`Введіть вартість товару у $`));
let quantityProduct = parseInt(prompt(`Введіть кількість товару`));
const percentTax = 5;

let generalPriceProduct = priceProduct + quantityProduct;
let priceTax = (generalPriceProduct / 100) * percentTax;

alert(
  `Загальна вартість товару ${generalPriceProduct} $ \n
    Загальна вартість ПДВ від суми товару ${priceTax} $`
);

//задача 4.
let lengthInCentimetr = parseInt(prompt(`Введіть довжину у сантиметрах`));
let lenthInMetrs = parseInt(lengthInCentimetr / 100);
let lenthInKilometrs = parseInt(lenthInMetrs / 1000);

alert(`Довжина у метрах становить ${lenthInMetrs} м \n
        Довжина у кілометрах становить ${lenthInKilometrs} км
 `);


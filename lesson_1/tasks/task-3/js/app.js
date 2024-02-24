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

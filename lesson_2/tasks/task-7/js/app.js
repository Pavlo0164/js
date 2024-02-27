//З клавіатури вводиться ціна товару і кількість грошей.
//Якщо грошей не вистачає то відмовляємо у покупці, інакше, якщо ще залишаються гроші, то пропонуємо купити лотерею за 4 грн.
const priceProduct = parseFloat(prompt("Enter the price of product"));
const amountOfMoney = parseFloat(prompt("Enter the amount of money"));
const costOfLottery = 4;

if (isNaN(priceProduct) && isNaN(amountOfMoney)) {
  alert("You are entering  is incorrect data");
} else {

  if (priceProduct > amountOfMoney) {
    alert("You can not bay the product");
  } else if (amountOfMoney - priceProduct >= costOfLottery) {
    const answer = prompt("Are you want to pay of lottery ticket? Yes or No");
    if (answer === "Yes") {
      alert("You bought a lottery ticket");
    } else {
      alert("Goodbay");
    }
  } else {
    alert("Goodbay");
  }
  
}


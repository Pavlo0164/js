//Задача 6. З клавіатури вводяться вартість товару та кількість одиниць 3 товарів.
//Обчислити вартість кожного товару окремо та загальну вартість.
//Вивести чек (як у супермаркеті) використовуючи елементи розмітки.
let totalCostOne;
let totalCostTwo;
let totalCostThree;
let productPriceOne;
let productPriceTwo;
let productPriceThree;
let productNumberOne;
let productNumberTwo;
let productNumberThree;
let nameProductOne;
let nameProductTwo;
let nameProductThree;
nameProductOne = prompt("Напишіть назву товару який купуєте");
productPriceOne = parseFloat(prompt("Введіть вартість одиниці першого товару"));
if (isNaN(productPriceOne)) {
  alert("Вартість не коректна");
} else {
  productNumberOne = parseInt(
    prompt("Введіть кількість одиниць першого товару")
  );
  if (isNaN(productNumberOne)) {
    alert("Кількість не коректна");
  } else {
    nameProductTwo = prompt("Напишіть назву товару який купуєте");
    productPriceTwo = parseFloat(
      prompt("Введіть вартість одиниці другого товару")
    );
    if (isNaN(productPriceTwo)) {
      alert("Вартість не коректна");
    } else {
      productNumberTwo = parseInt(
        prompt("Введіть кількість одиниць другого товару")
      );
      if (isNaN(productNumberTwo)) {
        alert("Кількість не коректна");
      } else {
        nameProductThree = prompt("Напишіть назву товару який купуєте");
        productPriceThree = parseFloat(
          prompt("Введіть вартість одиниці третього товару товару")
        );
        if (isNaN(productPriceThree)) {
          alert("Вартість не коректна");
        } else {
          productNumberThree = parseInt(
            prompt("Введіть кількість одиниць третього товару")
          );
          totalCostOne = productPriceOne * productNumberOne;
          totalCostTwo = productPriceTwo * productNumberTwo;
          totalCostThree = productPriceThree * productNumberThree;
          let numberProduct =
            productNumberOne + productNumberTwo + productNumberThree;
          let totalPriceProduct = totalCostOne + totalCostTwo + totalCostThree;
          document.write(
            `
  <table>
        <tr>
          <th>Назва </th>
          <th>Кількість </th>
          <th>Вартість одиниці</th>
          <th>Загальна вартість </th>
        </tr>
        <tr >
          <th>${nameProductOne}</th>
          <th>${productNumberOne}</th>
          <td>${productPriceOne}</td>
          <td>${totalCostOne}</td>

        </tr>
        <tr>
          <th>${nameProductTwo}</th>
          <th>${productNumberTwo}</th>
          <td>${productPriceTwo}</td>
          <td>${totalCostThree}</td>
        </tr>
        <tr>
          <th>${nameProductThree}</th>
          <th>${productNumberThree}</th>
          <td>${productPriceThree}</td>
          <td>${totalCostTwo}</td>
        </tr>
        <tr>
          <th>Загальна сума</th>
          <th>${numberProduct}</th>
          <td></td>
          <td>${totalPriceProduct}</td>
        </tr>
      </table>`
          );
        }
      }
    }
  }
}

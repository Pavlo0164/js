//Задача 2. Створити 10 елементів для введення цін продуктів

for (let i = 1; i <= 10; i++) {
  document.write(`
  <label for="product">Product#${i}</label>
  <input id="product"  type="text">
  </br>
  `);
}

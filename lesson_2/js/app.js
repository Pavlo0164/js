//Задача 4. Дано довжину у сантиметрах. Визначати скільки це метрів і кілометрів.
const lengthInCentimeter = parseInt(
  prompt("Введіть довжину у сантиметрах", "0")
);

if (isNaN(lengthInCentimeter)) {
  alert("число введено не коректно");
} else {
  const lengthInMeters = Math.round((lengthInCentimeter / 100) * 100) / 100;
  const lengthKilometers = Math.round((lengthInMeters / 1000) * 1000) / 1000;
  alert(
    `${lengthInCentimeter} сантиметрів - це ${lengthInMeters} метрів, або ${lengthKilometers} кілометрів `
  );
}

//Задача 5. Дано кількість секунд, що пройшла від початку доби. Визначити скільки це годин і хвилин.

const secondInMinuteOrMinuteInHour = 60;
const numberSecond = parseInt(
  prompt(`Введіть кількість секунд що пройшло з початку доби `, "0")
);
if (isNaN(numberSecond)) {
  alert("Число введено не коректно");
} else {
  const numberMinutes = Math.floor(numberSecond / secondInMinuteOrMinuteInHour);
  const secondsRemaining = numberSecond % secondInMinuteOrMinuteInHour;
  const numberHours = Math.floor(numberMinutes / secondInMinuteOrMinuteInHour);
  const minutesRemaining = numberMinutes % secondInMinuteOrMinuteInHour;
  alert(
    ` ${numberHours} годин, ${minutesRemaining} минут, ${secondsRemaining} секунд пройшло з початку доби `
  );
}

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
//Задача 7. Знайти суму випадкового номера місяця (від 1 до 12) та випадкового номера дня (від 0 до 6).
let minMonth = 1;
let maxMonth = 12;
let minDay = 0;
let maxDay = 6;
let randomNumberMonth =
  Math.floor(Math.random() * (maxMonth - minMonth + 1)) + minMonth;
let randomNumberDay =
  Math.floor(Math.random() * (maxDay - minDay + 1)) + minDay;
let sumRandomNumber = randomNumberMonth + randomNumberDay;
document.write(`Сума випадкових чисел : ${sumRandomNumber}`);

//З клавіатури вводяться імена двох дітей та кількість у них цукерок.
// Вивести не екран ім’я тієї дитини, у якої кількість цукерок є більшою, або вивести, що кількість однакова.
let booleanVariable = true;
let booleanVariableName = true;
let nameFirstChild;
let numberOfCandiesInFirstChild;
let nameSecondChild;
let numberOfCandiesInSecondChild;
if (booleanVariable) {
  nameFirstChild = prompt("Enter the first child's name");
  if (!nameFirstChild) {
    booleanVariable = false;
  } else if (!isNaN(parseInt(nameFirstChild))) {
    booleanVariableName = false;
  } else {
    numberOfCandiesInFirstChild = parseInt(
      prompt("Enter number of candies in the firts child  ")
    );
    if (isNaN(numberOfCandiesInFirstChild)) {
      booleanVariable = false;
    } else {
      nameSecondChild = prompt("Enter the second child's name");
      if (!nameSecondChild) {
        booleanVariable = false;
      }
      if (!isNaN(parseInt(nameSecondChild))) {
        booleanVariableName = false;
      } else {
        numberOfCandiesInSecondChild = parseInt(
          prompt("Enter number of candies in the second child  ")
        );
        if (isNaN(numberOfCandiesInSecondChild)) {
          booleanVariable = false;
        }
      }
    }
  }
}
if (!booleanVariable) {
  alert("Sorry,You are entering incorrect data");
}
if (!booleanVariableName) {
  alert("Sorry, Child`s name cannot consists of numbers ");
}

if (booleanVariable || booleanVariableName) {
  if (numberOfCandiesInFirstChild === numberOfCandiesInSecondChild) {
    alert(
      `Children have the same number of candies, these is ${nameFirstChild} and ${nameSecondChild}`
    );
  } else if (numberOfCandiesInFirstChild > numberOfCandiesInSecondChild) {
    alert(`The first child has more candy, her name is ${nameFirstChild}`);
  } else {
    alert(`The second child has more candy her name is ${nameSecondChild}`);
  }
}

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
//Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби.
const minNumber = 1;
const maxNumber = 5;
const generateNumber = Math.floor(
  Math.random() * (maxNumber - minNumber + 1) + 1
);
console.log(generateNumber);
let numberVariant = parseInt(prompt("Hello.Enter a number from 1 to 5"));
if (isNaN(numberVariant) || numberVariant < 1 || numberVariant > 5) {
  alert("You entered an incorrected number");
} else {
  if (numberVariant === generateNumber) {
    alert("Nice.You guessed the number");
  } else {
    numberVariant = parseInt(prompt("Enter a number from 1 to 5 again"));
    if (isNaN(numberVariant) || numberVariant < 1 || numberVariant > 5) {
      alert("You entered an incorrected number");
    } else {
      if (numberVariant === generateNumber) {
        alert("Nice.You guessed the number");
      } else {
        alert(
          `Sorry.You did not quess the number.This is number ${generateNumber}`
        );
      }
    }
  }
}

//З клавіатури вводиться вік людини.
//Вивести на екран ким він є (дитиною у садочку, школярем, студентом, працівником, пенсіонером).
const humanAge = parseInt(prompt("Enter your age"));
const personInKindergarten = 5;
const personInSchool = 14;
const personInStudent = 25;
const personInWork = 60;
if (isNaN(humanAge)) {
  alert("Your age is incorrect");
} else if (humanAge < 0 || humanAge > 150) {
  alert("You do not exist");
} else {
  if (humanAge <= personInKindergarten) {
    alert("This person is in kindergarten ");
  } else if (humanAge <= personInSchool) {
    alert("This person is in school ");
  } else if (humanAge <= personInStudent) {
    alert("This person is a student  ");
  } else if (humanAge <= personInWork) {
    alert("This person is a employee ");
  } else {
    alert("This person is a pensioner ");
  }
}

//З клавіатури вводиться назва категорії водія (А-мотоцикл, В-легковий автомобіль, С-вантажний автомобіль).
//Вивести на екран назву транспортного засобу, яким він може керувати.
const categoryDriver = prompt(
  "Please, enter your category with a capital letter"
);

switch (categoryDriver) {
  case "A":
    alert("You can drive a motorcycle");
    break;
  case "B":
    alert("You can drive cars weighing up to 3500kg");
    break;
  case "C":
    alert("You can drive cars weighing more than 3500kg");
    break;
  default:
    alert("You entered an incorrected category drive");
    break;
}

//З клавіатури вводиться номер дня тижня. Вивести на екран назву дня.
const numberEnter = parseInt(prompt("Enter a number from 0  to 6"));
switch (numberEnter) {
  case 0:
    alert("Monday");
    break;
  case 1:
    alert("Tuesday");
    break;
  case 2:
    alert("Wednesday");
    break;
  case 3:
    alert("Thursday");
    break;
  case 4:
    alert("Friday");
    break;
  case 5:
    alert("Saturday");
    break;
  case 6:
    alert("Sunday");
    break;
  default:
    alert("You entered an incorrected number");
    break;
}

const numberMonth = parseInt(prompt("Enter number month"));
if (numberMonth === 11 || numberMonth === 0 || numberMonth === 1) {
  alert("Winter");
} else if (numberMonth === 2 || numberMonth === 3 || numberMonth === 4) {
  alert("Spring");
} else if (numberMonth === 5 || numberMonth === 6 || numberMonth === 7) {
  alert("Summer");
} else if (numberMonth === 8 || numberMonth === 9 || numberMonth === 10) {
  alert("Autumn");
} else {
  alert("Incorrect number");
}

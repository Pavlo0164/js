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
      } else if (!isNaN(parseInt(nameSecondChild))) {
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

if (booleanVariable && booleanVariableName) {
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

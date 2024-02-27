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
let resultTwo 
if (!booleanVariable) {
  resultTwo = "Sorry,You are entering incorrect data"
}else if (!booleanVariableName) {
  resultTwo = "Sorry, Child`s name cannot consists of numbers "
}
let result 
if(resultTwo){
  alert(resultTwo);
}else{
   if (numberOfCandiesInFirstChild === numberOfCandiesInSecondChild) {
     result = `Children have the same number of candies, these is ${nameFirstChild} and ${nameSecondChild}`;
   } else if (numberOfCandiesInFirstChild > numberOfCandiesInSecondChild) {
     result = `The first child has more candy, her name is ${nameFirstChild}`;
   } else {
     result = `The second child has more candy her name is ${nameSecondChild}`;
   }
}
alert(result)

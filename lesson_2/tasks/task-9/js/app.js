//З клавіатури вводиться вік людини.
//Вивести на екран ким він є (дитиною у садочку, школярем, студентом, працівником, пенсіонером).
const humanAge = parseInt(prompt("Enter your age"));
const personInKindergarten = 5;
const personInSchool = 14;
const personInStudent = 25;
const personInWork = 60;
let result;
let resultFin;
if (isNaN(humanAge)) {
  resultFin = "Your age is incorrect";
} else if (humanAge < 0 || humanAge > 150) {
  resultFin = "You do not exist";
} else {
  if (humanAge <= personInKindergarten) {
    result = "This person is in kindergarten ";
  } else if (humanAge <= personInSchool) {
    result = "This person is in school ";
  } else if (humanAge <= personInStudent) {
    result = "This person is a student  ";
  } else if (humanAge <= personInWork) {
    result = "This person is a employee ";
  } else {
    result = "This person is a pensioner ";
  }
  resultFin = result;
}
alert(resultFin);

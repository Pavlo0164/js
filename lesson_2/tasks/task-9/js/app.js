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

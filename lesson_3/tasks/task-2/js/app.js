//Задача -1. Вивести на екран номери місяців весни і літа (від 3 до 8)

for (let i = 3; i <= 8; i++) {
  let month;
  switch (i) {
    case 3:
      month = "Березень";
      break;
    case 4:
      month = "Квітень";
      break;
    case 5:
      month = "Травень";
      break;
    case 6:
      month = "Червень";
      break;
    case 7:
      month = "Липень";
      break;
    case 8:
      month = "Серпень";
      break;
  }
  document.write(`Номер місяця : ${i}, назва місяця ${month} </br>` );
}

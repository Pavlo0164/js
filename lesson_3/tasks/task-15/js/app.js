alert("Задача 12. Ігровий автомат. Випадково вибираємо зображення у 3 позиціях.Вибір у кожній позиції вибирається як одне з чотирьох зображень.Вивести ці зображення і повідомити виграш користувача(три перших зображення 100 грн, три других – 200, три третіх – 500, три четвертих зображення – 1000грн).")



let image = "";
for (let i = 0; i < 3; i++) {
  let num = 1 + Math.floor(Math.random() * 4);
  switch (num) {
    case 1:
      image += "1";
      break;
    case 2:
      image += "2";
      break;
    case 3:
      image += "3";
      break;
    case 4:
      image += "4";
      break;
  }
}
let result;
if (image === "111") {
  result = "Вітаю, ви виграли 100грн";
} else if (image === "222") {
  result = "Вітаю, ви виграли 200грн";
} else if (image === "333") {
  result = "Вітаю, ви виграли 500грн";
} else if (image === "444") {
  result = "Вітаю, ви виграли 1000грн";
} else {
  result = "Вітаю!!! Ви нічого не виграли";
}
document.write(result);

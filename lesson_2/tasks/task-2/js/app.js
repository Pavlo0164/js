//Задача 5. Дано кількість секунд, що пройшла від початку доби. Визначити скільки це годин і хвилин.

const secondInMinuteOrMinuteInHour = 60;
const numberSecond = parseInt(
  prompt(`Введіть кількість секунд що пройшло з початку доби `, "0")
);
let result
if (isNaN(numberSecond)) {
  result = "Число введено не коректно"
} else {
  const numberMinutes = Math.floor(numberSecond / secondInMinuteOrMinuteInHour);
  const secondsRemaining = numberSecond % secondInMinuteOrMinuteInHour;
  const numberHours = Math.floor(numberMinutes / secondInMinuteOrMinuteInHour);
  const minutesRemaining = numberMinutes % secondInMinuteOrMinuteInHour;
  result = ` ${numberHours} годин, ${minutesRemaining} минут, ${secondsRemaining} секунд пройшло з початку доби `
}
alert(result)
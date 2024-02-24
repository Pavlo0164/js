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

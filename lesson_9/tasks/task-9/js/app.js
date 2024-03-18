alert(`
    9. Дано масив імен. Сформувати масив з перших літер цих імен.

`);
let arrName = [`Ivan`, `Petro`, `Anna`];
let newArrName = arrName.map((item) => item[0]);
document.write(
	`Масив імен :${arrName}</br>Масив з перших букв імен :${newArrName}`
);

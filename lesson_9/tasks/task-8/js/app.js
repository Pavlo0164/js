alert(`
    8. Дано масив номерів авто. Сформувати новий масив тих, які починаються на «А»
`);
let arr = [`АВ4444ТА`, `ВВ4444ТА`, `ТВ4444ТА`, `АВ4774ТА`];
let newArr = arr.filter((item) => item[0] === "А");
document.write(`Масив номерів авто :${arr} </br>`);
document.write(`Масив номерів авто які починаються на А :${newArr}`);
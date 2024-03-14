alert(`
4.1. З клавіатури вводяться два числа N i M (N<M). Вивести а екран числа
N---M
N+1 --- M-1
N+2 --- M-2
N+3 --- M-3
Виведення завершити коли число справа стане меншим за число зліва.

`);

let N = parseInt(prompt('Введіть число N'))
let M = parseInt(prompt("Введіть число M"));

while (N <= M) {
   document.write(`<p>${N} , ${M}</p>`);
	N += 1;
	M -= 1;
}
for (let i = 0; N < M; i++) {
    document.write(`<p>${N} , ${M}</p>`);
		N += 1;
		M -= 1;
  
}

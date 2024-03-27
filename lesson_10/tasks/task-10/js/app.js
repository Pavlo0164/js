//Заполнить массив нулями, кроме первого и последнего элементов, которые должны быть равны единице.
// let newArr = new Array(10).fill(1, 0, 1)
// newArr.fill(0, 1, newArr.length - 1);
// newArr.fill(1,newArr.length-1)
// console.log(newArr);

//Заполнить массив нулями и единицами, при этом данные значения чередуются, начиная с нуля.
// let arrayTwo = new Array(20);
// for (let i = 0; i < 18; i++) {
//     if(i%2===0)arrayTwo.push(0)
//     else arrayTwo.push(1)
// }
// console.log(arrayTwo);

//Заполнить массив последовательными нечетными числами, начиная с единицы.
// function createArrOdd(number) {
// 	let array = [];
// 	let num = 1;
// 	for (let i = 0; i < number; i++) {
// 		array.push(num);
// 		num += 2;
// 	}
//     return array
// }
// let arr= createArrOdd(16)
// console.log(arr);

//Сформировать массив из элементов арифметической прогрессии с заданным первым элементом x и разностью d.

//9.Создать массив, каждый элемент которого равен квадрату своего номера.
// function createdArr(number) {
//     let arr = new Array(number).fill(0)
//     arr.forEach((item,index)=>{
//         arr[index] = index*index
//     })
//      return arr
// }
// let array  = createdArr(15)
// console.log(array);
//10.Создать массив, на четных местах в котором стоят единицы, а на нечетных местах - числа, равные остатку от деления своего номера на 5.
// function createdArray(number) {
//     let arr = new Array(number).fill(0)
//     arr.forEach((item,index,arr)=>{
//         if(index%2===0)arr[index] = 1
//         else{
//             arr[index] = index%5
//         }
//     })
//     return arr
// }
// let arr = createdArray(50)
// console.log(arr);
//
//Дан массив. Заменить все числа, меньшие последнего элемента массива, на первый элемент.
// let arr = [22,44,3,2,2,1,2,3,4,5,6,666,55,4,333,344,55,55]
// arr.forEach((item,index)=>{
    

//     if(item < arr[arr.length -1]){
//         arr[index] = arr[0]
//     }
// })
// console.log(arr);
//Поменять местами наибольший и наименьший элементы массива.
// let arr = [22, 44, 3, 2, 2, 1, 2, 3, 4, 5, 6, 666, 55, 4, 333, 344, 55, 55];
// console.log(arr);
// let minNum = Math.min(...arr)
// let maxNum = Math.max(...arr);
// arr.forEach((item,index)=>{
//     if(item === minNum)arr[index] = maxNum
//     if (item === maxNum) arr[index] = minNum;
// })
// console.log(arr);
//Найти наибольший четный элемент массива и поменять его местами с наименьшим нечетным элементом.
// Если одного из таких элементов нет, то всем элементам массива присвоить значение, равное нулю.

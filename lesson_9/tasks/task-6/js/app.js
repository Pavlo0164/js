alert(`
    6.Дано масив елементів. Усі елементи, які більші за перший елемент помножити на 2
`);
let arr = [5,1,3,6,8,2,9,3]
document.write(`${arr} </br>`)
arr.forEach((item,index,arr)=>{
    if(item > arr[0])arr[index]*=2
})
document.write(arr)
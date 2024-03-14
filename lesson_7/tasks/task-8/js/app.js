alert(`
Задача 7. Створити функцію, яка випадковим чином виводить на екран одне
 із 4 зображень (шляхи до зображень передаються у функцію)
`);
let url = '../../../../img/image-'
let urlEnd = '.jpeg'
function showImage(url,urlEnd) {
    let num = 1 + Math.floor(Math.random()*4)
    document.write(`<img src=${url}${num}${urlEnd}>`)
}

showImage(url,urlEnd)

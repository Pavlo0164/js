alert(`
7. Користувач загадує натуральне число від 1 до N.
 Шляхом задавання мінімальної кількості запитань знайти вказане число 
 (застосувати бінарний пошук, на кожному кроці якого інтервал пошуку зменшується 
  на 2 шляхом порівняння з елементом, який знаходиться у центрі поточного інтервалу)
  `);
  let start = 1
  let end = parseInt(prompt(`Введіть крайнє допустиме число`))
  let result = false
  do{
    let center = Math.floor((end + start)/2)

    let trueOreFalse = prompt(`
    Якщо загадане число більше ніж  ${center}, введіть 1.
    Якщо загадане число менше ніж ${center}, введіть 2.
    Якщо загадане число ${center}, введіть 3.
     `)

    if(trueOreFalse === '1'){
      start = center
    }else if(trueOreFalse === '2'){
      end = center
    }else if(trueOreFalse === '3'){
      result = true
      document.write(`Загадане число ${center}`)
    }
  }while(!result)

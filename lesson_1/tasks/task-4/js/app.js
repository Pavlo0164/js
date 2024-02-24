//задача 4.
let lengthInCentimetr = parseInt(prompt(`Введіть довжину у сантиметрах`));
let lenthInMetrs = lengthInCentimetr / 100;
let lenthInKilometrs = lenthInMetrs / 1000;

alert(`Довжина у метрах становить ${lenthInMetrs} м \n
        Довжина у кілометрах становить ${lenthInKilometrs} км
 `);

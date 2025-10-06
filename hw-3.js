// задача #1
let password = 'пароль';
let p = prompt('Введите пароль');

alert(p === password ? 'Пароль введен верно' : 'Пароль введен неправильно')

// задача #2
let c = 0;
console.log(c > 0 && c < 10 ? 'Верно' : 'Неверно')

c = 10;
console.log(c > 0 && c < 10 ? 'Верно' : 'Неверно')

c = -3;
console.log(c > 0 && c < 10 ? 'Верно' : 'Неверно')

c = 2;
console.log(c > 0 && c < 10 ? 'Верно' : 'Неверно')

// задача #3
let d = 0;
let e = 100;

console.log(d > 100 || e > 100 ? 'Верно' : 'Неверно')

// задача #4
let a = '2';
let b = '3';
// Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
alert(Number(a) + Number(b));

// задача #5
var monthNumber = Number(prompt("Введите порядковый номер месяца в году от 1 до 12"));
if (monthNumber > 13) {
    alert('Ошибка');
} else {
    switch (monthNumber) {
        case 1: case 2: case 12:
            alert('Зима');
            break;
        case 3: case 4: case 5:
            alert('Весна');
            break;
        case 6: case 7: case 8:
            alert('Лето');
            break;
        case 9: case 10: case 11:
            alert('Осень');
            break;
        default:
            alert('Не известный месяц');
    }
}


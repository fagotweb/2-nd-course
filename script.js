function GuessTheNumber () {
    let num = Math.floor(Math.random() * 100) + 1;
    console.log (num);
    let userNum = prompt ('Введите число от 1 до 100' , '50');
    let attempts = 1
    while (parseInt(userNum) !== num && userNum !== null) {
        if (parseInt(userNum) < num  ) {userNum = prompt("Больше! Попробуй ещё:"), attempts++;}
        else {userNum = prompt("Меньше! Попробуй ещё:"), attempts++;}                
    }
    if (userNum == num) {alert(`УГАДАЛ число ${num} с ${attempts} попытки`);}
    else {alert(`Игра завершена`);}          
}

function simpleArithmetic () {
    let num1 = Math.floor(Math.random() * 10)+1;
    let num2 = Math.floor(Math.random() * 10)+1;
    const example = [
        (num1, num2) => num1 + num2,
        (num1, num2) => num1 - num2,
        (num1, num2) => num1 * num2,
        (num1, num2) => num1 / num2,
];
    let randomExample = example[Math.floor(Math.random() * example.length)];
    const operations = [
        '+',
        '-',
        '*',
        "/",
];
let index = example.indexOf (randomExample);
let userNum = prompt (`ВЫЧИСЛИТ (ответ округлить до целого числа): ${num1} ${operations [index]} ${num2}`);
if (userNum == Math.round (randomExample (num1, num2))) {alert(`Ответ верный`);}
    else {alert(`Ошибка`);} 
}

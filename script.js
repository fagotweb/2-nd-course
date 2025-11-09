function GuessTheNumber () {
    let num = Math.floor(Math.random() * 100) + 1;
    let userNum = parseInt(prompt ('Введите число от 1 до 100' , '1'));
    let attempts = 1
    while (userNum !== num) {
        if (userNum < num) {userNum = parseInt(prompt("Больше! Попробуй ещё:")), attempts++;}
        else {userNum = parseInt(prompt("Меньше! Попробуй ещё:")), attempts++;}
    }
    alert(`УГАДАЛ число ${num} с ${attempts} попытки`);           
}



function GuessTheNumber() {
    let num = Math.floor(Math.random() * 100) + 1;
    console.log(num);
    let userNum = prompt('Введите число от 1 до 100', '50');
    let attempts = 1
    while (parseInt(userNum) !== num && userNum !== null) {
        if (parseInt(userNum) < num) { userNum = prompt("Больше! Попробуй ещё:"), attempts++; }
        else { userNum = prompt("Меньше! Попробуй ещё:"), attempts++; }
    }
    if (userNum == num) { alert(`УГАДАЛ число ${num} с ${attempts} попытки`); }
    else { alert(`Игра завершена`); }
}

function simpleArithmetic() {
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;
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
    let index = example.indexOf(randomExample);
    let userNum = prompt(`ВЫЧИСЛИТ (ответ округлить до целого числа): ${num1} ${operations[index]} ${num2}`);
    if (userNum == Math.round(randomExample(num1, num2))) { alert(`Ответ верный`); }
    else { alert(`Ошибка`); }
}

function textInverted() {
    let userText = prompt('Введите текст');
    let textInv = userText.split('').reverse().join('');
    alert(textInv);
}

function simpleQuiz() {
    const quiz = [
        {
            question: "Какой цвет небо?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2 // номер правильного ответа
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];
    let index = 0;
    let count = 0;
    while (index !== 3) {
        userNum = prompt('Вопрос: ' + quiz[index]['question'] + `\nВарианты ответа:` + quiz[index]['options']);
        if (userNum == quiz[index]['correctAnswer']) { count++; }
        index++;
    }
    alert(`Правильных ответов: ${count}`);
}

function rockмPaperScissors() {
    let userChoice = prompt("Введите КАМЕНЬ, НОЖНИЦЫ или БУМАГА", "КАМЕНЬ").toLowerCase();
    const arr = ["камень", "ножницы", "бумага"]
    const computerChoice = arr[Math.floor(Math.random() * 3)];
    alert(`Выбор пользователя: ${userChoice.toUpperCase()} \nВыбор компьютера: ${computerChoice.toUpperCase()}`)
    if (userChoice === computerChoice) {
        alert('Ничья');
    } else if (
        (userChoice === 'камень' && computerChoice === 'ножницы') ||
        (userChoice === 'бумага' && computerChoice === 'камень') ||
        (userChoice === 'ножницы' && computerChoice === 'бумага')
    ) {
        alert('Победа');
    } else {
        alert('Поражение');
    }
}

function randomColorGenerator() {
    const contentEl = document.querySelector('.container-game6');
    contentEl.style.display = "block"

    const contentElRect = contentEl.getBoundingClientRect();
    const centerX = (window.innerWidth - contentElRect.width) / 2;
    const centerY = (window.innerHeight - contentElRect.height) / 2;
    contentEl.style.position = "fixed";
    contentEl.style.left = `${centerX}px`;
    contentEl.style.top = `${centerY}px`;

    const btnEl = document.querySelector('.btn');
    btnEl.addEventListener('click', () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        contentEl.style.background = color;
    })

    const btnRemoveEl = document.querySelector('.btn-remove');
    btnRemoveEl.addEventListener('click', () => {
        contentEl.style.display = "none";
    })
}



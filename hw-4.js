// задача #1
let i = 0;

while(i < 2) {
console.log("Привет");
i++;
}

// задача #2
let a = 1;

while (a < 6) {
   console.log(a); // Выведет в консоль 0, 1, 2
   a++;
}

// задача #3
let c = 7;

while (c < 23) {
   console.log(c); // Выведет в консоль 0, 1, 2
   c++;
}

// задача #4
let obj = {
    Коля: 200,
    Вася: 300,
    Петя: 400
}

for (let key in obj) {  
    console.log(key + ' — зарплата ' + obj[key] + ' долларов');  
}  

// задача #5
let n = 1000;
let num = 0
while(n >= 50) {
console.log(n);
n = n / 2;
num++
}
console.log(num + ' кол-во итераций');

// задача #6
let p = Number(prompt('Введите число первой пятницы месяца'))
do {
   alert('Сегодня пятница, ' + p + '-е число. Необходимо подготовить отчет.');
   p = p + 7;
} while(p <= 31);
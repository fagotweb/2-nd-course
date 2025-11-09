// задача #1 Возврат меньшего числа
let minNum = (a, b) => Math.min(a, b);
console.log (minNum (4, 8));

// задача #2 Принимает и возвращает число
let num = prompt ('Ввести число'); 
if (num % 2) { console.log('Число нечётное!'); } 
else { console.log('Число чётное!'); }


// задача #3 Квадрат числа
let squareNum = (c) => c**2;
console.log (squareNum (8));

// задача #4 Сколько лет
function ageNum () {
   const userAge = parseInt(prompt ('Сколько лет'));
   if (userAge < 0) {
      alert ('Вы ввели неправильное значение');
   } else if (userAge < 12) {
      alert ('Привет, друг!');
   } else {alert ('Добро пожаловать!');
   }
}
ageNum ();

// задача #5 Алгоритм
function nonNum () {
   const oneNum = prompt ('Введите первое число');
   const twoNum = prompt ('Введите второе число');
   let multNum = oneNum*twoNum;
      if (isNaN(oneNum) == 1, isNaN(twoNum) == 1 ) {
      alert ('Одно или оба значения не являются числом');
   } else {
      alert (`${multNum}`);      
   }
}
nonNum ();

// задача #6 Число в кубе
function cubeNum () {
   num = prompt ('Введите число');   
   let cube = num**3;
      if (isNaN(num) == 1) {
      alert ('Переданный параметр не является числом');
   } else {
      alert (`${cube}`);      
   }
   num = 0;
   while (num < 10) {
   console.log (num**3);
   num++; 
   }
}
cubeNum ();

// задача #7 Объекты и методы
function getArea() { return Math.PI * this.radius * this.radius; }
const circle1 = {radius: 3};
circle1.getArea = getArea;
alert (circle1.getArea());

function getPerimeter() { return Math.PI * 2 * this.radius; }
const circle2 = {radius: 4};
circle2.getPerimeter = getPerimeter;
alert (circle2.getPerimeter());
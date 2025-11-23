// задача #1
const people = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }
];
let callback = ( a, b ) => a.age - b.age;
console.log(people.sort(callback));

// задача #2
function isPositive(num) {
   return num > 0;
}

function isMale(people) {
   return people.gender == 'male';
}

function filter(arr, ruleFunction) {
   const res = [];
   for (let i = 0; i < arr.length; i++) {
      if (ruleFunction(arr[i])) {
         res.push(arr[i]);
      }
   }
   return res;
}

console.log(filter([3, -4, 1, 9], isPositive));

const people1 = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];

console.log(filter(people1, isMale));

// задача #3

const timer = () => {
   const interval = setInterval(() => {
      console.log(new Date());
   }, 3000);

   setTimeout(() => {
   clearInterval(interval);
      console.log('30 секунд прошло')
   }, 30000)
};
timer();

// задача #4
function delayForSecond(callback) {
   setTimeout(callback, 1000);
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
})

// задача #5
// Функция delayForSecond через 1 секунду пишет в консоль 
// «Прошла одна секунда», а затем вызывает переданный колбэк
function delayForSecond2(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond2(cb = () => sayHi('Глеб'))
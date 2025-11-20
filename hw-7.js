// задача #1
const string = 'js';
bigString = string.toUpperCase();
console.log(bigString);

// задача #2
const products = ['Хлеб Бородинский', 'Молоко Молочник', 'Коровка Молоко', 'Груша Конференция', 'Молоко парное'];
const search = 'молоко';
let res = products.filter((product) => {
      if (product.toLowerCase().startsWith(search.toLowerCase())) {
      return true;
   }
});
console.log(res);

// задача #3
let num = 32.58884;
res = Math.floor(num);
console.log(res);
res = Math.ceil(num);
console.log(res);
res= Math.round(num);
console.log(res);

// задача #4
const mass = [52, 53, 49, 77, 21, 32];
console.log(Math.min(...mass));
console.log(Math.max(...mass));

// задача #5
console.log(Math.floor(Math.random() * 10)+1);

// задача #6
function randomArray(a) {
   let length = Math.floor(a / 2);
    return Array.apply(null, Array(length)).map(function() {
        return Math.round(Math.random() * a);
    });
}
console.log(randomArray(11));

// задача #7
const randomInterval = (a, b) => {
   return Math.floor(Math.random() * (Math.max(a, b) - Math.min(a, b) + 1)) + Math.min(a, b);
}
console.log(randomInterval(11, 1));

// задача #8 
console.log(new Date());  

// задача #9
let currentDate = new Date();
console.log(new Date(+currentDate + 73 * 24 * 60 * 60 * 1000));

// задача #10
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
console.log("День: " + currentDate.getDate() + " " + months[currentDate.getMonth()] + " " + currentDate.getFullYear() + " - это " + days[currentDate.getDay()]); 
console.log('Время:' + currentDate.getHours() + ':' + currentDate.getMinutes() + ':' + currentDate.getSeconds());

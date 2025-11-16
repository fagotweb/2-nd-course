// задача #1
const mass = [1, 5, 4, 10, 0, 3];
let index = -1;
while (mass[index] !== 10) {
   if (mass[index] !== 10) { index++ };
   console.log(mass[index]);
}

// задача #2
index = -1;
while (mass[index] !== 4) {
   index++;
}
console.log(index);

// задача #3
const massiv = [1, 3, 5, 10, 20];
console.log(massiv.join(' '));

// задача #4
let arr = [];
for (let i = 0; i < 3; i++) {
   arr[i] = [];
   for (let j = 0; j < 3; j++) {
      arr[i][j] = 1
   }
}
console.table(arr);

// задача #5
let massiv2 = [1, 1, 1];
for (let k = 0; k < 3; k++) { massiv2.push(2) };
console.log(massiv2)

// задача #6
let massiv3 = [9, 8, 7, 'a', 6, 5];
massiv3 = massiv3.sort();
massiv3 = massiv3.filter(Number);
console.log(massiv3);

// задача #7
let massiv4 = [9, 8, 7, 6, 5];
userNum = prompt("Угадай число");
if (true === massiv4.includes(Number(userNum))) { alert("Угадал"); }
else { alert("Не угадал"); }

// задача #8 
let text = "abcdef";
let splitText = text.split('');
splitText = splitText.reverse();
text = splitText.join('');
console.log(text);

// задача #9
let massiv5 = [
   [1, 2, 3],
   [4, 5, 6]
]
massiv5 = [...massiv5[0], ...massiv5[1]];
console.table(massiv5);

// задача #10
let massiv6 = [];
for (let u = 0; u < 10; u++) {
   massiv6[u] = Math.floor(Math.random() * 10) + 1;
}
for (let t = 0; t < (massiv6.length - 1); t++) {
   console.log(massiv6[t] + massiv6[t + 1]);
}

// задача #11
const square = massiv6.map(arr => arr ** 2);
console.log(square);

// задача #12
let massiv8 = ['dfgddfgdf', 'dfgdffgdfgdg', 'afgasd', 'adgfgaafgagfgadfgad'];
let massiv7 = massiv8.map(function (item) { return item.length; });
console.log(massiv7);

// задача #13
let massiv9 = [2, -2, 3, -3];
massiv9 = massiv9.filter(n => n < 0);
console.log(massiv9);

// задача #14
let massiv10 = [];
for (let u = 0; u < 10; u++) {
   massiv10[u] = Math.floor(Math.random() * 10) + 1;
}
console.log(massiv10);
massiv11 = massiv10.filter(n => n % 2 === 0);
console.log(massiv11);

// задача #15
let massiv12 = [];
for (let u = 0; u < 6; u++) {
   massiv12[u] = Math.floor(Math.random() * 10) + 1;
}  
let sum = 0;
massiv12.forEach(function(num) {
    sum += num;
});
console.log(sum/massiv12.length);


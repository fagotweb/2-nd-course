// задача #1
const titltEl = document.querySelector('.title');
const btnEl = document.querySelector('.btn');

btnEl.addEventListener('click', () => {
   titltEl.classList.toggle('title__info');
})

// задача #2
const textEl = document.querySelector('.text');
const btnColorTextEl = document.querySelector('.button-colortext');

btnColorTextEl.addEventListener('click', () => {
   textEl.style.color = 'blue';
})

// задача #3
const btnTitleEl = document.querySelector('.button-title');

btnTitleEl.addEventListener('click', () => {
   titltEl.textContent = "Привет, мир!";
})

// задача #4
const descriptionEl = document.querySelectorAll('.description');

descriptionEl.forEach(descriptionEl => {
   descriptionEl.textContent = "Измененный текст";
})


// задача #5
const descriptEl = document.querySelectorAll('.descript');

descriptEl.forEach(descriptEl => {
   descriptEl.textContent = "Новый текст";
})

// задача #6
const buttonEl = document.querySelector('.button');
const contentEl = document.querySelector('.content');

buttonEl.addEventListener('click', () => {
   const newTextEl = document.createElement('p');
   newTextEl.textContent = "Новый абзац";
   newTextEl.classList.add('text');
   contentEl.append(newTextEl);
})

// задача #7
const btnRemoveEl = document.querySelector('.btn-remove');

btnRemoveEl.addEventListener('click', () => {
   const textInfoEl = document.querySelector('.description');
   textInfoEl.remove();
})
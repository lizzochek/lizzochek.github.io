'use strict';

// Task 1
const form = document.querySelector('form');
const button = document.querySelector('button');
const inputArray = document.querySelectorAll('input');
const modal = document.getElementById('modal-content');
const colorPicker = document.getElementById('color-modal');
const modalData = document.getElementById('data');
const closeBtn = document.querySelector('.close');

let isFormValid = true;

const validator = (regExp, el) => {
  if (el.value.search(regExp) === -1) {
    el.setAttribute('class', 'invalid');
    el.nextElementSibling.setAttribute('class', '');
    isFormValid = false;
  } else {
    el.setAttribute('class', '');
    el.nextElementSibling.setAttribute('class', 'hidden');
    isFormValid = true;
  }
};

const validateField = (element) => {
  const { placeholder } = element;
  switch (placeholder) {
    case 'Full name':
      // Word L.L.
      validator(/\w+\s+[A-Z]\.+[A-Z]\./, element);
      break;
    case 'Group':
      // AA-11
      validator(/[A-za-z][A-za-z]+\-+[0-9][0-9]/, element);
      break;
    case 'Phone number':
      // (111)-111-11-11
      validator(/((\(\d{3}\) ?)|(\d{3}-))?\-\d{3}-\d{2}-\d{2}/, element);
      break;
    case 'ID card':
      // AA №111111
      validator(/[A-Z][A-Z]+\s+\№\d{6}/, element);
      break;
    case 'Faculty':
      // AAAA
      validator(/[A-Z]{4}/, element);
      break;
  }
};

inputArray.forEach((el) => {
  el.addEventListener('change', () => {
    validateField(el);
  });
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!isFormValid) {
    alert('Please enter valid form fields');
  } else {
    inputArray.forEach((input) => {
      const par = document.createElement('p');
      par.innerText = `${input.placeholder}: ${input.value}`;
      modalData.appendChild(par);
    });
    modal.parentNode.setAttribute('class', '');
  }
});

closeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  modal.parentNode.setAttribute('class', 'hidden');
  modalData.innerHTML = '';
});

//Task 2
const table = document.querySelector('table');

const generateTable = (table) => {
  let num = 1;
  for (let i = 1; i < 7; i++) {
    let row = table.insertRow();
    for (let j = 1; j < 7; j++) {
      let cell = row.insertCell();
      let text = document.createTextNode(num);
      cell.appendChild(text);
      if (num === 2) {
        cell.setAttribute('id', 'magic-cell');
      }
      num++;
    }
  }
};

const generateRandomColor = () => {
  const code = Math.floor(Math.random() * 16777215).toString(16);
  return '#' + code;
};

generateTable(table);

const magicCell = document.getElementById('magic-cell');

magicCell.addEventListener('mouseover', (e) => {
  e.target.style.backgroundColor = generateRandomColor();
});

colorPicker.addEventListener('change', (e) => {
  magicCell.style.backgroundColor = e.target.value;
  colorPicker.setAttribute('class', 'hidden');
})

magicCell.addEventListener('click', (e) => {
  colorPicker.setAttribute('class', '');
});

magicCell.addEventListener('dblclick', (e) => {
  e.target.style.backgroundColor = 'none';
  const id = table.id.length ? '' : 'colored';
  table.setAttribute('id', id);
});

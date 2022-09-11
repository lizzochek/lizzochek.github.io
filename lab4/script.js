'use strict';

const firstElement = document.getElementById('el-3');
const secondElement = document.querySelector('h3#el-4');
const buttons = document.querySelectorAll('button');
const imgContainer = document.getElementById('img-container');

const alertText = 'Please add an image first';

// Task 1
const elements = [firstElement, secondElement];

for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', (e) => {
    e.target.style.color = e.target.style.color === 'red' ? 'blue' : 'red';
    e.target.style.backgroundColor =
      e.target.style.backgroundColor === 'aquamarine' ? 'yellow' : 'aquamarine';
  });
}

// Task 2
const createImg = () => {
  let img = document.createElement('img');
  img.src = 'kiev-ukraine.jpeg';
  img.style.width = '900px';
  imgContainer.appendChild(img);
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth',
  });
  return img;
};

const changeImgSize = (action) => {
  let img = imgContainer.lastChild;
  if (!img) {
    alert(alertText);
    return;
  }
  const imgSize = img.style.width.split('px')[0];
  if (action === 'bigger') {
    if (imgSize >= 1000) return;
    img.style.width = Number(imgSize) + 10 + 'px';
  } else if (action === 'smaller') {
    if (imgSize <= 50) return;
    img.style.width = imgSize - 10 + 'px';
  }
};

let img;
buttons.forEach((btn) =>
  btn.addEventListener('click', (e) => {
    switch (e.target.outerText) {
      case 'Add image':
        img = createImg();
        break;
      case 'Make smaller':
        changeImgSize('smaller');
        break;
      case 'Make bigger':
        changeImgSize('bigger')
        break;
      case 'Remove image':
        img.parentElement.removeChild(img);
        img = null;
        break;
      default:
        break;
    }
  })
);

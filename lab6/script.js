'use strict';

const downloadBtn = document.getElementById('download-btn');
const dataContainer = document.getElementById('data-container');
const spinner = document.querySelector('.loadingio-spinner-spinner-g8udd6ckav');

const btnText = document.querySelector('#download-btn span');

const getPersonTemplate = ({ picture, cell, location }) => {
  return `<div class="person">
        <img src="${picture?.large}" alt="portrait"></img> 
        <p>Cell: ${cell}</p>   
        <p>City: ${location?.city}</p>
        <p>Country: ${location?.country}</p>
        <p>Postcode: ${location?.postcode}</p>
    </div>
    `;
};

downloadBtn.addEventListener('click', async () => {
  spinner.classList.remove('hidden');
  btnText.classList.add('hidden');

  const res = await fetch('https://randomuser.me/api');
  const data = (await res.json())['results'];
  data.forEach((person) => {
    const template = getPersonTemplate(person);
    dataContainer.innerHTML += template;
  });

  spinner.classList.add('hidden');
  btnText.classList.remove('hidden');
});

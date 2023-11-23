import { listArray, addList } from './storage';

const inputList = document.querySelector('#list');

const formSubmit = document.querySelector('.form');

const messageContainer = document.querySelector('.message-notification');

formSubmit.addEventListener('submit', (event) => {
  event.preventDefault();
  const listInput = {
    list: inputList.value,
    isCompleted: false,
  };

  const result = listArray.filter((elem) => elem.list === listInput.list);

  if (inputList.value === '') {
    event.preventDefault();
  } else if (result.length !== 0) {
    messageContainer.innerText = 'Sorry Task already exists';
  } else {
    listArray.push(listInput);
    addList();
    inputList.value = '';

    messageContainer.innerText = 'Congratulations. Task successfully added!';
  }

  // Set completed when form is submitted
  const allTexts = document.querySelectorAll('[isCompleted=true]');

  allTexts.forEach((items) => {
    items.childNodes[1][0].setAttribute('checked', 'true');
    items.childNodes[1][1].setAttribute('disabled', 'true');
    items.childNodes[1][1].classList.add('line-through');
  });

  localStorage.setItem('listData', JSON.stringify(listArray));
});

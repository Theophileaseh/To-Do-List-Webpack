import { listArray, addList } from './storage';

const list = document.querySelector('#list');

const formSubmit = document.querySelector('.form');

const messageContainer = document.querySelector('.message-notification');

formSubmit.addEventListener('submit', (event) => {
  event.preventDefault();
  const listInput = {
    list: list.value,
    isCompleted: false,
  };

  const result = listArray.filter((elem) => (elem.list === listInput.list));

  if (list.value === '') {
    event.preventDefault();
  } else if (result.length !== 0) {
    messageContainer.innerText = 'Sorry Task already exists';
  } else {
    listArray.push(listInput);
    addList();
    list.value = '';

    messageContainer.innerText = 'Congratulations. Task successfully added!';
  }
});

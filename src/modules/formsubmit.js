import { listArray, addList } from './storage.js';

const list = document.querySelector('#list');

const formSubmit = document.querySelector('.form');

formSubmit.addEventListener('submit', (event) => {
  if (list.value === '') {
    event.preventDefault();
  }
  event.preventDefault();
  const listInput = {
    list: list.value,
    isCompleted: false
  };
  listArray.push(listInput);
  addList();
  list.value = '';
  isCompleted;
});

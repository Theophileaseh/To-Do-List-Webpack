import { listArray, addList } from './storage.js';

const list = document.querySelector('#list');

const formSubmit = document.querySelector('.form');

function alerts(message) {
  // eslint-disable-next-line no-alert
  alert(message);
}

formSubmit.addEventListener('submit', (event) => {

  const listInput = {
    list: list.value,
    isCompleted: false
  };

  const result = listArray.filter((elem) => (elem.list === listInput.list));
    
  if (list.value === '') {
    event.preventDefault();
  } else if (result.length !== 0) {
      alerts('Sorry Task already exists');
    } else {

  listArray.push(listInput);
  addList();
  list.value = '';
  isCompleted;

  alerts('Congratulations. Task successfully added!');
}
});

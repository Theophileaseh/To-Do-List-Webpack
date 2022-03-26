import { listArray, addList } from './storage.js';

const list = document.querySelector('#list');

const formSubmit = document.querySelector('.form');

formSubmit.addEventListener('submit', (event) => {
  if (list.value === '') {
    event.preventDefault();
  }
  event.preventDefault();
  const listInput = {
    list: list.value
  };
  listArray.push(listInput);
  addList();
  list.value = '';
});


// second form inputs for update

export const list2 = document.querySelector('#single-list-item');

const formSubmit2 = document.querySelector('.single-list-form');
/*
formSubmit.addEventListener('submit', (event) => {
  if (list2.value === '') {
    event.preventDefault();
  }
  event.preventDefault();
  const list2Input = {
    list: list.value
  };
  listArray.map.push(listInput);
  addList();
  list.value = '';
});

let listValues = listArray.map(function(listp) {
  listp.list = listp.list

})
*/

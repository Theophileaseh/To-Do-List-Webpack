const listsList = document.querySelector('.today-lists');

export let listArray = [];

export const addList = () => {
  let listCode = '';
  listArray.forEach((element, index) => {
    const { list } = element;
    if (index % 2 === 0) {
      listCode += `
        <div class="single-list div-style">
          <form class="single-list-form">
            <input type="checkbox" class="checkbox">
            <input type="text" id="single-list-item" class="single-list-input main-inputs" value="${list}">
          </form>
          <div class="single-list-action-button">
          <button class = "move-btn"><i class="fa-solid fa-ellipsis-vertical"></i></button>
          </div>
        </div>
            `;
    } else {
      listCode += `
      <div class="single-list div-style">
      <form class="single-list-form">
        <input type="checkbox" class="checkbox">
        <input type="text" id="single-list-items" class="single-list-input main-inputs" value="${list}">
      </form>
      <div class="single-list-action-button">
      <button class = "move-btn"><i class="fa-solid fa-ellipsis-vertical"></i></button>
      </div>
    </div>
            `;
    }
  });
  listsList.innerHTML = listCode;
  localStorage.setItem('listData', JSON.stringify(listArray));
};

window.removeBook = (list) => {
  listArray = listArray.filter((elem) => elem.list !== list);
  addList();
};

window.addEventListener('DOMContentLoaded', () => {
  const lists = JSON.parse(localStorage.getItem('listData'));
  if (lists === null) {
    listArray = [
      {
        list: 'wash the dishes'
      },
      {
        list: 'complete To Do list project'
      },
    ];
  } else {
    listArray = lists;
  }
  addList();

});

// input field of list clicked event

import { list2 } from './formsubmit.js';
const moveDelete = document.querySelector('.single-list-action-button');

/* list2.addEventListener("keyup", (event) => {
  moveDelete.innerHTML = '<button class = "delete-btn" onclick=\'removeBook("${list}")\'><i class="fa-solid fa-trash-can"></i></button>'
});

list2.removeEventListener("click", (event) => {
  moveDelete.innerHTML = '<button class = "move-btn"><i class="fa-solid fa-ellipsis-vertical"></i></button>'
});*/

// checkbox event


const listValue = document.querySelector('#single-list-item');
/* const check = document.querySelector('.checkbox');

check.addEventListener("change", function(e) {
  if (this.checked) {
    listValue.classList.add('line-through');
  } else {
    // listValue.classList.add('none');
  }
});*/

const checked = document.querySelector('#checkbox:checked');

if (checked !== null) {
  listValue.classList.add('line-through');
  } else {
  listValue.classList.add('none');
}

console.log(listValue);

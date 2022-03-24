const listsList = document.querySelector('.today-lists');

export let listArray = [];

export const addList = () => {
  let listCode = '';
  listArray.forEach((element, index) => {
    const { list } = element;
    if (index % 2 === 0) {
      listCode += `
        <div class="book changeColor">
            <div class="sub-book">
              <p>"${list}" by</p>
              <p>${author}</p>
            </div>
            <button type="submit" class="delete" onclick='removeBook("${list}")'>Remove</button>
        </div>

        <div class="single-list div-style">
          <form class="single-list-form">
            <input type="checkbox" class="checkbox">
            <input type="text" id="single-list-item" class="single-list-input main-inputs" value="${list}">
          </form>
          <div class="single-list-action-button"></div>
        </div>
            `;
    } else {
      listCode += `
        <div class="book">
          <div class="sub-book">
            <p>"${list}" by</p>
            <p>${author}</p>
          </div>
          <button type="submit" class="delete" onclick='removeBook("${list}")'>Remove</button>
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

import { list2 } from './formsubmit.js';
const moveDelete = document.querySelector('.single-list-action-button');

list2. addEventListener("click", () => {
  moveDelete.innerHTML = '<button class = "delete-btn"><i class="fa-solid fa-trash-can"></i></button>';
  },
  moveDelete.innerHTML = '<button class = "move-btn"><i class="fa-solid fa-ellipsis-vertical"></i></button>'

  });
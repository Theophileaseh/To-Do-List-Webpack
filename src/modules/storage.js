const listsList = document.querySelector('.today-lists');

export let listArray = []; // eslint-disable-line

/* eslint-disable no-unused-vars */

export const addList = () => {
  let listCode = '';
  listArray.forEach((element, index) => {
    const { list } = element;
    if (index % 2 === 0) {
      listCode += `
        <div class="single-list div-style" id="${index}">
          <form class="single-list-form">
            <input type="checkbox" class="checkbox">
            <input type="text" class="single-list-input main-inputs" value="${list}">
          </form>
          <div class="single-list-action-button">
            <button class = "delete-btn" onclick="removeList('${list}')"><i class="fa-solid fa-trash-can"></i></button>
          </div>
        </div>
            `;
    } else {
      listCode += `
      <div class="single-list div-style">
      <form class="single-list-form">
        <input type="checkbox" class="checkbox">
        <input type="text" class="single-list-input main-inputs" value="${list}">
      </form>
      <div class="single-list-action-button">
        <button class = "delete-btn" onclick="removeList('${list}')"><i class="fa-solid fa-trash-can"></i></button>
      </div>
    </div>
            `;
    }
  });
  listsList.innerHTML = listCode;
  localStorage.setItem('listData', JSON.stringify(listArray));
};

/* eslint-disable no-unused-vars */

window.removeList = (list) => {
  listArray = listArray.filter((elem) => elem.list !== list);
  addList();
};

window.addEventListener('DOMContentLoaded', () => {
  const lists = JSON.parse(localStorage.getItem('listData'));
  if (lists === null) {
    listArray = [
      {
        list: 'wash the dishes',
      },
      {
        list: 'complete To Do list project',
      },
    ];
  } else {
    listArray = lists;
  }
  addList();
});

// checkbox event

listsList.addEventListener('change', function (e) { // eslint-disable-line
  if (e.target.className.includes('checkbox')) {
    const { checked } = e.target;
    const text = e.target.parentNode.querySelector('.single-list-input');

    if (checked) {
      text.classList.add('line-through');
    } else {
      text.classList.remove('line-through');
    }
  }
});

listsList.addEventListener('focusout', (e) => {
  if(e.target.className.includes('single-list-input')){

    const inputValue = e.target.value
    const {id} = parent.id;

    listArray.forEach(list => {
      if(id === list.index){
        list.description = inputValue
      }
    })

    localStorage.setItem('listData', JSON.stringify(listArray));
  }
})
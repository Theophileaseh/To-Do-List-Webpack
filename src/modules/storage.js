const listsList = document.querySelector('.today-lists');
const messageContainer = document.querySelector('.message-notification');

export let listArray = []; // eslint-disable-line

/* eslint-disable no-unused-vars */

export const addList = () => {
  const allLists = listArray.map(
    ({ list, isCompleted }, index) => `<div class="single-list div-style" id=${index}  isCompleted=${isCompleted}  draggable="true">
          <form class="single-list-form">
            <input type="checkbox" class="checkbox">
            <input type="text" class="single-list-input main-inputs" value="${list}" >
          </form>
          <div class="single-list-action-button">
          <button class = "delete-btn" onClick="removeList('${list}')">
           <i class="fa-solid fa-trash-can"></i></button>
            <button class = "move-btn" >
            <i class="fa-solid fa-ellipsis-vertical"></i></button>
          </div>
        </div>`,
  );

  if (listArray.length === 0) {
    listsList.innerHTML = '<h3 class="no-books-notification">Sorry there are no tasks available</h3>';
  } else {
    listsList.innerHTML = allLists;
  }

  localStorage.setItem('listData', JSON.stringify(listArray));
};

/* eslint-disable no-unused-vars */

window.removeList = (list) => {
  listArray = listArray.filter((elem) => elem.list !== list);
  addList();
  // console.log('removed');
};

window.addEventListener('DOMContentLoaded', (e) => {
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

// input field of list clicked event

listsList.addEventListener('focusin', (e) => {
  if (e.target.className.includes('line-through')) {
    const inputValue = e.target.value;
    const { id } = e.target.parentNode.parentNode;

    listArray.forEach((listItem, index) => {
      listArray[id].list = inputValue;
    });

    localStorage.setItem('listData', JSON.stringify(listArray));
  }
});

listsList.addEventListener('focusout', (e) => {
  if (e.target.className.includes('line-through')) {
    const inputValue = e.target.value;
    const { id } = e.target.parentNode.parentNode;

    listArray.forEach((listItem, index) => {
      listArray[id].list = inputValue;
    });

    localStorage.setItem('listData', JSON.stringify(listArray));
  }
});

listsList.addEventListener('change', (e) => {
  if (e.target.className.includes('single-list-input')) {
    const inputValue = e.target.value;
    const { id } = e.target.parentNode.parentNode;

    listArray.forEach((listItem, index) => {
      listArray[id].list = inputValue;
    });

    localStorage.setItem('listData', JSON.stringify(listArray));
  }
});

// load window event

window.addEventListener('load', (e) => {
  const allTexts = document.querySelectorAll('[isCompleted=true]');

  allTexts.forEach((items) => {
    items.childNodes[1][0].setAttribute('checked', 'true');
    items.childNodes[1][1].setAttribute('disabled', 'true');
    items.childNodes[1][1].classList.add('line-through');
  });
});

// checkbox event
const checkbox = document.querySelector('.checkbox');
listsList.addEventListener('change', (e) => {
  if (e.target.className.includes('checkbox')) {
    const { checked } = e.target;
    const text = e.target.parentNode.querySelector('.single-list-input');
    const listValue = e.target.parentNode.querySelector('.single-list-input').value;
    const { id } = e.target.parentNode.parentNode;

    if (checked) {
      listArray[id].isCompleted = true;
      text.classList.add('line-through');
      text.setAttribute('disabled', 'true');
    } else {
      text.classList.remove('line-through');
      listArray[id].isCompleted = false;
      text.setAttribute('disabled', 'false');
      //  listArray[id].list = listValue;
    }

    localStorage.setItem('listData', JSON.stringify(listArray));
  }
});

// Remove completed list

window.removeIsCompleted = () => {
  // eslint-disable-next-line no-restricted-globals
  listArray = listArray.filter((elem) => elem.isCompleted !== true);
  addList();
  messageContainer.innerText = 'Completed Tasks Successfully Deleted';
};

// Refresh window

window.refresh = () => {
  window.history.go(0);
};

// draggable

// let y = 0;

// // Query the element
// let ele;
// let target;

// const mouseMoveHandler = function (e) {
//   // How far the mouse has been moved

//   target = e.target;
//   const dy = e.clientY - y;

//   console.log(target, 'newpos');

//   // Set the position of element
//   target.style.top = `${target.offsetTop + dy}px`;

//   // Reassign the position of mouse
//   y = e.clientY;
// };

// const mouseUpHandler = function () {
//   // Remove the handlers of `mousemove` and `mouseup`
//   document.removeEventListener('mousedown', mouseMoveHandler);
// };

// // Handle the mousedown event
// // that's triggered when user drags the element
// const mouseDownHandler = function (e) {
//   // Get the current mouse position
//   y = e.clientY;
//   // console.log(e, 'target');

//   // Attach the listeners to `document`
//   document.addEventListener('dragstart', mouseMoveHandler);
//   document.addEventListener('dragend', mouseUpHandler);
// };

// listsList.addEventListener('mousedown', mouseDownHandler);

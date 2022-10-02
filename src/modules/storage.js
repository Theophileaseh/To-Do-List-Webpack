const listsList = document.querySelector('.today-lists');
const updateForm = document.querySelector('.single-list-form')
export let listArray = []; // eslint-disable-line

/* eslint-disable no-unused-vars */

export const addList = () => {
  console.log(listArray[0])
  const allLists = listArray.map((element, index) => (

       `<div class="single-list div-style" id=${index}  ${element.isCompleted}>
          <form class="single-list-form">
            <input type="checkbox" class="checkbox">
            <input type="text" class="single-list-input main-inputs" value="${element.list}">
          </form>
          <div class="single-list-action-button">
            <button class = "delete-btn" onclick="removeList()">1<i class="fa-solid fa-ellipse"></i></button>&nbsp;<button class = "move-btn"><i class="fa-solid fa-ellipsis-vertical"></i></button>
          </div>
        </div>`

  ));
  
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

// input field of list clicked event


listsList.addEventListener('focusin', (e) => {
  if(e.target.className.includes('single-list-input')){
    const parent = e.target.parentNode.parentNode;
    parent.querySelector('.single-list-action-button').innerHTML =
    `<button class = "delete-btn" onclick="removeList('${list}')">
    2<i class="fa-solid fa-trash-can"></i></button>`;
  }
})


listsList.addEventListener('focusout', (e) => {
  if (e.target.className.includes('single-list-input')) {

    const parent = e.target.parentNode.parentNode;
    parent.querySelector('.single-list-action-button').innerHTML =
    `<button class = "delete-btn" onclick="removeList()">1<i class="fa-solid fa-ellipse"></i></button>&nbsp;<button class = "move-btn"><i class="fa-solid fa-ellipsis-vertical"></i></button>`;

    const inputValue = e.target.value;
    const { id } = e.target.parentNode.parentNode;     // eslint-disable-line

    console.log(id)

    
    listArray.forEach((listItem, index) => {  // eslint-disable-line
      

        listArray[id].list = inputValue
        console.log("index", index)
  
    });

    console.log(inputValue)

    localStorage.setItem('listData', JSON.stringify(listArray));
  }
});

// checkbox event

const checkbox = document.querySelector('.checkbox');
listsList.addEventListener('change', function (e) { // eslint-disable-line
  if (e.target.className.includes('checkbox')) {
    const { checked } = e.target;
    const text = e.target.parentNode.querySelector('.single-list-input');
    const { id } = e.target.parentNode.parentNode; 
    console.log(id)

      


      if (checked) {
        console.log(listArray[id].isCompleted)

        listArray[id].isCompleted = true;
        text.classList.add('line-through');
      } else {
        text.classList.remove('line-through');
        listArray[id].isCompleted = false;
      }

  localStorage.setItem('listData', JSON.stringify(listArray));


  }
});

// Remove completed list

window.removeIsCompleted = (isCompleted) => {
  listArray = listArray.filter((elem) => elem.isCompleted !== true);
  addList();
};

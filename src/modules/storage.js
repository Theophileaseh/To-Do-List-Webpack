const listsList = document.querySelector('.today-lists');


export let listArray = []; // eslint-disable-line

/* eslint-disable no-unused-vars */


export const addList = () => {
  console.log(listArray[0])
  const allLists = listArray.map(({list, isCompleted}, index) => (


       `<div class="single-list div-style" id=${index}  isCompleted=${isCompleted}  draggable="true">
          <form class="single-list-form">
            <input type="checkbox" class="checkbox">
            <input type="text" class="single-list-input main-inputs" value="${list}" >
          </form>
          <div class="single-list-action-button">
          <button class = "delete-btn" onClick="removeList('${list}')">
          2<i class="fa-solid fa-trash-can"></i></button>
            <button class = "move-btn" onmousedown="draggableList('${list}')">
            1<i class="fa-solid fa-ellipsis-vertical"></i></button>
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

window.addEventListener('DOMContentLoaded', (e) => {
  console.log(e.target)
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
  console.log(e)
  

                                                                                                
})


listsList.addEventListener('focusout', (e) => {
  console.log(e.target)

    const inputValue = e.target.value;
    const { id } = e.target.parentNode.parentNode;     

    console.log(id)

    
    listArray.forEach((listItem, index) => {  
      

        listArray[id].list = inputValue
        console.log("index", index)
  
    });

    console.log(inputValue)

    localStorage.setItem('listData', JSON.stringify(listArray));

});


// load window event

window.addEventListener('load', (e) => {

  const allTexts = document.querySelectorAll('[isCompleted=true]');

  allTexts.forEach((items) => {
    items.childNodes[1][0].setAttribute("checked", "true");
    items.childNodes[1][1].setAttribute("disabled", "true");
    items.childNodes[1][1].classList.add('line-through');
})


})


// checkbox event
const checkbox = document.querySelector('.checkbox');
listsList.addEventListener('change', function (e) { 
  if (e.target.className.includes('checkbox')) {
    const { checked } = e.target;
    const text = e.target.parentNode.querySelector('.single-list-input');
    const listValue = e.target.parentNode.querySelector('.single-list-input').value;
    const { id } = e.target.parentNode.parentNode; 

    console.log(listValue)
    
    console.log(id)     


      if (checked) {
        console.log(listArray[id].isCompleted)

        listArray[id].isCompleted = true;
      //  listArray[id].list = listValue;
        text.classList.add('line-through');
        text.setAttribute("disabled", "true");
      } else {
        text.classList.remove('line-through');
        listArray[id].isCompleted = false;
        text.setAttribute("disabled", "false");
      //  listArray[id].list = listValue;
      }

  localStorage.setItem('listData', JSON.stringify(listArray));


  }
});

// Remove completed list

window.removeIsCompleted = () => {
  listArray = listArray.filter((elem) => elem.isCompleted !== true);
  addList();
};


// Move item

window.draggableList = () => {
  console.log("list moved")
}

// Refresh window

window.refresh = () => {
  history.go(0);
  console.log("refreshed")
}

// draggable

listsList.addEventListener('mouseenter', (e) => {
  if (e.target.className.includes('move-btn')) {
    const singleList = e.target.parentNode.parentNode.parentNode.querySelector('.single-list')

    singleList.forEach(item => {
      item.addEventListener('dragstart', dragStart)
      item.addEventListener('dragend', dragEnd)
  });


      listsList.addEventListener('dragover', dragOver);
      listsList.addEventListener('dragenter', dragEnter);
      listsList.addEventListener('dragleave', dragLeave);
      listsList.addEventListener('drop', dragDrop);

    
    function dragEnter() {
      console.log('drag entered');
    }
    function dragLeave() {
      console.log('drag left');
    }
    
    
    function dragOver(e) {
      e.preventDefault()
      console.log('drag over');
    }
    
    let dragItem = null;
    
    function dragStart() {
        console.log('drag started');
        dragItem = this;
        setTimeout(() => this.className = 'invisible', 0)
    }
    
    function dragEnd() {
        console.log('drag ended');
        this.className = 'item'
        dragItem = null;
    }
    
    function dragDrop() {
        console.log('drag dropped');
        this.append(dragItem);
    }


  }
})



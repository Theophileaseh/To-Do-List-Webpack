const listsList = document.querySelector('.today-lists');

export let listArray = []; // eslint-disable-line

/* eslint-disable no-unused-vars */


export const addList = () => {
  console.log(listArray[0])
  const allLists = listArray.map(({list, isCompleted}, index) => (


       `<div class="single-list div-style" id=${index}  isCompleted=${isCompleted}  draggable="true">
          <form class="single-list-form">
            <input type="checkbox" class="checkbox">
            <input type="text" class="single-list-input main-inputs" value="${list}">
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


// checkbox event

window.addEventListener('load', (e) => {
  console.log(e)
  console.log("l;oadded")
  const allTexts = document.querySelectorAll('.single-list').attributes.includes('isCompleted')
  // const allCompleteds = allTexts.filter((item) => item.attributes[2].value == true)
  // console.log(allCompleteds)
  const {id} = allTexts[0]
  console.log(allTexts[0].childNodes[1].childNodes)
  console.log(allTexts)
  const parent = allTexts.parentNode
  console.log("parents", parent)

  
  const allCompleted = listArray.filter((item) => item.isCompleted == true)
  console.log(allCompleted)
  const {index} = allCompleted 

  console.log(allCompleted.index)

  if (e.target.childNode.childNode.className.includes('single-list-input')) {

    const text = e.target.parentNode.querySelector('.single-list-input');
    const { ids } = e.target.parentNode.parentNode; 


  const allCompleted = listArray.filter((item) => item.isCompleted == true)
  console.log(allCompleted)
  const {index} = allCompleted 
  const selected = document.querySelectorAll('#`#{id}`')
  console.log(index)


 // const { ids } = e.target.parentNode.parentNode;
  console.log(id);
  if (ids === id) {

  text.classList.add('line-through');

}
  }
 

})


const checkbox = document.querySelector('.checkbox');
listsList.addEventListener('change', function (e) { 
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
  location.reload(true)
  console.log("refreshed")
}

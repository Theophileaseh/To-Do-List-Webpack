const listsList = document.querySelector('.today-lists');

let listArray = [];

const addList = () => {
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

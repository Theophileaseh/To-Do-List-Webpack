function saveLocal(list) {
  window.localStorage.setItem('localTasks', JSON.stringify(list));
}

export function add(list) {
  list.push({ description: document.querySelector('#newTask').value, isCompleted: false, index: list.length + 1 });
  document.querySelector('#newTask').value = '';
  saveLocal(list);
}

export function updateIndex(list) {
  let i = 1;
  list.forEach((elem) => {
    elem.index = i;
    i += 1;
  });
}

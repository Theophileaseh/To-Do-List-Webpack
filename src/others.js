export function saveLocal(list) { // eslint-disable-line
  window.localStorage.setItem('localTasks', JSON.stringify(list));
}
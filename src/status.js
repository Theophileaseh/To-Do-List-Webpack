export function saveLocal(list) {
  window.localStorage.setItem('localTasks', JSON.stringify(list));
}

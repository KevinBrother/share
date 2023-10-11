const setButton = document.getElementById('btn');
const titleInput = document.getElementById('title');

setButton.addEventListener('click', () => {
  debugger
  const title = titleInput.value;
  window.electronAPI.setTitle(title);
});

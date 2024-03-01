const setButton = document.getElementById('btn');
const titleInput = document.getElementById('title') as HTMLInputElement;

setButton?.addEventListener('click', () => {
  const title = titleInput?.value;
  debugger
  // @ts-ignore
  window?.electronAPI?.setTitle(title);
});
import { contextBridge, ipcRenderer } from 'electron';

window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector: string, text:string) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  };

  for (const dependency of ['chrome', 'node', 'electron']) {
    replaceText(`${dependency}-version`, process.versions[dependency] || '');
  }
});

contextBridge.exposeInMainWorld('electronAPI', {
  setTitle: (title:string) => {
    ipcRenderer.send('set-title', title)
  }
});
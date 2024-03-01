import { app, BrowserWindow, ipcMain } from "electron";
import * as path from "path";

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  // win.loadFile('index.html');
  win.loadURL('http://localhost:8080/');
}

app.whenReady().then(() => {
  ipcMain.on('set-title', handleSetTitle);

  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

function handleSetTitle(event:any, title:any) {
  const webContents = event.sender;
  const win = BrowserWindow.fromWebContents(webContents);
  win?.setTitle(title);
}

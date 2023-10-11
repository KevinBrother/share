const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

const isDevelopment = !app.isPackaged;
if (isDevelopment) {
  try {
    require('electron-reloader')(module);
  } catch (err) {
    console.log('err :>> ', err);
  }
}

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  // 加载 Chrome 浏览器并开启调试模式
  win.loadURL('chrome://inspect', { userAgent: 'Chrome' });

  app.commandLine.appendSwitch('remote-debugging-port', '9222'); // 设置调试端口

  win.on('closed', () => {
    mainWindow = null;
  });

  win.loadFile('index.html');
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

function handleSetTitle(event, title) {
  const webContents = event.sender;
  const win = BrowserWindow.fromWebContents(webContents);
  title += 121323;
  win.setTitle(title);
}

const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1100,
    height: 700,
    title: "Junwoo Browser 666 Edition",
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    },
    userData: path.join(__dirname, 'userdata') // 완전 포터블용
  });

  win.loadFile('index.html');

  // preload에서 요청 들어오면 처리
  ipcMain.on('play-sound', () => {
    console.log('🔥 Tab sound requested');
  });

  ipcMain.handle('get-version', () => app.getVersion());

  ipcMain.on('open-devtools', () => {
    win.webContents.openDevTools();
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
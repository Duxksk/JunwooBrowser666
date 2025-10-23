// 🩸 preload.js - Junwoo Browser 666 Edition
// HTML과 메인 프로세스 사이 안전하게 통신
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('junwooAPI', {
  playSound: () => ipcRenderer.send('play-sound'),
  openDevTools: () => ipcRenderer.send('open-devtools'),
  showVersion: () => ipcRenderer.invoke('get-version')
});

window.addEventListener('DOMContentLoaded', () => {
  console.log('💀 Junwoo Browser 666 preload loaded.');
});
import { app, BrowserWindow,Menu, Notification } from 'electron';
const path = require('path');
const checkFileExt = ['.png', '.jpg', '.jpeg', '.bmp', '.pdf'];

app.setName('demo');
// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

function winOpenEvent(win) {
  win.webContents.on('did-create-window', (window, details) => {
    if (details.url.indexOf('.') > 0) {
      var fileExt = details.url.substring(details.url.lastIndexOf('.'))
      if (!checkFileExt.includes(fileExt)) {

        let winFocusCount = 0
        window.on('focus', (event) => {
          winFocusCount++
          if (winFocusCount > 1) {
            window.close()
          }

        })
      }
    }
  })
}

function showNotification(title, msg) {
  const notification = {
    title: title,
    body: msg
  }
  new Notification(notification).show()
}

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

const createWindow = () => {
  Menu.setApplicationMenu(null);
  // Create the browser window.
  mainWindow = new BrowserWindow({
    show: false,
    icon: path.join(__dirname, 'icons/icon.png')
  });

  // and load the index.html of the app.
  mainWindow.loadURL('http://www.baidu.com');

  winOpenEvent(mainWindow);
  mainWindow.show();
  // Open the DevTools.
  // mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
  showNotification('123','1234');
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

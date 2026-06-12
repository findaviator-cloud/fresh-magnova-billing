const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
  const win = new BrowserWindow({
    width: 1400,
    height: 900,
    title: 'Sarthak GST Billing',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  })
  win.loadFile('sarthak_gst_billing.html')
  win.setMenuBarVisibility(false)
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

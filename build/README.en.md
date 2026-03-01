# VRC Chatbox OSC Tool

## Project Overview

This is an OSC chatbox server-side tool for **VRChat** that allows sending chat content from web pages or mobile devices to the VRChat game.

---

## 🚀 Quick Start

1. **Initialize Dependencies**
   ```bash
   npm install
   ```

2. **Install and Package**
   ```bash
   npm install -g pkg
   # Or use cnpm
   # cnpm i -g pkg
   ```

   Generate executable file:
   ```bash
   pkg -t win app.js -o vrc-chatbox-osc.exe
   ```

3. **Common Packaging Issues**
   If you encounter errors like "Unable to download cache files", please manually download the corresponding Node runtime file. Based on the error message (e.g., `{ "tag": "v3.4", "name": "node-v16.16.0-win-x64" }`), download from GitHub and place it in the pkg cache directory:
   `C:\Users\[username]\.pkg-cache\v3.4\`.
   If you have set the `PKG_CACHE_PATH` environment variable, place it in the corresponding version folder under that path.
   **Rename** to `fetched-v16.16.0-win-x64`.

4. **Run the Program**
   - Copy the generated `vrc-chatbox-osc.exe` to the project's `build` folder and overwrite.
   - Start: Double-click `startApp.vbs` (no command line window).
   - Close: Double-click `endApp.vbs`.

---

## 🌐 Access and Connection

- Local Access: Open `http://127.0.0.1:19001` in your browser.
- Mobile Access (Same Wi-Fi):
  1. Open Command Prompt (`cmd`) on your computer.
  2. Run `ipconfig` to find the IPv4 address, e.g., `192.168.1.100`.
  3. Enter this in your mobile browser:
     `http://[computer-IP-address]:19001` (e.g., `http://192.168.1.100:19001`).

---

## ⚙️ Configuration

The main configuration file is `config/default.js`. Common configuration options and their default values are listed below:

| Configuration Item | Description | Default Value |
|--------|------|--------|
| `server.port` | Server startup port. Requires restart after modification. | `19001` |
| `static` | Static file hosting configuration. | — |
| `static.path` | Physical path of the hosted folder. | `"./public"` |
| `static.router` | Route prefix. | `"/web"` |
| `defaultOpenBrowser` | Whether to automatically open the browser page on startup. | `true` |
| `defaultBrowser` | Specify the browser to launch (e.g., `"chrome"`), leave empty to use system default. | `""` |

**Static Hosting Example**:
After configuring `{ path: './public', router: '/web' }`, you can access files under `./public` via `http://127.0.0.1:3000/web/`.

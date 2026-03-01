# VRC Chatbox OSC 工具

## 项目简介

这是一个用于 **VRChat** 的 OSC 聊天框服务端工具，可将聊天内容从网页或移动端发送至 VRChat 游戏中。

---

## 🚀 快速开始

1. **初始化依赖**
   ```bash
   npm install
   ```

2. **安装并打包**
   ```bash
   npm install -g pkg
   # 或使用 cnpm
   # cnpm i -g pkg
   ```

   打包生成可执行文件：
   ```bash
   pkg -t win app.js -o vrc-chatbox-osc.exe
   ```

3. **打包常见问题**
   如果出现“无法下载缓存文件”等错误，请手动下载对应的 Node 运行时文件。根据错误信息（例如 `{ "tag": "v3.4", "name": "node-v16.16.0-win-x64" }`）从 GitHub 下载，然后放入 pkg 缓存目录：
   `C:\Users\[用户名]\.pkg-cache\v3.4\`。
   若设置了 `PKG_CACHE_PATH` 环境变量，请放在该路径下对应版本的文件夹中。
   **重命名**为 `fetched-v16.16.0-win-x64`。

4. **运行程序**
   - 将生成的 `vrc-chatbox-osc.exe` 复制到项目的 `build` 文件夹并覆盖。
   - 启动：双击 `startApp.vbs`（无命令行窗口）。
   - 关闭：双击 `endApp.vbs`。

---

## 🌐 访问与连接

- 本地访问：在浏览器中打开 `http://127.0.0.1:19001`。
- 手机访问（同一 Wi-Fi）:
  1. 在电脑上打开命令行 `cmd`。
  2. 执行 `ipconfig` 查找 IPv4 地址，例如 `192.168.1.100`。
  3. 在手机浏览器输入：
     `http://[电脑IP地址]:19001`（例如 `http://192.168.1.100:19001`）。

---

## ⚙️ 配置说明

主配置文件为 `config/default.js`。下面列出了常用配置项及默认值：

| 配置项 | 说明 | 默认值 |
|--------|------|--------|
| `server.port` | 服务启动端口。修改后需重启。 | `19001` |
| `static` | 静态文件托管配置。 | — |
| `static.path` | 托管文件夹物理路径。 | `"./public"` |
| `static.router` | 路由前缀。 | `"/web"` |
| `defaultOpenBrowser` | 启动时是否自动打开浏览器页面。 | `true` |
| `defaultBrowser` | 指定启动的浏览器（如 `"chrome"`），留空使用系统默认。 | `""` |

**静态托管示例**：
配置 `{ path: './public', router: '/web' }` 后，可通过 `http://127.0.0.1:3000/web/` 访问 `./public` 下的文件。
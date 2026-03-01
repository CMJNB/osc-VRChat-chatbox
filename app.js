// 获取配置文件 start
const config = require('config')   // 配置文件
const port = config.get('server.port')  // 监听的端口号

const staticApp = config.get('static')
const defaultOpenBrowser = config.get('defaultOpenBrowser')
const defaultBrowser = config.get('defaultBrowser')
const OSC = require('./lib/osc/index.js')

// 获取配置文件 end

var child_process = require('child_process');

const express = require('express')  //引入express
const serveIndex = require('serve-index');
const fileUpload = require('express-fileupload');
const expressWs = require('express-ws') // 引入websocket插件
const app = express()  // 执行express
expressWs(app)     // 加载websocket插件
const cors = require('cors')   // 引入跨域允许插件
app.use(cors())                 // 设置跨域允许
app.use(fileUpload());
const client = new OSC.Client("127.0.0.1", 9000)
app.ws('/toSemSocket', (ws, request) => {

    ws.on('message', (msg) => {
        client.send("/chatbox/input", msg, true)
    })
})

app.post('/upload', (req, res) => {
  req.files.file.mv('uploads/' + req.files.file.name);
  res.send('File uploaded!');
});
app.use('/files', express.static('uploads'), serveIndex('uploads'));

staticApp.forEach(staticItem => {
    app.use(staticItem.router, express.static(staticItem.path))
    app.use(staticItem.router, serveIndex(staticItem.path, { icons: true, view: 'details' }));

})
// port为监听的端口号，后面是一个回调；
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    if (defaultOpenBrowser) {
        child_process.exec(`start ${defaultBrowser} http://localhost:${port}`)
    }
})


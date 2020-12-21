let express = require("express")
let expressWs = require("express-ws")

let app = express()
expressWs(app)

app.ws('/ws', (ws, req) => {
    ws.send(`${new Date().toDateString()} 连接成功`)

    ws.on('message', msg => {
        ws.send(`${new Date().toDateString()} ${msg}`)
    })
})

app.listen(3721)

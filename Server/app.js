const express = require("express")
const ws = require("ws")
const app = express()

var connection = {}

const httpServer = app.listen(3001, () => {
    console.log("3001")
})

const webSocketServer = new ws.Server({
    server: httpServer,
})

webSocketServer.on("connection", (ws, request) => {
    const ip = request.socket.remoteAddress

    console.log(`Server started at ${ip}`)

    if (ws.readyState === ws.OPEN) {
        console.log(`[${ip}]`)
    }

    ws.on("message", (msg) => {
        console.log(`${msg} [${ip}]`)
        let msgList = msg.toString().split(':')

        if (msgList[0] === 'Add') {
            if (msgList[1] in connection) {
                connection[msgList[1]][msgList[2]] = ''
                console.log(connection)
                ws.send(`ConnectionUpdate:${msgList[1]}:${JSON.stringify(Object.keys(connection))}`)
            } else {
                connection[msgList[1]] = {}
                connection[msgList[1]][msgList[2]] = ''
                console.log(connection)
                ws.send(`ConnectionUpdate:${msgList[1]}:${JSON.stringify(Object.keys(connection))}`)
            }
        } else if (msgList[0] === 'ConnectionRequest') {
            if (msgList[1] in connection) {
                ws.send(`ConnectionUpdate:${msgList[1]}:${JSON.stringify(Object.keys(connection[msgList[1]]))}`)
            } else {
                connection[msgList[1]] = ''
                ws.send(`ConnectionUpdate:${msgList[1]}:${JSON.stringify(Object.keys(connection[msgList[1]]))}`)
            }
        }
    })

    ws.on("error", (error) => {
        console.log(`${error} [${ip}]`)
    })

    ws.on("close", () => {
        console.log(`[${ip}]`)
    })
})
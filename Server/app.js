const express = require("express")
const ws = require("ws")
const app = express()

var connection = {'null' : {}}

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
        console.log(connection)
        let msgList = msg.toString().split(':')

        if (msgList[0] === 'Add') {
            if (Object.keys(connection).includes(msgList[1])) {
                console.log(1)
                connection[msgList[1]][msgList[2]] = ''
                console.log(connection, 'Add')
                webSocketServer.clients.forEach(function each(client) {
                    client.send(`ConnectionUpdate:${msgList[1]}:${JSON.stringify(Object.keys(connection[msgList[1]]))}`)
                })
            } else {
                console.log(2)
                connection[msgList[1]] = {}
                connection[msgList[1]][msgList[2]] = ''
                console.log(connection, 'Add')
                webSocketServer.clients.forEach(function each(client) {
                    client.send(`ConnectionUpdate:${msgList[1]}:${JSON.stringify(Object.keys(connection[msgList[1]]))}`)
                })
            }
        } else if (msgList[0] === 'ConnectionRequest') {
            if (Object.keys(connection).includes(msgList[1])) {
                webSocketServer.clients.forEach(function each(client) {
                    client.send(`ConnectionUpdate:${msgList[1]}:${JSON.stringify(Object.keys(connection[msgList[1]]))}`)
                })
            } else {
                connection[msgList[1]] = ''
                webSocketServer.clients.forEach(function each(client) {
                    client.send(`ConnectionUpdate:${msgList[1]}:${JSON.stringify(Object.keys(connection[msgList[1]]))}`)
                })
            }
        } else if (msgList[0] === 'RequestContent') {
            let msg = `${connection[msgList[1]][msgList[2]]}`
            webSocketServer.clients.forEach(function each(client) {
                client.send(`SendContent:${msg}`)
            })
        } else if (msgList[0] === 'Edit') {
            connection[msgList[1]][msgList[2]] = msgList[3]
            webSocketServer.clients.forEach(function each(client) {
                client.send(`ContentUpdate:${msgList[1]}:${msgList[2]}:${msgList[3]}`)
            })
        } else if (msgList[0] === 'Delete') {
            if (Object.keys(connection).includes(msgList[1])) {
                if (Object.keys(connection[[msgList[1]]]).includes(msgList[2])) {
                    console.log(3)
                    delete connection[msgList[1]][msgList[2]]
                    console.log(connection)
                    webSocketServer.clients.forEach(function each(client) {
                        client.send(`ContentErase:${msgList[1]}:${msgList[2]}`)
                        client.send(`ConnectionUpdate:${msgList[1]}:${JSON.stringify(Object.keys(connection[msgList[1]]))}`)
                    })
                }
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
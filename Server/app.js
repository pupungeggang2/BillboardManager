const express = require("express");
const ws = require("ws");
const app = express();

var connection = []

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
ws.send(`${msg}`)
})

ws.on("error", (error) => {
console.log(`${error} [${ip}]`)
})

ws.on("close", () => {
console.log(`[${ip}]`)
})
})
const webSocket = new WebSocket("ws://localhost:3001")

webSocket.onopen = function () {
    alert("Successfully connected.")
}

webSocket.onmessage = function (event) {
    let msgString = event.data.toString()

    updateContent(msgString)
}

webSocket.onclose = function () {
    alert("Connection closed.")
}

webSocket.onerror = function (error) {
    console.log(error)
}

function setName() {
    let billboardName = document.getElementById("BillboardName").value
    let organization = document.getElementById("Organization").value
    localStorage.setItem('BillboardName', document.getElementById("BillboardName").value)
    webSocket.send(`Add:${organization}:${billboardName}`)
}

function updateContent(msg) {
    let msgList = msg.split(':')
    
    if (msgList[0] === 'Update') {
        if (msgList[1] === billboardName) {
            billboardContent = JSON.parse(msgList[2])
        }
    }
}
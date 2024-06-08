const webSocket = new WebSocket("ws://localhost:3001")

webSocket.onopen = function () {
    alert("Successfully connected.")
}

webSocket.onmessage = function (event) {
    let msg = event.data.toString()
    console.log(msg)
    updateContent(msg)
}

webSocket.onclose = function () {
    alert("Connection closed.")
}

webSocket.onerror = function (error) {
    console.log(error)
}

function buttonConnectClicked() {
    let billboardName = document.getElementById("BillboardName").value
    let organization = document.getElementById("Organization").value
    localStorage.setItem('BillboardName', billboardName)
    billboardNameCurrent = billboardName
    organizationCurrent = organization
    webSocket.send(`Add:${organization}:${billboardName}`)
}

function updateContent(msg) {
    let msgList = msg.split(':')
    
    if (msgList[0] === 'ContentUpdate') {
        if (msgList[1] === organizationCurrent) {
            if (msgList[2] === billboardNameCurrent) {
                billboardContent = JSON.parse(msgList[3])
            }
        }
    } else if (msgList[0] === 'Delete') {
        billboardContent = [[], [], []]
    }
}
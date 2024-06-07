window.onload = editInit
window.onerror = errorHandle
window.oncontextmenu = rightClick

webSocket.onopen = function () {
    alert('Connected to server.')
    let organization = JSON.parse(localStorage.getItem('BillboardManagerAccount'))[localStorage.getItem('BillboardManagerLogin')]['Organization']
    console.log(organization)
    let billboardName = localStorage.getItem('BillboardEditName')
    webSocket.send(`RequestContent:${organization}:${billboardName}`)
}

webSocket.onmessage = function (event) {
    let msg = event.data.toString()
    let msgList = msg.split(':')
    let organization = JSON.parse(localStorage.getItem('BillboardManagerAccount'))[localStorage.getItem('BillboardManagerLogin')]['Organization']

    console.log(msg)
    if (msgList[0] === 'SendContent') {
        editContent = JSON.parse(msgList[1])
    }
}

webSocket.onclose = function () {
    alert("Connection closed.")
}

webSocket.onerror = function (error) {
    console.log(error)
}

function editInit() {
    editCanvas = document.getElementById('EditCanvas')
    editContext = editCanvas.getContext('2d')

    editCanvas.addEventListener('mouseup', mouseUp, false)
    window.addEventListener('keydown', keyDown, false)

    billboardName = localStorage.getItem('BillboardEditName')
    let organization = JSON.parse(localStorage.getItem('BillboardManagerAccount'))[localStorage.getItem('BillboardManagerLogin')]['Organization']
    console.log(`RequestContent:${organization}:${billboardName}`)

    editFrameCurrent = Date.now()
    editFramePrevious = Date.now() - 16
    editInstance = requestAnimationFrame(loop)
}

function loop() {
    editFrameCurrent = Date.now()
    delta = editFrameCurrent - editFramePrevious

    loopEdit()

    editFramePrevious = Date.now()
    editInstance = requestAnimationFrame(loop)
}

function mouseUp(event) {
    let canvasRect = editCanvas.getBoundingClientRect()
    let x = event.clientX - canvasRect.left
    let y = event.clientY - canvasRect.top
    let button = event.button
    
    console.log(x, y)
    mouseUpEdit(x, y, button)
}

function keyDown(event) {
    let key = event.key
    
    keyDownEdit(key)
}

function errorHandle(err, url, line, col, obj) {
    if (obj != null) {
        cancelAnimationFrame()
    }
}

function rightClick() {
    return false
}
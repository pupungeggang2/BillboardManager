window.onload = editInit
window.onerror = errorHandle
window.oncontextmenu = rightClick

webSocket.onopen = function () {
    alert('Connected to server.')
    let organization = JSON.parse(localStorage.getItem('BillboardManagerAccount'))[localStorage.getItem('BillboardManagerLogin')]['Organization']
    console.log(organization)
    let billboardName = localStorage.getItem('BillboardEditName')
    webSocket.send(`RequestContent|${organization}|${billboardName}`)
}

webSocket.onmessage = function (event) {
    let msg = event.data.toString()
    let msgList = msg.split('|')
    let organization = JSON.parse(localStorage.getItem('BillboardManagerAccount'))[localStorage.getItem('BillboardManagerLogin')]['Organization']
    let billboardName = localStorage.getItem('BillboardEditName')

    console.log(msg)
    if (msgList[0] === 'SendContent') {
        if (msgList[1] === organization) {
            if (msgList[2] === billboardName) {
                editContent = JSON.parse(msgList[3])
                editContent = JSON.parse(editContent)
            }
        }
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
    upperBarCanvas = document.getElementById('EditUpperBar')
    upperBarContext = upperBarCanvas.getContext('2d')

    editCanvas.addEventListener('mouseup', mouseUpEdit, false)
    upperBarCanvas.addEventListener('mouseup', mouseUpUpper, false)
    window.addEventListener('keydown', keyDown, false)

    billboardName = localStorage.getItem('BillboardEditName')
    let organization = JSON.parse(localStorage.getItem('BillboardManagerAccount'))[localStorage.getItem('BillboardManagerLogin')]['Organization']
    imageLoad()

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

function mouseUpEdit(event) {
    let canvasRect = editCanvas.getBoundingClientRect()
    let x = event.clientX - canvasRect.left
    let y = event.clientY - canvasRect.top
    let button = event.button
    
    mouseUpEditCanvas(x, y, button)
}

function mouseUpUpper(event) {
    let canvasRect = upperBarCanvas.getBoundingClientRect()
    let x = event.clientX - canvasRect.left
    let y = event.clientY - canvasRect.top
    let button = event.button
    
    mouseUpUpperBar(x, y, button) 
}

function keyDown(event) {
    let key = event.key
    
    keyDownEdit(key)
}

function errorHandle(err, url, line, col, obj) {
    if (obj != null) {
        cancelAnimationFrame(editInstance)
    }
}

function rightClick() {
    return false
}
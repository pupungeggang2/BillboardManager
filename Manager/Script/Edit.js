window.onload = editInit
window.onerror = errorHandle
window.oncontextmenu = rightClick

function editInit() {
    editCanvas = document.getElementById('EditCanvas')
    editContext = editCanvas.getContext('2d')

    editCanvas.addEventListener('mouseup', mouseUp, false)
    window.addEventListener('keydown', keyDown, false)

    editContent = JSON.parse(sessionStorage.getItem('BillboardTemp'))

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
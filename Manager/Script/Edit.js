window.onload = editInit
window.onerror = errorHandle
window.oncontextmenu = rightClick

function editInit() {
    editCanvas = document.getElementById('EditCanvas')
    editContext = editCanvas.getContext('2d')

    editCanvas.addEventListener('mouseup', mouseUp, false)
    window.addEventListener('keydown', keyDown, false)

    editFrameCurrent = Date.now()
    editFramePrevious = Date.now() - 16
    editInstance = requestAnimationFrame(loop)
}

function loop() {
    editFrameCurrent = Date.now()
    delta = editFrameCurrent - editFramePrevious

    lootEdit()

    editFramePrevious = Date.now()
    editInstance = requestAnimationFrame(loop)
}

function mouseUp(event) {

}

function keyDown(event) {
    
}

function errorHandle(err, url, line, col, obj) {
    if (obj != null) {
        cancelAnimationFrame()
    }
}

function rightClick() {
    return false
}
window.onload = main
window.onerror = errorHandle
window.oncontextmenu = rightClick

function main() {
    canvas = document.getElementById('Screen')
    context = canvas.getContext('2d')

    billboardNameCurrent = localStorage.getItem('BillboardName')

    programFrameCurrent = Date.now()
    programFramePrevious = Date.now() - 16
    programInstance = requestAnimationFrame(loop)
}

function loop() {
    programFrameCurrent = Date.now()
    delta = programFrameCurrent - programFramePrevious

    display()

    programFramePrevious = Date.now()
    programInstance = requestAnimationFrame(loop)
}

function display() {
    context.font = '24px Roboto'
    context.textAlign = 'left'
    context.textBaseline = 'top'
    context.fillStyle = 'Black'
    context.strokeStyle = 'Black'
    context.lineWidth = 2
    context.clearRect(0, 0, 960, 540)
    context.fillRect(0, 0, 960, 540)
}

function errorHandle(err, url, line, col, obj) {
    if (obj != null) {
        cancelAnimationFrame()
    }
}

function rightClick() {
    return false
}
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

    for (let i = 0; i < billboardContent[billbordScreenNum].length; i++) {
        let tempContent = billboardContent[billbordScreenNum][i]

        if (tempContent['Type'] === 'Text') {
            context.fillStyle = tempContent['Color']
            context.font = tempContent['Font']
            context.fillText(tempContent['Text'], tempContent['Position'][0], tempContent['Position'][1])
        }

        if (tempContent['Type'] === 'WidgetTemp') {
            context.fillStyle = 'White'
            context.font = '48px Roboto'
            context.fillText(`${tempContent['Value']}°C`, tempContent['Position'][0], tempContent['Position'][1])
        }

        if (tempContent['Type'] === 'WidgetHumidity') {
            context.fillStyle = 'Cyan'
            context.font = '48px Roboto'
            context.fillText(`${tempContent['Value']}%`, tempContent['Position'][0], tempContent['Position'][1])
        }

        if (tempContent['Type'] === 'WidgetNoise') {
            context.fillStyle = 'White'
            context.font = '48px Roboto'
            context.fillText(`${tempContent['Value']}dB`, tempContent['Position'][0], tempContent['Position'][1])
        }
    }

    context.fillStyle = 'Black'
}

function errorHandle(err, url, line, col, obj) {
    if (obj != null) {
        cancelAnimationFrame()
    }
}

function rightClick() {
    return false
}
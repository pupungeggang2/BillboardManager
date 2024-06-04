function drawEditInit() {
    editContext.font = '24px Roboto'
    editContext.textAlign = 'left'
    editContext.textBaseline = 'top'
    editContext.fillStyle = 'Black'
    editContext.strokeStyle = 'Black'
    editContext.lineWidth = 2

    editContext.clearRect(0, 0, 1280, 720)
    editContext.fillRect(0, 0, 1280, 720)
}

function drawEditUpperBar() {

}

function drawEditLowerBar() {

}

function drawEdit() {
    for (let i = 0; i < editContent.length; i++) {
        let tempContent = editContent[i]

        if (tempContent['Type'] === 'Text') {
            editContext.fillStyle = tempContent['Property']['Color']
            editContext.font = tempContent['Property']['Font']
            editContext.fillText(tempContent['Content'], tempContent['Position'][0], tempContent['Position'][1])
        }
    }

    editContext.fillStyle = 'Black'
}
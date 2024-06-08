function drawEditInit() {
    editContext.font = '24px Roboto'
    editContext.textAlign = 'left'
    editContext.textBaseline = 'top'
    editContext.fillStyle = 'Black'
    editContext.strokeStyle = 'Black'
    editContext.lineWidth = 2

    editContext.clearRect(0, 0, 960, 540)
    editContext.fillRect(0, 0, 960, 540)

    upperBarContext.font = '24px Roboto'
    upperBarContext.textAlign = 'left'
    upperBarContext.textBaseline = 'top'
    upperBarContext.fillStyle = 'Black'
    upperBarContext.strokeStyle = 'Black'
    upperBarContext.lineWidth = 2

    upperBarContext.clearRect(0, 0, 960, 40)
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

function drawEditUpperBar() {
    upperBarContext.strokeRect(editUI.upperBar.buttonClear[0], editUI.upperBar.buttonClear[1], editUI.upperBar.buttonClear[2], editUI.upperBar.buttonClear[3])
    upperBarContext.drawImage(img.iconImage, editUI.upperBar.buttonImage[0], editUI.upperBar.buttonImage[1])
    upperBarContext.strokeRect(editUI.upperBar.buttonImage[0], editUI.upperBar.buttonImage[1], editUI.upperBar.buttonImage[2], editUI.upperBar.buttonImage[3])
    upperBarContext.drawImage(img.iconText, editUI.upperBar.buttonText[0], editUI.upperBar.buttonText[1])
    upperBarContext.strokeRect(editUI.upperBar.buttonText[0], editUI.upperBar.buttonText[1], editUI.upperBar.buttonText[2], editUI.upperBar.buttonText[3])
    upperBarContext.drawImage(img.iconTemp, editUI.upperBar.buttonWidgetTemp[0], editUI.upperBar.buttonWidgetTemp[1])
    upperBarContext.strokeRect(editUI.upperBar.buttonWidgetTemp[0], editUI.upperBar.buttonWidgetTemp[1], editUI.upperBar.buttonWidgetTemp[2], editUI.upperBar.buttonWidgetTemp[3])
    upperBarContext.drawImage(img.iconHumidity, editUI.upperBar.buttonWidgetHumidity[0], editUI.upperBar.buttonWidgetHumidity[1])
    upperBarContext.strokeRect(editUI.upperBar.buttonWidgetHumidity[0], editUI.upperBar.buttonWidgetHumidity[1], editUI.upperBar.buttonWidgetHumidity[2], editUI.upperBar.buttonWidgetHumidity[3])
    upperBarContext.drawImage(img.iconNoise, editUI.upperBar.buttonWidgetNoise[0], editUI.upperBar.buttonWidgetNoise[1])
    upperBarContext.strokeRect(editUI.upperBar.buttonWidgetNoise[0], editUI.upperBar.buttonWidgetNoise[1], editUI.upperBar.buttonWidgetNoise[2], editUI.upperBar.buttonWidgetNoise[3])

    for (let i = 0; i < 3; i++) {
        upperBarContext.strokeRect(editUI.upperBar.buttonScreen[i][0], editUI.upperBar.buttonScreen[i][1], editUI.upperBar.buttonScreen[i][2], editUI.upperBar.buttonScreen[i][3])
        upperBarContext.fillText(`${i + 1}`, editUI.upperBar.textScreen[i][0], editUI.upperBar.textScreen[i][1])
    }
}
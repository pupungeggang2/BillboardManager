function loopEdit() {
    displayEdit()
}

function displayEdit() {
    drawEditInit()

    drawEditUpperBar()
    drawEdit()
}

function mouseUpEditCanvas(x, y, button) {
    if (button === 0) {
        if (editState === '') {
            
        }
    } else if (button === 2) {

    }
}

function mouseUpUpperBar(x, y, button) {
    if (button === 0) {
        if (editState === '') {
            if (pointInsideRectArray(x, y, editUI.upperBar.buttonClear)) {
                editContent[editScreenNum] = []
            } else if (pointInsideRectArray(x, y, editUI.upperBar.buttonImage)) {
                editContent[editScreenNum].push({'Type' : 'Image', 'Position' : [0, 0], 'Image' : ''})
            } else if (pointInsideRectArray(x, y, editUI.upperBar.buttonText)) {
                editContent[editScreenNum].push({'Type' : 'Text', 'Position' : [0, 0], 'Font' : '24px Roboto', 'Color' : 'White', 'Text' : 'Hello'})
            } else if (pointInsideRectArray(x, y, editUI.upperBar.buttonWidgetTemp)) {
                editContent[editScreenNum].push({'Type' : 'WidgetTemp', 'Position' : [0, 0], 'Value' : '25'})
            } else if (pointInsideRectArray(x, y, editUI.upperBar.buttonWidgetHumidity)) {
                editContent[editScreenNum].push({'Type' : 'WidgetHumidity', 'Position' : [0, 0], 'Value' : '50'})
            } else if (pointInsideRectArray(x, y, editUI.upperBar.buttonWidgetNoise)) {
                editContent[editScreenNum].push({'Type' : 'WidgetNoise', 'Position' : [0, 0], 'Value' : '30'})
            }
        }
    }
}

function keyDownEdit(key) {
    
}
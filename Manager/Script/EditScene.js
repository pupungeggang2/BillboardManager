function loopEdit() {
    displayEdit()
}

function displayEdit() {
    drawEditInit()

    drawEditUpperBar()
    drawEditLowerBar()
    drawEdit()
}

function mouseUpEdit(x, y, button) {
    if (button === 0) {
        if (editState === '') {
            if (pointInsideRectArray(x, y, editUI.upperBar.buttonTemp)) {
                tempButtonPressed()
            }
        }
    } else if (button === 2) {

    }
}

function keyDownEdit(key) {
    
}
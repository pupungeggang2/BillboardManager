function pointInsideRect(x, y, r1, r2, r3, r4) {
    return x > r1 && x < r1 + r3 && y > r2 && y < r2 + r4
}

function pointInsideRectArray(x, y, rect) {
    return x > rect[0] && x < rect[0] + rect[2] && y > rect[1] && y < rect[1] + rect[3]
}

function tempButtonPressed() {
    editContent.push({'Type' : 'Text', 'Position' : [200, 200], 'Property' : {'Color' : 'White', 'Font' : '24px Roboto'}, 'Content' : 'Hello'})
}

function editFinish() {
    let organization = JSON.parse(localStorage.getItem('BillboardManagerAccount'))[localStorage.getItem('BillboardManagerLogin')]['Organization']
    console.log(`Edit:${organization}:${billboardName}:${editContent}`)
    webSocket.send(`Edit:${organization}:${billboardName}:${editContent}`)

    editContent = []

    location.href = 'main.html'
}
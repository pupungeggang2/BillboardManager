window.onload = mainInit

const webSocket = new WebSocket("ws://localhost:3001")
let state = ''
let account = ''
let organization = ''
let connected = []
let preset = []
let tempPreset = []
let IDs = []

webSocket.onopen = function () {
    alert('Connected to server.')
    let organization = JSON.parse(localStorage.getItem('BillboardManagerAccount'))[localStorage.getItem('BillboardManagerLogin')]['Organization']
    webSocket.send(`ConnectionRequest|${organization}`)
}

webSocket.onmessage = function (event) {
    let msg = event.data.toString()
    let msgList = msg.split('|')
    let organization = JSON.parse(localStorage.getItem('BillboardManagerAccount'))[localStorage.getItem('BillboardManagerLogin')]['Organization']
    console.log(msg)

    if (msgList[0] === 'ConnectionUpdate') {
        if (msgList[1] === organization) {
            let connected = JSON.parse(msgList[2])
            let tempHTML = ''
            for (i = 0; i < connected.length; i++) {
                tempHTML += `<label>Billboard ${connected[i]}</label>`
                tempHTML += `<button class="ButtonBillboard" onclick="buttonBillboardClicked('${connected[i]}')">Billboard</button>`
            }
            document.getElementById('BillboardConnected').innerHTML = tempHTML
        }
    }
}

webSocket.onclose = function () {
    alert("Connection closed.")
}

webSocket.onerror = function (error) {
    console.log(error)
}

function mainInit() {
    document.getElementById('Title').innerHTML = `${localStorage.getItem('BillboardManagerLogin')}'s billboard`
    state = ''
}

function buttonEditClicked() {
    state = 'edit'
}

function buttonTriggerClicked() {
    
}

function buttonDeleteClicked() {
    state = 'delete'
}

function buttonBillboardClicked(name) {
    if (state === 'edit') {
        localStorage.setItem('BillboardEditName', name)
        location.href = 'edit.html'
        state = ''
    } else if (state === 'delete') {
        let organization = JSON.parse(localStorage.getItem('BillboardManagerAccount'))[localStorage.getItem('BillboardManagerLogin')]['Organization']
        webSocket.send(`Delete:${organization}:${name}`)
        state = ''
    }
}

function logout() {
    localStorage.setItem('BillboardManagerLogin', '')
    location.href = 'index.html'
}
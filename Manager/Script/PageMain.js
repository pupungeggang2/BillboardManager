window.onload = mainInit

const webSocket = new WebSocket("ws://localhost:3001");
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
    console.log(organization)
    webSocket.send(`ConnectionRequest:${organization}`)
}

webSocket.onmessage = function (event) {
    let msg = event.data.toString()
    let msgList = msg.split(':')
    let organization = JSON.parse(localStorage.getItem('BillboardManagerAccount'))[localStorage.getItem('BillboardManagerLogin')]['Organization']
    alert(msg)

    if (msgList[0] === 'ConnectionUpdate') {
        if (msgList[1] === organization) {
            let connected = JSON.parse(msgList[2])
            let tempHTML = ''
            for (i = 0; i < connected.length; i++) {
                tempHTML += `<label>Billboard ${connected[i]}</label>`
                tempHTML += `<button class="ButtonBillboard" onclick="ButtonBillboardClick()">Billboard</button>`
            }
            document.getElementById('BillboardConnected').innerHTML = tempHTML
        }
    }
}

webSocket.onclose = function () {
    alert("Connection closed.");
}

webSocket.onerror = function (error) {
    console.log(error);
}

function sendToBillboard() {
    const message = document.getElementById("message").value;
    webSocket.send(message);
}

function changeID() {
    billboardID = document.getElementById('BillboardID').value
}

function mainInit() {
    document.getElementById('Title').innerHTML = `${localStorage.getItem('BillboardManagerLogin')}'s billboard`
    document.getElementById('BillboardPreset').innerHTML = ''
}

function addBillboard() {
    sessionStorage.setItem('BillboardTemp', JSON.stringify([]))
}

function addBillboardID() {
    let tempID = document.getElementById('BillboardID').value
    let billboard = JSON.parse(localStorage.getItem('BillboardManagerOrganization'))
    billboard[organization]['BillboardID'].push(tempID)
    localStorage.setItem('BillboardManagerOrganization', JSON.stringify(billboard))
    IDs = JSON.parse(localStorage.getItem('BillboardManagerOrganization'))[organization]['BillboardID']

    let tempHTML = ''
    for (let i = 0; i < IDs.length; i++) {
        tempHTML += `<button class="BillboardIDButton" onclick="billboardIDButtonClicked(${i})">${IDs[i]}</button>`
        if (i % 4 === 3) {
            tempHTML += '<br>'
        }
    }
    document.getElementById('BillboardConnect').innerHTML = tempHTML
}

function billboardIDButtonClicked(num) {
    alert(num)

    if (state === 'apply') {
        
    }
}

function billboardPresetButtonClicked(num) {
    tempPreset = JSON.parse(localStorage.getItem('BillboardManagerOrganization'))[organization]['Billboard'][num]
    state = 'apply'
}

function logout() {
    localStorage.setItem('BillboardManagerLogin', '')
    location.href = 'index.html'
}
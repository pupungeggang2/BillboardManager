window.onload = mainInit

let state = ''
let account = ''
let organization = ''
let connected = []
let preset = []
let tempPreset = []
let IDs = []

function mainInit() {
    document.getElementById('Title').innerHTML = `${localStorage.getItem('BillboardManagerLogin')}'s billboard`

    account = localStorage.getItem('BillboardManagerLogin')
    organization = JSON.parse(localStorage.getItem('BillboardManagerAccount'))[account]['Organization']
    preset = JSON.parse(localStorage.getItem('BillboardManagerOrganization'))[organization]['Billboard']
    IDs = JSON.parse(localStorage.getItem('BillboardManagerOrganization'))[organization]['BillboardID']

    let tempHTML = ''
    for (let i = 0; i < preset.length; i++) {
        tempHTML += `<button class="BillboardPresetButton" onclick="billboardPresetButtonClicked(${i})">Billboard ${i}</button>`
        if (i % 4 === 3) {
            tempHTML += '<br>'
        }
    }

    document.getElementById('BillboardPreset').innerHTML = tempHTML
    
    tempHTML = ''
    for (let i = 0; i < IDs.length; i++) {
        tempHTML += `<button class="BillboardIDButton" onclick="billboardIDButtonClicked(${i})">${IDs[i]}</button>`
        if (i % 4 === 3) {
            tempHTML += '<br>'
        }
    }

    document.getElementById('BillboardIDs').innerHTML = tempHTML
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
    document.getElementById('BillboardIDs').innerHTML = tempHTML
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
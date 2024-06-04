window.onload = mainInit

let account = ''
let organization = ''
let connected = []
let preset = []

function mainInit() {
    document.getElementById('Title').innerHTML = `${localStorage.getItem('BillboardManagerLogin')}'s billboard`

    account = localStorage.getItem('BillboardManagerLogin')
    organization = JSON.parse(localStorage.getItem('BillboardManagerAccount'))[account]['Organization']
    preset = JSON.parse(localStorage.getItem('BillboardManagerOrganization'))[organization]['Billboard']

    let billboardPresetElement = document.getElementById('BillboardPreset')
    let tempHTML = ''
    for (let i = 0; i < preset.length; i++) {
        tempHTML += `<button class="BillboardPresetButton" onclick="billboardPresetButtonClicked(${i})">Billboard ${i}</button>`
        if (i % 4 === 3) {
            tempHTML += '<br>'
        }
    }
    billboardPresetElement.innerHTML = tempHTML
}

function addBillboard() {
    sessionStorage.setItem('BillboardTemp', JSON.stringify([]))
}

function billboardPresetButtonClicked(num) {
    alert('Hello')
}
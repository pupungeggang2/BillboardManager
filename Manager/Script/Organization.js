function createOrganization() {
    let textName = document.getElementById('TextCreateOrganization').value
    let textPassword = document.getElementById('TextCreatePassword').value

    let storageOrganization = JSON.parse(localStorage.getItem('BillboardManagerOrganization'))
    storageOrganization[textName] = {'Members' : [localStorage.getItem('BillboardManagerLogin')], 'Password' : textPassword, 'Billboard' : [], 'BillboardID' : []}
    localStorage.setItem('BillboardManagerOrganization', JSON.stringify(storageOrganization))

    let storageAccount = JSON.parse(localStorage.getItem('BillboardManagerAccount'))
    storageAccount[localStorage.getItem('BillboardManagerLogin')]['Organization'] = textName
    localStorage.setItem('BillboardManagerAccount', JSON.stringify(storageAccount))

    location.href = 'main.html'
}

function enrollOrganization() {
    let textName = document.getElementById('TextEnrollOrganization').value
    let textPassword = document.getElementById('TextEnrollPassword').value

    let storageOrganization = JSON.parse(localStorage.getItem('BillboardManagerOrganization'))

    if (textName in storageOrganization) {
        if (textPassword === storageOrganization[textName]['Password']) {
            stroageOrganization[textName]['Members'].push(localStorage.getItem('BillboardManagerLogin'))
            localStorage.setItem('BillboardManagerOrganization', JSON.stringify(storageOrganization))
            let storageAccount = JSON.parse(localStorage.getItem('BillboardManagerAccount'))
            storageAccount[localStorage.getItem('BillboardManagerLogin')]['Organization'] = textName
            localStorage.setItem('BillboardManagerAccount', JSON.stringify(storageAccount))
        } else {
            alert('Password does not match.')
        }
    } else {
        alert('Invalid organization name.')
    }
}
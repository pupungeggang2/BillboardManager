function signup() {
    let textName = document.getElementById('TextName').value
    let textOrganization = document.getElementById('TextOrganization').value
    let textID = document.getElementById('TextID').value
    let textPassword = document.getElementById('TextPassword').value
    let textPasswordConfirm = document.getElementById('TextPasswordConfirm').value

    if (textName.length <= 0) {
        alert('You must enter name.')
    } else if (textOrganization.length <= 0) {
        alert('You must enter organization.')
    } else if (textID.length <= 0) {
        alert('You must enter ID.')
    } else if (textPassword.length <= 0) {
        alert('You must enter password.')
    } else if (textPasswordConfirm <= 0) {
        alert('You must enter password confirm.')
    } else if (textPassword != textPasswordConfirm) {
        alert('Passwords do not match')
    } else {
        let storage = JSON.parse(localStorage.getItem('BillboardManagerAccount'))
        storage[textID] = {'Password' : textPassword, 'Organization' : ''}
        localStorage.setItem('BillboardManagerAccount', JSON.stringify(storage))
        location.href = 'index.html'
    }
}

function login() {
    let textID = document.getElementById('TextID').value
    let textPassword = document.getElementById('TextPassword').value

    if (textID.length <= 0) {
        alert('You must enter name.')
    } else if (textPassword.length <= 0) {
        alert('You must enter password.')
    } else {
        let storage = JSON.parse(localStorage.getItem('BillboardManagerAccount'))

        if (textID in storage) {
            if (storage[textID]['Password'] === textPassword) {
                alert('Log in succesful.')
                localStorage.setItem('BillboardManagerLogin', textID)

                if (storage[textID]['Organization'] === '') {
                    location.href = 'organization.html'
                } else {
                    location.href = 'main.html'
                }
            } else {
                alert('Password do not match.')
            }
        } else {
            alert('Invalid ID.')
        }
    }
}
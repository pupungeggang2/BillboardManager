window.onload = init

function init() {
    if (localStorage.getItem('BillboardManagerAccount') === null) {
        localStorage.setItem('BillboardManagerAccount', JSON.stringify({}))
    }

    if (localStorage.getItem('BillboardManagerOrganization') === null) {
        localStorage.setItem('BillboardManagerOrganization', JSON.stringify({}))
    }

    if (localStorage.getItem('BillboardManagerLogin') === null) {
        localStorage.setItem('BillboardManagerLogin', '')
    }

    if (localStorage.getItem('BillboardManagerLogin').length > 0) {
        location.href = 'main.html'
    }
}
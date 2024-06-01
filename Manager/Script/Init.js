window.onload = init

function init() {
    if (localStorage.getItem('BillboardManagerAccount') === null) {
        localStorage.setItem('BillboardManagerAccount', JSON.stringify({}))
    }

    if (localStorage.getItem('BillboardManagerOrganization') === null) {
        localStorage.setItem('BillboardManagerOrganization', JSON.stringify({}))
    }
}
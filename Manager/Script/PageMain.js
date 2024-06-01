window.onload = setMainTitle

function setMainTitle() {
    document.getElementById('Title').innerHTML = `${localStorage.getItem('BillboardManagerLogin')}'s billboard`
}
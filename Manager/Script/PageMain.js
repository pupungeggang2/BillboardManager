window.onload = setMainTitle

function setMainTitle() {
    document.getElementById('Title').innerHTML = `${sessionStorage.getItem('BillboardManagerAccount')}'s billboard`
}
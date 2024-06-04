const webSocket = new WebSocket("ws://localhost:3001")

webSocket.onopen = function () {
    alert("Successfully connected.")
};

webSocket.onmessage = function (event) {
    billboardContent = event.data
    alert(event.data)
};

webSocket.onclose = function () {
    alert("웹소켓 서버와 연결이 종료되었습니다.")
};

webSocket.onerror = function (error) {
    console.log(error)
};

function setID() {
    billboardID = document.getElementById("BillboardID").value
    localStorage.setItem('BillboardID', document.getElementById("BillboardID").value)
}
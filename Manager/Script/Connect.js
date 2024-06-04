const webSocket = new WebSocket("ws://localhost:3001");
let billboardID = ''

webSocket.onopen = function () {
    alert("웹소켓 서버와 연결에 성공했습니다.");
};

webSocket.onmessage = function (event) {
    alert(event.data);
};

webSocket.onclose = function () {
    alert("웹소켓 서버와 연결이 종료되었습니다.");
};

webSocket.onerror = function (error) {
    console.log(error);
};

function sendMessage() {
    const message = document.getElementById("message").value;
    webSocket.send(message);
}

function changeID() {
    billboardID = document.getElementById('BillboardID').value
}
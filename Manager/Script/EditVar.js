let editCavnas
let editContext
let upperBarCanvas
let upperBarContext

let editInstance
let editFrameCurrent
let editFramePrevious
let delta

let editState = ''
let editContent = []
let billboardName = ''

let webSocket = new WebSocket("ws://localhost:3001")
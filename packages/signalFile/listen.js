const ws = new WebSocket('ws://localhost:9222/devtools/page/BB8599BA2ABFF86E2E438C0C80854723')
ws.addEventListener("message", function (event) {
    console.log("Message from server ", event.data);
});
function sendMessage() {
    let messageInput = document.getElementById("messageInput").value;
    fetch("/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "message=" + encodeURIComponent(messageInput)
    }).then(response => response.text()).then(botReply => {
        let chatBox = document.getElementById("chat-box");
       chatBox.innerHTML += "<div><b>You:</b> " + messageInput + "</div>";
        chatBox.innerHTML += "<div><b>Bot:</b> " + botReply + "</div>";
        document.getElementById("messageInput").value = "";
    }).catch(error => console.error("Error:", error));
}
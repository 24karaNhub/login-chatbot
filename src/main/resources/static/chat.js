function sendMessage() {
    const messageInput = document.getElementById("messageInput");
    const messageText = messageInput.value.trim();
    const typingIndicator = document.getElementById("typing-indicator");

    if (messageText === "") return;

    // 1. Display User Message
    appendMessage(messageText, 'user-message');
    
    // Clear input and scroll
    messageInput.value = "";
    scrollToBottom();

    // 2. Show Typing Indicator
    if (typingIndicator) typingIndicator.style.display = "block";
    
    // 3. Fetch Bot Response with a slight delay for realism
    fetch("/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "message=" + encodeURIComponent(messageText)
    })
    .then(response => response.text())
    .then(botReply => {
        // Realistic delay: wait 800ms before showing the bot's reply
        setTimeout(() => {
            if (typingIndicator) typingIndicator.style.display = "none";
            appendMessage(botReply, 'bot-message');
            scrollToBottom();
        }, 800);
    })
    .catch(error => {
        console.error("Error:", error);
        if (typingIndicator) typingIndicator.style.display = "none";
    });
}

// Helper function to create message bubbles
function appendMessage(text, className) {
    const chatContainer = document.getElementById("messages-container");
    const messageDiv = document.createElement("div");
    
    // Add the shared 'message' class and the specific user/bot class
    messageDiv.classList.add("message", className);
    messageDiv.innerText = text;
    
    chatContainer.appendChild(messageDiv);
}

// Helper function with Smooth Scroll
function scrollToBottom() {
    const chatContainer = document.getElementById("messages-container");
    chatContainer.scrollTo({
        top: chatContainer.scrollHeight,
        behavior: 'smooth'
    });
}

// Allow "Enter" key to send message
document.getElementById("messageInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});
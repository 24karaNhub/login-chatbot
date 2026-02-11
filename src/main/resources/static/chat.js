f// ========== Utility Functions ==========

/**
 * Get formatted current time
 */
function getCurrentTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 should be 12
    const minutesStr = minutes < 10 ? '0' + minutes : minutes;
    
    return `${hours}:${minutesStr} ${ampm}`;
}

/**
 * Smooth scroll to bottom of messages
 */
function scrollToBottom() {
    const chatContainer = document.getElementById("messages-container");
    setTimeout(() => {
        chatContainer.scrollTo({
            top: chatContainer.scrollHeight,
            behavior: 'smooth'
        });
    }, 100);
}

/**
 * Show typing indicator with animation
 */
function showTypingIndicator() {
    const typingIndicator = document.getElementById("typing-indicator");
    if (typingIndicator) {
        typingIndicator.style.display = "block";
        // Trigger reflow for animation
        void typingIndicator.offsetWidth;
        typingIndicator.classList.add("show");
        scrollToBottom();
    }
}

/**
 * Hide typing indicator
 */
function hideTypingIndicator() {
    const typingIndicator = document.getElementById("typing-indicator");
    if (typingIndicator) {
        typingIndicator.classList.remove("show");
        setTimeout(() => {
            typingIndicator.style.display = "none";
        }, 300);
    }
}

/**
 * Disable/enable send button and input
 */
function setInputState(disabled) {
    const messageInput = document.getElementById("messageInput");
    const sendButton = document.querySelector(".input-area button");
    
    if (messageInput) messageInput.disabled = disabled;
    if (sendButton) sendButton.disabled = disabled;
}

// ========== Message Functions ==========

/**
 * Append message to chat with proper structure and timestamp
 */
function appendMessage(text, type) {
    const chatContainer = document.getElementById("messages-container");
    
    // Create message wrapper
    const messageWrapper = document.createElement("div");
    messageWrapper.classList.add("message-wrapper", type === 'user-message' ? 'user' : 'bot');
    
    // Create message div
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", type);
    
    // Create message content
    const contentDiv = document.createElement("div");
    contentDiv.classList.add("message-content");
    contentDiv.textContent = text;
    
    // Create timestamp
    const timeDiv = document.createElement("div");
    timeDiv.classList.add("message-time");
    timeDiv.textContent = getCurrentTime();
    
    // Assemble message
    messageDiv.appendChild(contentDiv);
    messageDiv.appendChild(timeDiv);
    messageWrapper.appendChild(messageDiv);
    chatContainer.appendChild(messageWrapper);
    
    return messageDiv;
}

/**
 * Add a sending state to user message
 */
function addSendingState(messageElement) {
    messageElement.classList.add("sending");
}

/**
 * Remove sending state from message
 */
function removeSendingState(messageElement) {
    messageElement.classList.remove("sending");
}

// ========== Main Send Function ==========

/**
 * Send message to server and handle response
 */
function sendMessage() {
    const messageInput = document.getElementById("messageInput");
    const messageText = messageInput.value.trim();

    // Validate input
    if (messageText === "") {
        messageInput.focus();
        return;
    }

    // Disable input while sending
    setInputState(true);

    // Display user message with sending state
    const userMessageElement = appendMessage(messageText, 'user-message');
    addSendingState(userMessageElement);
    
    // Clear input and scroll
    messageInput.value = "";
    scrollToBottom();

    // Show typing indicator after a brief delay
    setTimeout(() => {
        removeSendingState(userMessageElement);
        showTypingIndicator();
    }, 300);

    // Fetch bot response
    fetch("/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "message=" + encodeURIComponent(messageText)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
    })
    .then(botReply => {
        // Simulate realistic typing delay (1-2 seconds)
        const typingDelay = Math.min(1000 + (botReply.length * 10), 2500);
        
        setTimeout(() => {
            hideTypingIndicator();
            appendMessage(botReply, 'bot-message');
            scrollToBottom();
            
            // Re-enable input and focus
            setInputState(false);
            messageInput.focus();
        }, typingDelay);
    })
    .catch(error => {
        console.error("Error:", error);
        hideTypingIndicator();
        
        // Show error message to user
        appendMessage(
            "Sorry, I'm having trouble connecting. Please try again.",
            'bot-message'
        );
        scrollToBottom();
        
        // Re-enable input
        setInputState(false);
        messageInput.focus();
    });
}

// ========== Event Listeners ==========

/**
 * Initialize when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', function() {
    const messageInput = document.getElementById("messageInput");
    
    // Auto-focus on input field
    if (messageInput) {
        messageInput.focus();
    }
    
    // Initialize timestamp for initial message
    const initialTime = document.querySelector('[data-time="now"]');
    if (initialTime) {
        initialTime.textContent = getCurrentTime();
        initialTime.removeAttribute('data-time');
    }
    
    // Enter key listener
    if (messageInput) {
        messageInput.addEventListener("keypress", function(event) {
            if (event.key === "Enter" && !event.shiftKey) {
                event.preventDefault();
                sendMessage();
            }
        });
    }
    
    // Prevent form submission on Enter (if wrapped in form)
    const form = messageInput?.closest('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            sendMessage();
        });
    }
});

// ========== Additional Features ==========

/**
 * Add visual feedback when user is typing
 */
document.addEventListener('DOMContentLoaded', function() {
    const messageInput = document.getElementById("messageInput");
    
    if (messageInput) {
        let typingTimeout;
        
        messageInput.addEventListener('input', function() {
            // Could add "user is typing" indicator here if needed
            clearTimeout(typingTimeout);
        });
    }
});

/**
 * Handle visibility changes (pause/resume)
 */
document.addEventListener('visibilitychange', function() {
    if (!document.hidden) {
        const messageInput = document.getElementById("messageInput");
        if (messageInput && !messageInput.disabled) {
            messageInput.focus();
        }
    }
});